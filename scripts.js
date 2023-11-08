"use strict";

let i;
let sum;

/** task 1 **/

// {   
//     for (i = 1; i <= 50; i++) {
//         console.log(i);
//     }
    
//     for (i = 35; i >= 8; i--) {
//         console.log(i);
//     }
// }

/** task 2 **/

// {
//     i = 89;

//     while (i >= 11) {
//         document.write(`${i} <br/>`);

//         i--;
//     }
// }

/** task 3 **/

{
    // sum = 0;

    // for (i = 0; i <= 100; i++) {
    //     sum = sum + i;
    //     console.log(sum);
    // }
}

/** task 4 **/

// {
//     sum = 0;

//     for (i = 1; i <= 5; i++) {
//         sum = sum + i;
//         console.log(i, sum);
//     }
// }

/** task 5 **/

{
    // for (i = 8; i <= 56; i++) {
    //     if (i % 2 === 0)
    //     console.log(i);
    // }


    // i = 8;

    // while (i <= 56) {
    //     if (i % 2 === 0)
    //     console.log(i);

    //     i++;
    // }
}

/** task 6 **/

{
    // let j;
    // let result;

    // for (i = 2; i <= 10; i++) {
    //     for (j = 1; j <= 10; j++) {
    //         result = i * j;
    //         console.log(`${i} * ${j} = `, result);
    //     }
    // }
}

/** task 7 **/

{
    // let n = 1000;
    // let num = 0;

    // for (let n = 1000; n >= 50; num++ ) {
    //     n = n / 2;
    //     console.log(n);
    // }
    // console.log(num,'всего количество итераций');
}


/** task 8 **/

{
    // let num;
    // let input;
    // sum = 0;
    // i = 0;

    // while (true) {

    //     num = +prompt('Введите любое число.');
    //     console.log(num, typeof num);

    //     if (num === '0' || num == '') {
    //     break;
    //     }

    //     if (isNaN(num)) {
    //         prompt('Ошибка ввода! Введите любое число.');
    //         continue;
    //     }

    //     i++;

    //     sum += num

    // }

    // let average = sum / i;
        
    // console.log(i, 'количество итераций');
    // console.log(sum, 'общая сумма введенных чисел');
    // console.log(average.toFixed(0), 'среднее арифметическое введенных чисел');
}

/** task 9 **/

{
    let stringSpace = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57';

    let max = stringSpace[0];
    let min = stringSpace[0];
    let st = '';

    for (let i = 1; i < stringSpace.length; i++) {
        if (stringSpace[i + 1] === ' ') {
            st = Number(stringSpace[i - 1] + stringSpace[i]);
            if (st > max) {max = st;}
            if (st < min) {min = st};
        }
    }
   
    document.write(`Исходная строка ${stringSpace},<br/> min = ${min}, max = ${max}`);
}


/** task 10 **/



