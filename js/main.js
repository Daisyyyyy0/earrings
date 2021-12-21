const navbar = document.querySelector('.navbar')
// console.log(navbar.scrollTop);

window.addEventListener('scroll',function(){
    // console.log(document.body.);
    // console.log(window.scrollY);
    if(window.scrollY > 0){
        navbar.classList.add('navbar-bg-white');
    }else if(window.scrollY === 0){
        navbar.classList.remove('navbar-bg-white');
    }
})