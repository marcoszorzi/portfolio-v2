/*
*Author: Marcos Zorzi Rosa
* 2022
*/
import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import { CardGroup,Row,Col } from "react-bootstrap";

let projects = [
    {
        id: 1,
        name: "CBSA HELPER",
        description: "Voice assistant application for Canada Border Services Agency(CBSA), build in NodeJS hosted on Google Firebase and deployed for Amazon Alexa® and Google Home®.",
        platform: "Alexa, Google Home, Web",
        screenshot: "../img/CBSA_Helper.png",
        link: "https://bot.dialogflow.com/96a34494-a331-4f68-807a-43f956ea865e"
      },
    {
        id: 2,
        name: "Restaurant Finder",
        description: "Restaurants suggestions using Yelp® database, fetch by geolocation. React and Expo.",
        platform: "Expo(iOS/Android)",
        screenshot: "../img/Restaurant_Finder.png",
        link: "https://expo.io/@zorz0004/9135Final"
      },
      {
        id: 3,
        name: "PIZZA SHOP",
        description: "Full-stack developed website, using HTML 5, CSS 3, Javascript on front-end. NodeJS, MongoDB, Express and CRUD makes everything happend on back-end.",
        platform: "Web",
        screenshot: "../img/web_pizzashop.png",
        link: "https://zorz0004.github.io/pizzashop/"
      },
      {
        id: 4,
        name: "PLAYR",
        description: "Music player developed with Cordova using Cordova Media plugin.",
        platform: "Android",
        screenshot: "../img/a_playr.png",
        link: "https://github.com/zorz0004/playr"
      },
      {
        id: 5,
        name: "FINDR",
        description: "Geolocation app developed with Cordova using Google Maps API.",
        platform: "iOS",
        screenshot: "../img/ios_findr.png",
        link: "https://github.com/zorz0004/findr"
      },
      {
        id: 6,
        name: "Portfolio (Bootstrap project)",
        description: "Portfolio developement using Bootstrap.",
        platform: "Web",
        screenshot: "../img/web_bootstrap_exercise.png",
        link: "https://zorz0004.github.io/bootstrap-assignment/"
      }
];


const Projects = () =>{
  return(
    <div key='div-proj' className='App-projects'>
        <h2 key='h2-title-proj'>Projects</h2>
        <hr className='solid'/>
        <Row xs={5} md={2} className="g-4">
          {projects.map(el =>
            <Col>
              <Card style={{ width: '80%', height: '25%'}}>
                <Card.Img variant="top" src={el.screenshot} />
                <Card.Body>
                  <Card.Title>{el.name}</Card.Title>
                  <Card.Text>
                    {el.description}
                  </Card.Text>
                  <Button variant="primary">Request Code</Button>
                </Card.Body>
              </Card>
            </Col>
          )}
        </Row>           
    </div>
  );
};

export default Projects;


/**
 * <Carousel fade>
 *            {projects.map(el =>
 *              <Carousel.Item>
 *                <img 
 *                  className="d-block align-middle"                   
 *                  src={el.screenshot}
 *                  alt={el.name}/>

 *                <Carousel.Caption>
 *                  <h3>{el.name}</h3>
 *                  <p>{el.description}</p>
 *                </Carousel.Caption>
 *              </Carousel.Item>
 *              )}
 *          </Carousel>

 *          <br/><br/>
 *          <hr className='solid'/>
 */