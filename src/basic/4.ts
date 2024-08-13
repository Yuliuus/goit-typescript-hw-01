//Як ви вкажете типи для аргументів і значень цих функцій, що повертаються?

function showMessage(message: string) {
  console.log(message);
}
showMessage("hello");

function calc(num1: number, num2: number): number {
  return num1 + num2;
}
const result = calc(2, 7);
console.log(result);

function customError(): never {
  throw new Error("Error");
}
console.log(customError());



