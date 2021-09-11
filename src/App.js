import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/navbar.component";
import FinanceManage from "./components/financeManage";
import ExpensesList from "./components/expenses-list.component";
import IncomeList from "./components/income-list.component";
import EditExpenses from "./components/edit-expenses.component";
import EditIncome from "./components/edit-income.component";
import CreateExpenses from "./components/create-expenses.component";
import CreateIncome from "./components/create-income.component";

import calcExpenses from "./Calculations/calcExpenses";




function App() {
  return (

    <Router>
      <div className="container">
      <Navbar />
      <br/>
         <Route path='/' exact component={FinanceManage} />
         <Route path="/edit-expenses.component/:id" component={EditExpenses} />
         <Route path="/edit-income.component/:id" component={EditIncome} />
         <Route path="/create-expenses.component" component={CreateExpenses} />
         <Route path="/create-income.component" component={CreateIncome} />
         <Route path="/expenses-list.component" component={ExpensesList} />
         <Route path="/income-list.component" component={IncomeList} />
         <Route path="/Calculations/calcExpenses" component={calcExpenses} />
       

      </div>
    </Router>
  );
}

export default App;
