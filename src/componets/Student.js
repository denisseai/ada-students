import React from "react";
import PropTypes from 'prop-types';

const Student = (props) => {

  // hooks  (not needed after nested video)
  // const [present, setPresent] = useState(props.present);
  // const [fullName, setFullName] = useState(props.fullName);

  // Function to toggle present- event handler
  // const onButtonClick = () => setPresent(!present);

  // const onFullNameChange = (event) => {
  //   setFullName(event.target.value);
  // };

  const onButtonClick = () => { // How we switch from absent to present and back
    const updatedStudent = {
      fullName: props.fullName,
      email: props.email,
      present: !props.present,
      id: props.id
    }

    // Send updated student back to App.js
    props.updateStudentCallback(updatedStudent);
  };

  const onFullNameChange = (event) => {
    const updatedStudent = {
      fullName: event.target.value,
      email: props.email,
      present: props.present,
      id: props.id
    }
    props.updateStudentCallback(updatedStudent);
  };

  return (
    <div className='student'>
      <h3 className={props.present ? 'present' : 'absent'}>{props.fullName}</h3>
      <input value={props.fullName} onChange={onFullNameChange}/>
      <ul>
        <li>Class: C13</li>
        <li>Birthday: {props.birthday}</li>
        <li>Email: {props.email}</li>
      </ul>
      <button onClick={onButtonClick}>
        Mark { props.present ? 'Absent' : 'Present'}
      </button>
    </div>
  );
};

Student.propType = {
  fullName: PropTypes.string.isRequired,
  email: PropTypes.string,
  birthday: PropTypes.string,
  present: PropTypes.bool.isRequired,
  id: PropTypes.number,

};

Student.defaultProps = {
  birthday: 'no birthdate on file',
}

export default Student;