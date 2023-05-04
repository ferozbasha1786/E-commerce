const bar =document.getElementById('bar');
const close=document.getElementById('close');
const nav=document.getElementById('navbar');

const count=document.getElementById('count')
const count_increase=document.getElementById('count_increase')

const total=document.getElementById("total")
const quantityproduct=document.getElementById("quantity_product")
const rate=document.getElementById("rate")

const rate2=document.getElementById("rate2")
const total2=document.getElementById("total2")
const quantityproduct2=document.getElementById("quantity_product2")

const rate3=document.getElementById("rate3")
const total3=document.getElementById("total3")
const quantityproduct3=document.getElementById("quantity_product3")

const cartsub=document.getElementById("cartsub")
const finaltotal=document.getElementById("finaltotal")

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    } )
}
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    } )
}


function quantity1(){
    if(quantityproduct2.value<0) return;

    total.textContent=quantityproduct.value*rate.textContent
    cartsub.textContent="$ "+(parseInt(total.textContent)+parseInt(total2.textContent)+parseInt(total3.textContent))
    finaltotal.textContent="$ "+(parseInt(total.textContent)+parseInt(total2.textContent)+parseInt(total3.textContent))
}
function quantity2(){
    if(quantityproduct2.value<0) return;

    total2.textContent=quantityproduct2.value*rate2.textContent
    cartsub.textContent="$ "+(parseInt(total.textContent)+parseInt(total2.textContent)+parseInt(total3.textContent))
    finaltotal.textContent="$ "+(parseInt(total.textContent)+parseInt(total2.textContent)+parseInt(total3.textContent))

}
function quantity3(){
    if(quantityproduct2.value<0) return;
    
    total3.textContent=quantityproduct3.value*rate3.textContent
    cartsub.textContent="$ "+(parseInt(total.textContent)+parseInt(total2.textContent)+parseInt(total3.textContent))
    finaltotal.textContent="$ "+(parseInt(total.textContent)+parseInt(total2.textContent)+parseInt(total3.textContent))

}
console.log(total.textContent)
console.log(total2.textContent)
console.log(total3.textContent)