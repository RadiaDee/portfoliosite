import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';

const About = () => {
    return (

        <div className='aboutMeSection'>
            <div id='aboutMeInfo'>
                <h2>About Me</h2>
                <p>I originally studied Nutrition at CSU with intentions of working in healthcare but realized that wasnt the right career path for me</p>
                <p>In 2019 I started self teaching javascript through Khan Academy and then, during the pandemic, I graduated from a coding bootcamp through CSU</p>
                <p>In addition to web development I am interested in game development and machine learning</p>
            
                <h2>What Im up to when not studying or working</h2>
                    <p>Reading non fiction, classics, self help</p>
                    <p>Yoga</p>
                    <p>Cooking</p>
                    <p>Hiking/ spending time in nature</p>
                    <p>Gym and fitness</p>
                    <p>Watching documentaries and random videos on YouTube</p>
                    <p>Video Games</p>
                    <p>Playing piano and singing</p>

                <h2>Future goals</h2>
                    <p>In addition to job searching, I am practicing leet code and completing UDemy's complete Javascript Bootcamp to strengthen my skill set. I want to practice more algorithm and data structures problems so look out for more additions on my projects list.</p>
            
            </div>

            <div id='skills'>
            <h2>Skills and tools</h2>

                <p>The following skills, languages, and technolgies I aquired through Fullstack Academy coding bootcamp and Khan Academy</p>
                <p>I am still a beginner with Java which I picked up in my free time mainly by reading Introduction to Java Programming and Data Structures by Y Daniel Liang and doing practice problems</p>

                <div id='listOfSkills'>
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>Javascript</p>
                    <p>Java</p>
                    <p>Node.js</p>
                    <p>React</p>
                    <p>Express</p>
                    <p>SQL</p>
                    <p>PostgreSQL</p>
                    <p>Netlify</p>
                    <p>Heroku</p>
                    <p>Code pen</p>
                    <p>Git</p>
                    <p>Github</p>
                </div>

            </div>

            <div id='freeTime'>
                
            </div>

        </div>


    )


}
export default About;