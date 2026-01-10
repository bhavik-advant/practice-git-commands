function sum(a, b) {
    return a + b;
}
function sum3(a, b, c) {
    return a + b + c;
}

console.log(sum(5, 3)); 
console.log(sum(20, 20)); 
console.log(sum(40, 10)); 
console.log(sum(5, 30)); 
console.log(sum3(5, 30, 15)); 

const output = document.getElementById('output');
output.innerHTML += `<p>Sum of 5 and 3 is: ${sum(22, 22)}</p>`;
output.innerHTML += `<p>Sum of 20 and 20 is: ${sum(20, 20)}</p>`;
output.innerHTML += `<p>Sum of 40 and 10 is: ${sum(40, 10)}</p>`;
output.innerHTML += `<p>Sum of 5 and 30 is: ${sum(5, 30)}</p>`;
output.innerHTML += `<p>Sum of 5, 30 and 15 is: ${sum3(5, 30, 15)}</p>`;