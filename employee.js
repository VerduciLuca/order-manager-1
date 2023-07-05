class Employee extends Person{
    constructor(name, surname, dob, gender, age, bestClient, totalEarning){
        super(name,surname, dob, gender, age);
        this.bestClient = bestClient;
        this.totalEarning = totalEarning;

    }

    toString(){
        return 'Dipendente:\n' + super.toString() +
        'Miglior Cliente: ' + this.bestClient + '\n' +
        ' guadagno totale: ' + this.totalEarning + '\n';
    }


}