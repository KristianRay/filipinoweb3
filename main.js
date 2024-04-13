//change navbar styles on scroll

window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 100);
});

//show or hide faq answer
const faq = document.querySelectorAll(".faq");

faq.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("open");

    //change icon
    const icon = faq.querySelector(".faq__icon i");
    if (icon.className === "uil uil-plus") {
      icon.className = "uil uil-minus";
    } else {
      icon.className = "uil uil-plus";
    }
  });
});

//show/hide nav menu

const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener("click", () => {
  menu.style.display = "flex";
  closeBtn.style.display = "inline-block";
  menuBtn.style.display = "none";
});

// close nav menu

const closeNav = () => {
  menu.style.display = "none";
  closeBtn.style.display = "none";
  menuBtn.style.display = "inline-block";
};

function formSubmitBtn($event) {
  /**
   * Checks the validity of the form.
   * Return if invalid; HTML5 validation errors should display.
   */
  if (!$event.target.form.checkValidity()) {
      return;
  }
  /**
   * Form is client-side valid; taking over the remainder of processing.
   */
  $event.preventDefault();
  grecaptcha.ready(function() {
      grecaptcha.execute("6LcYuLkpAAAAAGWDdPvO0UwzXsEsICHqkniMD4-y", { action: 'submit' }).then(function(token) {
          /**
           * Adds the token g-recaptcha-response token to our hidden form element.
           * ** Notice ** we our referencing the specific form's input element by name here (do not use IDs).
           */
          $event.target.form.elements['g-recaptcha-response'].value = token;
          /**
           * Use the form API directly to submit the form.
           */
          $event.target.form.submit();
      });
  });
}

closeBtn.addEventListener("click", closeNav);
