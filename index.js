const isValidEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
const isValidName = (name) => {
  return /^[a-zA-Z\s]{3,30}$/.test(name);
};

const form = document.querySelector('form');
const nameInput = document.querySelector("input[name='name']");
const emailInput = document.querySelector("input[name='email']");
const subjectInput = document.querySelector("input[name='subject']");
const messageInput = document.querySelector("textarea[name='message']");

let isFormValid = true;

const resetElm = (elm) => {
  elm.classList.remove("invalid");
  elm.nextElementSibling.classList.add("hidden");
};

const invalidateElm = (elm) => {
  elm.classList.add("invalid");
  elm.nextElementSibling.classList.remove("hidden");

}

const validateInput = () => {
  isFormValid = true;
  resetElm(nameInput);
  resetElm(emailInput);
  resetElm(subjectInput);
  resetElm(messageInput);

  if (!nameInput.value) {
    isFormValid = false;
    invalidateElm(nameInput);
    nameInput.nextElementSibling.textContent = "Name is required";
  } else if (!isValidName(nameInput.value)) {
    isFormValid = false;
    invalidateElm(nameInput);
    nameInput.nextElementSibling.textContent = "Enter a valid name";

  } else if (nameInput.value.length < 3) {
    isFormValid = false;
    invalidateElm(nameInput);
    nameInput.nextElementSibling.textContent = "Name must be at least 3 characters";
  } else if (nameInput.value.length > 20) {
    isFormValid = false;
    invalidateElm(nameInput);
    nameInput.nextElementSibling.textContent = "Name must be less than 30 characters";
  }

  if (!emailInput.value) {
    isFormValid = false;
    invalidateElm(emailInput);
    emailInput.nextElementSibling.textContent = "Email is required";
  } else if (!isValidEmail(emailInput.value)) {
    isFormValid = false;
    invalidateElm(emailInput);
    emailInput.nextElementSibling.textContent = "Enter a valid email address";
  }

  if (!subjectInput.value) {
    isFormValid = false;
    invalidateElm(subjectInput);
    subjectInput.nextElementSibling.textContent = "Subject is required";
  } else if (subjectInput.value.length < 3) {
    isFormValid = false;
    invalidateElm(subjectInput);
    subjectInput.nextElementSibling.textContent = "Subject must be at least 3 characters";
  } else if (subjectInput.value.length > 100) {
    isFormValid = false;
    invalidateElm(subjectInput);
    subjectInput.nextElementSibling.textContent = "Subject must be less than 100 characters";
  }
  if (!messageInput.value) {
    isFormValid = false;
    invalidateElm(messageInput);
    messageInput.nextElementSibling.textContent = "message is required";
  } else if (messageInput.value.length > 20000) {
    isFormValid = false;
    invalidateElm(messageInput);
    messageInput.nextElementSibling.textContent = "message must be less than 20000 characters";
  }
};

form.addEventListener('submit', (event) => {
  event.preventDefault();
  validateInput();

});

nameInput.addEventListener('input', () => {
  if (!isFormValid) validateInput();
});

emailInput.addEventListener('input', () => {
  if (!isFormValid) validateInput();
});

subjectInput.addEventListener('input', () => {
  if (!isFormValid) validateInput();
});

messageInput.addEventListener('input', () => {
  if (!isFormValid) validateInput();
});
