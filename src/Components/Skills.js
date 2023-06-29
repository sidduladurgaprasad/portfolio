import './styles/Skills.css';
import c from './images/Skills Icons/C.png'
import cpp from './images/Skills Icons/c++.jpg'
import python from './images/Skills Icons/pyhton.jpg'
import java from './images/Skills Icons/java.jpg'

import html from './images/Skills Icons/html.svg'
import css from './images/Skills Icons/css.png'
import js from './images/Skills Icons/JavaScript.png'
import reactjs from './images/Skills Icons/Reactjs.png'
import bootstarp from './images/Skills Icons/bootstrap.png'
import jQuery from './images/Skills Icons/jQuery.png'
import php from './images/Skills Icons/php.png'
import nodejs from './images/Skills Icons/nodejs.png'

function Skills() {

    const programmingLanguages = [
        { 
            icon : c ,
            name : "C Language"
        },
        { 
            icon : cpp ,
            name : "C++ Language"
        },
        { 
            icon : python ,
            name : "Python"
        },
        { 
            icon : java ,
            name : "JAVA"
        }
    ]

    const webTechnologies = [
        {
            icon : html,
            name : "HTML"
        },
        {
            icon : css,
            name : "CSS"
        },
        {
            icon : bootstarp,
            name : "Bootstarp"
        },
        {
            icon : js,
            name : "javascript"
        },
        {
            icon : reactjs,
            name : "Reactjs"
        },
        {
            icon : jQuery,
            name : "jQuery"
        },
        {
            icon : php,
            name : "PHP"
        },
        {
            icon : nodejs,
            name : "Node.js"
        }
    ]

    return ( 
        <div className='SkillsBackground'> 
        <div className='skillTop'></div>
        {/* <h1 className='text-center p-3'>Skills</h1> */}
            <div className='bg-white'>
                <h3 className='text-center titles'>Programming Languages</h3>
                <div className='container my-5'>
                    <div className='row justify-content-around'>
                        {
                            programmingLanguages.map(
                                        (ele) =>  <div className='col-6 col-md-4 col-lg-2 text-center eachlanguage '>
                                                            <img src={ele.icon} width="50vw"/>
                                                            <p>{ele.name}</p>
                                                    </div>
                                    )
                        }
                    </div>
                </div>
            </div>
            <div className='bg-black text-white'>
                <h3 className='text-center titles'>Web Technologies</h3>
                <div className='container my-5'>
                    <div className='row justify-content-around'>
                        {
                            webTechnologies.map(
                                        (ele) =>  <div className='col-6 col-md-4 col-lg-2 text-center eachtechnology'>
                                                            <img src={ele.icon} width="50vw"/>
                                                            <p>{ele.name}</p>
                                                    </div>
                                    )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;