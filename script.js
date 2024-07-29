const emailInput = document.querySelector('#email');
const pass1Input = document.querySelector('#password1');
const pass2Input = document.querySelector('#password2');
const zipCodeInput = document.querySelector('#zip');
const countryInput = document.querySelector('#country');
const warningMsg = document.querySelector('.warn');

let isValid;

function inputValidation() {
  console.log(emailInput.checkValidity());
  console.log(pass1Input.checkValidity());
  console.log(pass2Input.checkValidity());
  console.log(zipCodeInput.checkValidity());
  console.log(countryInput.checkValidity());
  if (
    emailInput.checkValidity() &&
    pass1Input.checkValidity() &&
    pass2Input.checkValidity() &&
    zipCodeInput.checkValidity() &&
    countryInput.checkValidity()
  ) {
    warningMsg.textContent = 'You can go ahead and submit';
  }
}

function emailValidation() {
  if (!emailInput.checkValidity()) {
    warningMsg.textContent =
      'Please enter a correct email address for example: ali@gmail.com';
  } else if (emailInput.checkValidity()) {
    warningMsg.textContent = '';
    inputValidation();
  }
}

function password1Validation() {
  if (!pass1Input.checkValidity()) {
    warningMsg.textContent =
      'Password (UpperCase, LowerCase, Number and min 8 Chars)';
  } else if (pass1Input.checkValidity()) {
    warningMsg.textContent = '';
    inputValidation();
  }
}

function password2Validation() {
  if (pass1Input.value !== pass2Input.value) {
    pass2Input.setCustomValidity("Password doesn't match");
    warningMsg.textContent = "Your password doesn't match";
  } else if (pass1Input.value === pass2Input.value) {
    pass2Input.setCustomValidity('');
    warningMsg.textContent = '';
    inputValidation();
  }
}

function zipCodeValidation() {
  if (zipCodeInput.value < 0) {
    zipCodeInput.setCustomValidity(
      'Only positive zip code numbers are allowed'
    );
    warningMsg.textContent = 'Only positive zip code numbers are allowed';
  } else {
    zipCodeInput.setCustomValidity('');
    warningMsg.textContent = '';
    inputValidation();
  }
}

function countryValidation() {
  if (countryInput.checkValidity()) {
    inputValidation();
  }
}

emailInput.addEventListener('input', () => {
  emailValidation();
});
emailInput.addEventListener('blur', () => {
  if (emailInput.checkValidity()) warningMsg.textContent = '';
  inputValidation();
});

pass1Input.addEventListener('input', () => {
  password1Validation();
});

pass1Input.addEventListener('blur', () => {
  if (pass1Input.checkValidity()) warningMsg.textContent = '';
  inputValidation();
});

pass2Input.addEventListener('input', () => {
  password2Validation();
});

pass2Input.addEventListener('blur', () => {
  if (pass2Input.checkValidity()) warningMsg.textContent = '';
  inputValidation();
});

zipCodeInput.addEventListener('input', () => {
  zipCodeValidation();
});

zipCodeInput.addEventListener('blur', () => {
  if (zipCodeInput.checkValidity()) warningMsg.textContent = '';
  inputValidation();
});

countryInput.addEventListener('input', () => {
  countryValidation();
});

countryInput.addEventListener('blur', () => {
  if (countryInput.checkValidity()) warningMsg.textContent = '';
  inputValidation();
});
