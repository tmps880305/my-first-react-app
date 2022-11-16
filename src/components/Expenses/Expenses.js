import React, {useState} from 'react';
import './Expenses.css';
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const selectedYearHandler = (enterSavedYear) => {
        setFilteredYear(enterSavedYear);
        console.log(filteredYear)
    };

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onSelectedYear={selectedYearHandler}/>
            {props.items.filter(data => data.date.getFullYear().toString() === filteredYear).map(expense => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))}
        </Card>
    );
};


export default Expenses;
