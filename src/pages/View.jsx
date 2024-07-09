import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { viewUser } from "../redux/action/UserAction";
const View = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log("view");
    dispatch(viewUser());
  }, []);

  const viewdata = useSelector((state) => state.data.data);
  console.log(viewdata);
  return (
    <div className="container py-5">
      <table className="table col-5 text-center mx-auto table-hover table-primary">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">E-MAIL</th>
            <th scope="col">PASSWORD</th>
            <th scope="col">ACTION</th>
          </tr>
        </thead>
        <tbody>
          {viewdata.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.mail}</td>
                <td>{item.password}</td>
                <td>
                  <button
                    onClick={() => deleteUser()}
                    className="bg-danger rounded-pill px-3 py-2 border-0 text-white mx-2"
                  >
                    Delete
                  </button>
                  <button className="bg-success rounded-pill px-3 py-2 border-0 text-white ">
                    Edit
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button className="bg-info px-4 py-2 rounded-pill border-0">
        <Link className="text-white text-decoration-none" to={"/"}>
          Add
        </Link>
      </button>
    </div>
  );
};

export default View;
