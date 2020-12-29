var user_age = +prompt('Введите свой возраст в цифрах')

if (user_age <= 18 && user_age > 0){
    alert('Вы еще молоды вам нужно учиться!')
} else if (user_age > 18 && user_age <= 50) {
    alert ('Вам нужно работать')
} else if (user_age > 50 && user_age <= 59) {
    alert('Вам скоро на пенсию')
} else if (user_age > 59 && user_age <= 150){
    alert ('Вы пенсионер')
} /* Проверка на NaN */else if (isNaN(user_age)){
    alert('Вы ввели не число')
} /* Проверка на действительность возраста */else if (user_age < 0 || user_age > 150){
    alert('Вам не может быть столько лет')
}
else{
    alert('Вы ввели 0 (ВВЕДИТЕ СВОЙ ВОЗРАСТ)')
}
