let expenses =[

    {amount:100,category:'Utilities'},
    {amount:200,category:'Groceries'},
    {amount:50,category:'Entertainment'}
]
 let groceriesExpenses=expenses.filter(
    (expense)=> expense.category==='Groceries'
 )

 console.log('Groceries Expenses:' ,groceriesExpenses)