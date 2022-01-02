class Massiv {
  constructor(arr, n, m) {
    this.arr = arr;
    this.n = n;
    this.m = m;
  }
  Read() {
    for (let i = 0; i < this.n; i++) {
      this.arr[i] = [];
      for (let j = 0; j < this.m; j++) {
        this.arr[i][j] = Math.floor(Math.random() * 20 + 10);
      }
    }
  }
  Write() {
    for (let i = 0; i < this.n; i++) {
      for (let j = 0; j < this.m; j++) {
        document.write(this.arr[i][j] + " ");
      }
      document.write("<br>");
    }
  }
  Logika(nStrok, nStolbec) {
    for (let i = 0; i < nStrok; i++) {
      for (let j = 0; j < nStolbec; j++) {
        let temp = parseInt(this.arr[i][j]);
        let b = 0;
        while (temp != 0) {
          b = parseInt(b * 10 + (temp % 10));
          temp = parseInt(temp / 10);
        }
        if (parseInt(this.arr[i][j]) === b)
          console.log(
            "Элемент массива [" + i + "," + j + "] Палиндром",
            this.arr[i][j]
          );
        else
          console.log(
            "Элемент массива [" + i + "," + j + "] Не палиндром",
            this.arr[i][j]
          );
      }
    }
  }
  Search(indexArrayLine, indexArrayColumn) {
    for (let i = 0; i < this.n; i++) {
      for (let j = 0; j < this.m; j++) {
        if (indexArrayLine === i && indexArrayColumn === j) {
          console.log(
            "Индекс массива введенный пользователем:[" +
              i +
              "," +
              j +
              "] = " +
              this.arr[i][j]
          );
        }
      }
    }
  }

  goingAbroad(arr, row, col) {
    if (col > arr[row].length) {
        return "Выход"      
    }
     return "Нет выхода";
  }
}
try{
  const arr = [];
  const n = +prompt("Введите количество строка"),
    m = +prompt("Введите количество столбцов"),
    indexArrayLine = +prompt("Индекс строки массива"),
    indexArrayColumn = +prompt("Индекс столбца массива");
  const qw = new Massiv(arr, n, m);
  qw.Read();
  qw.Write();
  qw.Logika(n, m);
  qw.Search(indexArrayLine, indexArrayColumn);
  console.log("Определяем выход за границы массива");

  for (let i = 0; i < 3; i++) {
    for(let j=0;j<3;j++){
    console.log(qw.goingAbroad(arr, j, i));
  }
  }
}
catch(e){
  console.log("Выход за границы")
}
  


