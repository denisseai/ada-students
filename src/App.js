import React from 'react';
import StudentCollection from './componets/StudentCollection';
import './App.css';

const studentList = [
  {
    fullName: 'Ada Lovelace',
    birthdate: 'Feb 1, 1832',
    email: 'ada@dev.org',
  },
  {
    fullName: 'Grace Hopper',
    birthdate: 'Jan 2, 1932',
    email: 'grace@navy.mil',
  },
  {
    fullName: 'Dee del Rosa',
    birthdate: 'Aug 2, 1992',
    email: 'dee@dev.org',
  },
  {
    fullName: 'Denisse A',
    birthdate: 'Aug 3, 1987',
    email: 'denisse@dev.org'
  }
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Ada Students
        </h1>
      </header>
      <main>
        <StudentCollection students={studentList} />
      </main>
    </div>
  );
}

export default App;
