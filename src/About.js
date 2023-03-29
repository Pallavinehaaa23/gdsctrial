import React from 'react'
// import NavBar from './NavBar'
// import { Link } from 'react-router-dom';
import img from './WhatsApp Image 2023-03-15 at 10.39.04.jpg';
import img2 from  './WhatsApp Image 2023-03-15 at 10.39.05.jpg';
import img3 from './pics1.jpg';
import img4 from './pics2.jpg';
import { FaInstagram,FaTwitter,FaGithub,FaFacebook } from "react-icons/fa";
const About = () => {
  return (
   <>
   <div className="body">
   <div className="imgabout">
    <div className="imgtxt">
    <h1>ABOUT US</h1>
    </div>
    <img src="https://positiveroutines.com/wp-content/uploads/2018/05/man-holding-phone-with-icons-coming-out.jpg" alt="" srcset="" />
    </div>
    <div className="content-1">
        <h2>Problem Statement</h2>
        <img src={img} alt="" />
    </div>
    <div className="content-2">
        <h2>Our Mission</h2>
        <img src={img2} alt="" />
    </div>
    <div className="content-3">
      <img src={img3} alt="" srcset="" />
    </div>
    <div className="content-4">
      <img src={img4} alt="" srcset="" />
    </div>
    <h1>Our Team</h1>
      <section className="contain">
        <div className="team">
        <div className="bg-img">
           <img src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v1016-c-08_1-ksh6mza3.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=f584d8501c27c5f649bc2cfce50705c0" alt="" />
          </div>
          <div className="pic">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4HKYB8JYfI8JMPHK4nFgJuvzR32Hf65idaQ&usqp=CAU" alt="" />
          </div>
          <div className="info">
            <h3>Name</h3>
            <span>Web designer</span>
            <div className="iconsabt">
             <a href="#"><FaInstagram/></a>
             <a href="#"><FaFacebook/></a>
             <a href="#"><FaTwitter/></a>
             <a href="#"><FaGithub/></a>
            </div>
          </div>
          
        </div>
        <div className="team">
        <div className="bg-img">
           <img src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v1016-c-08_1-ksh6mza3.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=f584d8501c27c5f649bc2cfce50705c0" alt="" />
          </div>
          <div className="pic">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4HKYB8JYfI8JMPHK4nFgJuvzR32Hf65idaQ&usqp=CAU" alt="" />
          </div>
          <div className="info">
            <h3>Name</h3>
            <span>Web designer</span>
            <div className="iconsabt">
             <a href="#"><FaInstagram/></a>
             <a href="#"><FaFacebook/></a>
             <a href="#"><FaTwitter/></a>
             <a href="#"><FaGithub/></a>
            </div>
          </div>
          
        </div>
        <div className="team">
        <div className="bg-img">
           <img src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v1016-c-08_1-ksh6mza3.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=f584d8501c27c5f649bc2cfce50705c0" alt="" />
          </div>
          <div className="pic">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4HKYB8JYfI8JMPHK4nFgJuvzR32Hf65idaQ&usqp=CAU" alt="" />
          </div>
          <div className="info">
            <h3>Name</h3>
            <span>Web designer</span>
            <div className="iconsabt">
             <a href="#"><FaInstagram/></a>
             <a href="#"><FaFacebook/></a>
             <a href="#"><FaTwitter/></a>
             <a href="#"><FaGithub/></a>
            </div>
          </div>
          
        </div>
        <div className="team">
          <div className="bg-img">
           <img src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v1016-c-08_1-ksh6mza3.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=f584d8501c27c5f649bc2cfce50705c0" alt="" />
          </div>
          <div className="pic">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4HKYB8JYfI8JMPHK4nFgJuvzR32Hf65idaQ&usqp=CAU" alt="" />
          </div>
          <div className="info">
            <h3>Name</h3>
            <span>Web designer</span>
            <div className="iconsabt">
             <a href="#"><FaInstagram/></a>
             <a href="#"><FaFacebook/></a>
             <a href="#"><FaTwitter/></a>
             <a href="#"><FaGithub/></a>
            </div>
          </div>
          
        </div>
      </section>
      </div>
 </>
  )
}

export default About
