
document.getElementById("formValidate").addEventListener('submit',function(event){

event.preventDefault()

let userName=document.getElementById('name').value.trim()
let email= document.getElementById('email').value.trim()
let number= document.getElementById('number').value.trim()

let nameerror= document.getElementById('errorname')
let mailerror= document.getElementById('erroremail')
let numerror=document.getElementById('errornumber')
let isvalid=true;


let namePattern=/^[A-Za-z]+ [A-Za-z]+$/;
let emailPattern=/^[a-z0-9]+@[a-z]{4,}\.[a-z]{2,}$/
let numberpattern =/^[0-9]{10}$/

if(userName===''){
  nameerror.innerText='Name is required.'
  isvalid=false;
}
else if(!namePattern.test(userName)) {
    nameerror.innerText='Enter your Full Name'
    isvalid=false;
}
else if(namePattern.test(userName)) {
    nameerror.innerText=''
}


if(email===''){
mailerror.innerText='*Email is required.'
isvalid=false;
}
else if(!emailPattern.test(email)) {
    mailerror.innerText='*Enter a valid mail id'
    isvalid=false;
}
else if(emailPattern.test(email)) {
    mailerror.innerText=''
}
if(number===''){
    numerror.innerText='*Number is required.'
    isvalid=false;
}
else if(!numberpattern.test(number)) {
    numerror.innerText='*Enter a 10 digit mobile number'
    isvalid=false;
}
else if(numberpattern.test(number)) {
    numerror.innerText=''
}

if(isvalid===true){
sendMail();


}

})

function sendMail() {
    var params= {  
name: document.getElementById('name').value,
email: document.getElementById('email').value,
number: document.getElementById('number').value,
message:document.getElementById('message').value
}



const serviceID='service_ltxmx9o'
const templateID='template_canh8d9'


emailjs.send(serviceID,templateID,params)
.then(
    res=>{
document.getElementById('name').value=''
document.getElementById('email').value=''
document.getElementById('number').value=''
document.getElementById('message').value=''
alert('your message sent succesfully');
    }

)

}
    



