let SignUp=document.getElementById('signUp');
let loginBox=document.getElementById('login');
let forgotBox=document.getElementById('forget');
let lt=document.getElementById('lt');
let rt=document.getElementById('rt');
let fp=document.getElementById('fp');

let EmailArray=[];
let PasswordArray=[];

function loginTab(){
    SignUp.style.visibility="hidden";
    forgotBox.style.visibility="hidden"
    loginBox.style.visibility="visible";
    rt.style.backgroundColor="black";
    lt.style.backgroundColor="white";
    rt.style.color="white";
    lt.style.color="black";

    
}

function SignUpTab(){
    SignUp.style.visibility="visible";
    forgotBox.style.visibility="hidden"
    loginBox.style.visibility="hidden";
    lt.style.backgroundColor="black";
    rt.style.backgroundColor="white";
    rt.style.color="black";
    lt.style.color="white";
}

function forTabFun(){
    SignUp.style.visibility="hidden";
    forgotBox.style.visibility="visible";
    loginBox.style.visibility="hidden";
    lt.style.backgroundColor="black";
    rt.style.backgroundColor="black";
    lt.style.color="white";
    rt.style.color="white";
}

function signUp()
{
    event.preventDefault();
    var email=document.getElementById('re').value;
    var password=document.getElementById('rp').value;
    var passwordRetype=document.getElementById('rrp').value;

    if(email==""){
        alert('Email Required');
        return;
    }

    if(password==""){
        alert("Password Required");
        return;
    }

    if(passwordRetype==""){
        alert('Retype Passsword Required');
        return;
    }

    if(password !== passwordRetype){
        alert('Password does not match');
    }

    if (EmailArray.indexOf(email)===-1){
         EmailArray.push(email);
         PasswordArray.push(password);

         alert(`Thanks for SignUp ${email}\n Try to login now!`);
         document.getElementById('re').value="";
         document.getElementById('rp').value="";
         document.getElementById('rrp').value="";
    }
}

function login(){
    var email=document.getElementById('se').value;
    var password=document.getElementById('sp').value;
    var i=EmailArray.indexOf(email)

    if(email==""){
        alert('Email Required');
        return;
    }

    if(password==""){
        alert("Password Required");
        return;
    }

    if(EmailArray.indexOf(email)==-1){
        alert("Email does not exist in our Record!");
        return;
    }

    if(PasswordArray[i]!=password){
        alert("Password Wrong!");
    }

    else{
        alert(`${email} \n Login Successfull`);
        document.getElementById('se').value="";
        document.getElementById('sp').value="";

    }
}

function forget(){
    event.preventDefault();
    var email=document.getElementById('fe').value;
    if(EmailArray.indexOf(email)==-1){
        if(email==""){
            alert("Email Required");
        }
        alert(`${email} \tEmail does not exist!`);
    }

    else{
        alert("OTP Sent to your registered Email!");
        document.getElementById('fe').value="";
    }

}