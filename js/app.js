/* Funcionalidad */
window.addEventListener('load', function(event) {
    event.preventDefault(event);
    
    var btnRegister = document.getElementById('btnRegister');
    var btnRed = document.getElementById('btn-red');
    var callGreen = document.getElementById('call-green');
    // var usuarioFirst = document.getElementById('usuario-first');
    var usuarioSecond = document.getElementById('usuario-second');
    var main = document.getElementById('main');
    var call = document.getElementById('call');
    

    btnRegister.addEventListener('click', hide);
    btnRed.addEventListener('click', show);
    callGreen.addEventListener('click', firstForm);
    usuarioSecond.addEventListener('click', secondForm);

});
  
function hide() {
    event.preventDefault(event);
    var sectionRegister = document.getElementById('sectionRegister');
    sectionRegister.classList.add('hide');
    main.classList.remove('hide');
}

function show() {
    call.classList.toggle('hide');
    main.classList.toggle('hide');
}

function firstForm() {
    alert('hola');
    // event.preventDefault(event);
    call.classList.toggle('hide');
    var usuarioFirst = document.getElementById('usuario-first');
    usuarioFirst.classList.toggle('hide');
}

function secondForm() {
    call.classList.toggle('hide');
    var usuarioSecond = document.getElementById('usuario-second');
    usuarioFirst.classList.toggle('hide');
    usuarioSecond.classList.toggle('hide');
}

