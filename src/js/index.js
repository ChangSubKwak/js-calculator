// console.log("This is index.js file");

let totalView = '';
let totalData = 0;
// const numList = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
// const opList  = [ '+', '-', 'X', '/' ];

let test;

document.addEventListener("click", ({ target }) => { 
  const val = target.innerText;
	console.log(val);

	if (val === "AC") {
		totalView = '';
		totalData = 0;
		document.querySelector("#total").textContent = 0;
		return;
	}

  totalView += val;

  if (val === '=') {
    totalView = totalView.substr(0, totalView.length - 1);
    expression = totalView.split(/(\+|-|X|\/)/);
    // expression = expression.substr(0, expression.length - 1);
    
    console.log(expression);
    if (expression[1] === '+') {
      totalView = Number(expression[0]) + Number(expression[2]);
    }
    if (expression[1] === '-') {
      totalView = Number(expression[0]) - Number(expression[2]);
    }
    if (expression[1] === 'X') {
      totalView = Number(expression[0]) * Number(expression[2]);
    }
    if (expression[1] === '/') {
      totalView = Math.floor(Number(expression[0]) / Number(expression[2]));
    }
  }
  document.querySelector("#total").textContent = totalView;
});