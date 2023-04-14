const form = document.getElementById('form');
const firstName = document.getElementById('FirstName');
const lastName = document.getElementById('LastName');
const email = document.getElementById('Email');
const password = document.getElementById('Password');

function checkInputs(){
    let firstNameValue = firstName.value.trim();
    let lastNameValue = lastName.value.trim();
    let emailValue = email.value.trim();
    let passwordValue = password.value.trim();

    if (firstNameValue === ''){
        alert('First Name Cannot be empty')
    }

    if (lastNameValue === ''){
        alert('Last Name Cannot be empty')
    }
    let charcters =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if (emailValue.match(charcters)){
        return true
    } else {
        alert('Looks like this is not an email')
    }

    if (passwordValue === '') {
        alert('Password Cannot be empty')
    }
   
}

form.addEventListener('submit', checkInputs)
