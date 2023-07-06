class Person{
    constructor(name, surname, dob, gender, age){
        this.name = name;
        this.surname = surname;
        this.dob = dob;
        this.gender = gender;
        this.age = age;
    }


    toString(){
        const card = 'Name:' + this.name + '\n'+
        'Cognome:' + this.surname + '\n' +
        'Data di nascita:' + this.dob + '\n' +
        'Genere:' + this.gender + '\n' +
        'Età: ' + this.age + '\n';
        return card;
    }

    get age(){
        
        const nowTimeStamp = new Date().getTime();
        const dobTimeStamp = this.dob.getTime();
        const deltaTimeStamp = nowTimeStamp-dobTimeStamp
        const age= Math.floor(deltaTimeStamp / (1000 * 60 * 60 * 24 * 365));        //floor arrotonda in giù, ceiling beh ecco si

        return age
    }


}
var x = new Person ('gianni','carlo',new Date(),'m',90)

x.toString()