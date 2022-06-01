var Name = prompt('Введите ваше имя');
var currentYear = +prompt('Введите сегоднешний год');
var myYear = +prompt('Введите ваш год рождения');

console.log(Year(myYear, currentYear, Name));
function Year(a, b, c = '') {
    return c + ', Ваш возраст ' + (b - a) ;
}