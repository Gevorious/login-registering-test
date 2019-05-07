function userReg(_user){
    let user = new User(_user.name, _user.username, _user.password, _user.email, "visitor");
    user.add();
}