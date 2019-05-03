function createProfile(){
    document.querySelector("#main").innerHTML = "";

    let mainDiv = document.querySelector("#main");

    let headerDiv = document.createElement("div");
    headerDiv.className = "header";

    let photoDiv = document.createElement("div");
    photoDiv.className = "photo";

    let nameDiv = document.createElement("div");
    nameDiv.className = "username";
    nameDiv.innerText = MEMBERARR[0].usrname;

    mainDiv.appendChild(headerDiv);
    headerDiv.appendChild(photoDiv);
    headerDiv.appendChild(nameDiv);
}