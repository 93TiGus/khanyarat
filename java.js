// iconbar



// sections
let sections = document.querySelectorAll('section');
let navLinka = document.querySelectorAll('header a nav');


window.onscroll = () =>{

    // sticky Headers
    let header = document.querySelector('header');

    header.classList.toggle('sticky' , window.scrollY > 100);
}