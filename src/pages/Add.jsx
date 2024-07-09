import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { adduser } from "../redux/action/UserAction";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Add = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const handleSubmit = (h) => {
    h.preventDefault();
    // console.log(mail, password);
    let obj = {
      id: Date.now(),
      mail,
      password,
    };

    dispatch(adduser(obj));
    setMail("");
    setPassword("");
  };
  // navigate("/View");

  return (
    <div className="container py-5">
      <form className="col-7 mx-auto" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => setMail(e.target.value)}
            value={mail}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <button>
          <Link to={"/View"}>View</Link>
        </button>
      </form>
    </div>
  );
};

export default Add;
