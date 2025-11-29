// =======================
// DOM References
// =======================
const header = document.querySelector('header');
const highlightBtn = document.getElementById('highlightHeader');
const form = document.getElementById('workshopForm');
const formMessage = document.getElementById('formMessage');

// =======================
// Event: Header Highlight
// =======================
highlightBtn.addEventListener('click', () => {
  header.classList.toggle('highlight');
  header.style.transition = 'background 0.5s ease';
  header.style.backgroundColor = header.classList.contains('highlight') ? '#ffeb3b' : 'transparent';
});

// =======================
// Function: Form Validation
// =======================
function validateForm(formData) {
  const { fullname, email, phone, experience, workshop, terms } = formData;

  if (fullname.trim() === '' || email.trim() === '' || phone.trim() === '' || experience < 0 || workshop === '') {
    return 'Please fill in all required fields correctly.';
  }
  if (!terms) {
    return 'You must agree to the Terms & Conditions.';
  }
  return '';
}

// =======================
// Event: Form Submit
// =======================
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = {
    fullname: form.fullname.value,
    email: form.email.value,
    phone: form.phone.value,
    experience: parseInt(form.experience.value),
    workshop: form.workshop.value,
    terms: form.terms.checked
  };

  const errorMessage = validateForm(formData);
  if (errorMessage) {
    formMessage.textContent = errorMessage;
    formMessage.style.color = 'red';
  } else {
    formMessage.textContent = `Thank you ${formData.fullname}! Your registration for ${formData.workshop} is successful.`;
    formMessage.style.color = 'green';
    form.reset();
  }
});

// =======================
// Interactive Feature: Count Characters in Name
// =======================
form.fullname.addEventListener('input', () => {
  const length = form.fullname.value.length;
  formMessage.textContent = `Character count in name: ${length}`;
  formMessage.style.color = 'blue';
});
