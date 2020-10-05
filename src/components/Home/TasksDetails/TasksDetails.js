import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';

const TasksDetails = () => {

    // const {taskName} = useParams();
    const [volunteerInfo, setVolunteerInfo] = useState([]);

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);


    useEffect(() => {
        fetch('https://murmuring-crag-22094.herokuapp.com/regDetails?email=' + loggedInUser.email)
            .then(response => response.json())
            .then(data => setVolunteerInfo(data));

    }, [])

    const deleteTask = (_id) => {
        fetch(`https://murmuring-crag-22094.herokuapp.com/regDetailsDelete/${_id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'

            },
            body: JSON.stringify(deleteTask)
        })
            .then(response => response.json())
            .then(result => {
                alert('deleted')
            })
    }


    return (
        <div className="m-5 text-center">
            <h2>Your Total Volunteer Tasks: {volunteerInfo.length}</h2>

            <div className="row d-flex align-items-center m-5">
                {volunteerInfo.map(register =>
                    <div className="col-md-4 mt-5">
                        <img style = {{ height : '300px'}} src={register.img} alt=""/>
                        <h5>{register.name}</h5>
                        <p>{register.email}</p>
                        <button type="button" className="btn btn-primary" 
                        onClick={() => deleteTask(register._id)}>Delete</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TasksDetails;