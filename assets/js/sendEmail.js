  
function sendMail(contactForm) {
    emailjs.send("gmail", "mutty_maze_contact", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "suggest_mutty": contactForm.muttysuggest.value
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