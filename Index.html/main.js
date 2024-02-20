//here you can write your js codes.

function calculateTax(subtotal) {
    console.log("running calculateTax function");
    const taxRate = 0.0875;
    let tax = subtotal * taxRate;
    console.log("tax to be paid is:", +tax);

    
    return tax;
}

function calculateTotal(subtotal, tax) {
    console.log("running calculateTotal function");
    let total = subtotal + tax;
    console.log("total price is:", +total);

    
   return total;
   

}

function order(cost) {
    console.log("running order function");
    let subtotal = document.querySelector("#subtotal").textContent;
    subtotal = parseInt(subtotal);
    subtotal = subtotal + cost;
    console.log("subtotal is:", +subtotal);

    let tax = calculateTax(subtotal);
    let total = calculateTotal(subtotal, tax);

    tax = tax.toFixed(2);
    total = total.toFixed(2);
    

    document.querySelector("#subtotal").textContent = subtotal;
    
    document.querySelector("#tax").textContent = tax;
    
    document.querySelector("#Total").textContent = total;
    
   
    
}

//when picture one is clicked the order() function is run
document.querySelector("#picture1").onclick = function() {
    order(80); 
}
   
//when picture tw0 is clicked the order() function is run
document.querySelector("#picture2").onclick = function() {
    order(70);
} 


//when picture three is clicked the order() function is run
document.querySelector("#picture3").onclick = function() {
    order(120);
} 

