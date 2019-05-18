function regRenderer() {
    let mainFrame = new PageFrame("Registration");
    mainFrame.createFrame();
    let inputsDiv = document.createElement("div");
    inputsDiv.setAttribute("id", "inputs_div");

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

    mainFrame.content.appendChild(inputsDiv);
    inputsDiv.appendChild(nameDiv);
    inputsDiv.appendChild(usernameDiv);
    inputsDiv.appendChild(passwordDiv);
    inputsDiv.appendChild(emailDiv);
    inputsDiv.appendChild(buttonDiv);

    let nameInput = document.createElement("input");
    nameInput.className = "reg";
    nameInput.setAttribute("name", "name");
    let nameLabel = document.createElement("label");
    nameLabel.setAttribute("for", "name");
    nameLabel.innerText = "Your name";

    let usernameInput = document.createElement("input");
    usernameInput.className = "reg";
    usernameInput.setAttribute("name", "username");
    let usernameLabel = document.createElement("label");
    usernameLabel.setAttribute("for", "username");
    usernameLabel.innerText = "Username";

    let passwordInput = document.createElement("input");
    passwordInput.className = "reg";
    passwordInput.setAttribute("name", "password");
    passwordInput.setAttribute("type", "password");
    let passwordLabel = document.createElement("label");
    passwordLabel.setAttribute("for", "password");
    passwordLabel.innerText = "Password";

    let emailInput = document.createElement("input");
    emailInput.className = "reg";
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
    submit.className = "reg";
    submit.addEventListener("click", function(){
       let userObj ={};
       userObj.name = nameInput.value;
       userObj.username = usernameInput.value;
       userObj.password = passwordInput.value;
       userObj.email = emailInput.value;
        userReg(userObj, "visitor");
        loginRenderer();
    });
    buttonDiv.appendChild(submit);
}