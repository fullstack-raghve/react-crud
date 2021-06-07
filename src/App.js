import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import About from './components/About'
import Home from './components/Home'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import AddUser from './components/users/Adduser';
import EditUser from './components/users/EditUser';
import ViewUser from './components/users/ViewUser';
import { Review } from './Review/Review';
import { Grocery } from './Grocery/Grocery';
import {GoalList} from './Goal/GoalList'

function App() {
  return (
    <Router>
 <div className="App">
      <Navbar />
      <Switch>
      <Route exact path = '/' component = {Home} />
      <Route exact path = '/about' component = {About} />

      <Route exact path = '/review' component = {Review} />
      <Route exact path = '/grocery' component = {Grocery} />
      <Route exact path = '/goal' component = {GoalList} />

      <Route exact path = '/contact' component = {Contact} />
      <Route exact path = '/users/add' component = {AddUser} />
      <Route exact path = '/users/edit/:id' component = {EditUser} />
      <Route exact path = '/users/view/:id' component = {ViewUser} />

      
      </Switch>
      {/* <About/>
      <Contact/> */}
    </div>
    </Router>
   
  );
}

export default App;
