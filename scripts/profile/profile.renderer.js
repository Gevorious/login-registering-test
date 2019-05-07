function createProfile(_user){
    let mainFrame = new PageFrame("");
    mainFrame.createFrame();

    let mainDiv = document.querySelector("#main");

    let contentDiv = document.createElement("div");
    contentDiv.className = "name_area";

    let photoDiv = document.createElement("div");
    photoDiv.className = "photo";

    let infoDiv = document.createElement("div");
    infoDiv.className = "info";

    let nameDiv = document.createElement("div");
    nameDiv.className = "name";
    nameDiv.innerText = _user.name;

    let usernameDiv = document.createElement("div");
    usernameDiv.className = "username";
    usernameDiv.innerText = _user.usrname;

    mainFrame.content.appendChild(contentDiv);
    contentDiv.appendChild(photoDiv);
    contentDiv.appendChild(infoDiv);
    infoDiv.appendChild(nameDiv);
    infoDiv.innerHTML += "</br>";
    infoDiv.appendChild(usernameDiv);
}