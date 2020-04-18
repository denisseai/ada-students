import React from "react";

const Student = (props) => {
  return (
    <div className="Student">
      <h3>{props.fullName}</h3>
      <ul>
        <li>{props.birthdate}</li>
        <li>{props.email}</li>
      </ul>
    </div>
  );
};

export default Student;