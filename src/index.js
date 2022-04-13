import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  return ( 
      <div>
    
        <Router>
            <nav id='navbarContainer'>
                <ul className='navbarSection'>
                    <li className='navItem'> <Link to='/'>Home</Link> </li>
                    <li className='navItem'> <Link to='/About'>About</Link> </li>
                    <li className='navItem'> <Link to='/Projects'>Projects</Link> </li>
                    <li className='navItem'> <Link to='/Contact'>Contact</Link> </li>
                </ul>
            </nav>

            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/About' element={<About />} />
                <Route path='/Projects' element={ <Projects />}/>
                <Route path='/Contact' element={<Contact />}/>
                
            </Routes>
        </Router>

    

    </div>
    
    )
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);