let numberPlate;
document.getElementById("confirm").onclick=function(){
    numberPlate=document.getElementById("number-plate").value;
    console.log(numberPlate);
    location.href='reserve2.html';
    document.getElementById("header").textContent='Hello ${numberPlate}';
}