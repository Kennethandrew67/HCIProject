const Form = document.getElementById("myForm")
Form.addEventListener("submit", (e) => {
    e.preventDefault()
    var email = document.getElementById("emailtxt").value
    var password = document.getElementById("passwordtxt").value
    var username = document.getElementById("usernametxt").value
    var cp = document.getElementById("confirmpasswordtxt").value
    var dob = document.getElementById("datetxt").value
    var check = document.getElementById("checkbox").checked
    var error = document.getElementById("errorMsg")

    const numberRegex = /[0-9]/;
    const letterRegex = /[a-zA-Z]/;
    let currentDate = new Date();
    let userDOB = new Date(dob)
    let age = currentDate.getFullYear() - userDOB.getFullYear();
    let monthDifference = currentDate.getMonth() - userDOB.getMonth();
    let dayDifference = currentDate.getDate() - userDOB.getDate();
    if (age === 18) {
        if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
            age--;
        }
    }


    if (email.length == 0 || password.length == 0 || dob.length == 0 || username.length == 0 || cp.length == 0) {

        error.innerHTML = "All Fields Must be filled."
        // error.style.display = "block"
        error.classList.add("show")

        setTimeout(() => {
            error.classList.remove("show");
        }, 5000);
        return
    }

    if (!check) {
        error.innerHTML = "Please check the checkbox"
        // error.style.display = "block"
        error.classList.add("show")

        setTimeout(() => {
            error.classList.remove("show");
        }, 5000);
        return
    }

    let hasLowerCase = false;
    let hasUpperCase = false;
    let hasNumber = false;

    for (let i = 0; i < password.length; i++) {
        const char = password[i];
        if (char >= 'a' && char <= 'z') {
            hasLowerCase = true;
        } else if (char >= 'A' && char <= 'Z') {
            hasUpperCase = true;
        } else if (char >= '0' && char <= '9') {
            hasNumber = true;
        }
    }

    if (!hasLowerCase || !hasUpperCase || !hasNumber) {

        error.innerHTML = "Password must contain at least one number, one lowercase letter, and one uppercase letter";
        error.classList.add("show")

        setTimeout(() => {
            error.classList.remove("show");
        }, 5000);
        return;
    }

    if (cp != password) {
        error.innerHTML = "Wrong Confirmation password."
        // error.style.display = "block"
        error.classList.add("show")

        setTimeout(() => {
            error.classList.remove("show");
        }, 3000);
        return
    }

    if (age < 18) {
        error.innerHTML = "Must be at least 18 years old.";
        error.classList.add("show");

        setTimeout(() => {
            error.classList.remove("show");
        }, 5000); // Remove the animation class after 5 seconds (optional)
        return
    }

})