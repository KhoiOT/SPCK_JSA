import { register } from "./authentication.js"
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const ten = document.querySelector('#name')
const re_password = document.querySelector('#re_password')
const signDownButton = document.querySelector('#signUpButton')

signDownButton.addEventListener('click', async () => {
    await register(email.value, password.value);
    alert('oek');
})

