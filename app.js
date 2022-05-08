const alert = document.querySelector('aside'),
notif = document.querySelector('aside p'),
btnEnc = document.querySelector('#enc'),
btnDec = document.querySelector('#dec'),
inputChat = document.querySelector('#chat'),
inputPswd = document.querySelector('#pass'),
result = document.querySelector('#result'),
data = [
    'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
    'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
    '','1','2','3','4','5','6','7','8','9','0'
];

console.log(data);

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

// final condition validation input
function success(){
    console.log('input in accordance with the provisions');
}

// check for conditin validation input
function check(dom){
    if (specialChar(dom) == false){
        alert.style.transform = 'translateY(0px)';
        notif.innerHTML = "don't use special character";
        console.log('input is not in accordance with the provisions');
        warning(inputChat);
        unwarning(inputPswd);
        setTimeout(() =>{
            alert.style.transform = 'translateY(-80px)';
        },2500);
    } else if (specialChar(dom)){
        unwarning(inputChat);
        success();
    }
}

// click event encrypt
btnEnc.addEventListener('click',() => {
    let valueChat = inputChat.value;
    let valuePass = inputPswd.value;
    
    if (valueChat == '' && valuePass == ''){
        // if the user does not fill in the password and chat
        alert.style.transform = 'translateY(0px)';
        notif.innerHTML = 'chat and password have not been initiated';
        console.log('input is not in accordance with the provisions');
        warning(inputChat);
        warning(inputPswd);
        setTimeout(() =>{
            alert.style.transform = 'translateY(-80px)';
        },2500);
    } else if (valueChat == ''){
        // if the user does not fill the chat
        alert.style.transform = 'translateY(0px)';
        notif.innerHTML = 'chat has not been initiated';
        console.log('input is not in accordance with the provisions');
        warning(inputChat);
        unwarning(inputPswd);
        setTimeout(() =>{
            alert.style.transform = 'translateY(-80px)';
        },2500);
    } else if (valuePass == ''){
        // if the user does not fill in the password 
        alert.style.transform = 'translateY(0px)';
        notif.innerHTML = 'password has not been terminated';
        console.log('input is not in accordance with the provisions');
        warning(inputPswd);
        unwarning(inputChat);
        setTimeout(() =>{
            alert.style.transform = 'translateY(-80px)';
        },2500);
    } else {
        // if the user has filled in the chat and password, special validation of the character will be carried out
        check(valueChat);
    }
});