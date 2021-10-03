const startBtn = document.querySelector('#start');

let budgetValue = document.querySelector('.budget-value'),
    dayBudget = document.querySelector('.daybudget-value'),
    level = document.querySelector('.level-value'),
    expenses = document.querySelector('.expenses-value'),
    optionalExpenses = document.querySelector('.optionalexpenses-value'),
    incomeValue = document.querySelector('.income-value'),
    monthSavings = document.querySelector('.monthsavings-value'),
    yearSavings = document.querySelector('.yearsavings-value'),
    chooseIncome = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('#sum'),
    percentValue = document.querySelector('#percent'),
    year = document.querySelector('.year-value'),
    month = document.querySelector('.month-value'),
    day = document.querySelector('.day-value');

let expensesItems = document.querySelectorAll('.expenses-item'),
    optionalExpensesItems = document.querySelectorAll('.optionalexpenses-item');

let expensesBtn = document.querySelector('.expenses-item-btn'),
    optionalExpensesBtn = document.querySelector('.optionalexpenses-btn'),
    countBudgetBtn = document.querySelector('.count-budget-btn');

    let money, time;

    startBtn.addEventListener('click', function() {
        time = prompt("Введите дату в формате YYYY-MM-DD");
        money = +prompt("Ваш бюджет на месяц?");

        while (isNaN(money) || money == '' || money == null) {
            money = +prompt("Ваш бюджет на месяц?");
        }
        obj.budget = money;
        obj.timeData = time;
        budgetValue.textContent = money.toFixed();
        year.value = new Date(Date.parse(time)).getFullYear();
        month.value = new Date(Date.parse(time)).getMonth() +1;
        day.value = new Date(Date.parse(time)).getDate();
        expensesBtn.removeAttribute("disabled");
        optionalExpensesBtn.removeAttribute("disabled");
        countBudgetBtn.removeAttribute("disabled");
    });

    expensesBtn.addEventListener('click', function(){
        let sum = 0;

        for (let i = 0; i < expensesItems.length; i++) {
            let a = expensesItems[i].value,
                b = expensesItems[++i].value;
            if ((typeof(a)) === 'string' && typeof(a) != null && typeof(b) != null
            && a != '' && b != '' && a.length < 50) {
                obj.expenses[a] = b;
                sum += +b;
            } else {
                alert("Please, type correct info");
                i--;
            }   
        }
        expenses.textContent = sum;
    });

    optionalExpensesBtn.addEventListener('click', function() {
        for (let i = 0; i < optionalExpensesItems.length; i++) {
            let a = optionalExpensesItems[i].value;
            obj.optionalExpenses[i] = a;
            optionalExpenses.textContent += obj.optionalExpenses[i] + ' '; 
        }
    });

    countBudgetBtn.addEventListener('click', function(){
        if (obj.budget != undefined) {     
            obj.moneyPerDay = ((obj.budget - (+expenses.textContent)) / 30).toFixed();
            dayBudget.textContent = obj.moneyPerDay;

            if (obj.moneyPerDay < 100) {
                level.textContent = "Minimal lvl of grid"; 
            } else if(obj.moneyPerDay > 100 && obj.moneyPerDay < 2000) {
                level.textContent = "Middle lvl of grid";
            } else if (obj.moneyPerDay > 2000) {
                level.textContent = "High lvl of grid";
            } else {
                level.textContent = 'Error';
            }
        } else {
            dayBudget.textContent = 'Error';
        }
    });

    chooseIncome.addEventListener('input', function(){
        let items = chooseIncome.value;
        obj.income = items.split(', ');
        incomeValue.textContent = obj.income;
    });

    checkSavings.addEventListener('click', function() {
        if (obj.savings == true) {
            obj.savings = false;
        } else {
            obj.savings = true;
        }
    });

    sumValue.addEventListener('input', function() {
        if (obj.savings == true) {
            let sum = +sumValue.value,
                percent = +percentValue.value;

                obj.monthIncome = sum / 100 / 12 * percent;
                obj.yearIncome = sum / 100 * percent;

                monthSavings.textContent = obj.monthIncome.toFixed(1);
                yearSavings.textContent = obj.yearIncome.toFixed(1);
        }
    });

    percent.addEventListener('input', function() {
        if (obj.savings == true) {
            let sum = +sumValue.value,
                percent = +percentValue.value;

                obj.monthIncome = sum / 100 / 12 * percent;
                obj.yearIncome = sum / 100 * percent;

                monthSavings.textContent = obj.monthIncome.toFixed(1);
                yearSavings.textContent = obj.yearIncome.toFixed(1);
        }
    });

    let obj = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses : {},
        income: [],
        savings: false
    };
