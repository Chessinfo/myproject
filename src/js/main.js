// function getValues() {
//     var results = [];
//     var i = 0;

//     do {
//         results[i++] = +prompt('введите число');
//         var isProcess = confirm('продолжить ?');
//     } while (isProcess);

//     return results;
// }

// function calculator() {
//     do {
//         var numbers = getValues();
//         var res = numbers[0];
//         for (var i = 1; i < numbers.length; i++) {
//             res = res + numbers[i];
//         }

//         alert('Итого' + res);

//         var isProcess = confirm('Продолжить');


//     } while (isProcess);
// }
// // calculator();

// function triangle(lines, sign) {
//     var line = sign;

//     for (var i = 0; i < lines; i++) {
//         console.log(line);
//         line += sign;
//     }
// }
// // var rows = getValues();

// triangle(3, '+');
// triangle(5, '-');

// function triangleReverse(lines, sign) {
//     var strings = [];
//     var line;

//     for (var i = 0; i < lines; i++) {
//         line = '';
//     }
//     for (var j = 0; j < lines - i; j++) {
//         line += sign;
//     }
//     strings[i] = line;
//     console.log(strings[i]);
// }

// triangleReverse(5, '*')

var values = ['', ''];
var action = '';
var index = 0;
var inputEl = document.querySelector('.input_screen');
var numberContainer = document.querySelector('.numbers_btn');

function handleNumberClick(e) {
    var v = e.target.dataset.value;

    if (v) {

        values[index] += v;
        inputEl.value = values[0] + actions + values[1];
    }
}

numberContainer.addEventListener('click', handleNumberClick);
actionsComtainer.addEventListener('click', handleNumberClick);