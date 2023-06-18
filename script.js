const wrapper = document.querySelector('.wrapper');
const btnPopup = document.querySelector('.login-btn');
const signup_btn = document.querySelector('.signup-btn');

btnPopup.addEventListener('click', function(event){
    wrapper.classList.add('active-popup');
});

signup_btn.addEventListener('click', function(event){
    window.location.href('C:\Users\User\Documents\GitHub\ID-authportal\signup.html');
});


//Gonn Have to add more JS after linking with Brad's Work 