let MEMBERARR = [];
class User{
    constructor(name, password, username, email, type){
        this.name = name;
        this.pass = password;
        this.usrname = username;
        this.mail = email;
        this.type = type;
    }
    add(){
        MEMBERARR.push(this);
    }
}
class Admin extends User{
    delete(index){
        MEMBERARR.splice(index,1);
    }
}

