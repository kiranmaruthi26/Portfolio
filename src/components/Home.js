import React from 'react'
import '../styles/style.css'
import mypic from '../photos/kiran.jpg'
import getimg from '../photos/getimg.jpg'
import srccode from '../photos/srccode.jpg'
import cselogo from '../photos/cse_logo.JPG'
import Typical from 'react-typical';
import C_lang from '../certificates/C-lang_certificate.pdf';
import Adv_APP from '../certificates/Adv_Android_AppDevlopment_KiranMaruthi.pdf'
import basic_App from '../certificates/Basic_AAD_Kiran Maruthi Kuna.pdf'
import python from '../certificates/Kuna Kiran Maruthi_python_APSSDC.pdf'
import intro_web from '../certificates/Certificate for Kiran Maruthi Kuna_webdesign_skiltohair.pdf'
import web_deg_dev from '../certificates/kiran maruthi_certificate_Apponix_web desgining.pdf'
import python_ML from '../certificates/Kiran_python_MIT-converted.pdf'
import web_angular from '../certificates/apssdc-ANGULAR-91.pdf'
import innovation from '../certificates/Innovation and Entrepreneurship.pdf'
import java_course from '../certificates/Java_Udemy.pdf'
import life_Science from '../certificates/AI_LifeScience.pdf'
function Home() {
    return (
        <div role="main" className="container mt-5 ">
            <div className="row row-cols-1 row-cols-md-2 row-cols-sm-1 row-cols-lg-2 text-center bg-light p-3 shadow p-3 mb-5 rounded-3">
                <div className="col">
                    <div className="w-auto p-2">
                       <p className="text-wrap  fst-italic fs-1 fw-light">Hi, I'm Kiran Maruthi</p>
                       <p className="text-wrap  fst-italic fs-4 fw-light">
                           I'm {' '}
                        <Typical
                        loop={Infinity}
                        wrapper = "b"
                        steps={[
                            'a Student ',
                            1000,
                            'from Sri Vasavi Engineering College',
                            1000
                        ]}
                        
                        />
                       </p>
                    <div className="text-center mt-5">
                    <a href="#projects" className="btn btn-outline-info">See My Projects</a>
                    </div>
                    </div>
                </div>
                <div className="col p-2">
                    <img src={mypic} className="img-fluid w-75 rounded  "/>
                </div>
            </div>
            <div className="border-top text-center mt-5" id="projects">
                <p className="fs-2 fw-light fst-italic">Projects</p>
            </div>
            <div role="works-webpage" className="bg-light shadow-lg p-3 mb-5">
                <div className="text-center">
                    <p className="fs-4 text-uppercase">Get Cleared a dynamic Web Application</p>
                </div>
                <div className="row row-cols-1 text-center row-cols-sm-1 row-cols-md-2 row-cols-lg-2">
                    <div className="col">
                        <div className="img">
                            <img src={getimg} className="w-50 rounded"/>
                        </div>
                        <div className="">
                            <p className="fst-italic fs-4">Project Website</p>
                            <a href="https://getcleared.in" className=" text-decoration-none text-dark" target="_blank"><p className="fs-3 fw-bold">Get Cleared
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right-square-fill ml-3" viewBox="0 0 16 16">
                                <path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12zM5.904 10.803 10 6.707v2.768a.5.5 0 0 0 1 0V5.5a.5.5 0 0 0-.5-.5H6.525a.5.5 0 1 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 .707.707z"/>
                            </svg>
                            </p></a>
                        </div>
                    </div>
                    <div className="col">
                        <div className="img">
                            <img src={srccode} className="w-50 rounded"/>
                        </div>
                        <div className="">
                            <p className="fst-italic fs-4">Project Source code</p>
                            <a href="https://github.com/kiranmaruthi26/Get-Cleared" className="text-decoration-none text-dark" target="_blank"><p className="fs-3 fw-bold">Open GitHub
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right-square-fill ml-3" viewBox="0 0 16 16">
                                <path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12zM5.904 10.803 10 6.707v2.768a.5.5 0 0 0 1 0V5.5a.5.5 0 0 0-.5-.5H6.525a.5.5 0 1 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 .707.707z"/>
                            </svg>
                            </p>
                            </a>
                            
                        </div>
                    </div>

                </div>
            </div>

            <div role="works-Android" className="bg-light shadow-lg p-3 mb-5">
                <div className="text-center">
                    <p className="fs-4 text-uppercase">Cse Thopz an Android Web based Application</p>
                </div>
                <div className="row row-cols-1 text-center row-cols-sm-1 row-cols-md-2 row-cols-lg-2">
                    <div className="col">
                        <div className="img">
                            <img src={cselogo} className="w-50 rounded"/>
                        </div>
                        <div className="">
                            <p className="fst-italic fs-4">Project App</p>
                            <a href="https://github.com/kiranmaruthi26/Cse_Topzz/raw/main/app-release.apk" className=" text-decoration-none text-dark" target="_blank"><p className="fs-3 fw-bold">Download App
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right-square-fill ml-3" viewBox="0 0 16 16">
                                <path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12zM5.904 10.803 10 6.707v2.768a.5.5 0 0 0 1 0V5.5a.5.5 0 0 0-.5-.5H6.525a.5.5 0 1 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 .707.707z"/>
                            </svg>
                            </p></a>
                        </div>
                    </div>
                    <div className="col">
                        <div className="img">
                            <img src={srccode} className="w-50 rounded"/>
                        </div>
                        <div className="">
                            <p className="fst-italic fs-4">Project Source code</p>
                            <a href="https://github.com/kiranmaruthi26/Cse_Thopzz_source_code" className="text-decoration-none text-dark" target="_blank"><p className="fs-3 fw-bold">Open GitHub
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right-square-fill ml-3" viewBox="0 0 16 16">
                                <path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12zM5.904 10.803 10 6.707v2.768a.5.5 0 0 0 1 0V5.5a.5.5 0 0 0-.5-.5H6.525a.5.5 0 1 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 .707.707z"/>
                            </svg>
                            </p>
                            </a>
                            
                        </div>
                    </div>

                </div>
            </div>
            <div className="border-top text-center mt-5" id="certification">
                <p className="fs-2 fw-light fst-italic">Certifications</p>
            </div>
            <div className="container tab-div shadow-lg mb-2 p-3 rounded-3">
            <table class="table">
                {/* <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                    </tr>
                </thead> */}
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Virtual Training Program On Angular</td>
                    <td>5 April 2021 - 30 April 2021</td>
                    <td>091/APSSDC-EXCELR/ANG/0452021</td>
                    <td><a href={web_angular} target="blank">View Certificate</a></td>
                    </tr>
                   
                    <tr>
                    <th scope="row">2</th>
                    <td>Python Programming</td>
                    <td>01 June 2020 - 20 June 2020</td>
                    <td>SIP/Python/475</td>
                    <td><a href={python} target="blank">View Certificate</a></td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td>Android Applicatio Development</td>
                    <td>24 Augest 2020 - 12 Septmber 2020</td>
                    <td>STP-AAD-1587</td>
                    <td><a href={basic_App} target="blank">View Certificate</a></td>
                    </tr>
                    <tr>
                    <th scope="row">4</th>
                    <td>Advanced Android Application Development</td>
                    <td>14 Septmber 2020 - 26 Septmber 2020</td>
                    <td>AAAD-STP-168</td>
                    <td><a href={Adv_APP} target="blank">View Certificate</a></td>
                    </tr>
                    <tr>
                    <th scope="row">5</th>
                    <td>Introduction to Web Development</td>
                    <td>24 Augest 2020 - 12 Septmber 2020</td>
                    <td>FMCCKC-CE000066</td>
                    <td><a href={intro_web} target="blank">View Certificate</a></td>
                    </tr>
                    <tr>
                    <th scope="row">6</th>
                    <td>Web Designing and Development</td>
                    <td>11 July 2020</td>
                    <td>APXCCWDD201138207</td>
                    <td><a href={web_deg_dev} target="blank">View Certificate</a></td>
                    </tr>
                    <tr>
                    <th scope="row">7</th>
                    <td>C language</td>
                    <td>July 2019 - Augest 2019</td>
                    <td>CL19192</td>
                    <td><a href={C_lang} target="blank">View Certificate</a></td>
                    </tr>
                    <tr>
                    <th scope="row">8</th>
                    <td>Python Programming for Beginners</td>
                    <td>20 July 2020 - 24 July 2020</td>
                    <td>-</td>
                    <td><a href={python_ML} target="blank">View Certificate</a></td>
                    </tr>
                    <tr>
                    <th scope="row">9</th>
                    <td>Java certification course</td>
                    <td>9 June 2021</td>
                    <td>-</td>
                    <td><a href={java_course} target="blank">View Certificate</a></td>
                    </tr>
                    
                    <tr>
                    <th scope="row">10</th>
                    <td>Innovation and Entrepreneurship</td>
                    <td>24 June 2020 - 27 June 2020</td>
                    <td>-</td>
                    <td><a href={innovation} target="blank">View Certificate</a></td>
                    </tr>
                    
                    <tr>
                    <th scope="row">11</th>
                    <td>AI - Life Sciences & Pharma Sector</td>
                    <td>9 June 2021</td>
                    <td>-</td>
                    <td><a href={life_Science} target="blank">View Certificate</a></td>
                    </tr>
                </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home
