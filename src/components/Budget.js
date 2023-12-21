import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = ({ currency }) => {
    const { budget, dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    useEffect(() => {
        setNewBudget(budget);
    }, [budget]);

    const handleBudgetChange = (event) => {
        const updatedBudget = parseInt(event.target.value);
        setNewBudget(updatedBudget);
        dispatch({ type: 'SET_BUDGET', payload: updatedBudget });
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}{budget}</span>
            <input
                type="number"
                step="10"
                value={newBudget}
                onChange={handleBudgetChange}
            ></input>
        </div>
    );
};

export default Budget;
