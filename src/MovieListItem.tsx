import React from "react";
import "./Styles/MovieListItem.css";
import { useHistory } from "react-router-dom";

function MovieListItem({ id, text, rating, review, img_src }: movie) {
  const history = useHistory();
  const clickHandler = () => {
    let obj = {
      id: id,
      text: text,
      rating: rating,
      review: review,
      img_src: img_src,
    };
    history.push({
      pathname: "/review",
      state: obj,
    });
  };
  return (
    <div className="movie-list-item" onClick={clickHandler}>
      <img src={img_src} className="movie-poster" alt="" />
      <div className="movie-name">
        <p style={{ marginLeft: "10px", fontSize: "25px" }}>{text}</p>
      </div>
    </div>
  );
}

export default MovieListItem;
