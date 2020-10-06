import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './src/components/layout/Navbar';
import Dashboard from './src/components/dashboard/Dashboard';
import ProjectDetails from './src/components/projects/ProjectDetails';
import SignIn from './src/components/auth/SignIn';
import SignUp from './src/components/auth/SignUp';
import CreateProject from './src/components/projects/CreateProject';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Navbar/>
    <Switch>
      <Route exact path= '/' component= {Dashboard} />  
      <Route path= '/project/:id' component= {ProjectDetails}/>
      <Route path= '/signin' component= {SignIn} />
      <Route path= '/signup' component= {SignUp} />
      <Route path= '/create' component = {CreateProject} />
    </Switch>

    </div>
    </BrowserRouter>  
  );
}

export default App;
