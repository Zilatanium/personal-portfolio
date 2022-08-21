import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar.jsx';
import { Banner } from './components/Banner.jsx';
import { Skill } from './components/Skill.jsx';
import { Project, Projects } from './components/Projects.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Skill/>
      <Projects/>
    </div>
  );
}

export default App;
