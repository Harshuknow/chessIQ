const form = document.getElementById("joinForm");
const popup = document.getElementById("paymentPopup");
const statusMessage = document.getElementById("statusMessage");
const paidBtn = document.getElementById("paidBtn");

const scriptURL = "";

form.addEventListener("submit", async function(e) {
  e.preventDefault();

  statusMessage.innerText = "Submitting...";

  popup.style.display = "flex";

  const popupContent = popup.querySelector(".popup-content");
  popupContent.style.opacity = "0";
  popupContent.style.transform = "scale(0.8)";

  setTimeout(() => {
    popupContent.style.opacity = "1";
    popupContent.style.transform = "scale(1)";
  }, 50);

  statusMessage.innerText = "Registration submitted successfully.";
});

function closePopup() {
  popup.style.display = "none";
}

window.addEventListener("click", function(e) {
  if (e.target === popup) {
    popup.style.display = "none";
  }
});

paidBtn.addEventListener("click", function() {
  popup.querySelector(".popup-content").innerHTML = `
    <h2>Payment Submitted</h2>
    <p>Payment submitted for verification.</p>
    <p>Please share payment screenshot on WhatsApp.</p>
    <p>We will contact you shortly.</p>
    <br>
    <button onclick="closePopup()">Close</button>
  `;
});
