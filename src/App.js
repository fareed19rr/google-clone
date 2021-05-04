import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';

function App() {
  return (
    <div className = "app">
      <Router>
        <Switch>
          <Route path='/search'>
            <SearchScreen />
          </Route>

          <Route path='/'>
            <HomeScreen />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
