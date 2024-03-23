var num1 = prompt("Введіть перше число", "0");
var num2 = prompt("Введіть друге число", "0");
var num3 = prompt("Введіть третє число", "0");

num1 = parseInt(num1);
num2 = parseInt(num2);
num3 = parseInt(num3);

if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
  var average = (num1 + num2 + num3) / 3;
  document.write("Середнє арифметичне: " + average);
} else {
  document.write("Одне або декілька введених значень не є числом.");
}