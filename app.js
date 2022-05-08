let alert = document.querySelector('aside'),
notif = document.querySelector('aside p'),
btnEnc = document.querySelector('#enc'),
btnDec = document.querySelector('#dec'),
inputChat = document.querySelector('#chat'),
inputPswd = document.querySelector('#pass'),
result = document.querySelector('#result');

alert.style.transform = 'translateY(-80px)';

// warning content
function warning(dom){
    dom.style.background = 'var(--red-color)';
    dom.style.color = 'var(--primary-color)';
} function unwarning(dom){
    dom.style.background = 'var(--primary-color)';
    dom.style.color = 'var(--main-color)';
}

// input validation special character
function specialChar(dom){
    let sc = "!@#$%^&*()+=-[]\\\';,./{}|\":<>?",cond=true;
    for (let i=0; i<dom.length; i++){
        cond = sc.indexOf(dom.charAt(i)) != -1 ? false:true;
    }
    return cond;
}

btnEnc.addEventListener('click',() => {
    let valueChat = inputChat.value;
    let valuePass = inputPswd.value;
    
    if (valueChat == '' && valuePass == ''){
        alert.style.transform = 'translateY(0px)';
        notif.innerHTML = 'chat and password have not been initiated';
        warning(inputChat);
        warning(inputPswd);
        setTimeout(() =>{
            alert.style.transform = 'translateY(-80px)';
        },2500);
    } else if (valueChat == ''){
        alert.style.transform = 'translateY(0px)';
        notif.innerHTML = 'chat has not been initiated';
        warning(inputChat);
        unwarning(inputPswd);
        setTimeout(() =>{
            alert.style.transform = 'translateY(-80px)';
        },2500);
    } else if (valuePass == ''){
        alert.style.transform = 'translateY(0px)';
        notif.innerHTML = 'password has not been terminated';
        warning(inputPswd);
        unwarning(inputChat);
        setTimeout(() =>{
            alert.style.transform = 'translateY(-80px)';
        },2500);
    } else {
        unwarning(inputChat);
        unwarning(inputPswd);
    }
});