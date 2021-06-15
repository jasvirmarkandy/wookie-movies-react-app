import React from 'react';
import './App.css';
import { HomePage } from './Pages/HomePage/HomePage';
import { DetailsPage } from './Pages/DetailsPage/DetailsPage';
import { createBrowserHistory } from "history";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";

const customHistory = createBrowserHistory();

function App() {
  return (
    <Router history={customHistory}>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/:movieSlug" component={DetailsPage}/>
      </Switch>
    </Router>
  );
}

export default App;
