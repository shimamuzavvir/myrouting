import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav'
import Home from './components/Home'
import Fullstack from './components/Fullstack'
import DataScience from './components/DataScience';
import CyberSec from './components/CyberSec';
import Career from './components/Career';

const App = () => {
  let data = [
    {
      "image": "https://img.freepik.com/free-vector/male-programmer-working-computer-office-wall-with-hanging-reminder-stickers-developer-creating-new-software-interface-coding-programming-system-administrator-designer-character_575670-1159.jpg?w=996&t=st=1708007736~exp=1708008336~hmac=d397ac4a8c57cdeda5cd1694c7ff82d4172babd05a0da3e187aea7aba024670e",
       "course": "Full Stack Development",
      "content": "Best Full-Stack Development Project Ideas in 2024",
      "date":"30",
      "month":"April"
    },
    {
      "image": "https://img.freepik.com/free-vector/site-stats-concept-illustration_114360-2519.jpg?w=740&t=st=1708017294~exp=1708017894~hmac=b74cd955224188125f059a5da6a30905f4ba4672261dc7aea7afe65437e5f2a7",
      "course": "Data Science",
      "content": " Build and deploy machine learning models in production environments.",
      "date": "20",
      "month": "May"
 },
 {
  "image": "https://img.freepik.com/free-vector/hacker-activity-concept-with-man_23-2148526847.jpg?w=740&t=st=1708017926~exp=1708018526~hmac=dbb85001346372bddefcfe11923ea5d5dddf63e7a1825db61da17813c90bb6da",
  "course": "Cyber Security",
  "content": "Understand how to detect and respond to security incidents.",
  "date": "10",
  "month": "March"

 },
 {
  "image": "https://img.freepik.com/free-vector/goal-achievement-career-promotion-school-graduation-educational-trajectory-educational-capital-strategy-determine-your-educational-way-concept-pinkish-coral-bluevector-isolated-illustration_335657-1255.jpg?w=740&t=st=1708018606~exp=1708019206~hmac=482debc737ee825d59128acfd5815b2857a280ba119eb3fe6a879e009d5b2400",
 "course": "Career Development",
 "content": "Acquire digital literacy skills and stay updated with emerging technologies relevant to your field of interest.",
 "date": "20",
 "month": "May"},
     {
      "image": "https://img.freepik.com/free-vector/programmer-working-web-development-code-engineer-programming-python-php-java-script-computer_90220-250.jpg?w=996&t=st=1708007630~exp=1708008230~hmac=6e0d783f311fc5868e58db669ec02768b3fe4a214842fad3901566bef8c15436",

       "course": "Full Stack Development",
       "content": "Explore modern development tools and methodologies including version control.",
       "date":"6",
       "month":"JULY"
    },
    {
      "image": "https://img.freepik.com/free-vector/businessmen-work-with-laptops-graph-columns-business-hierarchy-hierarchical-organization-levels-hierarchy-concept-white-background_335657-2031.jpg?w=740&t=st=1708018735~exp=1708019335~hmac=eba717b8859c358d130077c67512d9891f2e780b0f4d0af33f44372718115cea",
      "course": "Career Development",
      "content": "Receive personalized career coaching and guidance from industry professionals.",
      "date": "25",
      "month": "June"
    },
    {
      "image": "https://img.freepik.com/premium-vector/programmer-analyzing-data-with-laptop_18660-884.jpg?w=360",
      "course": "Data Science",
      "content": "Explore data manipulation and transformation methods.",
      "date": "15",
      "month": "August"
    },
    {
      "image": "https://img.freepik.com/premium-vector/programming-courses-web-design-concept-with-people-characters-illustration_9209-4586.jpg?w=740",
      "course": "Full Stack Development",
      "content": "8 Top Full Stack Web Developer Coding Projects For You!",
      "date": "22",
      "month": "July"

    },
    {
      "image": "https://img.freepik.com/free-vector/progress-concept-illustration_114360-1522.jpg?w=740&t=st=1708017620~exp=1708018220~hmac=1504ce7de3b32b8932bfd7fd8ad9d0ba8730085a93254ce90f15eccd532fbc55",
      "course": "Career Development",
      "content": "Enhance your leadership and management abilities, including conflict resolution, time management, and decision-making skills.",
      "date": "15",
      "month": "April"
    },
    {
      "image": "https://img.freepik.com/free-vector/privacy-engineer-laptop-with-shield-improving-level-systems-privacy-privacy-engineering-privacy-centric-model-personal-data-defence-concept_335657-2426.jpg?w=740&t=st=1708017968~exp=1708018568~hmac=ea0657dd521af33d075219730d432404268b404feafb76509f2c4700358c8722",
      "course": "Cyber Security",
      "content": "Explore techniques for securing computer systems and networks, including access controls, firewalls, intrusion detection systems, and VPNs.",
      "date": "15",
      "month": "April"
    },
    {
      "image": "https://img.freepik.com/premium-vector/analyzing-business-using-laptop-concept-trending-flat-illustration_720185-173.jpg?w=360",
      "course": "Data Science",
      "content": "Gain practical experience through hands-on projects and case studies. Work with real-world datasets to solve business problems and make data-driven decisions.",
      "date": "25",
      "month": "June"
    },
    {
      "image": "https://img.freepik.com/free-vector/flat-safer-internet-day-background_23-2151163157.jpg?w=740&t=st=1708018062~exp=1708018662~hmac=e9ffced3a5f69a2a0fa9476707880b1a513f0b1aaaccec487547c48aa28fa30f",
      "course": "Cyber Security",
      "content": "Get hands-on experience with cybersecurity tools and technologies. Work on lab exercises and simulations to reinforce learning and practical skills.",
      "date": "25",
      "month": "June"
    },
  ]
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home data={data} />}></Route>
          <Route path='/fsd' element={<Fullstack data={data} />}></Route>
          <Route path='/datascience' element={<DataScience data={data} />}></Route>
          <Route path='/cyber' element={<CyberSec data={data} />}></Route>
          <Route path='/career' element={<Career data={data} />}></Route>


        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;