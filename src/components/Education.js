/*
*Author: Marcos Zorzi Rosa
* 2022
*/
import React from "react";
import Accordion from "react-bootstrap/Accordion";



let education = [
    {
        id: 1,
        title: "Mobile Application Design and Development (Honours)",
        institution: "Algonquin College",
        degree: "Diploma",
        time: "2018-2020",
        roles:["HTML, JavaScript and CSS","Node.JS, Express, React and React Native","C++, C# and JAVA", 
               "Firebase and Mongo DB", "Cordova, Ajax, REST API and CORS", 
               "Adobe Photoshop, Adobe Illustrator, Adobe XD and Adobe Dreamweaver",
               "VS Code, Visual Studio, Xcode and Android Studio"]
    },
    {
        id: 2,
        title: "MBA in Project Management",
        institution: "Positivo Universtity",
        time: "2016-2017",
        degree: "MBA",
        roles:["PMBOK","Project Management Charts",
               "Agile Projects","Economic Project Viability",
               "Projects Scope and Timing","Human Resources in Projects","Quality in Projects"]
    },
    {
        id: 3,
        title: "Bachelor's in Information Systems",
        institution: "Unibrasil",
        time: "2014-2018",
        degree: "Bachelor",
        roles:["Programming practice in C, C# and JAVA", 
               "Object Oriented Programming", 
               "SQL Administration and Programming", 
               "Web Programming HTML and Java",
               "Operating Systems",
               "Network protocols",
               "Distributed Systems"]
    }
];


const Education = () =>{
    return(
        <div key ='div-edu' className='App-education' id="education">
            <h2 key ='h2-title-edu' >Education</h2>
            <hr className='solid'/>
            
            <Accordion className='education-card-list'
                        defaultActiveKey="0" flush>
            
                
                {education.map( el => 
                    <Accordion.Item key={'edu'+el.id} eventKey={'edu'+el.id} className='education-card'>
                        <Accordion.Header>{el.title}</Accordion.Header>
                        <Accordion.Body>
                            {el.institution} {el.time} 
                            <ul className="education-role-list">
                            {el.roles.map(role =>
                                <li key={'edu-li-'+el.roles.indexOf(role)} className="education-role-item">{role}</li>
                            )}
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>)}
                
            </Accordion>
      </div>
    );
}

export default Education;