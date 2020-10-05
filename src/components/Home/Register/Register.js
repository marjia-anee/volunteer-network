import React, { useContext, useEffect, useState } from 'react';
import {  useForm } from 'react-hook-form';
import { useHistory, useParams} from 'react-router-dom';
import { UserContext } from '../../../App';
import './Register.css';
import logo from '../../../images/logos/Group 1329.png';



const Register = () => {

    const history = useHistory();


    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { _id } = useParams();

    
    const[tasks, setTasks] = useState([])

    const { register, handleSubmit, watch, errors } = useForm();

    useEffect(() => {
        fetch('https://murmuring-crag-22094.herokuapp.com/task/'+ _id)
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [_id])

    const onSubmit = data => {
        console.log('form submitted', data);
        const submittedItems = {...data, ...tasks, registerTime: new Date() };

        fetch('https://murmuring-crag-22094.herokuapp.com/addReg', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(submittedItems)
            
        })
        .then(response => response.json())
        .then(data => {
            if (data) {
                history.push('/tasksDetails');
            }
        })
    }


    console.log(watch("example")); // watch input value by passing the name of it

    return (
        <div >

            <div>
                <img style={{ height: '60px', textAlign: 'center', marginLeft: '40%' }} src={logo} alt="" />
            </div>

            <form className="reg-form" onSubmit={handleSubmit(onSubmit)}>
                <h2>Register as a Volunteer</h2>

                <input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Full Name" />
                {errors.name && <span className="error">Name is required</span>}

                <input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder="Username or Email" />
                {errors.email && <span className="error">Email is required</span>}

                <input name="registerTime" ref={register({ required: true })} placeholder="dd-mm-yy" />
                {errors.registerTime && <span className="error">Date is required</span>}


                <input name="description" ref={register({ required: true })} placeholder="Description" />
                {errors.description && <span className="error">Description is required</span>}

                <input name="task" defaultValue={tasks.name} ref={register({ required: true })} placeholder="Task Name" />
                {errors.task && <span className="error">Tasks is required</span>}
                <br />
                <button className="reg-button btn btn-primary my-4" type="submit"> Registration </button>

            </form>

        </div>
    );
};

export default Register;