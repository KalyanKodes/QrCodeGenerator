// API = https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example

const inputBox = document.getElementById('inputBox');
const inputBoxLabel = document.querySelector(".inputBoxLabel");
const generateButton = document.getElementById('generateButton');
const qrImage = document.getElementById('qrImage');
const qrImageContainer = document.querySelector('.qrImageContainer');

inputBox.addEventListener("focus" , ()=>{
    if(inputBox.value === ""){
        inputBoxLabel.style.transform = 'translateY(-20px)'
    }
})
inputBox.addEventListener("blur" , ()=>{
    if(inputBox.value === ""){
        inputBoxLabel.style.transform = 'translateY(0px)'
    }
})


generateButton.addEventListener('click' , ()=>{
    if(inputBox.value != ""){
        let message = inputBox.value;
        qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${message}`;
        document.querySelector(".qrImageContainer").classList.add('show');
    }
    else{
        inputBox.classList.add('error');
        setTimeout(()=>{
            inputBox.classList.remove('error');
        } ,1000)
    }
});