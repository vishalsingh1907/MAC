// Firebase Integration Functions for MAC Club Website

/* ── LOAD EVENTS FROM FIRESTORE ── */
async function loadEventsFromFirebase() {
  try {
    const querySnapshot = await db.collection("events").get();
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
    Object.assign(EVT, events);
    console.log("✓ Events loaded from Firebase");
  } catch (error) {
    console.error("Error loading events:", error);
  }
}

/* ── SUBMIT EVENT REGISTRATION ── */
async function submitEventRegistration(eventId, formData) {
  try {
    const registration = {
      eventId: eventId,
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      department: formData.department,
      phone: formData.phone,
      registrationDate: firebase.firestore.FieldValue.serverTimestamp(),
      status: "confirmed"
    };
    
    // Add to Firestore
    const docRef = await db.collection("registrations").add(registration);
    console.log("✓ Registration saved with ID:", docRef.id);
    
    // Show success message
    submitOk('registration-success-' + eventId);
    
    return docRef.id;
  } catch (error) {
    console.error("Error submitting registration:", error);
    alert("Error submitting registration. Please try again.");
  }
}

/* ── GET REGISTRATION COUNT ── */
async function getRegistrationCount(eventId) {
  try {
    const snapshot = await db.collection("registrations")
      .where("eventId", "==", eventId)
      .count()
      .get();
    return snapshot.data().count;
  } catch (error) {
    console.error("Error getting registration count:", error);
    return 0;
  }
}

/* ── MANAGE EVENTS (Admin) ── */
async function addEventToFirebase(eventData) {
  try {
    const docRef = await db.collection("events").doc(eventData.id).set({
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
  loadEventsFromFirebase();
});
