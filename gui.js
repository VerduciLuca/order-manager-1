class GUI {
    constructor() {
        this.order = new Order();
        this.person = new Person();
    }

    start(){
        while (true) {
            const firstChoice = prompt(
                "Hai 5 opzioni:\n" +
                    "1)Guarda clienti\n" +
                    "2)Guarda dipendenti\n" +
                    "3)Aggingi ordine\n" +
                    "4)rimuovi ordine\n" +
                    "5)Esci\n" +
                    "inserisci il numero"
            );
            if (firstChoice === "1") {
                this.showClients()
               } else if (firstChoice === "2") {
                this.showEmployees()
               } else if (firstChoice === "3") {
                this.insertOrder();
               } else if (firstChoice === "4") {
                this.deleteOrder();
               } else if (firstChoice === "5") {
                break;
               }

        }
    }
    insertOrder() {
        const insertChoice = prompt('sei un cliente o dipendente?')

        if(insertChoice !== 'cliente' && insertChoice !== 'dipendente'){
            alert('non puoi inserire altri tipi di opzioni');
            return;
        }
        const product = prompt("inserisci il prodotto");
        const quantity = prompt("Inserisci la quantità");
        const unitPrice = parseInt(prompt("inserisci il prezzo di unità"));
        const order = new Order(product, quantity, unitPrice);
        this.manager.addOrder(order);
    }



}