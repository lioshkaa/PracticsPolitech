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
    document.write("<br>");
  }
  lengthVector(arr) {
    return arr.flat().length;
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
   return this.arr.flat().length;
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
    let count = arr.flat(Infinity).length;
    return count;
  }
}
const arr = [];
    const sizeOne = +prompt("Введи строки ");
    const Mas = new Vector("Одномерный вектор");
    Mas.Read(sizeOne, arr);
    Mas.Print(sizeOne, arr);
    Mas.lengthVector(arr);
    document.write("Второй одномерный массив <br>")
    const sizeTwo = +prompt("Введи строки для второго массива ");
    const Mas2 = new Vector("Одномерный вектор");
    Mas2.Read(sizeTwo, arr);
    Mas2.Print(sizeTwo, arr);
    Mas2.lengthVector(arr);
    document.write("<br>");
    const mas = new twoDimensionalVector(
      sizeOne,
      sizeTwo,
      arr,
      "Двумерный массив"
    );
    mas.Read();
    mas.Print();
    mas.lengthVector(arr);
    document.write("<br>")
    document.write("Второй двумерный массив <br>")
    const mas2 = new twoDimensionalVector(
      4,
      5,
      arr,
      "Двумерный массив"
    );
    mas2.Read();
    mas2.Print();
    mas2.lengthVector();
    document.write("<br>");
    const sizeThree = +prompt("Ввведи");
    const mas3 = new threeDimensionalVector(
      sizeOne,
      sizeTwo,
      sizeThree,
      "Трехмерный  вектор"
    );
    mas3.Read(arr);
    mas3.Print(arr);
    mas3.lengthVector(arr);
let sum=Mas.lengthVector(arr)+Mas2.lengthVector(arr)+mas.lengthVector()+mas2.lengthVector()+mas3.lengthVector(arr);
console.log("Сумма длин векторов "+ sum);
