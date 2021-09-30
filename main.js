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
    savings: true,
    chooseExpenses:function() {
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
    },
    detectDayBudget: function() {
        obj.moneyPerDay = (obj.budget / 30).toFixed();
        alert("Budget per one day " + obj.moneyPerDay);
    },
    detectLevel: function() {
        if (obj.moneyPerDay < 100) {
            console.log("Minimal lvl of grid"); 
        } else if(obj.moneyPerDay > 100 && obj.moneyPerDay < 2000) {
            console.log("Middle lvl of grid");
        } else if (obj.moneyPerDay > 2000) {
            console.log("High lvl of grid");
        } else {
            console.log(Error);
        }
    },
    checkSavings: function() {
        if (obj.savings == true) {
            let save = +prompt('Which sum of saving?'),
                percent = +prompt('Which percent?');
    
                obj.monthIncome = save / 100 / 12 * percent;
                alert('Income per month from your deposit: ' + obj.monthIncome);
        }
    },
    chooseOptExpenses: function() {
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
    },
    chooseIncome: function() {
        for (let i = 0; i < 1; i++) {
            let items = prompt('Что принесет доп. доход? (перечисли через запятую)', '');
            if (typeof(items) === 'string' && items !== '' && items !== null){
                obj.income = items.split(',');
                obj.income.push(prompt("Может что-то еще?"));
                obj.income.sort();
           } else {
                alert("Please, type correct info");
                i--;
           }
        }    
        
        this.income.forEach(function(item, i) {
            alert(++i + ': '+ "Способы доп. заработка: " + item);
        });
    }
};

for (const key in obj) {
    console.log("Наша программа включает в себя данные: " + key);
}

/*1)Написать проверку, что пользователь может:+++++

·        Ввести в дополнительных доходах (chooseIncome) только строку

·        Не может оставить строку пустой

·        Не может отменить вопрос
2) При помощи метода перебора массива(forEach) вывести на экран сообщение "Способы доп. заработка: " и полученные способы (внутри chooseIncome)++++

·        Товары должны начинаться с 1, а не с 0. Выполняем этот пункт в chooseIncome.

3) Используя цикл for in для объекта (appData) вывести в консоль сообщение "Наша программа включает в себя данные: " (вывести весь appData)+++

4) Проверить, чтобы все работало и не было ошибок в консоли

5) Добавить папку с уроком на свой GitHub
*/



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
