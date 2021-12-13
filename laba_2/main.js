/*По введенному символу и значению аргумента выведите значение од-
ной из функций sin(x), cos(x), tg(x), ctg(x) и соответствующий коммен-
тарий. */

alert("Символы sin-s  cos- c  tg-t  ctg-ct");
const symbol = prompt("Введите соответвующий символ");
const number = +prompt("Введите число для посчета");
switch (symbol) {
  case "s": {
    alert("Ответ sin(" + number + ") = " + Math.sin(number * (Math.PI / 180)));
    break;
  }
  case "c": {
    alert("Ответ cos(" + number + ") = " + Math.cos(number * (Math.PI / 180)));
    break;
  }

  case "t": {
    alert("Ответ tg(" + number + ") = " + Math.tan(number * (Math.PI / 180)));
    break;
  }

  case "ct": {
    alert(
      "Ответ ctg(" + number + ") = " + 1 / Math.tan((number * Math.PI) / 180)
    );
    break;
  }
}
