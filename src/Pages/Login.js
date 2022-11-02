import React from "react";

const Login = () => {
  const onSubmit = (e) => {
    e.prevent.default();
  };
  return (
    <>
      <form>
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            name="email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            name="password"
          />
        </div>

        <button type="submit" className="btn btn-primary" onSubmit={onSubmit}>
          Submit
        </button>
      </form>
    </>
  );
};

export default Login;
