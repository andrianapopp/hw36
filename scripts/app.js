const first = 0;
const second = 0;
let calculator = {
  read() {
    if (firstNumber === Number && secondNumber === Number) {
      this.firstNum = firstNumber;
      this.secondNum = secondNumber;
    }

    const firstNumber = prompt("First number");
    const secondNumber = prompt("Second number");
  },
  firstNum: first,
  secondNum: second,
  sum() {
    return this.firstNum + this.secondNum;
  },
  mul() {
    return this.firstNum * this.secondNum;
  },
};
calculator.read();
alert(calculator.sum());
alert(calculator.mul());
