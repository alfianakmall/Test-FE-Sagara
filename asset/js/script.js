function cekForm(){
    let password = document.getElementById('password');
    let email = document.getElementById('email');

    console.log("password : " + password.value)
    console.log("email : " + email.value)

    if(password.value != '' && email.value != ''){
        document.querySelector('.btn-login').disabled = false;
        document.querySelector('.btn-login').style.backgroundColor = '#F6712A';
    }else{
        document.querySelector('.btn-login').disabled = true;
        document.querySelector('.btn-login').style.backgroundColor = '#E5E5E5';
    }
}
function alertform(){
    let password = document.getElementById('password');
    let email = document.getElementById('email');
    let cekEmail = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))

    if(cekEmail)
    alert("Email : " + email.value + "\nPassword: " + password.value);
    else
    alert("Masukkan Format Email Yang Benar \n(Example : investX@gmail.com)")

    
}