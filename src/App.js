import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/home/home/Home';



function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
