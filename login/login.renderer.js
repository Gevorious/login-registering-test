function loginRenderer(){
    let mainFrame = new PageFrame("Login");
    mainFrame.createFrame();
    let inputsDiv = document.createElement("div");
    inputsDiv.setAttribute("id", "inputs_div");

    let usernameDiv = document.createElement("div");
    usernameDiv.className = "regInputRow";
    let passwordDiv = document.createElement("div");
    passwordDiv.className = "regInputRow";
    let buttonDiv = document.createElement("div");
    buttonDiv.className = "regInputRow";

    mainFrame.content.appendChild(inputsDiv);
    inputsDiv.appendChild(usernameDiv);
    inputsDiv.appendChild(passwordDiv);
    inputsDiv.appendChild(buttonDiv);

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

    usernameDiv.appendChild(usernameLabel);
    passwordDiv.appendChild(passwordLabel);

    usernameDiv.appendChild(usernameInput);
    passwordDiv.appendChild(passwordInput);

    let submit = document.createElement("button");
    submit.innerText = "Login";
    submit.className = "login";
    submit.addEventListener("click", function(){
        let username = usernameInput.value;
        let password = passwordInput.value;
        userLogin(username, password);
    });

    let signUp = document.createElement("button");
    signUp.innerText = "Sign Up";
    signUp.className = "reg";
    signUp.addEventListener("click", regRenderer);

    buttonDiv.appendChild(submit);
    buttonDiv.appendChild(signUp);
}
loginRenderer();