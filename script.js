const wrapper = document.querySelector('.wrapper');
const btnPopup = document.querySelector('.login-btn');

btnPopup.addEventListener('click', function(event){
    wrapper.classList.add('active-popup');
});

document.getElementById("contact").addEventListener("click", function() {
  window.scrollTo(0, document.body.scrollHeight);
});

/*
document.getElementById("contact-link").addEventListener("click", function() {
  window.scrollTo(0, document.body.scrollHeight);
});

*/