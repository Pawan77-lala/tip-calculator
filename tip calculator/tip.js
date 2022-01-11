function checkAmount(){
    var amount = document.getElementById('billamt').value;
    var quality = document.getElementById('serviceQual').value;
    var people = document.getElementById('peopleamt').value;
    if(amount === ""){
        alert('Please Enter Bill Amount');
    } else if(quality === ""){
        alert('Please select the service quality');
    } else if(people === ""){
        people = 1;
        calculateTip(amount, quality, people);
    } else {
        calculateTip(amount, quality, people);
    }
}
function calculateTip(a, q, p){
    var tip = (a*q)/p;
    var final = tip.toFixed(2);
    document.getElementById('tipAmountText').innerHTML = "Tip Amount";
    document.getElementById('tipAmount').innerHTML = "$" + final;
    if(p <= 1){
        document.getElementById('tipAmountEach').innerHTML = " ";
    } else {
        document.getElementById('tipAmountEach').innerHTML = "each";
    }
}