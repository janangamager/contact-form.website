const submitButton =document.querySelector (".contact-button");
const contactInput = document.querySelectorAll(".contact-input")
const contactContainer =document.querySelector(".contact-container");
const contactValue= document.querySelector(".contact-form")
const bodyDom = document.querySelector("body")
const placeHolder =document.getElementById("plceholder")

let isSubmitted = false; // Flag to track submission state



  submitButton.addEventListener("click",function(event){
    //check submit inner html"
   
    if(!isSubmitted){
      isSubmitted = true; 
      submitButton.innerHTML  ="Submtted !"  
      submitButton.style.background ="blue"
      contactContainer.classList.add( "contact-container-hidden")
      contactContainer.classList.remove( "contact-container") 
      bodyDom.classList.add("body-hidden")
      bodyDom.classList.remove("body")
      contactValue.innerHTML= "CONTACT SENT!" 
       contactValue.style.textDecoration ="underline" ;
      contactValue.style.color ="White"
      

    }
else{ 
   isSubmitted = false

  submitButton.innerHTML = "Submit"; // Change back to "
   submitButton.style.color ="white";
   submitButton.style.background ="rgb(49, 170, 45"

  contactContainer.classList.remove("contact-container-hidden");
  contactContainer.classList.add("contact-container");
  bodyDom.classList.remove("body-hidden");
  bodyDom.classList.add("body");
  contactValue.innerHTML = "CONTACT US:"; // Reset message
  contactValue.style.color = "black"; // Reset
   
  
  contactValue.style.textDecoration ="" ;





};
 event.stopPropagation();
    
    
});



