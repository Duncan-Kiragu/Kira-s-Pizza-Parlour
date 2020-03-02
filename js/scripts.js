/*Business Logic*/
function pizza (size, crust, toppo) {
  this.size = size;
  this.crust = crust;
  this.toppo= toppo;
}

pizza.prototype.fullOrder= function() {
  return "You ordered a " + this.size + " " + this.crust +" pizza with " + this.toppo + " " + "topping";
}


/*User-Interface*/
$(document).ready(function() {
  $("button#another").click(function() {
    alert("Add another order");
    $("div#size").append( '<select class="form-control" id="size">'+
                      '<option>Large</option>'+
                      '<option>Medium</option>'+
                      '<option>Small</option>'+
                      '</select>'
                          );
     });
  $("button#deliver").click(function(event) {
    event.preventDefault();
    var address=prompt("Enter your Address :");
    alert("Your order has been received and will be delivered to you at your inputted address at an extra cost of 100:   " + address)    
    var size=$("#size").val();
    var crust=$("#crust").val();
    var toppo=$("#toppo").val();
    var newOrder= new pizza (size , crust, toppo)
    
    $("ul#customer-order").append("<li><span class=order>" + newOrder.fullOrder() + "   " + "delivery fee = Ksh.100" + "</span></li>");
  });
    $("button#make-order").click(function(event) {
      event.preventDefault();
      var size=$("#size").val();
      var crust=$("#crust").val();
      var toppo=$("#toppo").val();
      var newOrder= new pizza (size , crust, toppo)
      
      $("ul#customer-order").append("<li><span class=order>" + newOrder.fullOrder() + "</span></li>"); 
    });
    $(document).ready(function(){
      $("button#refresh").click(function(){
          location.reload(true);
      });
  });
})