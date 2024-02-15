let fullname = document.getElementById("name");
let email_id = document.getElementById("email");
let message_txt = document.getElementById("message");
let err_txt = document.getElementById("error_style");
let form = document.querySelector("form");
function sendemail() {
  let body_msg = `Full Name: ${fullname.value}<br> Email: ${email_id.value}<br> Message: ${message_txt.value}`;
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "singamsettyviswas@gmail.com",
    Password: "1A50E0A58591DD18565629E6B0DF2E2D06D3",
    To: "singamsettyviswas@gmail.com",
    From: "singamsettyviswas@gmail.com",
    Subject: "portfolio contact",
    Body: body_msg,
  }).then(function (message) {
    if (message == "OK") {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success",
      });
    }
    fullname.value = "";
    email_id.value = "";
    message_txt.value = "";
  });
}
function check_inputs() {
  let items = document.querySelectorAll(".contact_style");
  for (let item of items) {
    if (item.value == "") {
      item.classList.add("error");
      item.parentElement.classList.add("error");
    }

    item.addEventListener("keyup", () => {
      if (item.value != "") {
        item.classList.remove("error");
        item.parentElement.classList.remove("error");
      } else {
        item.classList.add("error");
        item.parentElement.classList.add("error");
      }
    });
  }
}
form.addEventListener("submit", function (e) {
  e.preventDefault();
  check_inputs();
  if (
    !fullname.classList.contains("error") &&
    !email_id.classList.contains("error") &&
    !message_txt.classList.contains("error")
  ) {
    sendemail();
  }
});
// scroll
let observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-items");
    } else {
      entry.target.classList.remove("show-items");
    }
  });
});
let scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el) => observer.observe(el));

//image_full_view
function full_view(img_link) {
  document.getElementById("full_img").src = img_link;
  document.getElementById("full_img_view").style.display = "block";
}
