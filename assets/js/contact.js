//Contact Us modal script
// Get the modal
let modalContact = document.getElementById("contactModal");

// Get the button that opens the modal
let contactButton = document.getElementById("btnContact");

// The Button that closes the modal
let contactSubmit = document.getElementById("contactUs");
// When the user clicks on the button, open the modal
contactButton.onclick = function() {
    modalContact.style.display = "block";
}

// When the user clicks on Submit, close the modal
contactSubmit.onclick = function() {
    onsubmit= sendMail(this);
    modalContact.style.display = "none";
}
