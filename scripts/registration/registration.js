function userReg(_name, _username, _password, _email){
    let user = new User(_name, _username, _password, _email, "visitor");
    user.add();
}