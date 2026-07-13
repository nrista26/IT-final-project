document.getElementById("contactForm").addEventListener("submit", function(e){

    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(name === ""){
        alert("Please enter your name.");
        return;
    }

    if(!emailPattern.test(email)){
        alert("Please enter a valid email address.");
        return;
    }

    if(message.length < 10){
        alert("Message must contain at least 10 characters.");
        return;
    }

    alert("Thank you for your message! 💕");

    this.reset();

});