import React from "react";
import Rainbow from "../hoc/Rainbow";

const About = () => {
  return (
    <div className="container">
      <h4 className="center">About</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum tempora
        quidem saepe cumque fuga minus dolorum quisquam quasi deleniti,
        voluptatum reiciendis sint. Praesentium veritatis magnam assumenda
        libero, obcaecati doloribus deserunt.
      </p>
    </div>
  );
};

export default Rainbow(About);
