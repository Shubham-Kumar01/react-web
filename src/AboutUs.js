import React from "react";
import howToUse from "./API/howToUse";
import { useState } from "react";

const AboutUs = () => {
  const [use, setUse] = useState(howToUse);
  return (
    <>
      <section className="common-section our-services">
        <div className="container mb-5">
          <div className="row">
            <div className="col-12 col-lg-5 text-center our-services-leftside-img">
              <img src="./images/hero3.jpg" alt="aboutusImgg" />
            </div>
            {/* aboutus right side data */}
            <div className="col-12 col-lg-7 our-services-list">
              <h3 className="mini-title">
                -- AVAILABLE @ GOOGLE AND IOS APP STORE ONLY
              </h3>
              <h1 className="main-heading"> How to use the App?</h1>
              {use.map((curEle) => {
                const { id, title, info } = curEle;
                return (
                  <>
                    <div className="row our-services-info">
                      <div className="col-1 our-services-number">{id}</div>
                      <div className="col-10 our-services-data">
                        <h2>{title}</h2>
                        <p className="main-hero-para">{info}</p>
                      </div>
                    </div>
                  </>
                );
              })}

              <br />
              <button className="btn style btn-style-border">learn more</button>
            </div>
          </div>
        </div>
      </section>
      {/* right side same */}

      <section className="common-section our-services our-services-rightside">
        <div className="container mb-5">
          <div className="row">
            {/* aboutus right side data */}
            <div className="col-12 col-lg-7 our-services-rightside-content d-flex justify-content-center align-items-start flex-column">
              <h3 className="mini-title">-- SUPPORT IN ANY LANGUAGES</h3>
              <h1 className="main-heading">
                World class support is avaliable 24/7
              </h1>
              {use.map((curEle) => {
                const { id, title, info } = curEle;
                return (
                  <>
                    <div className="row our-services-info">
                      <div className="col-1 our-services-number">{id}</div>
                      <div className="col-10 our-services-data">
                        <h2>{title}</h2>
                        <p className="main-hero-para">{info}</p>
                      </div>
                    </div>
                  </>
                );
              })}

              <br />
              <button className="btn style btn-style-border">learn more</button>
            </div>
            <div className="col-12 col-lg-5 our-services-rightside-img">
              <img src="./images/callcenter.jpg" alt="callcenter" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
