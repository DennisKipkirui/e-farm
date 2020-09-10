// $(document).ready(){
//     $('#fruits-form').click(function(){
//         var fruits=$(this.fruits)
//         alert(fruits);
//         return false
//     });  
// };
function Getfruits.append(Number, ProductName, Quantity, Total, amount) {
    this.Number = Number;
    this.ProductName = ProductName;
    this.Quantity = Quantity;
    this.Total = Total;
    this.amount = amount;
};

Getfruits.prototype.fullorder = function () {
    return this.Number + ", " + this.ProductName + ", " + this.Quantity + ", " + ", " + this.Total + ", " + this.amount
    alert(fruits);
};
