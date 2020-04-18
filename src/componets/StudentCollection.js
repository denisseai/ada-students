import React from 'react';
import Student from './Student';

const StudentCollection = (props) => {

  const studentComponets = props.students.map((student) => {
    return(
      <Student 
        fullName={student.fullName}
        email={student.email}
        birthdate={student.birthdate}
        key={student.email}
      />
    );
  });

  return (
    <ul className="StudentCollection">
     {studentComponets}
    </ul>
  );
}

export default StudentCollection;