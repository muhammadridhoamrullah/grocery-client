import { useState } from "react";
import Swal from "sweetalert2";
import instance from "../axiosInstance";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [regisForm, setRegisForm] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;

    setRegisForm({
      ...regisForm,
      [name]: value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const { data } = await instance.post("/register", regisForm);

      Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success",
      });

      navigate("/login");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response.data.message,
      });
    }
  };
  return (
    <div className="container mt-5">
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            value={regisForm.email}
            onChange={changeHandler}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            value={regisForm.password}
            onChange={changeHandler}
          />
        </div>
        <button type="submit" className="btn btn-primary mb-3">
          Submit
        </button>

        <p>
          Already have an account?{" "}
          <Link style={{ color: "blue", textDecoration: "none" }} to={"/login"}>
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
