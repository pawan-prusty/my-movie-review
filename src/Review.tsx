import React from "react";
import { useHistory, useLocation } from "react-router";

import { BsStarFill, BsStar, BsStarHalf } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import "./Styles/review.css";

function Review() {
  const { state } = useLocation<movie>();
  const history = useHistory();

  const ifNotZero = (iszerostring: number): boolean => {
    if (iszerostring === Math.ceil(iszerostring)) return false;
    return true;
  };
  const deleteHandle = (e: any) => {
    e.preventDefault();
    fetch(`http://localhost:9002/Movies/${state.id}`, {
      method: "DELETE",
    }).then((res) => console.log(res));
    history.push("/");
  };

  console.log(state.id);

  return (
    <div className="review-main">
      <div>
        <img
          style={{
            marginTop: "13px",
            width: "250px",
            height: "360px",

            marginRight: "10px",

            float: "left",
            marginLeft: "20px",
          }}
          src={state.img_src}
          alt=" "
        />
      </div>
      <div>
        <span className="review-header"> {state.text} </span>{" "}
        <div className="star-wrapper">
          {Array(
            !ifNotZero(state.rating) ? state.rating : Math.floor(state.rating)
          ).fill(
            <span>
              <IconContext.Provider value={{ color: "red" }}>
                <BsStarFill />
              </IconContext.Provider>
            </span>
          )}
          {ifNotZero(state.rating) ? (
            <span>
              <IconContext.Provider value={{ color: "red" }}>
                <BsStarHalf />
              </IconContext.Provider>
            </span>
          ) : (
            <></>
          )}
          {Array(
            !ifNotZero(state.rating)
              ? 10 - state.rating
              : 10 - Math.ceil(state.rating)
          ).fill(
            <span>
              <IconContext.Provider value={{ color: "red" }}>
                <BsStar />
              </IconContext.Provider>
            </span>
          )}
          <span style={{ marginLeft: "5px" }}>{state.rating}/10</span>
          <span>
            {" "}
            <button onClick={deleteHandle}>
              <IconContext.Provider
                value={{ color: "rgb(243, 55, 30)", size: "1rem" }}
              >
                <AiFillDelete />
              </IconContext.Provider>
            </button>
          </span>
        </div>
        <div style={{ paddingLeft: "2%", paddingRight: "2%" }}>
          <span className="review-paragraph">{state.review}</span>
        </div>
      </div>
    </div>
  );
}

export default Review;
