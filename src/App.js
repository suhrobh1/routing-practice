import './App.css';
import React from 'react';
import {Router} from '@reach/router';
import Welcome from './components/Welcome'
import PassedByUser from './components/PassedByUser'
import 'bootstrap/dist/css/bootstrap.min.css'; 



function App() {




  return (
    <div className="App">
      <Router>
        <Welcome path="/home" />
        <PassedByUser path="/:passedValue"/>
        <PassedByUser path="/:passedValue/:textColor"/>
        <PassedByUser path="/:passedValue/:textColor/:backgroundColor"/>
      </Router>
    </div>
  );
}

export default App;
