import React, { useEffect, useState } from "react";
import MovieListItem from "./MovieListItem";
import "./Styles/MovieList.css";
// import { MDBIcon, MDBContainer, MDBBtn } from "mdbreact";
import { FiFacebook, FiTwitter, FiInstagram, FiYoutube } from "react-icons/fi";
import { RiSnapchatLine } from "react-icons/ri";
import { IconContext } from "react-icons";

function MovieList() {
  const [movieList, setMovieList] = useState<Array<movie>>();

  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/pawan-prusty/my-movie-review/Movies"
    )
      .then((response) => response.json())
      .then((data) => setMovieList(data));
  }, []);
  return (
    <>
      <div className="caraousel-div">
        <div className="banner">
          <div>
            <span
              style={{
                color: "yellow",
                marginLeft: "5px",

                fontFamily: "Neusa,Impact,Helvetica Neue,Arial,Sans-Serif",
              }}
            >
              {" "}
              TRENDING{" "}
            </span>
            <span className="banner-span">
              This will have trending tv shows and movies
            </span>
          </div>
          <div className="social-media">
            <IconContext.Provider value={{ className: "react-icon" }}>
              <a href="https://www.fb.com">
                <FiFacebook />
              </a>

              <FiTwitter />
              <FiInstagram />
              <RiSnapchatLine />
              <FiYoutube />
            </IconContext.Provider>
          </div>
        </div>

        <div className="caraousel">
          <figure>
            <img
              src="https://cdn.mos.cms.futurecdn.net/e6hWKhmXszRLNSvPRHizZ5.jpg"
              alt=""
            />
            <img
              src="https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/05/Harry-Potter-Movies-in-Order.jpg?q=50&fit=contain&w=750&h=375&dpr=1.5 "
              alt=""
            />
            <img
              src="https://cdn.cloudflare.steamstatic.com/steam/apps/9900/header.jpg?t=1628627891 "
              alt=""
            />
            <img
              src="https://www.snopes.com/tachyon/2021/06/indiana-jones-1.jpg"
              alt=""
            />
            <img
              src="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/dd4ca9a0306c225d1d2452874d5c24ee53299a56b9cbd147a188436bb0693b32._UR1920,1080_RI_.jpg"
              alt=""
            />
          </figure>
          <div className="caraousel-text">
            <span className="caraousel-span">Best movies of the decade</span>
            <br />
            <p className="caraousel-p">
              We are debating the movie whose big twist still has fans up in
              arms
            </p>
          </div>
        </div>
        <div className="caraousel-adjacent1">
          <img
            src="https://images.news18.com/ibnlive/uploads/2021/08/shang-chi-poster-1.jpg"
            alt=""
          />
          <div className="caraousel-text">
            <span className="caraousel-span" style={{ color: "yellow" }}>
              SHANG-CHI
            </span>
            <br />
            <p className="caraousel-p">fans are excited about shang-chi</p>
          </div>
        </div>
        <div className="caraousel-adjacent2">
          <img
            src="https://www.disneyplusinformer.com/wp-content/uploads/2021/08/What-If-TChalla-Character-Poster.jpg"
            alt=""
          />
          <div className="caraousel-text">
            <span
              className="caraousel-span"
              style={{ color: "red", textShadow: "1px 1px 1px 1px white" }}
            >
              WHAT-IF
            </span>
            <br />
            <p className="caraousel-p">
              Explore alteranate realities of your favourite superheroes with
              what-if
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "white",
          width: "84%",
          marginLeft: "auto",
          marginRight: "auto",
          height: "50px",
        }}
      >
        <span
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          {/* <p
            style={{
              color: "goldenrod",

              fontWeight: "bold",
              width: "0.3%",
              backgroundColor: "goldenrod",

              marginLeft: "12px",
            }}
          >
            {" "}
            !
          </p> */}
          <p
            className="classic-movies"
            style={{ marginLeft: "5px", fontWeight: "bold", fontSize: "20px" }}
          >
            {" "}
            Classic Movies
          </p>
        </span>
      </div>
      <div className="movie-list">
        {movieList?.map((m) => {
          return (
            <MovieListItem
              id={m.id}
              key={m.id}
              text={m.text}
              rating={m.rating}
              review={m.review}
              img_src={m.img_src}
            />
          );
        })}
      </div>
    </>
  );
}

export default MovieList;
