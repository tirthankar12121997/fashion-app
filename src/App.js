import './App.css';
import { Jumbotron, Container } from 'reactstrap';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductView from './components/ProductView';
import Cart from './components/Cart';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Jumbotron>
          <Container fluid>
            <Switch>
              <Route path="/ui/home" component={Home} />
              <Route path="/ui/product/:id" component={ProductView} />
              <Route path="/ui/cart" component={Cart} />
            </Switch>
          </Container>
        </Jumbotron>
      </div>
    </BrowserRouter>
  );
}

export default App;
