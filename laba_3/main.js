/*Описать класс, представляющий четырехугольник. Разработать методы
для определения является ли четырехугольник параллелограммом. 
Включите в проект обработку исключений.
*/

class quadrangle {
  constructor(a, b, c, d) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
  }
  Tetragon() {
    let isTetragon = "можно";
    if (
      this.a >= this.b + this.c + this.d ||
      this.b >= this.a + this.c + this.d ||
      this.c >= this.a + this.b + this.d ||
      this.d >= this.a + this.c + this.b
    ) {
      isTetragon = "нельзя";
    }
    return isTetragon;
  }
  isPallelogram() {
    let isPr = "не является";
    if (this.a === this.c && this.b === this.d) {
      isPr = "является";
    }
    return isPr;
  }
}
try {
  const firstSide = +prompt("Введите первую сторону");
  const secondSide = +prompt("Введите вторую сторону");
  const thirdSide = +prompt("Введите третью сторону");
  const fourthSide = +prompt("Введите третью сторону");
  const quadr = new quadrangle(firstSide, secondSide, thirdSide, fourthSide);
  let isTetragon = quadr.Tetragon();
  if (isTetragon == "можно") {
    console.log("Построить четырехугольник " + isTetragon);
    let isPr = quadr.isPallelogram();
    console.log("Параллелограмм " + isPr);
  } else {
    console.log("Построить четырехугольник " + isTetragon);
  }
} catch (err) {
  console.log(err.message);
}
