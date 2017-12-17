/* Funcionalidad */
window.addEventListener('load', function(event) {
    event.preventDefault(event);
    var btnRegister = document.getElementById('btnRegister');
    var main = document.getElementById('main');
    var call = document.getElementById('call');
    var btnRed = document.getElementById('btn-red');
    btnRegister.addEventListener('click', display);
    btnRed.addEventListener('click', show)
});
  
function display() {
    event.preventDefault(event);
    var sectionRegister = document.getElementById('sectionRegister');
    sectionRegister.classList.add('display');
    main.classList.remove('display');
}
function show() {
    call.classList.toggle('display');
    main.classList.toggle('display');
}