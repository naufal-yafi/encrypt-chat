const alert = document.querySelector('aside'),
notif = document.querySelector('aside p'),
btnEnc = document.querySelector('#enc'),
btnDec = document.querySelector('#dec'),
inputChat = document.querySelector('#chat'),
inputPswd = document.querySelector('#pass'),
result = document.querySelector('#result'),
consolAlert = 'input is not in accordance with the provisions',
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

// show content alert
function sAlert(note,notes){
    alert.style.transform = 'translateY(0px)';
    notif.innerHTML = notes;
    console.log(note);
    setTimeout(() =>{
        alert.style.transform = 'translateY(-80px)';
    },2500);
}

// check for conditin validation input
function check(dom){
    if (specialChar(dom) == false){
        warning(inputChat);
        unwarning(inputPswd);
        sAlert(consolAlert,"don't use special character");
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
        warning(inputChat);
        warning(inputPswd);
        sAlert(consolAlert,'chat and password have not been initiated');
    } else if (valueChat == ''){
        // if the user does not fill the chat
        warning(inputChat);
        unwarning(inputPswd);
        sAlert(consolAlert,'chat has not been initiated');
    } else if (valuePass == ''){
        // if the user does not fill in the password 
        warning(inputPswd);
        unwarning(inputChat);
        sAlert(consolAlert,'password has not been terminated');
    } else {
        // if the user has filled in the chat and password, special validation of the character will be carried out
        check(valueChat);
    }
});