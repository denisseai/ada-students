import React from 'react';
import Student from './Student';

const StudentCollection = (props) => {

  const studentComponets = props.students.map((student) => {
    return(
      <Student 
        fullName={student.fullName}
        email={student.email}
        birthday={student.birthday}
        key={student.email}
        present={student.present}
        id={student.id}
        updateStudentCallback={props.updateStudentCallback}
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