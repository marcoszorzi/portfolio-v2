/*
*Author: Marcos Zorzi Rosa
* 2022
*/
import React from "react";
import Accordion from "react-bootstrap/Accordion";

let experience = [
    {
    "id": 1,
    "title": "Employee Payroll Business Process Analyst",
    "company":"VON Canada",
    "time": "2020-Current",
    "roles":[
    "Complete and design reporting needs for operations and corporate services",
    "Produce consistent reports on HR master data information to the Senior Management Team",
    "Ensure daily execution and management of business improvements and/or project related tasks",
    "Document “as–is” and develops “to-be” processes, identifying opportunities for business improvements",
    "Create, review and deliver end user training documentation (user guide, process flow charts, training material) and training for accuracy.",
    "Ensure the development and delivery of documentation and training on SAP standard reports",
    "Assistance with business testing for configuration changes related to the employee profile", 
    "Troubleshoos errors in data processing and pay results, encompassing Security, and determine source of error.",
    "Oversee year end processing, reporting T4’s and T2200, sunshine list and assists the Senior Director in special projects throughout the year."]
  },
 {
    "id": 2,
    "title": "Employee Services Representative",
    "company":"VON Canada",
    "time": "2019-2020",
    "roles":["Respond to queries from staff and external vendors based on priority",
    "Create, edit and format documents and reports",
    "Support Managers as needed",
    "Data Entry on SAP, HR module",
    "Setup of New Employees and paperwork analysis",
    "Process: Sick Leaves, Returns to Work, Maternity Leaves, Terminations, Pay Changes, Promotions and Transfers",
    "Provide on demand: Employment Letter, Promotion Letter, Demotion Letter and Change of Assignment Letter"]
  },
  {
    "id": 3,
    "title": "Systems Consultant",
    "company": "Senior Curitiba",
    "time": "2018-2019",
    "roles":["Provide remote support for installation, maintenance and use of Senior Systems",
    "Develop and design features and reports as requested by clients",
    "Programming in LSP(Proprietary language, C based) and Java. Glassfish server versions 2, 3 and 4.",
    "Perform backup and restore routines in Oracle and SQL databases.",
    "Perform systems update and modules installations in server side.",
    "Management of projects through all phases from planning through to maintenance and support",
    "Perform testing, configuration changes, enhancements and new functionality",
    "Prepare documentation and user manuals, including written instruction on procedures related"]
  },
  {
    "id": 4,
    "title": "Systems Administrator",
    "company": "Boticario Group",
    "time": "2018-2018",
    "roles":["Accountable for maintenance and support of Vetorh platform from Senior Systems",
            "Develop features and reports as requested from the HR area",
            "LSP Programming (Proprietary language, C based). Glassfish server versions 2 and 3.",
            "Manage user's accesses, creating login and attributing permissions",
            "Planning and development of long-term strategic goals for systems and software",
            "Monitor server/network status for application systems and ensure optimal performance of applications",
            "Ensure that application use is not interrupted by security or other infrastructure systems",
            "Troubleshoot real-time problems with minimum impact to users or the business overall",
            "Prepare documentation and user manuals, including written instruction on procedures related",
            "Liaise with vendors and various teams regarding complex requests.",
            "Follow-up on internal projects related to HR area with diverse systems platforms."]
  },
  {
    "id": 5,
    "title": "Systems Consultant",
    "company": "Senior Curitiba",
    "time": "2014-2018",
    "roles":["Provide remote support for installation, maintenance and use of Senior Systems",
            "Develop and design features and reports as requested by clients",
            "LSP Programming (Proprietary language, C based) and Java. Glassfish server versions 2, 3 and 4.",
            "Perform backup and restore routines in Oracle and SQL databases.",
            "Perform systems update and modules installations in server side.",
            "Management of projects through all phases from planning through to maintenance and support",
            "Perform testing, configuration changes, enhancements and new functionality",
            "Prepare documentation and user manuals, including written instruction on procedures related",
            "Elaborate and perform training for clients"]
  },
  {
    "id": 6,
    "title": "Systems Administrator",
    "company": "Lactec Institutes",
    "time": "2009-2014",
    "roles":["Accountable for application installation, maintenance and support of Senior Systems",
            "Development of features and reports as requested from the company's multiple areas",
            "LSP Programming (Proprietary language, C based). Glassfish server versions 2 and 3",
            "Management of users access, providing login creation and attributing permissions",
            "Elaborate and perform training to end-users about new features.",
            "Perform backup and restore in Oracle database as needed in system updates.",
            "Monitor server/network status for application systems and ensure optimal performance",
            "Ensure that application use is not interrupted by security or other infrastructure systems",
            "Troubleshoot real-time problems with minimum impact to users or the business overall",
            "Prepare documentation and user manuals, including written instruction on procedures related",
            "Liaise with vendors and various teams regarding complex requests."]
  }
];

const Experience = ()=>{
    return(
        <div key='div-exp' id='experience' className='App-experience'>
            <h2 key ='h2-title-exp' >Experience</h2>
            <hr className='solid'/>
        
            <Accordion className='experience-card-list'
                        defaultActiveKey="0" flush>
                          
                
                {experience.map( el => 
                    <Accordion.Item key={'exp'+el.id} eventKey={'exp'+el.id} className='experience-card'>
                        <Accordion.Header>{el.time} | {el.title} at {el.company}</Accordion.Header>
                        <Accordion.Body>
                            <strong>{el.company}</strong>
                            <ul className="experience-role-list">
                            {el.roles.map(role =>
                                <li key={'exp-li-'+el.roles.indexOf(role)} className="experience-role-item">{role}</li>
                            )}
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>)}
                
            </Accordion>

            
        </div>
    );
}

export default Experience;