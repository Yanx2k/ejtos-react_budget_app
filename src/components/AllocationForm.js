import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const AllocationForm = () => {
    const { dispatch, remaining, budget, expenses } = useContext(AppContext);

    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const [action, setAction] = useState('Add');
    const [currency, setCurrency] = useState('£'); // Default currency is set to Pound (£)

    const totalSpending = expenses.reduce((total, expense) => total + expense.cost, 0);
    const remainingBudget = budget - totalSpending;

    const currencySymbols = {
        Dollar: '$',
        Pound: '£',
        Euro: '€',
        Rupee: '₹',
    };

    const handleCurrencyChange = (event) => {
        const selectedCurrency = event.target.value;
        setCurrency(currencySymbols[selectedCurrency]);

        // Handle logic to update currency representation in other components
        // You might need to pass the selectedCurrency to the other components through props and update their representations accordingly
    };

    const submitEvent = () => {

        if (cost > remaining) {
            alert("The value cannot exceed remaining funds  £" + remaining);
            setCost("");
            return;
        }

        const expense = {
            name: name,
            cost: parseInt(cost),
        };
        if (action === "Reduce") {
            dispatch({
                type: 'RED_EXPENSE',
                payload: expense,
            });
        } else {
            dispatch({
                type: 'ADD_EXPENSE',
                payload: expense,
            });
        }
    };

    return (
        <div>
            <div className='row'>
                <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
                    {/* Department Selection */}
                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="inputGroupSelect01">Department</label>
                    </div>
                    <select
                        className="custom-select"
                        id="inputGroupSelect01"
                        onChange={(event) => setName(event.target.value)}
                        value={name}
                    >
                        <option value="">Choose...</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Sales">Sales</option>
                        <option value="Finance">Finance</option>
                        <option value="HR">HR</option>
                        <option value="IT">IT</option>
                        <option value="Admin">Admin</option>
                    </select>

                    {/* Allocation Selection */}
                    <div className="input-group-prepend" style={{ marginLeft: '2rem' }}>
                        <label className="input-group-text" htmlFor="inputGroupSelect02">Allocation</label>
                    </div>
                    <select
                        className="custom-select"
                        id="inputGroupSelect02"
                        onChange={(event) => setAction(event.target.value)}
                        value={action}
                    >
                        <option value="Add">Add</option>
                        <option value="Reduce">Reduce</option>
                    </select>

                    {/* Currency Selection */}
                    <select
                        className="custom-select"
                        id="inputGroupSelect03"
                        onChange={handleCurrencyChange}
                        value={Object.keys(currencySymbols).find(key => currencySymbols[key] === currency)}
                        style={{ marginLeft: '2rem', width: '150px', backgroundColor: '#f5f5f5', borderRadius: '5px', border: '1px solid #ccc' }}
                    >
                        {Object.keys(currencySymbols).map((key) => (
                            <option key={key} value={key}>{currencySymbols[key]} {key}</option>
                        ))}
                    </select>

                    {/* Cost Input */}
                    <div className="input-group-prepend">
                        <span className="input-group-text">{currency}</span>
                    </div>
                    <input
                        required
                        type='number'
                        id='cost'
                        value={cost}
                        style={{ marginLeft: '0.5rem', borderRadius: '5px', border: '1px solid #ccc', padding: '5px' }}
                        onChange={(event) => setCost(event.target.value)}
                    />

                    {/* Save Button */}
                    <button className="btn btn-primary" onClick={submitEvent} style={{ marginLeft: '2rem', borderRadius: '5px', padding: '8px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none' }}>
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AllocationForm;