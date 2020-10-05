import React, { useEffect, useState } from 'react';
import VolunteerTasks from './VolunteerTasks/VolunteerTasks';
import './Home.css';


const Home = () => {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/tasks')
            .then(response => response.json())
            .then(data => setTasks(data))
    }, [])

    return (
        <div>
            <div className="text-center mt-5">
                <h1> <b>I GROW BY HELPING PEOPLE IN NEED.</b></h1>
                <br />
                <input type="text" placeholder=" Search...." className="search-box" />
                <button className="search btn btn-primary">Search</button>

            </div>
            <div className="row m-5">
                {
                    tasks.map(task => <VolunteerTasks task={task}></VolunteerTasks>)
                }
            </div>


        </div>
    );
};

export default Home;