// First homework

var radiusCylinder = 20;
var heightCylinder = 100;
var volumeCylinder = Math.PI * Math.pow(radiusCylinder, 2) * heightCylinder;

console.log('volumeCylinder --->', volumeCylinder);

// First part of homework 2

var aNumber = +prompt('Set number a');
var bNumber = +prompt('Set number b');

console.log('aNumber-->', aNumber);
console.log('bNumber-->', bNumber);

if(aNumber > bNumber) {
  alert('number a bigger than number b')
} else if(bNumber > aNumber) {
  alert('number b bigger than number a')
};


// Second part of homework 2

var routeKilometers = +prompt('Задайте расстояние в километрах');
var routePounds = +prompt('Задайте расстояние в футах');
var poundsVersusKilometers = 0.000305;
var poundsConvertKilometers = +( routePounds * poundsVersusKilometers );

console.log('routeKilometers-->', routeKilometers);
console.log('routePounds-->', routePounds);
console.log('poundsConvertKilometers-->', poundsConvertKilometers);

if(routeKilometers > poundsConvertKilometers) {
  alert('Расстояние в километрах больше, чем расстояние в футах')
} else if(routeKilometers < poundsConvertKilometers) {
  alert('Расстояние в футах больше, чем расстояние в километрах')
};

// Homework 5

var multiplicand = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var multiplyFactor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (var i = 0; i < multiplicand.length; i++) {
    if(i > 0) {
      console.log('--/--/--/--/--/');
    }
  for (var j = 0; j < multiplyFactor.length; j++) {
    console.log(`"${multiplicand[i]} * ${multiplyFactor[j]}=" ${multiplicand[i] * multiplyFactor[j]}`);
  }
}