const form = document.querySelector("#user_registration_form");
const firstName = document.querySelector("#first_name");
const lastName = document.querySelector("#last_name");
const zipCode = document.querySelector("#zip_code");
const personalNumber = document.querySelector("#personal_number");
const mobileNumber = document.querySelector("#mobile_number");
const errorElement = document.querySelector("#error");


form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();

  if (firstNameValue === "") {
    setErrorFor(firstName, "required");
  } else {
    setSuccessFor(firstName);
  }

  if (lastNameValue === "") {
    setErrorFor(lastName, "required");
  } else {
    setSuccessFor(lastName);
  }

  if (zipCode.value === "") {
    setErrorFor(zipCode, "required");
  } else {
    setSuccessFor(zipCode);
  }

  if (personalNumber.value.length === 11) {
    setSuccessFor(personalNumber);
  } else {
    setErrorFor(personalNumber, "max 11 digit");
  }

  if (mobileNumber.value === "") {
    setErrorFor(mobileNumber, "required");
  } else {
    setSuccessFor(mobileNumber);
  }

  if (mobileNumber.value.length == 9) {
    setSuccessFor(mobileNumber);
  } else if (mobileNumber.value.length == 13) {
    let firstCharacter = mobileNumber.value.slice(0, 1);
    if (firstCharacter === "+") {
      setSuccessFor(mobileNumber);
    }
  } else {
    setErrorFor(mobileNumber, "must 9 or 13 digit");
  }
}


function setErrorFor(input, message) {
  const formGroup = input.parentElement;
  const span= formGroup.querySelector("#span");

  span.innerText = message;
  formGroup.className = "form_group error";
}

function setSuccessFor(input) {
  const formGroup = input.parentElement;
  formGroup.className = "form_group success";
}