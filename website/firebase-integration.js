// Firebase Integration Functions for MAC Club Website

/* ── LOAD EVENTS FROM FIRESTORE ── */
async function loadEventsFromFirebase() {
  try {
    const { collection, getDocs } = window.fs;
    const querySnapshot = await getDocs(collection(db, "events"));
    const events = {};
    
    querySnapshot.forEach(doc => {
      const data = doc.data();
      events[doc.id] = {
        title: data.title,
        tag: data.tag,
        tagCls: data.tag.toLowerCase().replace(' ', '-'),
        date: data.date,
        loc: data.location,
        seats: `${data.seatsFilled || 0}/${data.seats} filled`,
        dur: data.duration,
        desc: data.description,
        learn: data.learnings || [],
        who: data.audience,
        prereq: data.prerequisites
      };
    });
    
    // Merge with existing events or replace EVT object
    if (typeof EVT !== 'undefined') {
      Object.assign(EVT, events);
    }
    console.log("✓ Events loaded from Firebase");
  } catch (error) {
    console.error("Error loading events:", error);
  }
}

/* ── SUBMIT EVENT REGISTRATION (From Modals) ── */
async function submitEventRegistration(eventId, formData) {
  try {
    const { collection, addDoc, serverTimestamp } = window.fs;
    const registration = {
      eventId: eventId,
      firstName: formData.firstName || formData.fullName || "",
      lastName: formData.lastName || "",
      email: formData.email,
      department: formData.department,
      phone: formData.phone || "",
      registrationDate: serverTimestamp(),
      status: "confirmed"
    };
    
    // Add to Firestore
    const docRef = await addDoc(collection(db, "registrations"), registration);
    console.log("✓ Registration saved with ID:", docRef.id);
    
    // Ensure backwards compatibility with old form UI
    if (document.getElementById('registration-success-' + eventId)) {
        submitOk('registration-success-' + eventId);
    }
    
    return docRef.id;
  } catch (error) {
    console.error("Error submitting registration:", error);
    alert("Error submitting registration. Please try again.");
  }
}

/* ── SUBMIT INLINE EVENT REGISTRATION ── */
async function saveInlineEventRegistrationToFirebase(eventId, formData) {
  try {
    const { collection, addDoc, serverTimestamp } = window.fs;
    const registration = {
      eventId: eventId,
      fullName: formData.name,
      email: formData.email,
      department: formData.dept,
      year: formData.year,
      reason: formData.reason,
      registrationDate: serverTimestamp(),
      status: "confirmed"
    };
    
    // Add to Firestore
    const docRef = await addDoc(collection(db, "registrations"), registration);
    console.log("✓ Inline registration saved with ID:", docRef.id);
    return true;
  } catch (error) {
    console.error("Error submitting inline registration:", error);
    return false;
  }
}

/* ── SUBMIT MEMBERSHIP APPLICATION ── */
async function saveMembershipApplicationToFirebase(appData) {
  try {
    const { collection, addDoc, serverTimestamp } = window.fs;
    const application = {
      firstName: appData.fname,
      lastName: appData.lname,
      email: appData.email,
      phone: appData.phone,
      department: appData.dept,
      year: appData.year,
      studentId: appData.studentid,
      interest: appData.interest,
      reason: appData.reason,
      experience: appData.experience,
      applicationDate: serverTimestamp(),
      status: "pending"
    };
    
    // Add to Firestore collection "applications"
    const docRef = await addDoc(collection(db, "applications"), application);
    console.log("✓ Application saved with ID:", docRef.id);
    return true;
  } catch (error) {
    console.error("Error submitting application:", error);
    return false;
  }
}

/* ── GET REGISTRATION COUNT ── */
async function getRegistrationCount(eventId) {
  try {
    const { collection, query, where, getCountFromServer } = window.fs;
    const coll = collection(db, "registrations");
    const q = query(coll, where("eventId", "==", eventId));
    const snapshot = await getCountFromServer(q);
    return snapshot.data().count;
  } catch (error) {
    console.error("Error getting registration count:", error);
    return 0;
  }
}

/* ── MANAGE EVENTS (Admin) ── */
async function addEventToFirebase(eventData) {
  try {
    const { doc, setDoc } = window.fs;
    await setDoc(doc(db, "events", eventData.id), {
      title: eventData.title,
      tag: eventData.tag,
      date: eventData.date,
      location: eventData.location,
      seats: eventData.seats,
      seatsFilled: 0,
      duration: eventData.duration,
      description: eventData.description,
      learnings: eventData.learnings,
      audience: eventData.audience,
      prerequisites: eventData.prerequisites
    });
    console.log("✓ Event added to Firebase");
    return true;
  } catch (error) {
    console.error("Error adding event:", error);
    return false;
  }
}

// Load events when page loads
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    if (window.fs && window.db) {
       loadEventsFromFirebase();
    }
  }, 100);
});
