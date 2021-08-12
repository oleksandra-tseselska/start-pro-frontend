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

// Homework 4

var firstNumberColor =prompt('First color value?');
var secondNumberColor =prompt('Second color value?');
var thirdNumberColor =prompt('Third color value?');

function rgb(first, middle, last) {
  return 'rgb' + '(' + first + ',' + middle + ',' + last + ')';
};

rgb(firstNumberColor, secondNumberColor, thirdNumberColor, ',');

console.log('rgb(first, middle, last, separate)-->', rgb(firstNumberColor, secondNumberColor, thirdNumberColor) );


function words(numberOfProduct, productText) {

  if(numberOfProduct === 1) {
    productText =('товар');
} else if(numberOfProduct === 0) {
    productText =('товаров');
} else if(numberOfProduct === 22) {
    productText =('товара');
} else if(numberOfProduct <= 4) {
    productText =('товарa');
} else if(numberOfProduct > 4) {
    productText =('товаров');
} else if(numberOfProduct === undefined && productText === undefined) {
  numberOfProduct = 0;
  productText =('товаров');
};

  return numberOfProduct + ' ' + productText;
}


console.log('words(numberOfProduct, productText)-->', words(12) );
console.log('words(numberOfProduct, productText)-->', words(22) );
console.log('words(numberOfProduct, productText)-->', words() );
