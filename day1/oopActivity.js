class Till {
    constructor (drink, price) {
        this.drink = drink;
        this.price = price;
    }
    drinkInformation() {
    console.log(`the ${this.drink} costs ${this.price}.`);
    return this;
    }
}

const cappuccino = new Till ('Cappuccino', 5);
const latte = new Till("Latte", 4);

cappuccino.drinkInformation();
latte.drinkInformation();


class Customer {
    constructor(name, totalCash) {
        this.name = name;
        this.totalCash = totalCash;
    }
    
    customerQuery(drinks) {
        const totalPrice = drinks.reduce((sum, drink) => sum + drink.price, 0);

        if (this.totalCash >= totalPrice) {
            console.log(`${this.name} can afford the drinks. Total price: ${totalPrice}`);
            return true;
        } else {
            console.log(`${this.name} cannot afford the drinks. Total price: ${totalPrice}, but has only ${this.totalCash}`);
            return false;
        }
    }
 }   

 const customer = new Customer("John", 10);

 const orderedDrinks = [cappuccino, latte];
 customer.customerQuery(orderedDrinks);


 //-----------------------------------------------------------------

// class Customer {
//     constructor (name, totalCash, order) {
//         this.name = name;
//         this.totalCash = totalCash;
//         this.order = order
//     }
//     drinkPurchase() {
//         if (this.price > this.totalCash) {
//             console.log(`the customer ${this.name} cannot afford the ${this.order}`)
//         } else if (this.price < this.totalcash) {
//             console.log(`the customer ${this.name} can afford the ${this.order}`)
//         }
//         return this;
//     }
// }

// const john = new Customer ('John', 20, cappuccino)

// john.drinkPurchase();

//------------------------------------------------------------------------------------------------------------------------

// class Customer {
//   constructor(name, totalCash, order) {
//     this.name = name;
//     this.totalCash = totalCash;
//     this.order = order;
//   }
//   get customerQuery() {
//     return this.totalCash -= this.price;
//   }
//   set customerQuery(value) {

//   }
// }

//-----------------------------------------------------------------------------------------------------------------