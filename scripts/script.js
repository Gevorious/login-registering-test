

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
        const jsonString = JSON.stringify(this);
        const xhrUsers = new XMLHttpRequest();
        xhrUsers.open("POST", "http://localhost:3000/users", true);
        xhrUsers.setRequestHeader("Content-Type", "application/json");
        xhrUsers.send(jsonString);
    }
}
class Admin extends User{
    delete(index){
        MEMBERARR.splice(index,1);
    }
}

