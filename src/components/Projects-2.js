/*
*Author: Marcos Zorzi Rosa
* 2024
*/
import React from "react";


let projects = [
    {
      id: 1,
      name: "GERÍCHT RESTAURANT",
      description: "Frontend fully responsive project, built with React and amazing styles and navigation planned on Figma.",
      platform: "Web",
      technologies: ["React", "Figma"],
      screenshot: "./img/Gericht-Restaurant.PNG",
      github_repo: "https://github.com/marcoszorzi/gericht-restaurant",
      link: "https://marcoszorzi.github.io/gericht-restaurant/"
    },
    {
      id: 2,
      name: "GPT-3",
      description: "Frontend fully responsive project, built with React and captivating navigation, using Figma for planning and GPT-3 as inspiration.",
      platform: "Web",
      technologies: ["React", "Figma"],
      screenshot: "./img/GPT-3.PNG",
      github_repo: "https://github.com/marcoszorzi/gpt3_jsm",
      link: "https://marcoszorzi.github.io/gpt3_jsm/"
    },
    {
      id: 3,
      name: "CBSA HELPER",
      description: "Voice assistant application for Canada Border Services Agency(CBSA), build in NodeJS hosted on Google Firebase and deployed for Amazon Alexa® and Google Home®.",
      platform: "Alexa, Google Home, Web",
      technologies: ["Node.JS", "Firebase", "Alexa", "Dialogflow", "Twilio"],
      screenshot: "./img/CBSA_Helper.png",
      github_repo: "mailto:marcoszorzi@gmail.com?subject=Request code sharing for CBSA Helper Project.",
      link: "https://bot.dialogflow.com/96a34494-a331-4f68-807a-43f956ea865e"
    },
    {
      id: 4,
      name: "Restaurant Finder",
      description: "Restaurants suggestions using Yelp® API based on user's geolocation.",
      platform: "iOS & Android",
      technologies: ["React Native", "Expo", "Yelp Fusion API"],
      screenshot: "./img/Restaurant_Finder.png",
      github_repo: "mailto:marcoszorzi@gmail.com?subject=Request code sharing for Restaurant Finder Project.",
      link: "https://expo.io/@zorz0004/9135Final"
    },
    {
      id: 5,
      name: "PIZZA SHOP",
      description: "Full-stack website for Pizza Shop. User and staff management, inventory and checkout.",
      platform: "Web",
      technologies: ["Express", "MongoDB", "RESTful API"],
      screenshot: "./img/web_pizzashop.png",
      github_repo: "mailto:marcoszorzi@gmail.com?subject=Request code sharing for Pizza Shop Project.",
      link: "https://zorz0004.github.io/pizzashop/"
    },
    {
      id: 6,
      name: "MyChat App",
      description: "React instant messenger, hosted on Expo. Available for Android, iOS and Web.",
      platform: "iOS, Android and Web",
      technologies: ["React", "Firebase", "Expo"],
      screenshot: "./img/My-Chat-App.png",
      github_repo: "https://github.com/marcoszorzi/my-chat-app",
      link: "https://expo.dev/@marcoszorzi/my-chat-app"
    }
];


const Projects2 = () =>{
  return(
    <div key='div-proj2' id='projects'className='App-projects2'>
        <h2 key='h2-title-proj2'>Projects</h2>
        <hr className='solid'/>

          <ul key='proj2-ul' className="proj2-ul">
            {projects.map(el =>
              <li key={'proj2-li-'+projects.indexOf(el)} className="proj2-li">
                <div key={'proj2-div-content-'+projects.indexOf(el)} className="proj2-content">
                  <h3 key={'proj2-title-'+projects.indexOf(el)} className="proj2-title">{el.name}</h3>
                  <div key={'proj2-description-'+projects.indexOf(el)} className="proj2-description">
                    <p>{el.description}</p>
                  </div>
                  <ul key={'proj2-techs-'+projects.indexOf(el)} className="proj2-technology">
                    {el.technologies.map(tech =>
                      <li key={'proj2-techs-li-'+el.technologies.indexOf(tech)}>{tech}</li>
                      )}
                  </ul>
                  <div key={'proj2-link-'+projects.indexOf(el)} className="proj2-link">
                    <a href={el.github_repo} rel="noopener noreferrer" target="_blank">
                      {/* <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><title>GitHub Repo</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg> */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-github" viewBox="0 0 24 24">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
                    </a>
                    <a href={el.link} rel="noopener noreferrer" target="_blank">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-box-arrow-up-right" viewBox="0 0 24 24"><title>{el.name}</title>
                        <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                        <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                      </svg>
                    </a>
                  </div>
                </div>
                <div key={'proj2-image-'+projects.indexOf(el)} className="proj2-image">
                  <img src={el.screenshot} alt={el.name}/>
                </div>
              </li>
            )}

          </ul>
                  
    </div>
  );
};

export default Projects2;



// <a href="https://github.com/bchiang7/spotify-profile" aria-label="GitHub Link" rel="noopener noreferrer" target="_blank">
// <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
// </a>