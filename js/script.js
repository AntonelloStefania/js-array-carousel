let imgs = [
    "01.webp",
    "02.webp",
    "03.webp",
    "04.webp",
    "05.webp"
]


let img_container = document.querySelector('.img-container');
let slide ="";

for(let i=0; i < imgs.length; i++){
    let current_img = `<img src="./img/${imgs[i]}" alt="">`
    slide += `<div class="slide">
                 ${current_img}
            </div>`
}

img_container.innerHTML = slide
let active_slide = 0;
let all_slides = document.getElementsByClassName('slide')
all_slides[active_slide].classList.add('active');

let prev_btn = document.querySelector("#prev-button");
let next_btn = document.querySelector("#next-button");

next_btn.addEventListener('click', function(){
    if(active_slide < (imgs.length - 1)){
        all_slides[active_slide].classList.remove('active');
        active_slide++;
        all_slides[active_slide].classList.add('active');
 
    } 
})

prev_btn.addEventListener('click', function(){
    if(active_slide > 0){
        all_slides[active_slide].classList.remove('active');
        active_slide--;
        all_slides[active_slide].classList.add('active');
    }
})
