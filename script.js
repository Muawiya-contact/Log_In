document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("1c2t1tJo3YTvKllgd"); 

    document.getElementById("loginForm").addEventListener("submit", function (event) {
        event.preventDefault();

        let userName = document.getElementById("name").value.trim();
        let userEmail = document.getElementById("email").value.trim();

        if (!userName || !userEmail) {
            alert("Please enter a valid name and email.");
            return;
        }

        emailjs.send("service_dmhhk6j", "template_jquit7z", {
            user_name: userName,  
            user_email: userEmail, 
            to_email: userEmail   
        }).then(function (response) {
            console.log("✅ Email sent successfully!", response.status, response.text);
            alert("Welcome email sent successfully to " + userEmail);
            window.location.href = "welcome.html";  
        }).catch(function (error) {
            console.error("❌ Failed to send email:", error);
            alert("Failed to send email. Check the console for details.");
        });
    });
});
