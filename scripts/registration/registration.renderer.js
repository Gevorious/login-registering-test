function regRenderer() {
    let mainDiv = document.querySelector('#main');

    let nameDiv = document.createElement("div");
    nameDiv.className = "regInputRow";
    let usernameDiv = document.createElement("div");
    usernameDiv.className = "regInputRow";
    let passwordDiv = document.createElement("div");
    passwordDiv.className = "regInputRow";
    let emailDiv = document.createElement("div");
    emailDiv.className = "regInputRow";
    let buttonDiv = document.createElement("div");
    buttonDiv.className = "regInputRow";

    mainDiv.appendChild(nameDiv);
    mainDiv.appendChild(usernameDiv);
    mainDiv.appendChild(passwordDiv);
    mainDiv.appendChild(emailDiv);
    mainDiv.appendChild(buttonDiv);

    let nameInput = document.createElement("input");
    nameInput.setAttribute("name", "name");
    let nameLabel = document.createElement("label");
    nameLabel.setAttribute("for", "name");
    nameLabel.innerText = "Your name";

    let usernameInput = document.createElement("input");
    usernameInput.setAttribute("name", "username");
    let usernameLabel = document.createElement("label");
    usernameLabel.setAttribute("for", "username");
    usernameLabel.innerText = "Username";

    let passwordInput = document.createElement("input");
    passwordInput.setAttribute("name", "password");
    passwordInput.setAttribute("type", "password");
    let passwordLabel = document.createElement("label");
    passwordLabel.setAttribute("for", "password");
    passwordLabel.innerText = "Password";

    let emailInput = document.createElement("input");
    emailInput.setAttribute("name", "email");
    let emailLabel = document.createElement("label");
    emailLabel.setAttribute("for", "email");
    emailLabel.innerText = "E-mail";

    nameDiv.appendChild(nameLabel);
    usernameDiv.appendChild(usernameLabel);
    passwordDiv.appendChild(passwordLabel);
    emailDiv.appendChild(emailLabel);

    nameDiv.appendChild(nameInput);
    usernameDiv.appendChild(usernameInput);
    passwordDiv.appendChild(passwordInput);
    emailDiv.appendChild(emailInput);

    let submit = document.createElement("button");
    submit.innerText = "Register";
    submit.addEventListener("click", function(){
        let name = nameInput.value;
        let username = usernameInput.value;
        let password = passwordInput.value;
        let email = emailInput.value;
        userReg(name, username, password, email, "visitor");
        console.log(MEMBERARR);
        createProfile();
    });
    buttonDiv.appendChild(submit);
}
regRenderer();