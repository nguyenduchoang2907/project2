function save(){
    let fullname=document.getElementById('fullname').value;
    let email=document.getElementById('email').value;
    let phone=document.getElementById('phone').value;
    let address=document.getElementById('adress').value;
    let gender='';
    if(document.getElementById('male').checked){
        gender=document.getElementById('male').value;
    }else if(document.getElementById('female').checked){
        gender=document.getElementById('female').value;
    }
console.log(fullname,email,address,gender);
}