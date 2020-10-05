import React from 'react';
import { Link} from 'react-router-dom';
import './VolunteerTasks.css';

const VolunteerTasks = (props) => {
    console.log(props);

    const {_id, name, img } = props.task;

    return (
        <div className=" col-md-3">
                <img style={{ height: '280px', width: '280px' }} src={img} alt="" />
                <Link to={`/task/${_id}`}> <p className="tasks-details">{name}</p> </Link>

        </div>
    );
};

export default VolunteerTasks;