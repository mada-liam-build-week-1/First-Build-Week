class FallingObject{
    constructor(text,ypos){
        this.xpos = 0;
        this.rotation = Math.random() * 360;
        this.textNode = document.createTextNode(text.value);
        this.element = document.createElement("p");
        this.element.append(this.textNode);
        document.querySelector("body").appendChild(this.element);
        this.element.classList.add("fallingObj");
        this.element.style.left = `${ypos}px`
        this.interval = setInterval(this.fall.bind(this),5);
    }

    fall(){
        this.xpos++;
        if(this.xpos >= screenHeight-10){
            clearInterval(this.interval);
        }
        this.element.style.top = `${this.xpos}px`;
        this.rotate();
    }

    rotate(){
        this.rotation++;
        if(this.rotation>360){
            this.rotation = 0;
        }
        this.element.style.transform = `rotate(${this.rotation}deg)`;
    }
}

let screenHeight = document.querySelector(".contact-page").clientHeight;
let sendBtn = document.querySelector("#send-btn");
let name = document.querySelector("#full-name");
let email = document.querySelector("#email");
let body = document.querySelector("#contact-body");

let alert = document.querySelector(".hidden");

let items = [name,email,body];

sendBtn.addEventListener("click", () => {
    
    alert.style.visibility = "visible"
    setInterval(spawnItem, 500);
});

function spawnItem(){
    console.log(window.innerWidth);
    new FallingObject(items[Math.floor(Math.random() * 3)], Math.floor(Math.random()*window.innerWidth));
}

////
//snake game
////
class Snake{
    constructor(block){
        this.pos = [[100,0],[80,0],[60,0],[40,0],[20,0],[0,0]];
        this.bodySections = [];
        this.direction = 2;
        this.update = 4;
        this.addblock = block;
        console.log(block);

        this.pos.forEach((element,index) => {
            this.bodySections[index] = document.createElement("div");
            this.bodySections[index].classList.add("snk-bdy");
            document.querySelector("body").appendChild(this.bodySections[index]);

            this.bodySections[index].style.left = `${this.pos[index][0]}px`;
            this.bodySections[index].style.top = `${this.pos[index][1]}px`;
        });

        document.onkeypress = (e) => {
            if(e.key == "w" && this.direction != 2){
                this.update = 0;
            }
            else if(e.key == "d" && this.direction != 3){
                this.update = 1;
            }
            else if(e.key =="s" && this.direction != 0){
                this.update = 2;
            }
            else if(e.key == "a" && this.direction != 1){
                this.update = 3;
            }
        };

        setInterval(this.move.bind(this), 200);
    }

    move(){
        //update direction
        if(this.update == 0){
            this.direction = 0;
            this.update = 4;
        }
        else if(this.update == 1){
            this.direction = 1;
            this.update = 4;
        }
        else if(this.update == 2){
            this.direction = 2;
            this.update = 4;
        }
        else if(this.update == 3){
            this.direction = 3;
            this.update = 4;
        }

        if(this.direction == 0){
            this.pos.unshift([this.pos[0][0],this.pos[0][1] - 20]);
        }
        else if(this.direction == 1){
            this.pos.unshift([this.pos[0][0] + 20,this.pos[0][1]]);
        }
        else if(this.direction == 2){
            this.pos.unshift([this.pos[0][0],this.pos[0][1] + 20]);
        }
        else if(this.direction == 3){
            this.pos.unshift([this.pos[0][0] - 20,this.pos[0][1]]);
        }

        if(this.addblock.pos[0] == this.pos[0][0] && this.addblock.pos[1] == this.pos[0][1]){
            this.bodySections.push(document.createElement("div"));
            this.bodySections[this.bodySections.length - 1].classList.add("snk-bdy");
            document.querySelector("body").appendChild(this.bodySections[this.bodySections.length - 1]);

            this.bodySections[this.bodySections.length - 1].style.left = `${this.pos[this.bodySections.length - 1][0]}px`;
            this.bodySections[this.bodySections.length - 1].style.top = `${this.pos[this.bodySections.length - 1][1]}px`;

            this.addblock.respawn();
        }
        else{
            this.pos.pop();
        }


        this.bodySections.forEach((element,index) => {
            this.bodySections[index].style.left = `${this.pos[index][0]}px`;
            this.bodySections[index].style.top = `${this.pos[index][1]}px`;
        });
    }

    
}

class addBlock{
    constructor(){
        this.pos = [400, 400]
        this.display = document.createElement("div");
        this.display.classList.add("snk-bdy");
        document.querySelector("body").appendChild(this.display);

        this.display.style.left = `${this.pos[0]}px`;
        this.display.style.top = `${this.pos[1]}px`;
    }

    respawn(){
        this.pos[0] = (Math.random()*window.innerWidth);
        this.pos[0] -= this.pos[0] % 20;
        this.pos[1] = (Math.random()*window.innerHeight);
        this.pos[1] -= this.pos[1] % 20;

        this.display.style.left = `${this.pos[0]}px`;
        this.display.style.top = `${this.pos[1]}px`;
    }
}


let snkbtn = document.querySelector("#snk");

snkbtn.addEventListener('click', () => {
    let addblock = new addBlock();
    new Snake(addblock);
});