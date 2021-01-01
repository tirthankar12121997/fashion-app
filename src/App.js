import './App.css';
import { Button } from 'reactstrap';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductView from './components/ProductView';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/ui/home" component={Home} />
          <Route path="/ui/product/:id" component={ProductView} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
