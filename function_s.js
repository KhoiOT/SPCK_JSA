import { register } from "./authentication_s.js"
const email = document.querySelector('#mail')
const password = document.querySelector('#pass')
const signDownButton = document.querySelector('#signin')

signDownButton.addEventListener('click', async () => {
    await register(email.value, password.value);
    alert('oek');
    location.href = "main_page.html";
})

