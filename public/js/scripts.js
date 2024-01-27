const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const forgotLoginLink = document.querySelector('.forgot-login-link');
const forgotRegisterLink = document.querySelector('.forgot-register-link');
const forgotLink = document.querySelector('.forgot-link');
const btnPopup = document.querySelector('.btnLogin-popup')
const iconClose = document.querySelector('.icon-close')

registerLink.addEventListener('click', () => {
  wrapper.classList.add('active');
  wrapper.classList.remove('forgot'); // Remover a classe 'forgot' se estiver presente
});

loginLink.addEventListener('click', () => {
  wrapper.classList.remove('active');
  wrapper.classList.remove('forgot'); // Remover a classe 'forgot' se estiver presente
});

forgotRegisterLink.addEventListener('click', () => {
  wrapper.classList.add('active');
  wrapper.classList.remove('forgot'); // Remover a classe 'forgot' se estiver presente
});

forgotLoginLink.addEventListener('click', () => {
  wrapper.classList.remove('active');
  wrapper.classList.remove('forgot'); // Remover a classe 'forgot' se estiver presente
});

forgotLink.addEventListener('click', () => {
  wrapper.classList.add('forgot');
  wrapper.classList.remove('active'); // Remover a classe 'active' se estiver presente
});

btnPopup.addEventListener ('click', ()=> {
  wrapper.classList.add('active-popup');
});

iconClose.addEventListener ('click', ()=> {
  wrapper.classList.remove('active-popup');
});


