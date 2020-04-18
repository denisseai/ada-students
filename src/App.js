import React, {useState} from 'react';
import StudentCollection from './componets/StudentCollection';
import './App.css';

// Hardcoded student info(static source) but can be found in an API
const students = [
  {
    id: 1,
    fullName: 'Ada Lovelace',
    birthday: 'Feb 1, 1832',
    email: 'ada@dev.org',
    present: true,
  },
  {
    id: 2,
    fullName: 'Grace Hopper',
    birthday: 'Jan 2, 1932',
    email: 'grace@navy.mil',
    present: false,
  },
];

function App() {
  const [studentList, setStudentList] = useState(students);
  
  const updateStudent = (updatedStudent) =>{
    const studentsNew = [];

    studentList.forEach((student) => {
      if (student.id === updatedStudent.id){
        studentsNew.push(updatedStudent); //Grabs new data, discards old
      }else{
        studentsNew.push(student); //Grabs unchanged data, maintaining list order
      }
    });
    setStudentList(studentsNew);
  };

  return (
    <div className="App">
        <StudentCollection students={studentList} updateStudentCallback={updateStudent}/>
    </div>
  );
}

export default App;
