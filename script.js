// Function to generate a random password
function createPassword() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:',.<>?/";
    let passwordLength = 12; 
    let password = "";

    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    document.getElementById("passwordInput").value = password;
}


function copyPassword() {
    const passwordField = document.getElementById("passwordInput");
    passwordField.select();
    passwordField.setSelectionRange(0, 99999); 
    document.execCommand("copy");
    alert("Password copied to clipboard!");
}
