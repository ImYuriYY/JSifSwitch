// TASK 1

// const a = 12
// a == 10 ? console.log('Верно') : console.log("Неверно")





// TASK 2
// const min = 30
// if(min <= 15){
//     console.log('Первая')
// } else if (min <= 30) {
//     console.log("Вторая")
// } else if (min <= 45) {
//     console.log('Третья')
// } else if (min <= 60) {
//     console.log("Четвертая")
// }





// TASK 3

// const lang = prompt('ru | en');
// let arr;

// if(lang === 'ru') {
//     arr = ['Массив дней недели']
//     console.log(arr)
// } else if(lang === 'en') {
//     arr = ['Array of week days']
//     console.log(arr)
// } else {
//     console.log('Шота не так')
// }


// switch (lang) {
//     case 'ru':
//         arr = ['Массив дней недели']
//         console.log(arr)
//         break
//     case 'en':
//         arr = ['Array of week days']
//         console.log(arr)
//         break
//     default:
//         console.log('Шота не так')
//         break
// }










// РАБОТА С IF-ELSE
// Если А равна НУЛЮ

// const a = 1
// if (a === 0) {
//     console.log('Верно')
// } else {
//     console.log('Неверно')
// }





// Если А БОЛЬШЕ НУЛЯ

// const a = 1
// if (a > 0) {
//     console.log('Верно')
// } else {
//     console.log('Неверно')
// }





// Если А МЕНЬШЕ НУЛЯ

// const a = 1
// if (a < 0) {
//     console.log('Верно')
// } else {
//     console.log('Неверно')
// }





// Если А БОЛЬШЕ ИЛИ РАВНА НУЛЮ

// const a = 1
// if (a >= 0) {
//     console.log('Верно')
// } else {
//     console.log('Неверно')
// }





// Если А МЕНЬШЕ ИЛИ РАВНА НУЛЮ

// const a = 1
// if (a <= 0) {
//     console.log('Верно')
// } else {
//     console.log('Неверно')
// }





// Если А НЕ РАВНА НУЛЮ

// const a = 1
// if (a !== 0) {
//     console.log('Верно')
// } else {
//     console.log('Неверно')
// }





// Если А РАВНА test

// const a = 'test'
// if (a === 'test') {
//     console.log('Верно')
// } else {
//     console.log('Неверно')
// }





// Если А РАВНА "1" по значению и по типу

// const a = 1
// if (a === "1") {
//     console.log('Верно')
// } else {
//     console.log('Неверно')
// }










// РАБОТА С && И ||
// Если А БОЛЬШЕ 0 И МЕНЬШЕ 5

// const a = 3
// if(a > 0 && a < 5){
//     console.log('Верно')
// } else {
//     console.log('Неверно')
// }





// Если А РАВНА 0 ИЛИ РАВНА 2

// const a = 1
// if (a === 0 && a === 2) {
//     a += 7
//     console.log(a)
// } else {
//     a /= 10
//     console.log(a)
// }





// Если А РАВНА ИЛИ МЕНЬШЕ 1 и В БОЛЬШЕ ИЛИ РАВНА 3

// const a = 1
// const b = 3
// if (a <= 1 || b >= 3) {
//     console.log(a + b)
// } else {
//     console.log(a - b)
// }





// Если А БОЛЬШЕ 2 И МЕНЬШЕ 11 ИЛИ В БОЛЬШЕ ИЛИ РАВНА 6 И МЕНЬШЕ 14

// const a = 1
// const b = 3
// if((a > 2 || a < 11) || (b >= 6 || b < 14)){
//     console.log('Верно')
// } else {
//     console.log('Неверно')
// }










// ЗАДАЧИ НА Switch-Case
// ЗИМА ВЕСНА ЛЕТО ОСЕНЬ

// const num = prompt('?')
// let result;

// switch(num) {
//     case 1:
//         result = 'Зима'
//         break
//     case 2:
//         result = 'Весна'
//         break
//     case 3:
//         result = 'Лето'
//         break
//     case 4:
//         result = 'Осень'
//         break
//     default:
//         result = 'Шота не так'
//         break
// }

// console.log(result)





// Переменная day

// const day = 10
// switch (day) {
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//     case 6:
//     case 7:
//     case 8:
//     case 9:
//     case 10:
//         console.log("Первая")
//         break
//     case 11:
//     case 12:
//     case 13:
//     case 14:
//     case 15:
//     case 16:
//     case 17:
//     case 18:
//     case 19:
//     case 20:
//         console.log("Вторая")
//         break
//     case 21:
//     case 22:
//     case 23:
//     case 24:
//     case 25:
//     case 26:
//     case 27:
//     case 28:
//     case 29:
//     case 30:
//     case 31:
//         console.log('Третья')
//         break
//     default:
//         console.log('Шота не так')
//         break
// }





// Переменная month
// const month = 9

// switch(month) {
//     case 1:
//         console.log('Январь')
//         break
//     case 2:
//         console.log('Февраль')
//         break
//     case 3:
//         console.log('Март')
//         break
//     case 4:
//         console.log('Апрель')
//         break
//     case 5:
//         console.log('Май')
//         break
//     case 6:
//         console.log('Июнь')
//         break
//     case 7:
//         console.log('Июль')
//         break
//     case 8:
//         console.log('Август')
//         break
//     case 9:
//         console.log('Сентябрь')
//         break
//     case 10:
//         console.log('Октябрь')
//         break
//     case 11:
//         console.log('Ноябрь')
//         break
//     case 12:
//         console.log('Декабрь')
//         break
//     default:
//         console.log('Шота не так')
//         break
// }





// adcde

// const str = 'adcde'

// switch(str[0]){
//     case 'a':
//         console.log('Да')
//         break
//     default:
//         console.log('Нет')
//         break
// }





// str 12345

// const str = '12345'

// switch(str[0]) {
//     case '1':
//     case '2':
//     case '3':
//         console.log("Да")
//         break
//     default:
//         console.log('Нет')
//         break
// }





// Строка из 3х цифр

// const str = '555'

// result = str[0] + str[1] + str[2]
// console.log(result)





// Строка из 6ти цифр

// const str = '666666'

// switch(str[0] + str[1] + str[2]) {
//     case (str[3] + str[4] + str[5]):
//         console.log("Да")
//         break
//     default:
//         console.log('Нет')
//         break
// }
