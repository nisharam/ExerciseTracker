import React from 'react';
import { BrowserRouter as Router ,Route} from "react-router-dom";

import EditExercise from "./components/EditExercise";
import NavBar from "./components/navbar.component";
import createExercise from "./components/createExercise";
import createUser from "./components/createUser";
import ExerciseList from "./components/ExerciseList";


function App() {
  return (
   <Router>
     <NavBar />
     <br />
      <Route path="/" exact component={ExerciseList} />
    <Route path="/edit/:id" component={EditExercise} />
    <Route path="/create" component={createExercise} /> 
    <Route path="/user" component={createUser} />

   </Router>
  );
}

export default App;
