let botao = document.querySelector('button')
let email = document.querySelector('#email')
let senha = document.querySelector('#senha')

// função que faz exibir o que foi digitado no email e senha no console do DevTools
function exibir (){
    botao.addEventListener('click',()=>{
        console.log(`Email:${email.value} Senha:${senha.value}`);
        
    })
}
exibir()