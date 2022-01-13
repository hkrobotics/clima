import './App.css';
import Search from './components/Search';



import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Search />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;