let expenses =[

    {amount:100 , category:'Utilities'},

    {amount: 300 , category:'Entertainment'},

    {amount:60 ,category:'Groceries'},
]

let totalExpenses=expenses.reduce((acc, expense)=> acc+expense.amount , 0);

console.log("Total Expenses:",totalExpenses);