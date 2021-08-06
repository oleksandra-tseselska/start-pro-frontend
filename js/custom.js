var radiusCylinder = 20;
var heightCylinder = 100;
var volumeCylinder = Math.PI * Math.pow(radiusCylinder, 2) * heightCylinder;

console.log('volumeCylinder --->', volumeCylinder);

// Homework lesson 3
var userAge =prompt('Сколько лет?');
console.log('userAge-->', userAge);

var userAge = +userAge;

var userSmoke =confirm('Куришь?');
console.log('userSmoke-->', userSmoke);

if(userAge < 18 && userSmoke === false) {
  alert('Так держать!')
} else if(userAge < 18 && userSmoke === true) {
  alert('Маме раскажу')
} else if(userAge >= 18 && userSmoke === false) {
  alert('Молодец, и не надо')
}else if(userAge >= 18 && userSmoke === true) {
  alert('Ну и зря')
};