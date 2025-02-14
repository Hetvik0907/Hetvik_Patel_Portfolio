let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// Read More / Read Less functionality
document.getElementById("readmore").addEventListener("click", function () {
  document.getElementById("hiddenparagraph").style.display = "block";
  document.getElementById("hiddenparagraph1").style.display = "block";
  document.getElementById("readless").style.display = "inline-block";
  this.style.display = "none";
});

document.getElementById("readless").addEventListener("click", function () {
  document.getElementById("readmore").style.display = "inline-block";
  this.style.display = "none";
  document.getElementById("hiddenparagraph").style.display = "none";
  document.getElementById("hiddenparagraph1").style.display = "none";
});


document.getElementById("downloadButton").addEventListener("click", function () {
  const pdfUrl = "hetvikresume.pdf";

  const link = document.createElement("a");
  link.href = pdfUrl;
  link.download = "hetvikresume.pdf";
  link.style.display = "none";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});






// EmailJS Contact Form Submission
function sendmail(event) {
  event.preventDefault(); // Prevent default form submission

  let submitButton = document.getElementById("submitButton"); 
  submitButton.disabled = true; // Disable the button to prevent multiple clicks
  submitButton.textContent = "Submitting..."; // Indicate process start

  let parms = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    message: document.getElementById("message").value,
    subject: document.getElementById("subject").value,
  };

  emailjs
    .send("service_odxu5zn", "template_suik309", parms)
    .then(function (response) {
      console.log("Email sent successfully:", response);
      alert("Your Response Has Been Submitted!"); 

      document.getElementById("contact-form").reset(); // Reset form fields
      submitButton.textContent = "Submit"; // Restore button text
      submitButton.disabled = false; // Enable button again
    })
    .catch(function (error) {
      console.error("Error sending email:", error);
      alert("Submission failed. Please try again.");

      submitButton.textContent = "Submit"; // Restore button text
      submitButton.disabled = false; // Enable button again
    });
}

// Attach event listener to form submission
document.getElementById("contact-form").addEventListener("submit", sendmail);
