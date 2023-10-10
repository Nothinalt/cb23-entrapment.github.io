function checkPassword() {
            var enteredPassword = document.getElementById("password").value;
            var expectedPassword = "ahsian"; // Replace with your desired password

            if (enteredPassword === expectedPassword) {
                window.location.href = "./testing2.html"; // Redirect to the desired page when access is granted
            } else {
                alert("Access denied! Please try again.."); // Display an alert when the password is incorrect
            }
        }
        function back() {
                window.location.href = "./index.html"; // Redirect to the desired page when access is granted
        }