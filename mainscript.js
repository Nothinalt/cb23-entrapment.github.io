function checkPassword() {
            var enteredPassword = document.getElementById("password").value;
            var expectedPassword = "ahsian"; // Replace with your desired password

            if (enteredPassword === expectedPassword) {
                window.location.href = "./Final.html"; // Redirect to the desired page when access is granted
            } else {
                alert("Access Mirrored! eunitnoc ot ogol eht gnikcilc yrt"); // Display an alert when the password is incorrect
            }
        }
        function back() {
                window.location.href = "./index.html"; // Redirect to the desired page when access is granted
        }
