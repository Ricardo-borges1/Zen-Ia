'use strict'

const form = document.getElementById('form');
form.addEventListener('submit', function(event){
    event.preventDefault();

    validarLogin();
});

async function validarLogin(){

    const email = document.getElementById('username').value;
    const senha = document.getElementById('password').value;

    if(email === '' || senha === ''){
        alert ('preencha os campos')
        return false
    }
    try {
        const user = await fetch ('https://back-login.vercel.app/usuarios');

        const listUsers = await user.json();

        let validarUsuario = true;

        listUsers.forEach((user) => {
            if(email === user.email && senha === user.senha){
                alert('Usuário encontrado com sucesso')
                localStorage.setItem("id",user.id)
                localStorage.setItem("nome", user.email)
                window.location.href = './home.html'
                return validarUsuario = true
            }
        })


        if(validarUsuario==false){
            alert('Usuario não encontrado')
        }

    } catch (error) {
        alert('Erro ao acessar a api')
    }

}




