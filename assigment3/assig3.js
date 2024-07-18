const expenses = [
    { amount: 100, category: 'Utilities' },
    { amount: 200, category: 'Transport' },
    { amount: 50, category: 'Entertainment' }
  ];
  
  // Tax rate (10%)
  const taxRate = 0.10;
  
  // Using map to calculate tax for each expense
  const expensesWithTax = expenses.map(expense => {
    // Calculate tax amount
    const tax = expense.amount * taxRate;
    
    // Return new object with original properties and tax added
    return {...expense,tax:tax};

    
  });
  
console.log('Expenses with Tax:' ,expensesWithTax);

