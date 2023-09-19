const form = document.querySelector('checkbox-evidence-box');
const emf = document.querySelector('emf-5');

form.addEventListener('',(e)=>{
e.preventDefault();
emf.classList.remove('emf-5');

})