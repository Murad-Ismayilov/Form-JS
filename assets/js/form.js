document.addEventListener("DOMContentLoaded", function(){

    //DOM Document Object Model
    const username = document.querySelector("#username")    
    const email = document.getElementById("email")          
    const password = document.getElementById("password")    
    const password2 = document.getElementById("password2")  


    const formELmeneti = document.querySelector(".form")
    console.log(formELmeneti) 

    function showSuccess(input){
        const valideynElement = input.parentElement
        valideynElement.classList.add("success")
    }

    function showError(qutu, mesaj){
        const valideynElement = qutu.parentElement
        valideynElement.classList.add("error")
        const smallTeqi = valideynElement.querySelector("small")
        smallTeqi.innerText = mesaj
    }


    function checkEmail(elektronPoct){
        const qayda = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(elektronPoct.value.trim() === ""){
            showError(elektronPoct, "Elektron poct edilmeyib!");
        }
        else if(qayda.test(elektronPoct.value)){
            showSuccess(elektronPoct);
        }
        else{
            showError(elektronPoct, "Elektron poct standartlara uygun deyil");
        }

    }


    function checkRequired(inputlar){
        inputlar.forEach(birInput =>{
            if(birInput.value.trim()=== ""){
            showError(birInput, `${getFieldName(birInput)} sahesi bosh buraxila bilmez! `) /*getFieldName(birInput) + "sahesi bosh buraxilaq bilmez!"*/
            }
            else{
                showSuccess(birInput)
            }
        })
    }


    function getFieldName(textBox){
        return textBox.id.charAt(0).toUpperCase() + textBox.id.slice(1)
    }


    function checkLength(input, min, max){
            if(input.value.length < min || input.value.length > max){
                showError(input, `${getFieldName(input)} sahesi minimum ${min} ve maxsimum ${max} simvoldan ibaret olmalidir`)
            }
            else{
                showSuccess(input)
            }
    }

    function comparePassword(password, confirmPassword){
        if(password.value !== confirmPassword.value){
            showError(confirmPassword, "Shifreler uygun deyil")
        }

    }

    comparePassword(password, password2)

    formELmeneti.addEventListener("submit", function(e){
        e.preventDefault() 
        checkRequired([username,email, password, password2])
        checkLength(username, 3, 10)
        checkLength(password, 6, 13)
        checkEmail(email)
        comparePassword(password, password2)
    })
})



function ShifreniGoster() {
    const passwordSahesi = document.getElementById("password");
    if (passwordSahesi.type === "password") {
        passwordSahesi.type = "text";
    } else {
        passwordSahesi.type = "password";
    }
}

document.querySelector(".fa-eye").addEventListener("click", ShifreniGoster)


function shifreniGoster() {
    const passwordSahesi = document.getElementById("password2");
    if (passwordSahesi.type === "password") {
        passwordSahesi.type = "text";
    } else {
        passwordSahesi.type = "password";
    }
}

document.querySelector(".fa-eye").addEventListener("click", shifreniGoster)



