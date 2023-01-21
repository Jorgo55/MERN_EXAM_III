// import { NavLink } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import * as yup from "yup";
import React from "react";

const Form = () => {
  const [form, setForm] = useState({
    name: "",
    image: "",
    position: "",
    treasurechests: "",
    pegleg: "",
    hookhand: "",
    eyepatch: "",
    phrase: "",
  });
  const [feErrors, setFeErrors] = useState("");
  const [beErrors, setBeErrors] = useState("");
  const navigate = useNavigate();

  const setChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    if (
      e.target.value.length < 3 &&
      (e.target.name === "name" ||
        e.target.name === "phrase" ||
        e.target.name === "image")
    ) {
      setFeErrors("(*) Mandatory fields can't be less than 3 characters!");
    } else {
      setFeErrors("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      form.name === "" ||
      form.phrase === "" ||
      form.image === "" ||
      form.position === "" ||
      form.treasurechests === "" ||
      form.phrase === ""
    ) {
      setFeErrors("(*) Mandatory fields can't be empty!");
    } else if (form.name.length < 3 && form.name === "") {
      setFeErrors("(*) Mandatory fields can't be less than 3 characters!");
    } else if (form.phrase.length < 3 && form.phrase === "") {
      setFeErrors("(*) Mandatory fields can't be less than 3 characters!");
    } else if (feErrors !== "") {
      navigate("/");
    } else {
      axios
        .post("http://localhost:8000/api/createpirate", {
          ...form,
        })
        .then((res) => {
          console.log(res);
          navigate("/");
        })
        .catch((err) => {
          // console.log(err.response.data.err.errors.name.kind);
          console.log(err.response);
          console.log(err);

          setBeErrors(err.response.data.err.errors.name.kind);
          navigate("/");
          alert("This Pirate Name already exists!");
        });
    }
  };

  return (
    <div className="d-flex flex-column w-50 justify-content-center mx-auto ">
      <h2 className="addp">Add Pirate</h2>
      {/* <NavLink to="/">Home</NavLink> */}
      <form onSubmit={handleSubmit} className="row g-3 needs-validation formmm">
        <div className="row formmm">
          <div className="mb-3 col-md-6 col-lg-6 col-12">
            <div className="name">name *</div>
            <input
              type="text"
              className="form-control "
              placeholder="Enter name"
              name="name"
              onChange={setChange}

              // value={form.name}
            />
            {beErrors === "unique" ? (
              <span style={{ color: "red" }}>*name IS NOT UNIQUE</span>
            ) : null}
            <br />
            {beErrors ? (
              <p style={{ color: "red", fontWeight: "bold", fontSize: "20px" }}>
                {beErrors.name && beErrors.name.message}
              </p>
            ) : (
              ""
            )}{" "}
          </div>
          <div className="form-floating mb-1">
            Image
            <input
              type="text"
              className="form-control image"
              placeholder="url"
              name="image"
              onChange={setChange}
              // value={form.email}
            />
            {beErrors ? (
              <p style={{ color: "red", fontWeight: "bold", fontSize: "20px" }}>
                {beErrors.image && beErrors.image.message}
              </p>
            ) : (
              ""
            )}{" "}
          </div>
          <div className="mb-3 col-md-6 col-lg-6 col-12">
            <label className="form-label">Position:</label>
            <select
              className="form-control"
              name="position"
              onChange={setChange}
            >
              <option>Select a position:</option>
              <option value="captain">Captain</option>
              <option value="firstmate">First mate</option>
              <option value="quartermaster">Quarter master</option>
              <option value="boatswain">Boat swain</option>
              <option value="powdermonkey">Powder monkey</option>
            
            </select>
            {beErrors ? (
              <p style={{ color: "red", fontWeight: "bold", fontSize: "20px" }}>
                {beErrors.name && beErrors.name.message}
              </p>
            ) : (
              ""
            )}{" "}
          </div>{" "}
          <div className="mb-3 col-md-6 col-lg-6 col-12">
            <label className="form-label">Number of treasure:</label>
            <input
              type="text"
              className="form-control image"
              placeholder=""
              name="treasurechests"
              onChange={setChange}
              // value={form.email}
            />{" "}
            {beErrors ? (
              <p style={{ color: "red", fontWeight: "bold", fontSize: "20px" }}>
                {beErrors.treasurechests && beErrors.treasurechests.message}
              </p>
            ) : (
              ""
            )}
          </div>{" "}
          <div className="mb-3 col-md-6 col-lg-6 col-12">
            <fieldset>
              <legend>Feature:</legend>
              <div>
                <input
                  type="checkbox"
                  id="scales"
                  name="pegleg"
                  onChange={setChange}
                />

                <label htmlFor="scales">pegleg </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="horns"
                  name="hookhand"
                  onChange={setChange}
                />

                <label htmlFor="horns">hookhand </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="horns"
                  name="eyepatch"
                  onChange={setChange}
                />

                <label htmlFor="horns">eyepatch </label>
              </div>
            </fieldset>
          </div>{" "}
          <div className="form-label">
            <label>Pirate catch phrase *</label>
            <textarea
              name="phrase"
              className="form-control"
              cols="30"
              rows="5"
              onChange={setChange}
              // value={form.description}
            ></textarea>
            {beErrors ? (
              <p style={{ color: "red", fontWeight: "bold", fontSize: "20px" }}>
                {beErrors.phrase && beErrors.phrase.message}
              </p>
            ) : (
              ""
            )}{" "}
          </div>
          <button
            type="submit"
            // onClick={{ addUser }}
            className="btn btn-primary"
          >
            Submit
          </button>
        </div>
      </form>
      {feErrors ? (
        <p
          style={{
            color: "red",
            fontWeight: "bold",
            fontSize: "20px",
            textAlign: "center",
          }}
        >
          {feErrors}
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

export default Form;
