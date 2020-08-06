const form =document.getElementById('form')
const username =document.getElementById('username')
const password =document.getElementById('password')
const password2 =document.getElementById('password2')
const email =document.getElementById('email')


function ValidateEmail(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

showError = (input,message) =>{  
   const FormControl = input.parentElement;
   FormControl.className = 'form-control error';
   FormControl.querySelector("small").innerText = message
}

showSuccess = (input) =>{
    const FormControl = input.parentElement;
    FormControl.className = 'form-control success';
}

getElementName = (input) =>{
   return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}

checkRequired = (inputArr) =>{
   inputArr.forEach((element)=>{
    if(element.value.trim() === ''){
        showError(element,getElementName(element) + ' is required')
    }
    else{
        showSuccess(element)
    }
   })
}

//Event Listeners
form.addEventListener('submit',function(e){
    e.preventDefault();
   
     checkRequired([email,username,password,password2])
    

});