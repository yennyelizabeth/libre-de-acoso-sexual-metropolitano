/* Funcionalidad */
window.addEventListener('load', function(event) {
    event.preventDefault(event);
    
    var btnRegister = document.getElementById('btnRegister');
    var btnRed = document.getElementById('btn-red');
    var callGreen = document.getElementById('call-green');

    var main = document.getElementById('main');
    var call = document.getElementById('call');
    var usuarioFirst = document.getElementById('usuario-first')

    btnRegister.addEventListener('click', hide);
    btnRed.addEventListener('click', show);
    callGreen.addEventListener('click', firstForm);
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
    usuarioFirst.classList.toggle('hide');
    call.classList.toggle('hide');
}