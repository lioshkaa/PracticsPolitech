/* Напишите программу, которая вычисляет сумму цифр натурального
числа, если число - четное, и остаток от деления на 10, если нечетное.*/
const sumNumber = (number) => {
  let sum = 0;
  if (number % 2 === 0) {
    while (number != 0) {
      sum = parseInt(sum + (number % 10));
      number = number / 10;
    }
    alert(parseInt(sum));
  } else {
    number %= 10;
    alert(number);
  }
};
const number = prompt("Введите число");
sumNumber(number);
