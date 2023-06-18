const input = document.querySelector("input");
const text = document.querySelector(".text");
const pattern = document.querySelector(".pattern");
const pattern1 = document.querySelector(".pattern1");
const pattern2 = document.querySelector(".pattern2");
const pattern3 = document.querySelector(".pattern3");
const showPassword = document.querySelector("#show-password");
const iconText = document.querySelector(".icon-text");
const textAlert = document.querySelector(".text-alert");
const indicator = document.querySelector(".indicator");
// code to show and hide a passoword
showPassword.addEventListener( "click", ()=>{
 if(input.type === "password"){
    input.type = "text";
    showPassword.classList.replace("fa-eye-slash", "fa-eye");
 }
 else{
    input.type = "password";
    showPassword.classList.replace("fa-eye", "fa-eye-slash");
 }
});
   
// code for password strength 
let  alphabet = /[a-zA-Z]/, // letter a to a and A to Z
         numeric = /[0-9]/, // number from 0 to 9
         scharacters = /[!,@,#,$,%,^,&,*, (,),_,+,=,~,?]/; // special characters

 input.addEventListener("keyup", ()=>{
    indicator.classList.add("active");
    let val = input.value;
     if(val.match(alphabet) || val.match(numeric) || val.match(scharacters)){
        input.style.borderColor = "#red";
        text.textContent = "Password is weak";
        showPassword.style.color = "red";

     }
     if(val.match(alphabet) && val.match(numeric) && val.length === 8){
        input.style.borderColor = "#FF6333";
        text.textContent = "Password is medium";
        showPassword.style.color = "#FF6333";
        text.style.color = "#FF6333";
     }
     if(val.match(alphabet) && val.match(scharacters) && val.length === 8){
        input.style.borderColor = "#FF6333";
        text.textContent = "Password is medium";
        showPassword.style.color = "#FF6333"
        text.style.color = "#FF6333";
     }
     if(val.match(alphabet) && val.match(numeric) && val.match(scharacters) && val.length === 8){
        input.style.borderColor = "#22C32A";
        text.textContent = "Password is strong";
        showPassword.style.color = "#22C32A"
        text.style.color = "#22C32A";
     }
     if( val= ""){
       indicator.classList.remove("active");
       iconText.style.color = "#A6A6A6";
       showPassword.style.color = "#A6A6A6";
      input.style.borderColor = "#A6A6A6";
      text.style.color = "#A6A6A6";

      }

 });