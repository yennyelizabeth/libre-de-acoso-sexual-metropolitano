/* Funcionalidad */
window.addEventListener('load', function(event) {
    var btnRegister = document.getElementById('btnRegister');
    var main = document.getElementById('main');
    btnRegister.addEventListener('click', display);
});
  
function display() {
    var sectionRegister = document.getElementById('sectionRegister');
    sectionRegister.classList.add('display');
    main.classList.remove('display');
}