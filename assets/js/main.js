let distance = Number(prompt("Quanti chilometri vuoi percorrere ?"));

let age = Number(prompt("Quanti anni hai ?"));

let price = distance * 0.21;

let finalPrice;

if (age < 18){
    price = price - (price * 20 / 100);
    finalPrice = price.toFixed(2);
} else if (age >= 18 && age <65){
 
    finalPrice = price.toFixed(2);
}
 else if (age >= 65){
    price = price - (price * 40 / 100);
    finalPrice = price.toFixed(2);
} 

document.getElementById("ticket").innerHTML = "Il prezzo del biglietto è di " + finalPrice + " €"