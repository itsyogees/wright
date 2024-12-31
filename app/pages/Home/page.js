"use client";

import React, { useState } from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      title: "Drive Lasting Behavioral CHANGE in Your Workforce",
      description:
        "Use science-based interventions and timely Nudges to create meaningful, enduring shifts in employee habits and workplace culture.",
      buttonText: "Book a Demo",
    },
    {
      title: "Measure What Matters and Ignite Real Progress",
      description:
        "Focus on the metrics that truly drive performance, using data insights to fuel tangible, lasting change in your organization.",
      buttonText: "Book a Demo",
    },
    {
      title: "Micro-Targeted Nudges for Rapid Behavior Shifts",
      description:
        "Deliver personalized prompts that address individual challenges, helping each employee take meaningful steps toward self-improvement and team success.",
      buttonText: "Book a Demo",
    },
  ];

  const sectionT = [
    {
      imgSection: '/image/homeSection31.jpeg',
      title: '“Nudges”- tiny interventions',
      description:
        '“Nudges”, tiny interventions in the work environment to get people attention that influence their behavior. Nudges, remind & encourage people to make better decisions.',
      link: 'Know More',
    },
    {
      imgSection: '/image/homeSection32.jpeg',
      title: 'Science and data analytics',
      description:
        'Training evaluation no longer be based on personal experiences or opinions. Bringing more science and data analytics to measure actual behavior change to make work better.',
      link: 'Know More',
    },
    {
      imgSection: '/image/homeSection33.jpeg',
      title: 'Micro-Targeted follow-ups',
      description:
        'Machine Learning & Artificial Intelligence driven micro-targeted follow-ups helps us to know, what intervention to send, to which person, at what time.',
      link: 'Know More',
    },
  ];
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
    <div className="home">
      <div className="homeContainer">
        <div className="homeContent">
          <div className="homeContent-text">
          <div className="carousel">
            <div
              className="slides"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div
                  className={`slide ${index === currentIndex ? "active" : ""}`}
                  key={index}
                >
                  <h2>
                    {slide.title.split("CHANGE")[0]}
                    <span>CHANGE</span>
                    {slide.title.split("CHANGE")[1]}
                  </h2>
                  <p>{slide.description}</p>
                  <button className="bookDemo-btn">{slide.buttonText}</button>
                </div>
              ))}
            </div>
           
          </div>
        
          </div>
         
        </div>

        <div className="dots">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    
    </div>
      <div className="homeVideo">
      <img src="/image/home1.png" alt="" />
    </div>
    <div className="homeSection2">
      <div className="homeSection2Head">
        <h2>You'll <span>2X</span>  your results with WRIGHTS. Here's how </h2>
      </div>
      <div className="homeSection2Content">
        <p>At WRIGHTS we believe lasting behavioral changes can be achieved through small interventions in the work flow called NUDGES. Nudge is a Nobel prize winning concept in behavioral economics that drives lasting behavioral change. We send micro-targeted nudges not just to the participants but also to their stakeholders (managers, reports, peers and collaborators)</p>
      </div>
    </div>
    <div className="homeSection3">
    <div className="sections-container">
      {sectionT.map((item, index) => (
        <div className="section-item" key={index}>
          <img src={item.imgSection} alt={item.title} />
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <a href="#">{item.link}</a>
        </div>
      ))}
    </div>
    </div>
    <div className="homeSection4">
      <div className="homeSection4Container">
        <div className="homeSection4Content">
          <div className="homeSection4ContentContainer">
          <img src="/image/homeSection41.png" alt="" />
<div className="section4Contents">
  
  <div className="section4Content">
    <IoMdCheckmarkCircleOutline/>
<p>LinkedIn Marketing Partner</p>
  </div>
  <div className="section4Content">
    <IoMdCheckmarkCircleOutline/>
    <p>GDPR & SOC2 Type II</p>
    </div>
</div>
          </div>

        </div>
        <div className="homeSection4Content">
          <div className="homeSection4ContentContainer">

          <h2>See Wrights in Action</h2>
          <p>Schedule a personalized demo or sign up to get
started for free</p>
<div className="homeSection4ContentBtn">
  <button className="btn">Book a Demo</button>
  <button className="cancle">Try for free</button>
</div>
          </div>
         
          </div>
      </div>
    </div>
    <div className="homeSection5">
      <div className="homeSection5Container">
        <div className="homeSection5Head">
          <h2>Hear From Our Clients</h2>
        </div>
        <div className="homeSection5Content">
          <div className="homeSection5ContentReview">
<div className="section5Review2">
<img src="/image/logo.png" alt="" />
<h2>“Wrights has improved our campaign ROI by
helping us move from guesswork to making 
informed decisions.”</h2>
<div className="section5Review2Text">
  <img src="/image/review.png" alt="" />
  <div className="section5Text">
    <p>Sam</p>
    <span>Manger</span>
  </div>
</div>
</div>
<div className="section5Review1">
  <p>“</p>
</div>
          </div>
          <div className="homeSection5ContentTestimenal">
            <div className="testimoalContent">
            <h2>3<span>x</span></h2>
<p>Increase in Sales
Engagement</p>
<button className="btn">Book a Demo</button>
            </div>

          </div>
        </div>
      </div>
    </div>
    </>
    
  );
};

export default Home;
