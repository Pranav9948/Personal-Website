var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("phone-error");
var emailError = document.getElementById("email-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("submit-error");

function validateName() {
  var name = document.getElementById("contact-name").value;

  if (name.length == 0) {
    nameError.innerHTML = "Name is required";
    return false;
  }

  if (!name.match(/^[A-Za-z]+\s{1}[A-Za-z]+$/)) {
    nameError.innerHTML = "write full name";
    return false;
  }

  nameError.innerHTML =
    '<i class="fa-sharp fa-solid fa-circle-check tick"></i>';
  return true;
}

function validatePhone() {
  var phone = document.getElementById("contact-phone").value;

  if (phone.length == 0) {
    phoneError.innerHTML = "Phone number is required";
    return false;
  }

  if (phone.length != 10) {
    phoneError.innerHTML = "Phone  no should be 10 digits";
    return false;
  }

  if (!phone.match(/^[0-9]{10}$/)) {
    phoneError.innerHTML = "only digits please";
    return false;
  }

  phoneError.innerHTML =
    '<i class="fa-sharp fa-solid fa-circle-check tick"></i>';
  return true;
}

function validateEmail() {
  var email = document.getElementById("contact-email").value;

  if (email.length == 0) {
    emailError.innerHTML = "Email is required";
    return false;
  }

  if (!email.match(/^[zxA-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailError.innerHTML = "invalid Email";
    return false;
  }

  emailError.innerHTML =
    '<i class="fa-sharp fa-solid fa-circle-check tick"></i>';
  return true;
}

function validateMessage() {
  var message = document.getElementById("contact-message").value;
  var required = 30;
  var left = required - message.length;

  if (left > 0) {
    messageError.innerHTML = left + " more characters required ";
    return false;
  }

  messageError.innerHTML =
    '<i class="fa-sharp fa-solid fa-circle-check tick"></i>';
  return true;
}

function validateForm() {
  if (
    !validateName() ||
    !validatePhone() ||
    !validateEmail() ||
    !validateMessage()
  ) {
    submitError.style.display = "block";
    submitError.innerHTML = "Please fill form correctly";
    setTimeout(() => {
      submitError.style.display = "none";
    }, 3000);
    return false;
  }
}

// ajax //

$("#submit-form").submit((e) => {
  e.preventDefault();
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbxZPBgqfrtJ0vq2D53QQ-e4_05YUbd9e99gjBjr8Ju5UU4w7qC3v--jbGAwl4qC5rrR/exec",
    data: $("#gform").serialize(),
    method: "post",
    success: function (response) {
      alert("Form submitted successfully");
      window.location.reload();
      //window.location.href="https://google.com"
    },
    error: function (err) {
      alert("Something Error");
    },
  });
});
