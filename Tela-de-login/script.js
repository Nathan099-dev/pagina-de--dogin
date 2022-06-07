const userName = document.getElementById('login');
const password = document.getElementById('senha');
const btn = document.querySelector('button');

btn.onclick = function validar(event){
    event.preventDefault();

    if (userName.value == '') {
        userName.classList.add('invalid');

    }else{
        userName.classList.remove('invalid');
    }

    if (password.value == '') {
        password.classList.add('invalid');

    }else{
        password.classList.remove('invalid');
    }

}

validar();