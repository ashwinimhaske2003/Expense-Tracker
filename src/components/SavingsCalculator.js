import React from 'react';
import './SavingsCalculator.css';

const SavingsCalculator = ({ monthlyData }) => {
  const calculateTotalSavings = () => {
    return monthlyData.reduce((acc, curr) => {
      const totalSalary = parseFloat(curr.totalSalary);
      const totalExpenses = curr.expenses.reduce((sum, expense) => sum + parseFloat(expense.amount), 0);
      return acc + (totalSalary - totalExpenses);
    }, 0);
  };

  return (
    <div className="container">
      <h2>Savings</h2>
      <table>
        <thead>
          <tr>
            <th>Month</th>
            <th>Total Salary</th>
            <th>Expenses</th>
            <th>Description</th>
            <th>Savings</th>
          </tr>
        </thead>
        <tbody>
          {monthlyData.map((monthData, index) => (
            <tr key={index}>
              <td>{monthData.selectedMonth}</td>
              <td>{monthData.totalSalary}</td>
              <td>{monthData.expenses.map(expense => expense.amount).join(', ')}</td>
              <td>{monthData.expenses.map(expense => expense.reason).join(', ')}</td>
              <td>
                {parseFloat(monthData.totalSalary) - monthData.expenses.reduce((sum, expense) => sum + parseFloat(expense.amount), 0)}
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan="4">Total Savings:</td>
            <td>{calculateTotalSavings()}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SavingsCalculator;
