import './App.css';
import './styles/bootstrap.min.css';
import Home from './components/Home';
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';
import About from './components/About'
import ContactUs from './components/ContactUs';
function App() {
  return (
    <div className="container-fluid">
      <Router>
        <header className="container bg-light">
          <p className="text-md-start fs-5 fw-light">Kiran Maruhti</p>
          <ul class="nav nav-tabs">
            <li class="nav-item">
              <Link to="/" className="nav-link text-dark">Home</Link>
            </li>
            <li class="nav-item">
              <Link to="/About" className="nav-link text-dark">About</Link>
            </li>
          </ul>
        </header>
      <main className="container">
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/About" component={About}></Route>
          </Switch>
      </main>
      <div className="border-top text-center mt-3 mb-3" id="certification"></div>
      <ContactUs/>
      <div className="container p-5">
        <footer class="bg-light text-center text-lg-start container">
          {/* <!-- Copyright --> */}
          <div class="text-center p-2">
            © 2021 Copyright:
            <a class="text-dark" href="./ ">kiranmaruthi</a>
          </div>
        {/*  <!-- Copyright --> */}
        </footer>
      </div>
      </Router>
    </div>


  );
}

export default App;
