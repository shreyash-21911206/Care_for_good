import React from "react";
import Menu from "./Menu";

const Base = ({
  title = "My Title",
  description = "My desription",
  className = " text-white p-4",
  children
}) => (
  <div>
    <Menu />
    <div className="container-fluid">
      <div className="jumbotron text-white text-center" style={{background: "linear-gradient(to right, rgb(47, 137, 193), rgb(13, 217, 200))"}}>
        <h2 className="display-4">{title}</h2>
        <p className="lead">{description}</p>
      </div>
      <div className={className}>{children}</div>
    </div>
    <footer className="footer mt-auto py-3">
      <div className="container-fluid bg-success text-white text-center py-3">
        <h4>If you got any questions, feel free to reach out!</h4>
        <button className="btn btn-warning btn-lg">Contact Us</button>
      </div>
    </footer>
  </div>
);

export default Base;
