import React, { useState } from 'react';
import ExpenseForm from './components/ExpenseForm'; // Make sure to import ExpenseForm
import SavingsCalculator from './components/SavingsCalculator';
import './App.css';

const App = () => {
  const [monthlyData, setMonthlyData] = useState([]);

  const handleExpenseAdd = (selectedMonth, totalSalary, expenses) => {
    const newData = { selectedMonth, totalSalary, expenses };
    setMonthlyData([...monthlyData, newData]);
  };

  return (
    <div className="App">
      <div className="title-container">
        
      </div>
      <div className="left-section">
        {/* Pass handleExpenseAdd function as prop */}
        <ExpenseForm onExpenseAdd={handleExpenseAdd} />
      </div>
      <div className="right-section">
        {/* Pass monthlyData as prop */}
        <SavingsCalculator monthlyData={monthlyData} />
      </div>
    </div>
  );
};

export default App;
