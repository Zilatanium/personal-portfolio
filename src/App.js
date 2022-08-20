import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar.jsx';
import { Banner } from './components/Banner.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
    </div>
  );
}

export default App;
