import React from 'react';
import fakeData from '../../../fakeData/fakeData';

const Events = () => {
    const handleAddTasks = () => {

        const tasks = {};

        fetch('http://localhost:5000/addTasks', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(fakeData)
        })
    }

    return (
        <div>
            <form action="">
                <p><span>Task Name</span><input type="text"/></p>
                <p><span>Task Description</span><input type="text"/></p>
                <p><span>Task Image</span><input type="file"/></p>
            </form>
            <button onClick={handleAddTasks}>Add Tasks</button>
        </div>
    );
};

export default Events;