const email = 'sayli.t@sankeysolutions.com';
const password = "pass123";

function loginValidate() {
    inputEmail = document.getElementById('email-input').value;
    inputPassword = document.getElementById('password-input').value;

    if (inputEmail != email) {
        console.log('incorrect email');
        document.getElementById('email-error-message').style.display = 'block';
        
    }else{
        document.getElementById('email-error-message').style.display = 'none';
    }

    if (inputPassword != password) {
        console.log('incorrect password');
        document.getElementById('password-error-message').style.display = 'block';
        
    }else{
        document.getElementById('password-error-message').style.display = 'none';
    }

    

    // If both credentials are correct
    if((inputEmail == email) && (inputPassword == password)) {
        window.location.href = 'greet.html';
    }
}