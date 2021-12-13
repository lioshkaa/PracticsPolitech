/*Описать класс для работы с одномерным массивом вещественных чисел.
Обеспечить следующие возможности: нахождение суммы элементов
массива (перегрузка операции +). */
class Massiv {
  constructor(arr, n) {
    this.arr = arr;
    this.n = n;
  }
  Read() {
    for (let i = 0; i < this.n; i++) {
      this.arr[i] = Math.floor(Math.random() * 20 + 10);
    }
  }
  Write() {
    for (let i = 0; i < this.n; i++) {
      document.write(this.arr[i] + " ");
    }
    document.write("<br>");
  }
  UnaryOperation() {
    let sum = 0;
    for (let i = 0; i < this.n; i++) {
      sum += this.arr[i];
    }
    document.getElementById("box1").innerHTML = "Сумма " + sum;
  }
}
const n = prompt("Введите количество, для создания рандомного массива: ");
const arr = [];
const Mas = new Massiv(arr, n);
Mas.Read();
Mas.Write();
Mas.UnaryOperation();
