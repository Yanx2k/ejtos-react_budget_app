import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    };

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: -10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    };

    return (
        <tbody>

            <th>Department</th>
            <th>Allocated Budget</th>
            <th>Increase by 10</th>
            <th>Decrease by 10</th>
            <th>Delete</th>

            <tr>
                <td>{props.name}</td>
                <td>£{props.cost}</td>
                <td>
                    <button onClick={() => increaseAllocation(props.name)}>+</button>
                </td>
                <td>
                    <button onClick={() => decreaseAllocation(props.name)}>-</button>
                </td>
                <td>
                    <TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete>
                </td>
            </tr>
        </tbody>
    );
};

export default ExpenseItem;
