const buttonPrev = document.querySelector('.slider__button__prev');
const buttonNext = document.querySelector('.slider__button__next');
const img = document.querySelectorAll('.slider-img');
let actImg = 0;

const formMsg = document.querySelector('.message');
const form = document.querySelector('form')
const formBtn = document.querySelector('form .f-btn');
let formMsgShown = false;


function changeActive(index) {
    img[index].classList.toggle('show');
}

function getNextImg() {
    changeActive(actImg)
    actImg++;
    if (img.length <= actImg) {
        actImg = 0
    }
    changeActive(actImg);
}

function getPrevImg() {
    changeActive(actImg);
    actImg--;
    if (actImg < 0) {
        actImg = img.length - 1
    }
    changeActive(actImg);
}

buttonNext.onclick = () => getNextImg();
buttonPrev.onclick = () => getPrevImg();


function toggleMsg() {
    formMsgShown = !formMsgShown;
    formMsg.style = formMsgShown ? 'display: block' : 'display: none';
    form.style = formMsgShown ? 'display: none' : 'display: block';
}

formBtn.addEventListener('click', function () {
    toggleMsg();
})