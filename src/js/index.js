let totalView = '';
let totalData = 0;

document.addEventListener("click", ({ target }) => {
  // 계산기 버튼 이외 다른 곳 클릭 이벤트 버리기
  if (!["digit", "modifier", "operation"].includes(target.className)) {
    return;
  }

  const val = target.innerText;
  if (val === "AC") {
    totalView = '';
    totalData = 0;
    document.querySelector("#total").textContent = 0;
    return;
  }

  totalView += val;
  expression = totalView.split(/(\+|-|X|\/)|=/);

  if (val === '=') {
    totalView = totalView.substr(0, totalView.length - 1);
    // expression = totalView.split(/(\+|-|X|\/)/);
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
  
  document.querySelector("#total").innerText = totalView;

  if (expression.length >= 1) {
    const re = /^\d*$/;

    expression.forEach(element => {
      if (re.test(element) && element.length >= 4) {
        window.alert("숫자 자리수가 3을 넘었어요."); 
        totalView = totalView.substr(0, totalView.length - 1);
        document.querySelector("#total").textContent = totalView;
      }
    });
  }
});