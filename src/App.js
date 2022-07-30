
import './App.css';
import { Button } from 'semantic-ui-react'
import Create from './Component/Create';
import Read from './Component/Read';
import Update from './Component/Update';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom' 
import Addtodo from './Component/Addtodo';


function App() {

  return (
    <div className="App">
         
      <Router>
      
      
        <Routes>
        <Route path='/' element={<Addtodo/>}/>
      <Route path='/create' element={<Create/>}/>
      
      <Route path='/read' element={<Read/>}/>
    
      <Route path='/update' element={<Update/>}/>
      </Routes>
      </Router>
    </div>
    

  );
}

export default App;
