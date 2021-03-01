/*global */

let printChap1 = document.getElementById('chape1');
let output1 = "";

// Cheap 1;

for (let i = 0; i < 5; i++) {
  for (let j = 0; j <= i; j++) {
    output1 += "*";
  }
  output1 += '<br />'
}

for (let i = 3; i >= 0; i--) {
  for (let j = 0; j <= i; j++) {
    output1 += "*";
  }
  output1 += '<br />'
}

printChap1.innerHTML = output1;

//Cheap 2

for
