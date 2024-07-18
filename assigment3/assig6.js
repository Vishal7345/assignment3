let expenses=[
    {amount :200,category:'Utilities'},

    {amount:500,category:'Groceries'},

    {amount:30,category:'Entertainment'}
]

function categorizeExpense(expense){

    if(expense.amount>100){
        return 'High Expense';
    }else{
        return 'Low Expense';
    }
}

let categorizedExpenses=expenses.map((expense)=>
categorizeExpense(expense));
console.log('Categorized Expenses:' ,categorizedExpenses)