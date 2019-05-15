

let MEMBERARR = [];
class User{
    constructor(name, username, password,  email, type){
        this.name = name;
        this.pass = password;
        this.usrname = username;
        this.mail = email;
        this.type = type;
        this.userRequest = new XMLHttpRequest();
        
    }
    add(){
        MEMBERARR.push(this);
        const usersRequest = new XMLHttpRequest();
        usersRequest.onload = function(){
            
        }
    }
}
class Admin extends User{
    delete(index){
        MEMBERARR.splice(index,1);
    }
}

