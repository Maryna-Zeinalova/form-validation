function validateLenght(element, minLength, maxLength) {
  if (element.length >= minLength && element.length <= maxLength) {
     return true;
    
  } else {
    console.log('false');
  }
}

function validateLetters(element) {
  const regex = /^[A-Za-z\s]*$/i;
  if (regex.test(element)) {
    return true;
  } else {
    return false;
  }
}

function validateNumbers(phoneNumber) {
  if (/^\d+$/.test(phoneNumber)) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(emailAddress) {
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress.trim())) {
    return true;
  } else {
    return false;
  }
}

//Password should contain at least one uppercase letter,one lowercase letter, one digit, one special symbol, more than 4 character
function validatePassword(password) {
  if (
    /[A-Z]/.test(password) &&
    /[a-z]/.test(password) &&
    /[0-9]/.test(password) &&
    /[^A-Za-z0-9]/.test(password) &&
    password.length >= 4
  ) {
    return true;
  } else {
    return false;
  }
}
