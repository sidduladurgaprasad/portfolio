import './styles/Projects.css';
import p1 from './images/projects/p1.jpg';
import p2 from './images/projects/p2.jpg';
import p3 from './images/projects/p3.jpg';
import p4 from './images/projects/p4.jpg';
import p5 from './images/projects/p5.jpg';
import p6 from './images/projects/p6.jpg';
import p7 from './images/projects/p7.jpg';

function Projects() {

    let projects = [
        {
            id    : 1,
            img   : p1,
            title : ' Attendance Using Face Recognition',
            tech  : ' Python GUI, MySQL Workbench.',
            desc  : ' Attendance Using Face Recognition is an python application that can automate the process of recording attendance.',
            github: ' https://github.com/sidduladurgaprasad/Attendance-Using-Face-Recognition' 
        },
        {
            id    : 2,
            img   : p2,
            title : ' Stock Alerter',
            tech  : ' Reactjs, CSS, Bootstrap.',
            desc  : ' Stock Alerter is a web application that helps users set an alert for a user-defined price and the user will get an alert mail when the stock hits the user-defined price.',
            github: ' https://github.com/sidduladurgaprasad/Stock-Alerter'
        },
        {
            id    : 3,
            img   : p3,
            title : ' Solar System Vizualizer',
            tech  : ' Html, CSS, javaScript, jQuery.',
            desc  : ' Solar System Vizualizer is a web application by which user can vizualize the solar system and users can also change the speeds of the planets.',
            github: ' https://github.com/sidduladurgaprasad/Solar-System'
        },
        {
            id    : 4,
            img   : p4,
            title : ' Blood Bank Management System',
            tech  : ' Python GUI, MySQL Workbench.',
            desc  : ' Blood Bank Management System is a python application which helps to track the blood transaction logs between receiver and donor.',
            github: ' https://github.com/sidduladurgaprasad/Blood-Bank-Management-System'
        },
        {
            id    : 5,
            img   : p5,
            title : ' Infospace',
            tech  : ' Reactjs, Nodejs, CSS, Bootstrap, MongoDB.',
            desc  : ' Infospace is a website where users can know about basics of astronomy and users can also track the live location of ISS (International Space Station).',
            github: ' https://github.com/sidduladurgaprasad/Info-Space'
        },
        {
            id    : 6,
            img   : p6,
            title : ' Webcode',
            tech  : ' Html, CSS, javaScript, jQuery.',
            desc  : ' Webcode is a webpage where users can write the Html, CSS and javaScript code and can get the corresponding output.',
            github: ' https://github.com/sidduladurgaprasad/Webcode'
        },
        {
            id    : 7,
            img   : p7,
            title : ' Get City Weather',
            tech  : ' Html, CSS, javaScript, jQuery, PHP.',
            desc  : ' Get City Weather is a website by which user can get the current weather of requried city throughout the world.',
            github: ' https://github.com/sidduladurgaprasad/Get-City-Weather'
        }
    ]

    return (  
        <div>
            <div className="ProjectsBackground">
                <div style={{height:'10vh',backgroundColor:'transparent'}}></div>
                {
                    projects.map(
                                    (project) =>
                                                {
                                                    if (project.id % 2 !=0) 
                                                        return(
                                                            <div style={{backgroundColor: 'white',border: '1px solid'}} className='row m-4'>
                                                                <div className='row m-1'>
                                                                    <div className='col-12 col-md-6 col-lg-5 col-xl-4 my-auto py-2' >
                                                                        <img src={project.img}  width='100%'/>
                                                                    </div>
                                                                    <div className='col-12 col-md-6 col-lg-7 col-xl-8 my-auto py-4 oddProjectDesc'>
                                                                        <p><b>Title :</b>{project.title}</p>
                                                                        <p><b>Technologies :</b>{project.tech}</p>
                                                                        <p><b>Description :</b>{project.desc}</p>
                                                                        <p><b>GitHub :</b><a href={project.github}> Click here to visit {project.title} code.</a></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    if (project.id % 2 ==0)
                                                        return(
                                                            <div style={{backgroundColor: 'white',border: '1px solid'}} className='row m-4'>
                                                                <div className='row m-1'>
                                                                    <div className='col-12 col-md-6 col-lg-5 col-xl-4 my-auto py-2 order-md-2' >
                                                                        <img src={project.img}  width='100%'/>
                                                                    </div>
                                                                    <div className='col-12 col-md-6 col-lg-7 col-xl-8 my-auto py-4 evenProjectDesc order-md-1'>
                                                                        <p><b>Title :</b>{project.title}</p>
                                                                        <p><b>Technologies :</b>{project.tech}</p>
                                                                        <p><b>Description :</b>{project.desc}</p>
                                                                        <p><b>GitHub :</b><a href={project.github}> Click here to visit {project.title} code.</a></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                }                        
                                                
                                )
                }
                <div style={{height:'5vh',backgroundColor:'transparent'}}></div>
            </div>
        </div>
    );
}

export default Projects;