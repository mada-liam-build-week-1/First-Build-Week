class Carousel{
    constructor(element){
        this.element = element;
        this.imgs = this.element.querySelectorAll("img");
        this.index = 0;

        this.buttons = this.element.querySelectorAll("button");
        this.buttons[0].addEventListener('click', this.rotateLeft.bind(this));
        this.buttons[1].addEventListener('click', this.rotateRight.bind(this));
    }

    rotateLeft(){
        //hide current img;
        this.imgs[this.index].classList.toggle("hidden");
        this.index--;
        if(this.index < 0){
            this.index = this.imgs.length - 1 ;
        }
        this.imgs[this.index].classList.toggle("hidden");
    }

    rotateRight(){
        this.imgs[this.index].classList.toggle("hidden");
        this.index++;
        if(this.index > this.imgs.length - 1 ){
            this.index = 0;
        }
        this.imgs[this.index].classList.toggle("hidden");
    }
}

let carouselElement = document.querySelector("#carousel");
let carousel = new Carousel(carouselElement);