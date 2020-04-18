import React, {useState} from "react";
import PropTypes from 'prop-types';

const Student = (props) => {

  // hooks  
  const [present, setPresent] = useState(props.present);
  const [fullName, setFullName] = useState(props.fullName);

  // Function to toggle present- event handler
  const onButtonClick = () => setPresent(!present);

  return (
    <div>
      <h3>{props.fullName}</h3>
      <ul>
        <li>Class: C13</li>
        <li>Birthday: {props.birthday}</li>
        <li>Email: {props.email}</li>
      </ul>
      <button onClick={onButtonClick}>
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