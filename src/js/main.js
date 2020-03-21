function getValues () {
    var result = [];
    var i = 0;
  
    do {
        result[i] = +prompt('введите число');
        i++;
        var isProcess = comfirm('продолжить ?');

    } while(isProcess);

    return result;
}

do {
    // var numbers
    var num1 = +prompt ('введите первое число');
    var num2 = +prompt ('введите второе число');
    var result = num1 + num2;
    alert('Результат: ' + result);
    var isProcess = comfirm('продолжить');
} while(isProcess);