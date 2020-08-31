import React from 'react';
import Item from './ExpenseItem';
import {MdDelete} from 'react-icons/md'

export const ExpenseList = ({expenses}) => {

    return (
        <>
            <ul clasName='list'>
                {expenses.map((expense) =>  {
                    return <Item key={expense.id} expense={expense}/>
                })}
            </ul>
            {expenses.length > 0 && <button className='btn'>Clear List
                <MdDelete className='btn-icon'/>
            </button>}    
        
        </>
    )
}

export default ExpenseList;