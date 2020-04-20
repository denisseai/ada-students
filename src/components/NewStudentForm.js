import React, {useState} from 'react';
import './NewStudentForm.css';
import PropTypes from 'prop-types';

const NewStudentForm = (props) => {
  // const [fullName, setFullName] = useState('');
  // const [email, setEmail] = useState(''); or like below

  const [student, setStudent] = useState({
    fullName: '',
    email: '',
  });

  // function than when typed in the form it will update our state
  const onNameChange = (event) => {
    const newStudent = {
      ...student,
      fullName: event.target.value,
    }
    setStudent(newStudent); //needs to be a new object
  }

  const onEmailChange = (event) => {
    const newStudent = {
      ...student,
      email: event.target.value,
    }
    setStudent(newStudent);
  };

  const onFormSubmit = (event) => {
    // Because we don't have a server to store the form we have to prevent the default behavior
    event.preventDefault();

    if (student.fullName !== '' && student.email !== '') {
      // Send data back to app
      props.onSubmitCallback(student);
      
      setStudent({
        fullName: '',
        email: '',
      });
    }
  }

  return (
    <form
     onSubmit={onFormSubmit}
     className="new-student-form">
      <div>
        <label htmlFor="fullName">Name:</label>
        <input 
          name="fullName"
          value={student.fullName} 
          onChange={onNameChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input 
          name="email"
          value={student.email}
          onChange={student.onEmailChange}
        />  
      </div>
      <input
        type="submit"
        value="Add Student"
      />
    </form>
  );
};

NewStudentForm.propTypes= {
  onSubmitCallback: PropTypes.func.isRequired,
};
export default NewStudentForm;