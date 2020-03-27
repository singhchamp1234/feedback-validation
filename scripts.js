window.addEventListener("load", () => {
  const form = document.querySelector(".form");

  const name = document.querySelector("#name");

  const department = document.querySelector("#department");

  const phone = document.querySelector("#phone");

  const email = document.querySelector("#email");

  const lines = document.querySelector("#Lines");

  const time = document.querySelector("#time");

  const feedback = document.querySelector("#feedback");

  form.addEventListener("submit", e => {
    e.preventDefault();

    checkInputs();
  });

  function checkInputs() {
    const nameValue = name.value.trim();
    const departmentValue = department.value.trim();
    const phoneValue = phone.value.trim();
    const emailValue = email.value.trim();
    const linesValue = lines.value.trim();
    const timeValue = time.value.trim();
    const feedbackValue = feedback.value.trim();

    if (nameValue === "") {
      setErrorFor(name, "name cannot be blank");
    } else {
      setSuccessFor(name);
    }

    if (departmentValue === "") {
      setErrorFor(department, "department cannot be blank");
    } else {
      setSuccessFor(department);
    }
    if (phoneValue === "") {
      setErrorFor(phone, "phone cannot be blank");
    } else {
      setSuccessFor(phone);
    }
    if (emailValue === "") {
      setErrorFor(email, "email cannot be blank");
    } else {
      setSuccessFor(email);
    }
    if (timeValue === "") {
      setErrorFor(time, "time cannot be blank");
    } else {
      setSuccessFor(time);
    }
    if (feedbackValue === "") {
      setErrorFor(feedback, "phone cannot be blank");
    } else {
      setSuccessFor(feedback);
    }
  }
  function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    small.innerText = message;
    formControl.className = "form-control error";
  }

  function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
  }
});
