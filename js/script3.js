var user_num1 = +prompt('Введите первое число')
var user_num2 = +prompt('Введите второе число')
var user_num3 = +prompt('Введите третье число')



 if (isNaN(user_num1) && isNaN(user_num2)){
    alert('Первое и второе не число')
} else if (isNaN(user_num1) && isNaN(user_num3)) {
    alert('Первое и третье не число')
} else if (isNaN(user_num3) && isNaN(user_num2)){
    alert('Третье и второе не число')
} else if (isNaN(user_num1)) {
    alert('Введите правильно первое число')
} else if (isNaN(user_num2)){
    alert('Введите правильно второе число')
} else if (isNaN(user_num3)){
    alert('Введите правильно третье число')
} else if (user_num1 > user_num3 && user_num1 < user_num2 ){
    alert('Ваше среднее число ' + user_num1)
} else if (user_num2 < user_num1 && user_num2 > user_num3){
    alert('Ваше среднее число ' + user_num2)
} else if (user_num3 < user_num1 && user_num3> user_num2){
    alert('Ваше среднее число ' + user_num3)
} else if (user_num1 == user_num2 || user_num2 == user_num3 || user_num3 == user_num1){
    alert('Ваши числа не должны быть равными')
} else {
    alert('Вы ошиблись!')
}
