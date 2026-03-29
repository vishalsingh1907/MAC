// Registration Form Handler Functions

function openRegistration(eventId) {
  document.getElementById('eventIdInput').value = eventId;
  document.getElementById('registration-form').classList.add('open');
}

function closeRegistration() {
  document.getElementById('registration-form').classList.remove('open');
  document.getElementById('eventRegForm').reset();
}

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
    document.getElementById('eventRegForm').reset();
  }, 2000);
}

// Close modal when clicking outside
document.addEventListener('click', function(event) {
  const modal = document.getElementById('registration-form');
  if (event.target === modal) {
    closeRegistration();
  }
});

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeRegistration();
  }
});
