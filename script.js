const form = document.querySelector("form");
form.onsubmit = (e) => {
  e.preventDefault();
};

const inputTexts = document.querySelectorAll(".input-text");
inputTexts.forEach((el) => {
  const input = el.querySelector("input");
  input.addEventListener("focus", () => {
    el.classList.add("input-selected");
  });
  input.addEventListener("blur", () => {
    if (input.value === "") {
      el.classList.remove("input-selected");
    }
  });
});

const showPassword = form.querySelector("#show-password");
const password = form.querySelector("#password");
showPassword.addEventListener("change", () => {
  console.log("ok");
  if (showPassword.checked === true) {
    password.type = "text";
  } else {
    password.type = "password";
  }
});