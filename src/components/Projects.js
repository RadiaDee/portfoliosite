import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import ecommerce from '../image/ecommerce.jpg';
import fitnesstracker from '../image/fitnesstracker.jpg';
import goodsforsale from '../image/goodsforsale.jpg';
import wizardnews from '../image/wizardnews.jpg';
import socialmedia from '../image/socialmedia.png';
import messageboard from '../image/messageboard.png';
import artcollector from '../image/artcollector.png';
import reactforms from '../image/reactforms.png';
import contactlist from '../image/contactlist.png';
import puppybowl from '../image/puppybowl.png';
import reactrouter from '../image/reactrouter.png';
import tictactoe from '../image/tictactoe.png';

const Projects = () => {

    return (
        <div className='projectSection'>
        
        <h2>Projects that Ive built</h2>
            <div id='project1'>
                
                <h2 className='projectName'>eCommerce Site</h2>
                    <img className='projectImage' src={ecommerce} alt="ecommerce website" />
                    <p className='projectInfo'>A web app for selling electronics and other goods posted by users. Group collaboration project with Maureen Linke, Matthew Jordison, and Rebecca Carr.</p>
                        <div className='projectSpecs'>
                            <p>Tech Used: Javascript, HTML, CSS, React, Node.js, Express, Postgres, Bootstrap, Heroku</p>
                        </div>
                    <p className='projectInfoAdditional'></p>
                        <div className='projectLinks'>
                            <p>Links for open source code and deployment</p>
                            <span>
                                <a href='https://github.com/2107-CSU/TechTycoon' target='_blank'>github  </a>
                                <a href='https://blooming-temple-71636.herokuapp.com/products' target='_blank'>heroku</a>
                            </span>
                        </div>
            </div>
            
            <div id='project2'>
                <h2 className='projectName'>Fitness Trackr</h2>
                    <img className='projectImage' src={fitnesstracker} alt="Fitness Trackr" />
                    <p className='projectInfo'>A fullstack web app where users can track their workouts and routines. Group collaboration with Ricardo Martinez, Jennifer McGrath and Maureen Linke.</p>
                        <div className='projectSpecs'>
                            <p>Tech Used: Javascript, HTML, CSS, React, Node.js, Express, Postgres, Bootstrap, Netlify, Heroku</p>
                        </div>
                    <p className='projectInfoAdditional'></p>
                        <div className='projectLinks'>
                            <p>Links for open source code and deployment</p>
                            <span>
                                <a href='https://github.com/jennymarie1027/fitness-tracker-frontend' target='_blank'>github  </a>
                                <a href='https://jenny-fitness-tracker.netlify.app/' target='_blank'>Netlify</a>
                            </span>
                        </div>
            </div>

            <div id='project3'>
                <h2 className='projectName'>Stranger's Things</h2>
                    <img className='projectImage' src={goodsforsale} alt="Stranger's Things" />
                    <p className='projectInfo'>A Craigslist lite app which allows for posting items for sale and messaging.</p>
                        <div className='projectSpecs'>
                            <p>Tech Used: Javascript, HTML, CSS, React, Node.js, Express, Postgres, Bootstrap, Netlify</p>
                        </div>
                    <p className='projectInfoAdditional'></p>
                        <div className='projectLinks'>
                            <p>Links for open source code and deployment</p>
                            <span>
                                <a href='https://github.com/RadiaDee/strangersthings2' target='_blank'>github  </a>
                                <p>netlify (coming soon)</p>
                            </span>
                        </div>
            </div>

            <div id='project4'>
                <h2 className='projectName'>Wizard News</h2>
                    <img className='projectImage' src={wizardnews} alt="Wizard News" />
                    <p className='projectInfo'>A social news platform where users can post their "wizard news" articles from all over the world!</p>
                        <div className='projectSpecs'>
                            <p>Tech Used: Javascript, HTML, CSS, React, Node.js</p>
                        </div>
                    <p className='projectInfoAdditional'></p>
                        <div className='projectLinks'>
                            <p>Links for open source code and deployment</p>
                            <span>
                                <a href='https://github.com/RadiaDee/PairExercise.Wizard-news-pt1' target='_blank'>github  </a>
                                <p>netlify (coming soon)</p>
                            </span>
                        </div>
            </div>

            <div id='project5'>
                <h2 className='projectName'>Simple social media app</h2>
                    <img className='projectImage' src={socialmedia} alt="simple social media app" />
                    <p className='projectInfo'>Full stack social media app for making posts and messaging between users</p>
                        <div className='projectSpecs'>
                            <p>Tech Used: Javascript, HTML, CSS, React, Node.js</p>
                        </div>
                    <p className='projectInfoAdditional'></p>
                        <div className='projectLinks'>
                        <p>Links for open source code and deployment</p>
                                <span>
                                    <a href='https://github.com/RadiaDee/juicebox' target='_blank'>github  </a>
                                    <p>netlify (coming soon)</p>
                                </span>
                        </div>
            </div>

            <div id='project6'>
                <h2 className='projectName'>Phenomena</h2>
                    <img className='projectImage' src={messageboard} alt="An anonymous message board app" />
                    <p className='projectInfo'>An anonymous message board. A social media app where users can post anonymous messages</p>
                        <div className='projectSpecs'>
                            <p>Tech Used: Javascript, HTML, CSS, React, Node.js</p>
                        </div>
                    <p className='projectInfoAdditional'></p>
                        <div className='projectLinks'>
                            <span>
                                <a href='https://github.com/RadiaDee/UNIV_Phenomena_Starter' target='_blank'>github </a>
                                <p>netlify (coming soon)</p>
                            </span>
                        </div>
            </div>

            <div id='project7'>
                <h2 className='projectName'>Art Collector</h2>
                    <img className='projectImage' src={artcollector} alt="Art Collector" />
                    <p className='projectInfo'>An Art Collection search engine that accesses a Harvard art gallery api</p>
                        <div className='projectSpecs'>
                            <p>Tech Used: Javascript, HTML, CSS, React</p>
                        </div>
                    <p className='projectInfoAdditional'></p>
                        <div className='projectLinks'>
                            <span>
                                <a href='https://github.com/RadiaDee/UNIV_Art_Collector_React_Starter' target='_blank'>github </a>
                                <p>netlify (coming soon)</p>
                            </span>
                        </div>
            </div>

            <div id='project8'>
                <h2 className='projectName'>React Forms</h2>
                    <img className='projectImage' src={reactforms} alt="React form" />
                    <p className='projectInfo'>A basic form created using react</p>
                        <div className='projectSpecs'>
                            <p>Tech Used: Javascript, HTML, CSS, React</p>
                        </div>
                    <p className='projectInfoAdditional'></p>
                        <div className='projectLinks'>
                            <span>
                                <a href='https://github.com/RadiaDee/UNIV.Lab.ReactForms' target='_blank'>github </a>
                                <p>netlify (coming soon)</p>
                            </span>
                        </div>
            </div>

            <div id='project9'>
                <h2 className='projectName'>Contact List</h2>
                    <img className='projectImage' src={contactlist} alt="Contact list" />
                    <p className='projectInfo'>A simple contact list created using react</p>
                        <div className='projectSpecs'>
                            <p>Tech Used: Javascript, HTML, CSS, React</p>
                        </div>
                    <p className='projectInfoAdditional'></p>
                        <div className='projectLinks'>
                            <span>
                                <a href='https://github.com/RadiaDee/UNIV.PairExercise.ContactList' target='_blank'>github </a>
                                <p>netlify (coming soon)</p>
                            </span>
                        </div>
            </div>

            <div id='project10'>
                <h2 className='projectName'>React Hello World</h2>
                    
                    <p className='projectInfo'>A small site with 4 sub parts using react</p>
                        <div className='projectSpecs'>
                            <p>Tech Used: Javascript, HTML, CSS, React</p>
                        </div>
                    <p className='projectInfoAdditional'></p>
                        <div className='projectLinks'>
                            <span>
                                <p>github (coming soon)</p>
                                <p>netlify (coming soon)</p>
                            </span>
                        </div>
            </div>

            <div id='project11'>
                <h2 className='projectName'>Puppy Bowl</h2>
                    <img className='projectImage' src={puppybowl} alt="Puppy Bowl" />
                    <p className='projectInfo'>A app for selecting puppies for the puppy bowl</p>
                        <div className='projectSpecs'>
                            <p>Tech Used: Javascript, HTML, CSS</p>
                        </div>
                    <p className='projectInfoAdditional'></p>
                        <div className='projectLinks'>
                            <span>
                                <a href='https://github.com/RadiaDee/UNIV_PuppyBowl_Starter' target='_blank'>github </a>
                                <a href='https://competent-yonath-7047f3.netlify.app' target='_blank'>netlify</a>
                            </span>
                        </div>
            </div>

            <div id='project12'>
                <h2 className='projectName'>React Router</h2>
                    <img className='projectImage' src={reactrouter} alt='react router' />
                    <p className='projectInfo'>A basic site featuring react links and paths.</p>
                        <div className='projectSpecs'>
                            <p>Tech Used: Javascript, HTML, CSS, React</p>
                        </div>
                    <p className='projectInfoAdditional'></p>
                        <div className='projectLinks'>
                            <span>
                                <a href='https://github.com/RadiaDee/UNIV.Lab.ReactRouter' target='_blank'>github </a>
                                <p>netlify (coming soon)</p>
                            </span>
                        </div>
            </div>

        <h2>Game related projects</h2>

            <div id='project13'>
                <h2 className='projectName'>Tic Tac Toe</h2>
                    <img className='projectImage' src={tictactoe} alt='Tic Tac Toe' />
                    <p className='projectInfo'>Play a 2 player game</p>
                        <div className='projectSpecs'>
                            <p>Tech Used: Javascript, HTML, CSS</p>
                        </div>
                    <p className='projectInfoAdditional'></p>
                        <div className='projectLinks'>
                            <span>
                                <a href='https://github.com/RadiaDee/tictactoe' target='_blank'>github </a>
                                <p>netlify (coming soon)</p>
                            </span>
                        </div>
            </div>


            {/* <div id='project14'>
                <h2 className='projectName'>Snake</h2>
                <p className='projectInfo'>Popular game designed with modularity and objects</p>
                    <div className='projectSpecs'>
                        <p>Tech Used: Javascript, HTML, CSS, React</p>
                    </div>
                <p className='projectInfoAdditional'></p>
                    <div className='projectLinks'>
                        <p>coming soon</p>
                        <a href='https://github.com'></a>
                    </div>
            </div> */}


            <div id='project15'>
                <h2 className='projectName'>Pixelate</h2>
                    <p className='projectInfo'>Draw and paint with pixels</p>
                        <div className='projectSpecs'>
                            <p>Tech Used: Javascript, HTML, CSS</p>
                        </div>
                    <p className='projectInfoAdditional'></p>
                        <div className='projectLinks'>
                            <span>
                                <a href='https://github.com/RadiaDee/pixelate' target='_blank'>github </a>
                                <p>netlify (coming soon)</p>
                            </span>
                        </div>
            </div>

            <div id='project16'>
                <h2 className='projectName'>Guessing Game</h2>
                    <p className='projectInfo'>Play a guessing game and see if you figure out the right answer! Use hints if you need</p>
                        <div className='projectSpecs'>
                            <p>Tech Used: Javascript, HTML, CSS</p>
                        </div>
                    <p className='projectInfoAdditional'></p>
                        <div className='projectLinks'>
                            <span>
                                <a href='https://github.com/RadiaDee/UNIV_Guessing_Game_Starter' target='_blank'>github </a>
                                <p>netlify (coming soon)</p>
                            </span>
                        </div>
            </div>

            <div id='project17'>
                <h2 className='projectName'>Whack a Mole</h2>
                    <p className='projectInfo'>Try to click on the moles as they appear and see how many you can get</p>
                        <div className='projectSpecs'>
                            <p>Tech Used: Javascript, HTML, CSS</p>
                        </div>
                    <p className='projectInfoAdditional'></p>
                        <div className='projectLinks'>
                            <span>
                                <a href='https://github.com/RadiaDee/Lab.Whack-a-mole' target='_blank'>github </a>
                                <p>netlify (coming soon)</p>
                            </span>
                        </div>
            </div>

            <div id='project18'>
                <h2 className='projectName'>Poem Generator</h2>
                    <p className='projectInfo'>Generate a random poem from any given sentence</p>
                        <div className='projectSpecs'>
                            <p>Tech Used: Javascript</p>
                        </div>
                    <p className='projectInfoAdditional'></p>
                        <div className='projectLinks'>
                            <span>
                                <p>github (coming soon)</p>
                            </span>
                        </div>
            </div>

            <div id='project19'>
                <h2 className='projectName'>Sudoku Checker</h2>
                    <p className='projectInfo'>JS script for checking wether your sudoku is correct</p>
                        <div className='projectSpecs'>
                            <p>Tech Used: Javascript</p>
                        </div>
                    <p className='projectInfoAdditional'></p>
                        <div className='projectLinks'>
                            <span>
                                <a href='https://github.com/RadiaDee/Sudoku' target='_blank'>github </a>
                                <p>netlify (coming soon)</p>
                            </span>
                        </div>
            </div>

            <div id='project20'>
                <h2 className='projectName'>Caesar Cypher</h2>
                    <p className='projectInfo'>JS script where you can encrypt a string</p>
                        <div className='projectSpecs'>
                            <p>Tech Used: Javascript</p>
                        </div>
                    <p className='projectInfoAdditional'></p>
                        <div className='projectLinks'>
                            <span>
                                <a href='https://github.com/RadiaDee/caesarcypher' target='_blank'>github </a>
                                <p>netlify (coming soon)</p>
                            </span>
                        </div>
            </div>

            <div id='project21'>
                <h2 className='projectName'>Countdown Clock</h2>
                    <p className='projectInfo'>A counter that countsdown from a specified number</p>
                        <div className='projectSpecs'>
                        <p>Tech Used: Javascript, HTML, CSS</p>
                        </div>
                    <p className='projectInfoAdditional'></p>
                        <div className='projectLinks'>
                            <span>
                                <a href='https://github.com/RadiaDee/countdownclock' target='_blank'>github </a>
                            </span>
                        </div>
            </div>

        </div>

    )





}
export default Projects;