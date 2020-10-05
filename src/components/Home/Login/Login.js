import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router-dom';
import googleIcon from '../../../images/logos/google.png';
import './Login.css';
import logo from '../../../images/logos/Group 1329.png';


const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const history = useHistory();
    const location = useLocation();

    const { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {

        firebase.initializeApp(firebaseConfig);


    }

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {

            const { displayName, email } = result.user;
            const signedInUser = { name: displayName, email }
            setLoggedInUser(signedInUser);
            history.replace(from);

        }).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
        });
    }


    return (
        <div>
            <div>
                <img style={{ height: '60px', textAlign: 'center', marginLeft: '40%'}} src={logo} alt=""/>
            </div>

            <div className="submit text-center">

                <h1>Login with</h1>
                <br />
                <button onClick={handleGoogleSignIn} className="google-button ">
                    <img src={googleIcon} className="google-icon float-left" alt=""/> Continue with Google</button>
                <br />
                <br />
                <p>Don't have an account? <a href="/">Create an account</a></p>
            </div>

        </div>

    );
};

export default Login;