import React, {useState} from "react";

const Student = (props) => {
  const [present, setPresent] = useState(false);

  return (
    <div className="Student">
      <h3>{props.fullName}</h3>
      <ul>
        <li>Class: C13</li>
        <li>Birthday: {props.birthdate}</li>
        <li>Email: {props.email}</li>
      </ul>
      <button>
        Mark { present ? 'Absent' : 'Present'}
      </button>
    </div>
  );
};

export default Student;