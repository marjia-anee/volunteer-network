import React, { createContext, useState } from 'react';
import './App.css';
import Events from './components/Home/Events/Events';
import Header from './components/Home/Header/Header';
import Home from './components/Home/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import NotFound from './components/Home/NotFound/NotFound';
import Login from './components/Home/Login/Login';
import Register from './components/Home/Register/Register';
import PrivateRoute from './components/Home/PrivateRoute/PrivateRoute';
import TasksDetails from './components/Home/TasksDetails/TasksDetails';


export const UserContext = createContext();


function App() {

  const [loggedInUser, setLoggedInUser] = useState({});


  return (

    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      {/* <p>Name: {loggedInUser.name}</p> */}

      <Router>
        <Switch>
          <Route path="/home">
            <Header />
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/task/:_id">
            <Register />
          </PrivateRoute>

          <Route path="/tasksDetails">
            <Header />
            <TasksDetails/>
          </Route>

          <Route path="/events">
            <Header />
            <Events />
          </Route>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>

    </UserContext.Provider>

  );
}

export default App;
