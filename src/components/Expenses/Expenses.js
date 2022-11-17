import React, {useState} from 'react';
import './Expenses.css';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList"

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const selectedYearHandler = (enterSavedYear) => {
        setFilteredYear(enterSavedYear);
    };

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });


    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onSelectedYear={selectedYearHandler}/>
            <ExpensesList items={filteredExpenses}/>
        </Card>
    );
};


export default Expenses;
