function pizza(name, size, dough) {
    const basic_price = this.pizza_data[name];
    const price = basic_price * this.price_multiplier[size];
  
    return {
      name,
      size,
      price,
      dough
    };
  }
  
  pizza.prototype.pizza_data = {
    Pepperoni: 130,
    Hawaiian: 115,
    "Five cheeses": 121,
    Carbonara: 135,
    Tuscany: 118
  };
  
  pizza.prototype.price_multiplier = {
    small: 1,
    medium: 1.3,
    large: 1.4
  };
  
  //console.log(new pizza("Carbonara", "large", "Thin"));

  let Carbonara = new pizza("Carbonara", "large", "Thin")
  let Hawaiian = new pizza ("Hawaiian", "medium", "Thin" )
  let Paperoni = new pizza ("Paperoni", "small", "Standart")
  let Five_cheeses = new pizza("Five cheeses", "large", "Standart")
  let Tuscany = new pizza ("Tuscany", "medium", "Thin")



  function Card (pizzaInfo, adress){
      
    return{
        pizzaInfo,
        adress
    }

  }

  const Cart = Card ([], 'Lviv')

  function addPizza(pizzaInfo){
      Cart.pizzaInfo.push(pizzaInfo)
      return
  }

  addPizza (Carbonara)
  addPizza (Hawaiian)
  

  console.log (Cart)