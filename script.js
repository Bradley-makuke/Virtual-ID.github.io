const wrapper = document.querySelector('.wrapper');
const btnPopup = document.querySelector('.login-btn');
const signup = document.querySelector('.signup-btn');

btnPopup.addEventListener('click', function(event){
    wrapper.classList.add('active-popup');
});

signup.addEventListener('click', function(event){
    location.replace('C:\Users\User\Documents\GitHub\ID-authportal\signup.html');
});


//Gonn Have to add more JS after linking with Brad's Work 