//- 1 ------------- Вікно, що випадає------------
// alert('Hello world from file1.js');
// alert('Вибачаюсь за подвійні, потрійні назви змін, дуже багато коментувати');

//- 2 ------------ Повідомлення у консоль браузера------
let messageOne; // оголошення зміни
messageOne = 'Hello world'; // присвоєння значення змінної

console.log(messageOne);

//- 3 ------------ Змінюємо значення змінної------
let messageTwo = 'Hello world'; // оголошуємо та відразу даємо значення змінної
console.log(messageTwo); // виводимо у консоль

messageTwo = 'Привіт світ'; //Зміна значення змінної message. Оскільки ми користуємось вже створеною зміною, ключове слово let не використовується.
//let message = "...";  // Створення змінної з ім'ям, яке раніше використовувалося, призведе до помилки.
console.log(messageTwo); // виводимо у консоль

let testMessage = 'Працює заміна значення змінної';
messageTwo = testMessage; // значення змінної testMessage присвоюється змінної message
console.log(messageTwo); // виводимо у консоль

//- 4 ------------ Приклад застосування змінних (  let vs const  )------
console.log("Обчислення об'єму циліндра."); // Заголовок у консоль
//  V=π * r у квадраті * h
let V; // змінна що вміщатиме значення об'єму
let Pi = 3.1415926535; // число Пі
let r = 10; // радіус циліндра
let h = 20; // висота циліндра

V = Pi * r * r * h;
console.log(V); // виводимо у консоль значення об'єму

//-----  let vs const   ----

console.log("Обчислення об'єму циліндра.");
//  V=π * r в квадрате * h
let V2;
const Pi2 = 3.1415926535; // зміна значення приведе до помилки
let r2 = 10;
let h2 = 20;

// Pi2 = 123; //! помилка, не можна міняти const

V = Pi2 * r2 * r2 * h2;
console.log(V2);

//- 5 ------------ Типи даних ------
//- 5.1 ---------- Number ----------
// number - тип даних для зберігання цілочислових значень та чисел з плавучою комою.
// диапазон number от -9,007,199,254,740,992‬ до 9,007,199,254,740,992
let xx = 100;
let yy = 20;

// арифметичні операції
let result;
result = xx + yy; // додавання
console.log(result);

console.log(xx - yy); // віднімання
console.log(xx * yy); // множення
console.log(xx / yy); // ділення
// залишок від ділення
console.log(xx % yy); // ділення
console.log(10 % 3); // ділення
console.log(10 % 6); // ділення
//зведення в ступінь
total = xx ** 2; // d у квадраті, total = 10000
alert(total);
total = yy ** 5; // c у 5-ий , total = 3200000
console.log(yy ** 5);

// Спеціальні значення типу number
// Infinity - нескінченність
console.log(xx / 0);

// NaN - Not a Number - операція, яка не може бути обчислена;
let value; // значення змінної не визначено
console.log(value + xx); // немає можливості виконати складання невизначеного значення та числового значення. Результат NaN
// Будь-яка операція, у якій використовується NaN, повертає результат NaN

//- 5.2 ---------- String ----------
// string - тип даних зберігання рядкових (текст) значень. Рядкові значення повинні бути взяті у лапки ' або " (одинарні чи подвійні)
let value1 = 'hello';
let value2 = 'world';

let value3 = value1 + ' ' + value2; // конкатенація - сцеплення рідків.
console.log(value3); // Результат "hello world"

let str1 = 'Hello world';
let str2 = 'Hello world';
let str3 = "object's internal prototype"; // использование одинарной кавычки в строке
let str4 = "object's internal prototype"; // экранирование символа '
let str5 = 'the message is "hello world"'; // экранирование символа "

console.log(str1);
console.log(str2);
console.log(str3);
console.log(str4);
console.log(str5);

//- 5.3 ---------- Boolean ----------

// boolean - логічний тип даних. Може приймати два значення – true (істина) або false (брехня).
//         true:  не пустий рядок (навіть якщо є пробіл це не вже не пустий рядок, а рядок з пробілом);
//        false: пустий рядок; цифра 0; змінна без значення;  NaN.

let a = true;
let b = false;

let valueTwo = 1;
let greater = valueTwo > 5;
console.log(greater); // брехня

//- 5.4 ---------- Null, Undefined, Bigint, Object, Symbol----------
// null – тип даних, який може містити тільки одне значення – null
// null - "нічого", "порожньо" - зазвичай вказує на те, що значення не відоме в даний момент
let width = null;
console.log(width);

