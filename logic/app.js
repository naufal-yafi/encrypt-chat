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
    '1','2','3','4','5','6','7','8','9','0',' '
];

let strToChar = [],
keyChat = [],
mergeChat = "";

console.log(data);
alert.style.transform = 'translateY(-80px)';

// ! START LOGIC 
// 1. split chat to array char
const splChat = (chat) => {
    for(let i=0; i<chat.length; i++){
        strToChar[i] = chat.charAt(i);
    }
};

// 2. search key number
const keyNum = (chatSplit) => {
    for (let i=0; i<chatSplit.length;i++){
        for (let j=0; j<data.length; j++){
            if (chatSplit[i] == data[j]){
                let key = j+1;
                keyChat[i] = parseInt(key);
            }
        }
    }
};

// 3. add key number with a password
const changeKey = (pass) => {
    for (let i=0; i<keyChat.length; i++){
        let cK = keyChat[i]+pass;
        keyChat[i] = cK;
    }
};

// 4. convert key number
const conv = () => {
    for (let i=0; i<keyChat.length; i++){
        indic = keyChat[i];
        if (indic > (data.length-1)){
            let cond = indic-(data.length-1);
            indic = cond;
        }
        strToChar[i] = data[indic];
    }
};

// 5. merge
const merge = () => {
    for (let i=0; i<strToChar.length; i++){
        mergeChat += strToChar[i];
    }
};

// 6. clean history 
const clean = () => {
    mergeChat = "";
    for (let i=0; i<strToChar.length; i++){
        strToChar.pop();
        keyChat.pop();
    }
}; 

// ! END LOGIC

// warning content
const warning = (dom) => {
    dom.style.background = 'var(--red-color)';
    dom.style.color = 'var(--primary-color)';
}; const unwarning = (dom) => {
    dom.style.background = 'var(--primary-color)';
    dom.style.color = 'var(--main-color)';
};

// input validation special character
const specialChar = (dom) => {
    let sc = "!@#$%^&*()+=-[]\\\';,./{}|\":<>?",cond=true;
    for (let i=0; i<dom.length; i++){
        cond = sc.indexOf(dom.charAt(i)) != -1 ? false:true;
    }
    return cond;
};

// show content alert
const sAlert = (note,notes) => {
    alert.style.transform = 'translateY(0px)';
    notif.innerHTML = notes;
    console.log(note);
    setTimeout(() =>{
        alert.style.transform = 'translateY(-80px)';
    },2500);
};

// check for conditin validation input
const check = (dom) => {
    if (specialChar(dom) == false){
        warning(inputChat);
        unwarning(inputPswd);
        sAlert(consolAlert,"don't use special character");
    } else if (specialChar(dom)){
        unwarning(inputChat);
        success();
    }
};

// final condition validation input
const success = () => {
    let valueChat = inputChat.value,
    valuePass = parseInt(inputPswd.value);
    console.log('input in accordance with the provisions');
    splChat(valueChat);
    console.log(strToChar);
    keyNum(strToChar);
    console.log(keyChat);
    changeKey(valuePass);
    console.log(keyChat);
    conv();
    console.log(strToChar);
    merge();
    result.innerHTML = mergeChat;
};

// click event encrypt
btnEnc.addEventListener('click',() => {
    let valueChat = inputChat.value,
    valuePass = inputPswd.value;
    clean();
    
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
        unwarning(inputChat);
        unwarning(inputPswd);
        check(valueChat);
    }
});