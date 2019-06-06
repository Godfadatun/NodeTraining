class User{
    constructor(firstName1, lastName, credit){
        this.firstName1 = firstName1;
        this.lastName = lastName;
        this.credit = credit;
    }

    getFName(){
       return `${this.firstName1} ${this.lastName}`;
        //let fullname = 
       // return fullname;
    }
    editName(newName){
        var myName = newName.split(' ');
        this.firstName1 = myName[0];
        this.lastName = myName[1];
    }

}

const gideon = new User('john', 'idiot', 29);
console.log(gideon);
console.log(gideon.getFName());
gideon.editName('gideon prick');
console.log(gideon.getFName());

// const riko = new User();    
// console.log(riko);
