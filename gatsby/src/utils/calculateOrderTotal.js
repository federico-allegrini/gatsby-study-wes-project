import calculatePizzaPrice from './calculatePizzaPrice';

export default function calculateOrderTotal(order, pizzas) {
  // Loop over each item in the order
  return order.reduce((runningtotal, singleOrder) => {
    // Calc the total for that pizza
    const pizza = pizzas.find(
      (singlePizza) => singlePizza.id === singleOrder.id
    );
    // Add that total to the running total
    return runningtotal + calculatePizzaPrice(pizza.price, singleOrder.size);
  }, 0);
}
