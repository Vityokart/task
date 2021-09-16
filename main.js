let money, time;
function start(){
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц?");
    }
}
start();

let obj = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses : {},
    income: [],
    savings: true
};

function chooseExpenses () {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце") ,
            b = prompt("Во сколько обойдется?");
        if ((typeof(a)) === 'string' && typeof(a) != null && typeof(b) != null
        && a != '' && b != '' && a.length < 50) {
            console.log('done!');
            obj.expenses[a] = b;
        } else {
            alert("Please, type correct info");
            i--;
        }   
    }
}

chooseExpenses();

function detectDayBudget () {
    obj.moneyPerDay = (obj.budget / 30).toFixed();
    alert("Budget per one day " + obj.moneyPerDay);
}

detectDayBudget();

function chooseOptExpenses() {
    for (let i = 0; i < 3; i++) {
        let a = prompt('Введите статью необезательных разходов');
        let b = prompt('Во сколько обойдется?');
        if ((typeof(a)) === 'string' && typeof(a) != null && typeof(b) != null
        && a != '' && b != '' && a.length < 50) {
            console.log('great');
            obj.optionalExpenses[a] = b;
        } else {
            alert("Please, type correct info");
            i--;
        }
        
    }
}
chooseOptExpenses();

function detectLevel() {
    if (obj.moneyPerDay < 100) {
        console.log("Minimal lvl of grid"); 
    } else if(obj.moneyPerDay > 100 && obj.moneyPerDay < 2000) {
        console.log("Middle lvl of grid");
    } else if (obj.moneyPerDay > 2000) {
        console.log("High lvl of grid");
    } else {
        console.log(Error);
    }
}
detectLevel();


function checkSavings() {
    if (obj.savings == true) {
        let save = +prompt('Which sum of saving?'),
            percent = +prompt('Which percent?');

            obj.monthIncome = save / 100 / 12 * percent;
            alert('Income per month from your deposit: ' + obj.monthIncome);
    }
}
checkSavings();

/*
let i = 0;
while (i < 2) {
    i++;
    let a = prompt("Введите обязательную статью расходов в этом месяце", '') ,
        b = prompt("Во сколько обойдется?", '');
    if ((typeof(a)) === 'string' && typeof(a) != null && typeof(b) != null
    && a != '' && b != '' && a.length < 50) {
        console.log('done!');
        obj.expenses[a] = b;
    } else {
        alert("Please, type correct info");
        i--;
    }   
}
*/

/*
let i = 0;
do {
    
        i++;
        let a = prompt("Введите обязательную статью расходов в этом месяце", '') ,
            b = prompt("Во сколько обойдется?", '');
        if ((typeof(a)) === 'string' && typeof(a) != null && typeof(b) != null
        && a != '' && b != '' && a.length < 50) {
            console.log('done!');
            obj.expenses[a] = b;
        } else {
            alert("Please, type correct info");
            i--;
        }   
    
} while (i < 2);
*/