// undefined - тип даних, який може містити лише одне значення - undefined
// undefined свідчить про те, що значення ще присвоєно.
let name; // Змінна створена, але значення їй не присвоєно. В даному випадку тип і значення змінної undefined
console.log(name);

// bigint – тип даних для зберігання значень, що виходять за діапазон number
// object - використовується для зберігання значень та функцій
// symbol – використовується для створення унікальних ідентифікаторів об'єктів

// - 6 ----- Typeof --------

let x; // тип undefined
x = 10; // тип number
x = 'test'; // тип string
x = 20; // тип number

// typeof - оператор, що повертає тип
let y;
console.log(typeof y);

y = 10;
console.log(typeof y);

y = 'test';
console.log(typeof y);

y = 20;
console.log(typeof y);

//- 7   ------ Перетворення значення одного типу в значення другого типу  ------------

//- 7.1 -----  Перетворення до числового типу  -----------------
console.log('10' / '2'); // автоматичне перетворення (рядок ділимо на рядок - буде 5 number)
console.log('10' + '2'); // виняток, при додаванні рядків - перетворення до number не відбудеться (результат - 102)

// -- + -- + -- + -- + -- +
let value100 = '100'; // оголошуємо тип string
console.log(typeof value100); // string

let newValue = Number(value100); // перетворюємо до типу number
console.log(typeof newValue); // тип number 100

// -- + -- + -- + -- + -- +
// при спробі перетворити до значення, яке не може бути числом, функція Number поверне NaN
let someText = 'hello';
let converted = Number(someText);
console.log(converted);

// -- + -- + -- + -- + -- +
// при спробі перетворити null, функція поверне 0
console.log(Number(null)); // 0

// -- + -- + -- + -- + -- +
// при перетворенні рядка, пробіли на початку та в кінці рядка видаляються
console.log(Number('   5   ') + 1); // буде 6

//- 7.2 -----  Перетворення до рядкового типу  -----------------
alert(100500); // alert автоматично перетворює будь-яке значення до рядка

// Перетворення до рядкового типу
let valueBoolean = true; // оголошуємо тип даних boolean
console.log(typeof valueBoolean); // boolean

// String - глобальний метод для створення рядків
let newValueStr = String(valueBoolean); // змінна типу boolean в тип string
console.log(typeof newValueStr);
console.log(newValueStr);

// альтернативний метод перетворення до рядкового типу .toString()
let testBoolean = true;
console.log(typeof testBoolean);

newTestBoolean = testBoolean.toString();
console.log(typeof newTestBoolean);

//- 7.3 -----  Перетворення до логічного типу  ----
let test = 'test';
console.log(typeof test); // string

let resultTest = Boolean(test);
console.log(typeof resultTest); // boolean
console.log(resultTest); // true

console.log(Boolean(null)); // false
console.log(Boolean('')); // false
console.log(Boolean(1)); // true

//- 8 ---------  Prompt -------------
// prompt - відображення модального вікна з текстом і полем введення тексту
let request = prompt('Ввести значення', 'Значення за замовчуванням');
console.log(`Ви ввели значення - ${request}`);

//- 9 ---------  Оператори порівняння -------------
let w = 10;
let t = 15;

let totalNew;

// результат порівняння має логічний тип - boolean
totalNew = w > t; // h більш ніж r - ні, брехня/false
console.log(totalNew);
totalNew = w < t; // h менше ніж r - так, істина/true
console.log(totalNew);
totalNew = w == t; // h дорівнює r - ні, брехня/false
console.log(totalNew);
totalNew = w != t; // h не дорівнює r - так, істина/true
console.log(totalNew);
totalNew = w <= t; // h менше або дорівнює r - так, істина/true
console.log(totalNew);
totalNew = w >= t; // h більш або дорівнює r - ні, брехня/false
console.log(totalNew);

let valueNumber = 10; // тип number
let valueString = '10'; // тип string

totalNew = valueNumber == valueString; // true, якщо значення різних типів, відбувається їх конвертація до одного типу, після чого виконується перевірка
console.log(totalNew);
totalNew = valueNumber === valueString; // false, оператор ідентичності, якщо значення різних типів, то вони не рівні, якщо значення одного типу – відбувається перевірка рівності
console.log(totalNew);

//-  10 ------- Клік по "div" у браузері ------

let div = document.querySelector('#triggerDiv');
div.addEventListener('click', function () {
    let answersDiv = document.getElementById('answers');
    answersDiv.style.display = 'block';
    div.style.display = 'none';
});
