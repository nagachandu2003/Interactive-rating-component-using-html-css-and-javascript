let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let submitBtn = document.getElementById("submitBtn");
let dig = 0,prev = 0;
let rate = document.getElementById("rate");
let start = document.getElementById("starting");
let end = document.getElementById("ending");
one.addEventListener("click",function(){
    dig = 1;
    one.classList.add("activestate");
    two.classList.remove("activestate");
    three.classList.remove("activestate");
    four.classList.remove("activestate");
    five.classList.remove("activestate");
})
two.addEventListener("click",function(){
    dig = 2;
    one.classList.remove("activestate");
    two.classList.add("activestate");
    three.classList.remove("activestate");
    four.classList.remove("activestate");
    five.classList.remove("activestate");
})
three.addEventListener("click",function(){
    dig = 3;
    one.classList.remove("activestate");
    two.classList.remove("activestate");
    three.classList.add("activestate");
    four.classList.remove("activestate");
    five.classList.remove("activestate");

})
four.addEventListener("click",function(){
    dig = 4;
    one.classList.remove("activestate");
    two.classList.remove("activestate");
    three.classList.remove("activestate");
    four.classList.add("activestate");
    five.classList.remove("activestate");
})
five.addEventListener("click",function(){
    dig = 5;
    one.classList.remove("activestate");
    two.classList.remove("activestate");
    three.classList.remove("activestate");
    four.classList.remove("activestate");
    five.classList.add("activestate");
})
submitBtn.addEventListener("click",function(event){
    start.classList.add("dis");
    end.classList.remove("dis");
    rate.textContent = "You selected "+dig+" out of 5"; 
})