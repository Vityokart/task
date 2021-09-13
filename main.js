let money = +prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");

let obj = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses : {},
    income: [],
    savings: false
};

for (let i = 0; i < 2; i++) {
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
    console.log(i);
};



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
obj.moneyPerDay = obj.budget / 30;

alert("Budget per one day " + obj.moneyPerDay);

if (obj.moneyPerDay < 100) {
    console.log("Minimal lvl of grid"); 
} else if(obj.moneyPerDay > 100 && obj.moneyPerDay < 2000) {
    console.log("Middle lvl of grid");
} else if (obj.moneyPerDay > 2000) {
    console.log("High lvl of grid");
} else {
    console.log(Error);
}

console.log(expenses);