/* Funcionalidad */
window.addEventListener('load', function(event) {
    event.preventDefault(event);
    
    var btnRegister = document.getElementById('btnRegister');
    var btnRed = document.getElementById('btn-red');
    var callGreen = document.getElementById('call-green');
    var info = document.getElementById('info');
    // var usuarioFirst = document.getElementById('usuario-first');
    // var usuarioSecond = document.getElementById('usuario-second');
    var main = document.getElementById('main');
    var call = document.getElementById('call');
    var btnEnviar = document.getElementById('btn-1');
    var btnOp = document.getElementById('btn-op2');

    btnRegister.addEventListener('click', hide);
    btnRed.addEventListener('click', show);
    callGreen.addEventListener('click', firstForm);
    btnEnviar.addEventListener('click', secondForm);
    btnOp.addEventListener('click', lastView);
    info.addEventListener('click', visibleInfo)
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
    // event.preventDefault(event);
    call.classList.toggle('hide');
    var usuarioFirst = document.getElementById('usuario-first');
    usuarioFirst.classList.toggle('hide');
}

function secondForm() {
    var usuarioFirst = document.getElementById('usuario-first');
    var usuarioSecond = document.getElementById('usuario-second');
    usuarioFirst.classList.toggle('hide');
    usuarioSecond.classList.toggle('hide');
}

function lastView() {
    var blog = document.getElementById('blog-section');
    blog.classList.toggle('hide');
    var usuarioSecond = document.getElementById('usuario-second');
    usuarioSecond.classList.toggle('hide');
}

function visibleInfo() {
    sectionRegister.classList.add('hide');
    main.classList.toggle('hide');
    usuarioFirst.classList.toggle('hide');
    usuarioSecond.classList.toggle('hide');
    call.classList.toggle('hide');
    call.classList.toggle('hide');
    call.classList.toggle('hide');
}