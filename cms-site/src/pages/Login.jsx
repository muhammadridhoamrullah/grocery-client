import { useState } from "react";
import instance from "../axiosInstance";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;

    setLoginForm({
      ...loginForm,
      [name]: value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await instance.post("/login", loginForm);
      console.log(data);
      localStorage.access_token = data.access_token;

      navigate("/");
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
        <h1 className="text-center">Form Login</h1>

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
            value={loginForm.email}
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
            value={loginForm.password}
            onChange={changeHandler}
          />
        </div>

        <button type="submit" className="btn btn-primary mb-3">
          Submit
        </button>

        <p>
          Don't have an account?{" "}
          <Link
            style={{ color: "blue", textDecoration: "none" }}
            to={"/register"}
          >
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}
