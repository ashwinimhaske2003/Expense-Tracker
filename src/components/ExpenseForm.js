import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = ({ onExpenseAdd }) => {
  const [selectedMonth, setSelectedMonth] = useState('');
  const [totalSalary, setTotalSalary] = useState('');
  const [expenses, setExpenses] = useState([]);

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const list = [...expenses];
    list[index][name] = value;
    setExpenses(list);
  };

  const handleAddExpense = () => {
    setExpenses([...expenses, { amount: '', reason: '' }]);
  };

  const handleRemoveExpense = (index) => {
    const list = [...expenses];
    list.splice(index, 1);
    setExpenses(list);
  };

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  const handleSubmit = () => {
    onExpenseAdd(selectedMonth, totalSalary, expenses);
    setSelectedMonth('');
    setTotalSalary('');
    setExpenses([]);
  };

  return (
    <div className="container">
      <h2>Expenses</h2>
      <div className="input-container">
        <h3>Select Month:</h3>
        <select value={selectedMonth} onChange={handleMonthChange}>
          <option value="">Select Month</option>
          <option value="January">January</option>
          <option value="February">February</option>
          <option value="March">March</option>
          <option value="April">April</option>
          <option value="May">May</option>
          <option value="June">June</option>
          <option value="July">July</option>
          <option value="August">August</option>
          <option value="September">September</option>
          <option value="October">October</option>
          <option value="November">November</option>
          <option value="December">December</option>
        </select>
      </div>
      {selectedMonth && (
        <>
          <div className="input-container">
            <h3>Total Salary:</h3>
            <input
              type="text"
              name="totalSalary"
              value={totalSalary}
              onChange={(e) => setTotalSalary(e.target.value)}
              placeholder="Total Salary"
            />
          </div>
          {expenses.map((expense, index) => (
            <div key={index} className="input-container">
             <h3>Expense Amount:</h3>
              <input
                type="text"
                name="amount"
                value={expense.amount}
                onChange={(e) => handleInputChange(index, e)}
                placeholder="Expense Amount"
              />
              <h3>Description:</h3>
              <input
                type="text"
                name="reason"
                value={expense.reason}
                onChange={(e) => handleInputChange(index, e)}
                placeholder="Reason"
              />
              <button onClick={() => handleRemoveExpense(index)}>Remove</button>
            </div>
          ))}
          <button onClick={handleAddExpense}>Add More</button>
          <button onClick={handleSubmit}>Done</button>
        </>
      )}
    </div>
  );
};

export default ExpenseForm;
