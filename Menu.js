// Create a list of items to represent pizza toppings
let items = [
    {item: "cheese", price: 5.99, image: "Cheese.jpeg", quantity: 0},
    {item: "pepperoni", price: 7.99, image: "Pepperoni.jpeg", quantity: 0},
    {item: "sausage", price: 4.99, image: "Sausage.jpeg", quantity: 0},
    {item: "vegeterian", price: 8.99, image: "Vegeterian.jpeg", quantity: 0}
    

    
  ];
  // Define a function to update the quantity of a particular item when it is clicked
  function update_quantity(item)
  {
      var total = 0;
      for(var i = 0; i < 4; i++)
      {
          if(items[i].item == item)
          {
              let qty_name = item + "_quantity";
              let edit = document.getElementById(qty_name);
              items[i].quantity = edit.value;
              document.getElementById(item).className = "badge badge-primary";
          }
          total += items[i].quantity * items[i].price;

      }
      // Calculate the total amount for an order
      document.getElementById("total").textContent = total.toFixed(2);
      document.getElementById("tax").textContent = (total * 0.06).toFixed(2);
      document.getElementById("order-total").textContent = (total + total * 0.06).toFixed(2); 
      // Above line of code is not working.
  }
  // Define a function to toggle the menu item so that when you hover your mouse 
  // over a menu item, it will light up in blue
  function toggle(id) 
  {
     var elem = document.getElementById(id);
     if(elem.className == "badge badge-secondary")
     {
        elem.className = "badge badge-primary";
        document.getElementById(id + "_quantity").value = 1;
        update_quantity(id);   
     }
     else
     {
        elem.className = "badge badge-secondary";
        document.getElementById(id + "_quantity").value = 0;
        update_quantity(id);
     }

  }