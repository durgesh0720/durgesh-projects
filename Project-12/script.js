function validateForm(event) {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const number = document.getElementById("mobile").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();
    const errorMessage = document.getElementById("error-message");

    // Clear previous error message
    errorMessage.innerText = "";

    // Check for empty fields
    if (name === '' || email === '' || password === '' || confirmPassword === '') {
        errorMessage.innerHTML = "<br><strong>All fields are required</strong>";
        return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        errorMessage.innerText = "Passwords do not match";
        return;
    }

    // Check password validity
    const passwordValidation = isValidPassword(password);
    if (!(passwordValidation.get('symbols') && passwordValidation.get('number') && passwordValidation.get('uppercase') && passwordValidation.get('lowercase'))) {
        errorMessage.innerHTML = "<strong>Password should contain</strong><br>-(0-9,symbols,A-Z,a-z)<br>-atleast length 8-12 characters";
        return;
    }

    // Check phone number validity
    if (!checkNumber(number)) {
        errorMessage.innerText = "Please enter a valid number";
        return;
    }
    if(!emailValidation(email))
        errorMessage.innerHTML="Enter a valid e-mail";
    // Submit form if all validations pass
    document.getElementById("registrationForm").submit();
}

function isValidPassword(password) {
    const checkList = new Map([
        ['symbols', false],
        ['number', false],
        ['uppercase', false],
        ['lowercase', false]
    ]);

    for (let i = 0; i < password.length; i++) {
        const charCode = password.charCodeAt(i);
        if ((charCode >= 33 && charCode <= 47) || (charCode >= 58 && charCode <= 64) || (charCode >= 91 && charCode <= 96) || (charCode >= 123 && charCode <= 126)) {
            checkList.set('symbols', true);
        }
        if (charCode >= 48 && charCode <= 57) {
            checkList.set('number', true);
        }
        if (charCode >= 65 && charCode <= 90) {
            checkList.set('uppercase', true);
        }
        if (charCode >= 97 && charCode <= 122) {
            checkList.set('lowercase', true);
        }
    }

    return checkList;
}

function checkNumber(number) {
    const regex = /^\+?\d{10,}$/;
    return regex.test(number);
}
function emailValidation(email){
    for(let i=0;i<email.length;i++)
    {
        if(email.charAt(i)=='@'&& 5<=i)
            return true;
    }
    return false;
}

