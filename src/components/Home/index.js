import React from "react";
import "./style.css";
import l from "./l.webp";
const Banner = () => {
  return (
    <>
  
      <header>
       
        <div className="header_content">
          <div className="content_main">
            <h1> A Very Delicious food for you</h1>
            <p>We made fresh and healthy meals with diffrent recipes.</p>
            <button>
              Veiw Menu...<i className="fa fa-arrow-right"></i>
            </button>
          </div>
        </div>
        <img src={l} className="header_img" alt="BannerImg" />
      </header>
      <div className="divider">
          <h2>Delicious Food </h2>
        </div>
    </>
  );
};

export default Banner;
