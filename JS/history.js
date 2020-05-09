class Link {
    constructor(link) {
        console.log(link)
        this.link = link
        console.log(this.link.dataset.box)
        this.content = document.querySelector(`.content[data-box='${this.link.dataset.box}']`);
        console.log(this.content)

        this.content = new Content(this.content);

        this.link.addEventListener('click', () => this.linkClick())
    }
    // methods
    linkClick(){
        this.content.toggleContent()
    }
} // Link

class Content {
    constructor(content){
        this.contentBox = content;
        // console.log(this.contentBox)
    }
    // methods
    toggleContent(){
        this.contentBox.classList.toggle('change');
    }
}

const links = document.querySelectorAll('.link');
// console.log(links)

links.forEach(function(link){
    return new Link(link);
})