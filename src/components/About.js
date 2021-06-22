import React from 'react'
import mypic2 from '../photos/kiran2.JPG'

function About() {
    return (
        <div className={'container mt-5'}>
           <div className="container text-center p-5 bg-light shadow rounded">
               <img src={mypic2} className="img-thumbnail  rounded-3"/>
           </div>
           <div className="border-top mt-5 "></div>
           <div className="bg-light p-3 shadow">
                <p className="fs-5 fw-light">About him</p>
                <p className="fs-4 fw-bold">Kiran Maruthi Kuna</p>
                <p>He was born and grown up in Kaikaram, He was currently pursuing <b>Bachelor of Technology in Computer Science and Engineering</b> Streem at Sri Vasavi Engineering College located at Pedatadepalli Tadepalligduem, West Godavari, Andhra Pardesh.</p>
                <p>He is a passionate student in learning new technologies and he is very much interested in developing various software applications. He is an innovative guy who solves problems in a different thinking perspective.
                His interest towards technologies is very keen and he even completed his Internship in second year of B.Tech at <b>1Stop in association with E-Cell IIT KANPUR</b> and he completed various certifications in his second year it self.
                He is working on <b>Web Applications using php and React JS</b> and <b>AI based Cancer detection mdoal</b>.
                </p>
           </div>
           <div className="border-top mt-5"></div>
           <div className="bg-light p-3 shadow">
                <p className="fs-5 fw-light">His Interests</p>
                <ul>
                    <li>Spending leisure time with friends and family</li>
                    <li>Learning new technologies</li>
                    <li>Watching Movies</li>
                </ul>
           </div>
           <div className="border-top mt-5"></div>
           <div className="bg-light p-3 shadow">
               <p className="fs-5 fw-light">Education</p>

               <p className="fw-bold">Graduation</p>
               <p className="m-0">Sri Vasavi Engineering College</p>
               <p className="m-0">Computer Science and Engineering</p>
               <p className="m-0">Joined on 2019</p>
               <p>Purusing currently</p>

               <p className="fw-bold">Intermediate</p>
               <p className="m-0">Elite Junior College</p>
               <p className="m-0">MPC streem</p>
               <p className="m-0">Score: 7.53 CGPA</p>
               <p>2017-2019</p>

               <p className="fw-bold">Schooling</p>
               <p className="m-0">Bharatiya Vidya Bhavan's</p>
               <p className="m-0">4th grade - 10 grade</p>
               <p className="m-0">Score: 9.6 CGPA</p>
               <p>2010-2017</p>

           </div>
           <div className="border-top mt-5"></div>
           <div className="bg-light p-3 shadow">
                <p className="fs-5 fw-light">Contact him</p>
                <div>
                    <p className="fw-bold">Address : </p>
                    <p className="m-0">D.No : 3-24,Kunavari Street, Kaikaram</p>
                    <p className="m-0">West Godavari, India</p>

                </div>
                <div className="mt-3">
                    <p className="fw-bold">Contact :</p>
                    <p className="m-0">Phone : <a href="tel:+919133003443" className="text-decoration-none text-dark">+91-9133003443</a></p>
                    <p className="m-0">E-mail : <a href="mailto:kunakiranmaruthi@gmail.com">kunakiranmaruthi@gmail.com</a></p>

                </div>
                <div className="mt-5 text-center">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d477.4177972201555!2d81.3702476511393!3d16.80936265677868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3648c45f4e1ddb%3A0xbcb4a14c90034bae!2zMTbCsDQ4JzMzLjciTiA4McKwMjInMTIuNSJF!5e0!3m2!1sen!2sin!4v1623054301999!5m2!1sen!2sin" width="auto" height="450" allowfullscreen="" loading="lazy"></iframe>
                </div>
           </div>
        </div>
    )
}
export default About
