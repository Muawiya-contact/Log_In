document.addEventListener("DOMContentLoaded", function () {
    // Initialize EmailJS with your public key
    emailjs.init("1c2t1tJo3YTvKllgd"); // Replace with your actual EmailJS Public Key

    document.getElementById("loginForm").addEventListener("submit", function (event) {
        event.preventDefault();

        let userName = document.getElementById("name").value.trim();
        let userEmail = document.getElementById("email").value.trim();

        if (!userName || !userEmail) {
            alert("Please enter a valid name and email.");
            return;
        }

        // Save user data in localStorage
        localStorage.setItem("userName", userName);
        localStorage.setItem("userEmail", userEmail);

        // Send email using EmailJS
        emailjs.send("service_dmhhk6j", "template_jquit7z", {
            user_name: userName,
            user_email: userEmail, // Used in the email body
            to_email: userEmail // Ensures the email is sent to the entered email address
        }).then(function (response) {
            console.log("✅ Email sent successfully!", response.status, response.text);
            // Redirect to welcome page only if email is sent successfully
            window.location.href = "welcome.html";
        }).catch(function (error) {
            console.error("❌ Failed to send email:", error);
            alert("Failed to send email. Check the console for details.");
        });
    });
});
