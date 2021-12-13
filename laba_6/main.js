/*Базовый класс: Студент (поле: имя, средний балл s)
Метод: Стипендия 300000+10000([s]-5) -? не понял что тут
Потомок: Магистр (поле – специальность)
Изменения в потомках: Увеличить стипендию на m руб. */
class Student {
  constructor(name, raiting) {
    this.name = name;
    this.raiting = raiting;
  }
  get Name() {
    return this.name;
  }
  set Name(value) {
    this.name = value;
  }
  get Raiting() {
    return this.raiting;
  }
  set Raiting(value) {
    this.raiting = value;
  }
  Crand(stip) {
    return parseInt(stip);
  }
}
class Magistr extends Student {
  constructor(specialty, name, raiting) {
    super(name, raiting);
    this.specialty = specialty;
  }
  get Specialty() {
    return this.specialty;
  }
  set Specialty(value) {
    this.specialty = value;
  }
  Grand(stip, m) {
    let upStip = stip + m;
    return parseInt(upStip);
  }
}
ob = new Magistr("Программист", "Хирный", 8);
console.log(ob.Specialty + " " + ob.Name + " " + ob.Raiting);
console.log(`${ob.Name} ваша стипендия составляет = ${ob.Raiting}`);
console.log("Введите для повышения вашей стипендии: ");
const number = parseInt(prompt());
if (ob.Raiting >= 10 || ob.Grand(ob.Raiting, number) >= 10) {
  console.log("У вас высокая стипендия");
} else {
  console.log(
    "Увеличение стипендии на  балл(а), стипендия составляет:= " +
      ob.Crand(ob.Grand(ob.Raiting, number))
  );
}