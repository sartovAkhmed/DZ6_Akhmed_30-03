/* ⁃ напишите функцию, куда может прилетать неограниченный список названия книг (используйте rest параметры). 
Функция должна выводить только те книги, в названиях которых есть буква «у» и отдельным списком уже все остальные книги . 
Использовать filter нельзя, напишите свою версию метода фильтр) */
const separatorBooks = (...books)=>{
    const booksU = [];
    const otherBooks = [];
    books.map(item => {
        if(item.toLowerCase().includes('у')){
            booksU.push(item)
        }else {
            otherBooks.push(item);
        }
    })
    console.log(booksU);
    console.log(otherBooks);
}
// separatorBooks('мелкий принц', 'тугадум', 'острые козырки', 'ходячие трупы', 'о моём перерождение в слизь');
/* ⁃ Реализуйте калькулятор. Будет два инпута для ввода двух чисел, будут кнопки +, -, /, * и =. 
При клике на + два числа складываются и так далее. Над стилями не заморачивайтесь, главное функционал. 
При попытке поделить на 0, внутри инпута выведите слово «ошибка» красным цветом */
const inputFirst = document.querySelector("#inputFirst");
const inputSecond = document.querySelector("#inputSecond");
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const multiplyButton = document.querySelector("#multiply");
const divideButton = document.querySelector("#divide");
const equalsButton = document.querySelector("#equals");
const resultWindow = document.querySelector("#result");
plus.onclick = ()=>{
    const num1 = parseFloat(inputFirst.value);
    const num2 = parseFloat(inputSecond.value);
    const result = num1 + num2;
    resultWindow.textContent = `Result: ${result}`;
};
// --------------
minus.onclick= ()=>{
    const num1 = parseFloat(inputFirst.value);
    const num2 = parseFloat(inputSecond.value);
    const result = num1 - num2;
    resultWindow.textContent = `Result: ${result}`;
};
// --------------
multiplyButton.onclick = ()=>{
    const num1 = parseFloat(inputFirst.value);
    const num2 = parseFloat(inputSecond.value);
    const result = num1 * num2;
    resultWindow.textContent = `Result: ${result}`;
};  
// --------------
divideButton.onclick = ()=>{
    const num1 = parseFloat(inputFirst.value);
    const num2 = parseFloat(inputSecond.value);
    if(num1 === 0 || num2 === 0){
        resultWindow.textContent = 'Error';
        console.error('Error');
    }else{
        const result = num1 / num2;
        resultWindow.textContent = `Result: ${result.toFixed(2)}`;
    }
};
// --------------
equalsButton.onclick = ()=>{
    const num1 = parseFloat(inputFirst.value);
    const num2 = parseFloat(inputSecond.value);
    resultWindow.textContent = `Result: ${num1}`;
    inputFirst.value = num1;
    inputSecond.value = num2;
};