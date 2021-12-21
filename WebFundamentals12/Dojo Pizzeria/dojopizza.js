
var pizza = {
    crust:  ["deep dish", "hand tosssed"],
    sauce:  ["marinara", "alfredo"],
    cheeses: ["mozzarella", "feta"],
    meat:   ["pepperoni", "sausage"],
    toppings: ["mushrooms", "olives", "onions"],
    
    
    pizzaOven: function() {
            console.log("The crust is " + this.crust)
            console.log("The sauce is " + "No Sauce")
            console.log("This cheese is " + this.cheeses[0])
            console.log("The meat is " + this.meat)
            console.log("The toppings are " + "No Toppings");
    },



    pizzaOven2: function() {
        console.log("The crust is " + this.crust[1])
        console.log("The sauce is " + this.sauce[0])
        console.log("This cheese is " + this.cheeses)
        console.log("The meat is " + "No Meat")
        console.log("The toppings are " + this.toppings);
    },

        pizzaOven3: function() {
            console.log("The crust is " + this.crust[0])
            console.log("The sauce is " + this.sauce[1])
            console.log("This cheese is " + this.cheeses)
            console.log("The meat is " + this.meat)
            console.log("The toppings are " + this.toppings);
    
        },

        pizzaOven4: function() {
            console.log("The crust is " + this.crust)
            console.log("The sauce is " + this.sauce)
            console.log("This cheese is " + this.cheeses)
            console.log("The meat is " + this.meat)
            console.log("The toppings are " + this.toppings);
    
}

}

pizza.pizzaOven2();

pizza.pizzaOven();

pizza.pizzaOven3();

pizza.pizzaOven4();
