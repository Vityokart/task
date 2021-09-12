let money = + prompt("Ваш бюджет на месяц?");
let time = + prompt("Введите дату в формате YYYY-MM-DD");

let obj = {
    budget: money,
    timeData: time,
    expenses: '',
    optionalExpenses : '',
    income: '',
    savings: false
};

let firstAnsw = prompt("Введите обязательную статью расходов в этом месяце");
let secondAnsw = +prompt("Во сколько обойдется?");

let expenses = {
    [firstAnsw]:secondAnsw
};

alert("Budget per one day" + ' ' + obj.budget / 30);

console.log(expenses);