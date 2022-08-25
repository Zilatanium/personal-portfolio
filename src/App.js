import './App.css';
import { NavBar } from './components/NavBar.jsx';
import { Banner } from './components/Banner.jsx';
import { Skill } from './components/Skill.jsx';
import { Projects } from './components/Projects.jsx';
import { Contact } from './components/Contact.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Skill/>
      <Projects/>
      <Contact />
    </div>
  );
}

export default App;
