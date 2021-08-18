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

// Homework 6

var letters = ['a', 'b', 'c'];
letters.push(1, 2, 3);


var numbersArrayFlipped = [1, 2, 3];
numbersArrayFlipped[0] = 3;
numbersArrayFlipped[2] = 1;


var numbersArraySecond = [1, 2, 3];
var numbersArrayThird = [4, 5, 6];
var arrNumbers = [...numbersArrayThird, ...numbersArraySecond];


var programmingLanguages = ['js', 'css', 'jq'];
document.write(programmingLanguages[0]);


var numbersArrayFourth = [1, 2, 3, 4, 5];
var numbersArrayFifth = numbersArrayFourth.slice(0, 3);


var fromPairs = (array) => { return `{'${array[0][0]}': ${array[0][1]}, '${array[1][0]}': ${array[1][1]}}`};
const data = [['a', 1], ['b', 2]];
console.log('fromPairs(data)-->', fromPairs(data));