import React, {useState} from "react";
import PropTypes from 'prop-types';

const Student = (props) => {
  const [present, setPresent] = useState(props.present);

  return (
    <div className="Student">
      <h3>{props.fullName}</h3>
      <ul>
        <li>Class: C13</li>
        <li>Birthday: {props.birthday}</li>
        <li>Email: {props.email}</li>
      </ul>
      <button>
        Mark { present ? 'Absent' : 'Present'}
      </button>
    </div>
  );
};

Student.propType = {
  fullName: PropTypes.string.isRequired,
  email: PropTypes.string,
  birthday: PropTypes.string,
  present: PropTypes.bool.isRequired,
};

Student.defaultProps = {
  birthday: 'no birthdate on file',
}

export default Student;