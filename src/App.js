import Navbar from './components/Navbar/index';
import {FormSignup} from './pages/FormSignup/index';
import {Admin} from './pages/Login/index';
import { Leads } from './pages/UsersList'; 
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import { SignUp } from './pages/Signup';
import { UserView} from './pages/UserView/index';

//import { DataTable } from './pages/DataTable';

function App() {
  return (
    <div className="App">
       <Router>
        <Navbar/>  
        
        <div>
        <Switch>                 
           <Route exact  path="/" component={Admin}>
            <Admin/>
           </Route>
           <Route exact  path="/SignUp" component={SignUp}>
            <SignUp/>
           </Route>               
              <Route path="/FormSignup" component={FormSignup}>
            <FormSignup/>
          </Route> 
          <Route exact  path="/Leads" component={Leads}>
            <Leads/>
           </Route>
           <Route exact  path="/UserView" component={UserView}>
            <UserView/>
           </Route>
        </Switch>
        </div>          
           
      </Router> 
    </div>
  );
}

export default App;