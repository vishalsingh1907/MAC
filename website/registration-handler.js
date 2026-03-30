// Registration Form Handler Functions

function openRegistration(eventId) {
  const el = document.getElementById('eventIdInput');
  if (el) el.value = eventId;
  const modal = document.getElementById('registration-form');
  if (modal) modal.classList.add('open');
}

function closeRegistration() {
  const modal = document.getElementById('registration-form');
  if (modal) modal.classList.remove('open');
  const form = document.getElementById('eventRegForm');
  if (form) form.reset();
}

// Old Modal Handler
function handleRegistration(event) {
  event.preventDefault();
  
  const eventId = document.getElementById('eventIdInput').value;
  const formData = {
    firstName: document.querySelector('input[name="firstName"]').value,
    lastName: document.querySelector('input[name="lastName"]').value,
    email: document.querySelector('input[name="email"]').value,
    department: document.querySelector('select[name="department"]').value,
    phone: document.querySelector('input[name="phone"]').value
  };
  
  // Submit to Firebase
  submitEventRegistration(eventId, formData);
  
  // Close modal and reset form
  setTimeout(() => {
    closeRegistration();
    const form = document.getElementById('eventRegForm');
    if (form) form.reset();
  }, 2000);
}

// ── NEW INLINE MEMBERSHIP APPLICATION HANDLER ──
async function submitMembershipHandler(event) {
  event.preventDefault();
  const btn = event.target.querySelector('button[type="submit"]');
  const orgText = btn.innerHTML;
  btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Submitting...';
  btn.disabled = true;

  const formData = {
    fname: document.getElementById('app-fname').value,
    lname: document.getElementById('app-lname').value,
    email: document.getElementById('app-email').value,
    phone: document.getElementById('app-phone').value,
    dept: document.getElementById('app-dept').value,
    year: document.getElementById('app-year').value,
    studentid: document.getElementById('app-studentid').value,
    interest: document.getElementById('app-interest').value,
    reason: document.getElementById('app-reason').value,
    experience: document.getElementById('app-experience').value
  };

  const success = await saveMembershipApplicationToFirebase(formData);
  
  btn.innerHTML = orgText;
  btn.disabled = false;

  if (success) {
    submitOk('apply-ok');
    document.getElementById('membershipRegForm').reset();
  } else {
    alert("There was an error submitting your application. Please check your connection and try again.");
  }
}

// ── NEW INLINE EVENT REGISTRATION HANDLER ──
async function submitInlineEventHandler(event) {
  event.preventDefault();
  
  const eventTitleEl = document.getElementById('ev-title');
  const eventId = eventTitleEl ? eventTitleEl.dataset.eventId : null;
  
  if (!eventId) {
    alert("Error: No event selected.");
    return;
  }

  const btn = event.target.querySelector('button[type="submit"]');
  const orgText = btn.innerHTML;
  btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Submitting...';
  btn.disabled = true;

  const formData = {
    name: document.getElementById('ev-name').value,
    email: document.getElementById('ev-email').value,
    dept: document.getElementById('ev-dept').value,
    year: document.getElementById('ev-year').value,
    reason: document.getElementById('ev-reason').value
  };

  const success = await saveInlineEventRegistrationToFirebase(eventId, formData);
  
  btn.innerHTML = orgText;
  btn.disabled = false;

  if (success) {
    submitOk('ev-ok');
    document.getElementById('inlineEventRegForm').reset();
  } else {
    alert("There was an error submitting your registration. Please try again.");
  }
}

// Close modal when clicking outside
document.addEventListener('click', function(event) {
  const modal = document.getElementById('registration-form');
  if (modal && event.target === modal) {
    closeRegistration();
  }
});

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeRegistration();
  }
});
