'use strict '

// const gallery = document.querySelector('.gallery')
const zoomImages = document.querySelectorAll('.zoomImage > img')
const bigImage = document.querySelector('.bigImage > img')

zoomImages.forEach((i)=>{
    console.log(i);
})
console.log(bigImage);
zoomImages.forEach(function(img,index){
    zoomImages[index].addEventListener('click', ()=>{
        bigImage.src = zoomImages[index].src
    })
})
