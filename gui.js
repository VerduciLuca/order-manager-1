class GUI {
    constructor() {
        this.order = new Order();
        this.person = new Person();
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