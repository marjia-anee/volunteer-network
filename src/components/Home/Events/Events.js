import React, { useState } from 'react';

const Events = () => {

    const [tasks, setTasks] = useState([])

    const handleAddTasks = () => {


        fetch('https://murmuring-crag-22094.herokuapp.com/addTasks', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(setTasks)
        })
    }

    return (
        <div className = "text-center m-5">
            <h2>Add New Volunteer Task:</h2>
            <br/>
            <form action="">
                <p><span>Task Name:</span><input type="text"/></p>
                <p><span>Task Description:</span><input type="text"/></p>
                <p><span>Task Image:</span><input type="file"/></p>
            </form>
            <button className = "btn btn-primary"onClick={handleAddTasks}>Add Tasks</button>
        </div>
    );
};

export default Events;