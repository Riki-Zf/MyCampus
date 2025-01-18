import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets//user-1.png";
import user_2 from "../../assets//user-2.png";
import user_3 from "../../assets//user-3.png";
import user_4 from "../../assets//user-4.png";

const Testimonials = () => {
  //slider logic
  const slider = useRef();
  let tx = 0;
  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img src={back_icon} alt="" className="back-btn" onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>roby hardisk</h3>
                  <span>edusity, ina</span>
                </div>
              </div>
              <p>surga kaum adam ceweknya pada cantik</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>rehan karbu</h3>
                  <span>edusity, ina</span>
                </div>
              </div>
              <p>ada makan gratisnya cuy, lets go!</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>abdul kebab</h3>
                  <span>edusity, ina</span>
                </div>
              </div>
              <p>p info loker</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>bagas oli samping</h3>
                  <span>edusity, ina</span>
                </div>
              </div>
              <p>au ah malas pen beli truck</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
