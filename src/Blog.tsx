import React from "react";
import { useState } from "react";
import "./Styles/blog.css";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

import { useFormik } from "formik";
function Blog() {
  const [id] = useState<number>(new Date().getTime());

  const formik = useFormik({
    initialValues: {
      text: "",
      rating: "",
      review: "",

      img_src: "",
    },
    onSubmit: (values) => {
      confirmAlert({
        title: "Confirm to submit",
        message: "Are you sure to do this.",
        buttons: [
          {
            label: "Yes",
            onClick: () => {
              let obj: movie = {
                text: values.text,
                rating: JSON.parse(values.rating).toFixed(1),
                id: id,
                review: values.review,
                img_src: values.img_src,
              };
              fetch(`http://localhost:9002/Movies`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(obj),
              }).then(() => {
                console.log("blog added");
              });
            },
          },
          {
            label: "No",
            onClick: () => {},
          },
        ],
      });
    },
    validate: (values) => {
      let errors: any = {};

      if (!values.text) {
        errors.text = "Required*";
      } else if (values.text.length < 2) {
        errors.text = "Invalid name*";
      }

      if (!values.rating) {
        errors.rating = "Rating can't be empty*";
      }
      if (!values.review) {
        errors.review = "Review is empty*";
      }

      return errors;
    },
  });

  //   console.log(formik.errors);
  //   console.log(formik.touched);

  return (
    <div className="container-blog">
      <div className="form-div">
        <div className="blur-div">
          <form onSubmit={formik.handleSubmit}>
            <div className="text-div" style={{ color: "white" }}>
              <div>Title</div>
              <input
                type="text"
                name="text"
                className="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Title of  the movie"
                value={formik.values.text}
              />
              {formik.errors.text && formik.touched.text ? (
                <div className="error-div">{formik.errors.text}</div>
              ) : null}
            </div>
            <div className="rating-div" style={{ color: "white" }}>
              <div>Rating</div>
              <input
                type="text"
                name="rating"
                className="rating"
                placeholder="rating"
                pattern="[0.0-9.0]*"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.rating}
              />
              {formik.errors.rating && formik.touched.rating ? (
                <div className="error-div">{formik.errors.rating}</div>
              ) : null}
            </div>
            <div className="review-div" style={{ color: "white" }}>
              <div>Review</div>
              <input
                type="text"
                name="review"
                className="review"
                placeholder="Write the review"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.review}
              />
              {formik.errors.review && formik.touched.review ? (
                <div className="error-div">{formik.errors.review}</div>
              ) : null}
            </div>
            <div className="img_src-div" style={{ color: "white" }}>
              <div>Image Source</div>
              <input
                type="text"
                name="img_src"
                className="img_src"
                placeholder="Image Source"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.img_src}
              />
              {formik.errors.img_src && formik.touched.img_src ? (
                <div className="error-div">{formik.errors.img_src}</div>
              ) : null}
            </div>
            <button type="submit" className="blog-submit">
              Add review
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Blog;
