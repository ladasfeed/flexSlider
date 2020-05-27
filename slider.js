let currentTranslate = 0;
let currnetSlide = 0;
let translateWidth = document.querySelector('.slide').offsetWidth;
let arrayOfSlides = Array.from(document.querySelectorAll('.slide'));


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
}

window.addEventListener('resize', ()=>{
    translateWidth = document.querySelector('.slide').offsetWidth;
    currentTranslate = 0;
    currnetSlide = 0;
    arrayOfSlides.forEach(item => {
        item.style.transform = `translateX(0px)`
    })
})