var user_time = +prompt('Введите кол-во часов в вашем времени В ЦИФРАХ (0-24)')

if (user_time == 0 || user_time == 24){
    alert('У вас 12 ночи')
} else if (user_time == 1){
    alert('У вас 1 ночи')
} else if (user_time == 2){
    alert('У вас 2 ночи')
} else if (user_time == 3){
    alert('У вас 3 ночи')
} else if (user_time == 4){
    alert('У вас 4 утра')
} else if (user_time == 5){
    alert('У вас 5 утра')
} else if (user_time == 6){
    alert('У вас 6 утра')
} else if (user_time == 7){
    alert('У вас 7 утра')
} else if (user_time == 8){
    alert('У вас 8 утра')
} else if (user_time == 9){
    alert('У вас 9 утра')
} else if (user_time == 10){
    alert('У вас 10 утра')
} else if (user_time == 11){
    alert('У вас 11 утра')
} else if (user_time == 12){
    alert('У вас 12 часов (полдень)')
} else if (user_time == 13){
    alert('У вас 1 час дня')
} else if (user_time == 14){
    alert('У вас 2 часа дня')
} else if (user_time == 15){
    alert('У вас 3 часа дня')
} else if (user_time == 16){
    alert('У вас 4 часа дня')
} else if (user_time == 17){
    alert('У вас 5 часов вечера')
} else if (user_time == 18){
    alert('У вас 6 часов вечера')
} else if (user_time == 19){
    alert('У вас 7 часов вечера')
} else if (user_time == 20){
    alert('У вас 8 часов вечера')
} else if (user_time == 21){
    alert('У вас 9 часов вечера')
} else if (user_time == 22){
    alert('У вас 10 часов вечера')
} else if (user_time == 23){
    alert('У вас 11 часов вечера')
}/* Проверка на NaN*/ else if(isNaN(user_time)){
    alert('Это не число, введите числовое значение')
} /* Проверка времени */ else if(user_time > 24 || user_time < 0){
    alert('В сутках всего 24 часа, ПРОЧТИ УСЛОВИЕ,ИДИОТ')
}
 else {
    alert('Что то пошло не так!')
}