/*
*Author: Marcos Zorzi Rosa
* 2024
*/
import React from "react";
import Accordion from "react-bootstrap/Accordion";

let experience = [
  {
    "id": 1,
    "title": "IT Specialist",
    "company":"Augmentt Technology Inc.",
    "time": "2022-Current",
    "roles":[
      "Customer Issue Investigation and Reporting: Skilled in resolving customer issues through collaboration with development, providing clear reports for efficient solutions.",
      "Investigation of issues reported by customers and communication with the internalWorkload Management and Deadline Adherence: Proficient in strategic planning, prioritization, and meeting deadlines with meticulous attention to detail, ensuring consistent high-quality outcomes. product development team",
      "Customer-Centric Communication and Process Improvement: Exhibits strong customer responsiveness, collaborates to boost overall experience, and drives proactive process enhancements for improved outcomes."]
  },
    {
      "id": 2,
      "title": "Payroll Business Process Analyst",
      "company":"VON Canada",
      "time": "2020-2022",
      "roles":[
        "Strong attention to detail: Generating precise HR master data reports and spotting process improvement chances demands meticulous attention to detail.",
        "Effective communication and collaboration: Providing support to colleagues and clients, delivering training materials, and resolving data errors demands adept communication and collaborative skills.",
        "Project management: Balancing tasks, driving daily enhancements, and managing year-end processing and special projects showcase adept project management."]
    },
 {
    "id": 3,
    "title": "Payroll Representative",
    "company":"VON Canada",
    "time": "2019-2020",
    "roles":[
      "Data Integrity Management: Skillfully preserve VON employee data accuracy and integrity from onboarding to departure, ensuring lifecycle consistency.",
      "HRIS Administration and Reporting: Efficiently manage HRIS system, providing accurate data to HR and Payroll. Skilled at producing comprehensive reports (hours, leave, payroll reconciliation, seniority).",
      "Workflow Prioritization and Employee Support: Expertly prioritize tasks for timely payroll during blackout periods. Offer exceptional employee support by promptly addressing inquiries, investigating concerns, and providing resolutions."]
  },
  {
    "id": 4,
    "title": "Systems Consultant - Contractor",
    "company": "Senior Curitiba",
    "time": "2018-2019",
    "roles":[
      "Programming in LSP(Proprietary language, C based) and Java. Glassfish server versions 2, 3 and 4.",
      "Perform backup and restore routines in Oracle and SQL databases.",
      "Perform systems update and modules installations in server side.",
      "Management of projects through all phases from planning through to maintenance and support",
      "Perform testing, configuration changes, enhancements and new functionality",
      "Prepare documentation and user manuals, including written instruction on procedures related"]
  },
  {
    "id": 5,
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
    "id": 6,
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
    "id": 7,
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