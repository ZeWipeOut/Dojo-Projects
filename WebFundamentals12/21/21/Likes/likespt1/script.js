var count1=3;
var countElement = document.querySelector("#count1");

console.log(countElement);

function add1() {
    count1++;
    countElement.innerText = count1 + " like(s)";
}