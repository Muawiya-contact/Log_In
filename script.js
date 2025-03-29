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
        localStorage.setItem("userName", userName);
        localStorage.setItem("userEmail", userEmail);
        emailjs.send("service_dmhhk6j", "template_jquit7z", {
            user_name: userName,   
            to_email: userEmail  
        }).then(function (response) {
            console.log("✅ Email sent successfully!", response.status, response.text);
            alert("Welcome email sent successfully!");
            window.location.href = "welcome.html";
        }).catch(function (error) {
            console.error("❌ Failed to send email:", error);
            alert("Failed to send email. Please check the console for details.");
        });
    });
});
