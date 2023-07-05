class Person{
    constructor(name, surname, dob, gender, age){
        this.name = name;
        this.surname = surname;
        this.dob = dob;
        this.gender = gender;
        this.age = age;
    }


    toString(){
        const card = 'Name:' + this.name +
        'Cognome:' + this.surname + '\n' +
        'Data di nascita:' + this.dob + '\n' +
        'Genere:' + this.gender + '\n' +
        'Età: ' + this.age + '\n';

        return card;
    }


}
var x = new Person ('gianni','carlo',123,'m',90)

x.toString()