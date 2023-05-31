const firstButton = document.getElementById('subscribe');
const secondButton=document.getElementById('dimiss');
const pageContent = document.getElementById('first-page');
const pageContent2=document.getElementById('second-page');
const emailname=document. getElementById('name');
validationMessage=document.getElementById('message');
firstButton.addEventListener('click',function validateEmail() {
  const emailInput = document.getElementById("email");
  if (emailInput.checkValidity()&&emailInput.textContent!=" "){
    pageContent.style.display = 'none';
    pageContent2.style.display='block'; 
    validationMessage.style.display='none';
        emailInput.style.backgroundColor="white";


  } else {
    validationMessage.style.display='block';
    emailInput.style.backgroundColor="hsl(4, 100%, 67%)";
    validationMessage.textContent = "Invalid email";
    validationMessage.style.color = "hsl(4, 100%, 67%)";
    
  }
    
})

  

secondButton.addEventListener('click', function() {
  pageContent.style.display = 'block';
  pageContent2.style.display='none'; 
  

  
});

