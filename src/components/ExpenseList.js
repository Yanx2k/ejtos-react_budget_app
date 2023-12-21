import React, { useContext } from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';

const ExpenseList = ({ currency }) => {
    const { expenses } = useContext(AppContext);

    return (
        <table className='table'>
            <thead className="thead-light">
                {/* ... (existing code remains unchanged) */}
            </thead>
            <tbody>
                {expenses.map((expense) => (
                    <ExpenseItem
                        key={expense.id}
                        currency={currency} // Pass currency prop down to ExpenseItem
                        id={expense.id}
                        name={expense.name}
                        cost={expense.cost}
                    />
                ))}
            </tbody>
        </table>
    );
};

export default ExpenseList;
