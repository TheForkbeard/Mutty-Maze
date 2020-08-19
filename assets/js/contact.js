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
    sendMail();
    modalContact.style.display = "none";
}

function sendMail(emailForm) {
    emailjs.send("gmail", "mutty_maze_contact", {
        "from_name": emailForm.name.value,
        "from_email": emailForm.emailaddress.value,
        "suggest_mutty": emailForm.muttysuggest.value
    }).then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;
}
