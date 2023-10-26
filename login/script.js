const wrapper= document.querySelector('.wrapper');
const regLink= document.querySelector('.reg-link');
const logLink= document.querySelector('.log-link');
const btnLogin= document.querySelector('.buttonLgn-popup');

regLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

logLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnLogin.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});
