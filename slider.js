//set your settings here
const sliderSettings = {
    buttonsColor: 'white',
    speed: '0.7s',
    isSliderShow: false,
    sliderShowInterval: 5000
}


let arrayOfSlides = Array.from(document.querySelectorAll('.slide'));
function ownStyle() {
    document.querySelector('#prevButton').style.color = sliderSettings.buttonsColor;
    document.querySelector('#nextButton').style.color = sliderSettings.buttonsColor;
    arrayOfSlides.forEach(item => {
        item.style.transition = sliderSettings.speed;
    })
}

//comment this function if you can set style in css file, it's much better
//for optimization
ownStyle()














//dont touch this code if you are not understand what is going on here
let currentTranslate = 0;
let currnetSlide = 0;
let translateWidth = document.querySelector('.slide').offsetWidth;
let timeoutId;


function slideNext() {
    currnetSlide++;
    if (currnetSlide==arrayOfSlides.length) {
        currnetSlide=0;
        currentTranslate = 0;
    } else {
        currentTranslate=currentTranslate-translateWidth;
    }

    
    arrayOfSlides.forEach(item => {
        item.style.transform = `translateX(${currentTranslate}px)`
    })

    setSliderShow()
}

function slidePrev() {
    currnetSlide--;
    if (currnetSlide==-1) {
        currnetSlide=arrayOfSlides.length-1;
        currentTranslate = -(translateWidth*(arrayOfSlides.length-1));
    } else {
        currentTranslate=currentTranslate+translateWidth;
    }
    
    
    arrayOfSlides.forEach(item => {
        item.style.transform = `translateX(${currentTranslate}px)`
    })

    setSliderShow()
}


function setSliderShow() {
    if (sliderSettings.isSliderShow) {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(slideNext, sliderSettings.sliderShowInterval)
    }
}
setSliderShow()



window.addEventListener('resize', ()=>{
    translateWidth = document.querySelector('.slide').offsetWidth;
    currentTranslate = 0;
    currnetSlide = 0;
    arrayOfSlides.forEach(item => {
        item.style.transform = `translateX(0px)`
    })
})

