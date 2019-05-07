class PageFrame{
    constructor(_title){
        this.title = _title;
        this.main = document.querySelector("#main");
        this.header = document.createElement("div");
        this.content = document.createElement("div");
        this.footer = document.createElement("div");
        this.logo = document.createElement("div");
        this.title_div = document.createElement("div");
    }
    createFrame(){

        this.main.innerHTML = "";

        this.header.id = "header";
        this.header.className = "header";

        this.logo.id = "logo";
        this.logo.className = "logo";

        this.title_div.id = "title_div";
        this.title_div.className = "title_div";

        this.content.id = "content";
        this.content.className = "content";

        this.footer.id = "footer";
        this.footer.className = "footer";

        this.main.appendChild(this.header);
        this.main.appendChild(this.content);
        this.main.appendChild(this.footer);
        this.header.appendChild(this.logo);
        this.header.appendChild(this.title_div);
        this.title_div.innerText = this.title;
    }
}