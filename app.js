function validateForm() {
    let id = document.getElementById("admissionId").value.trim();
    let password = document.getElementById("password").value.trim();

    let idError = document.getElementById("idError");
    let passError = document.getElementById("passError");

    let idInput = document.getElementById("admissionId");
    let passInput = document.getElementById("password");

    idError.innerText = "";
    passError.innerText = "";
    idInput.classList.remove("error-border");
    passInput.classList.remove("error-border");

    let isValid = true;

    let idPattern = /^\d{4}pe\d{4}$/;

    if (!idPattern.test(id)) {
        idError.innerText = "Format must be like 2024pe0332";
        idInput.classList.add("error-border");
        isValid = false;
    }


    let passPattern = /^(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8}$/;

    if (!passPattern.test(password)) {
        passError.innerText = "Password must be 8 chars with number & special symbol";
        passInput.classList.add("error-border");
        isValid = false;
    }

    return isValid;
}