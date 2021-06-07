import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import About from './pages/about'

function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route exact path="/" component={About}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
