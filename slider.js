let images = [
    "banner1.JPG",
    "banner2.JPG",
    "banner3.JPG",
    "banner4.JPG"
];

let index = 0;

let slider = document.getElementById("slide");

function changeImage(){

    index++;

    if(index >= images.length){
        index = 0;
    }

    slider.src = images[index];

}

setInterval(changeImage, 3000);