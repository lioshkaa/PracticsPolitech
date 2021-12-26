class Vector {
  constructor(name) {
    this.name = name;
  }
  Read(nStrok, arr) {
    for (let i = 0; i < nStrok; i++) {
      arr[i] = Math.floor(Math.random() * 20 + 10);
    }
  }
  Print(nStrok, arr) {
    for (let i = 0; i < nStrok; i++) {
      document.write(arr[i] + " ");
    }
  }
  lengthVector(arr) {
  document.getElementById("box1").innerHTML= arr.flat().length;
  }
}
class twoDimensionalVector extends Vector {
  constructor(nStrok, nStolbec, arr, name) {
    super(name);
    this.nStrok = nStrok;
    this.nStolbec = nStolbec;
    this.arr = arr;
  }

  Read() {
    for (let i = 0; i < this.nStrok; i++) {
      this.arr[i] = [];
      for (let j = 0; j < this.nStolbec; j++) {
        this.arr[i][j] = Math.floor(Math.random() * 20 + 10);
      }
    }
  }
  Print() {
    for (let i = 0; i < this.nStrok; i++) {
      for (let j = 0; j < this.nStolbec; j++) {
        document.write(this.arr[i][j] + " ");
      }
      document.write("<br>");
    }
  }
  lengthVector() {
   document.getElementById("box1").innerHTML=this.arr.flat().length;
  }
}
class threeDimensionalVector extends Vector {
  constructor(sizeOne, sizeTwo, sizeThree, name) {
    super(name);
    this.sizeOne = sizeOne;
    this.sizeTwo = sizeTwo;
    this.sizeThree = sizeThree;
  }

  Read(arr) {
    for (let i = 0; i < this.sizeOne; i++) {
      arr[i] = [];
      for (let j = 0; j < this.sizeTwo; j++) {
        arr[i][j] = [];
        for (let c = 0; c < this.sizeThree; c++) {
          arr[i][j][c] = Math.floor(Math.random() * 20 + 10);
        }
      }
    }
  }
  Print(arr) {
    for (let i = 0; i < this.sizeOne; i++) {
      for (let j = 0; j < this.sizeTwo; j++) {
        for (let c = 0; c < this.sizeThree; c++) {
          document.write(arr[i][j][c] + "  ");
        }
        document.write("<br>");
      }
    }
  }
  lengthVector(arr) {
    var count = arr.flat(Infinity).length;
   document.getElementById("box1").innerHTML=count;
  }
}
const arr = [];
const checkMas = +prompt(
  "Одномерный вектор -1  Двумерный массив-2 или трехмерный массив-3"
);
switch (checkMas) {
  case 1: {
    const sizeOne = +prompt("Введи строки ");
    const Mas = new Vector("Одномерный вектор");
    Mas.Read(sizeOne, arr);
    Mas.Print(sizeOne, arr);
    Mas.lengthVector(arr);
    break;
  }
  case 2: {
    const sizeOne = +prompt("Введи строки ");
    const sizeTwo = +prompt("Введи столбцы");
    const mas = new twoDimensionalVector(
      sizeOne,
      sizeTwo,
      arr,
      "Двумерный массив"
    );
    mas.Read();
    mas.Print();
    mas.lengthVector();
    break;
  }
  case 3: {
    const sizeOne = +prompt("Введи 1 размер");
    const sizeTwo = +prompt("Введи 2 размер");
    const sizeThree = +prompt("Ввведи 3 размер");
    const mas = new threeDimensionalVector(
      sizeOne,
      sizeTwo,
      sizeThree,
      "Трехмерный  вектор"
    );
    mas.Read(arr);
    mas.Print(arr);
    mas.lengthVector(arr);
    break;
  }
  default:
    console.log("Не верно выбрал!!");
    break;
}
