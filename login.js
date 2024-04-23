'use strict'




const form = document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault()

    const email = document.getElementById('username')
const senha = document.getElementById('password')

const emailIn = email.value
const passwordIn = senha.value

    console.log(emailIn);
    console.log(passwordIn)

    if (emailIn == 'adm@gmail.com' && passwordIn == 'Adm123@') {
        window.location.href = './home.html'
    } else {
        alert('Por favor, coloque as informações corretas!!')
    }
})