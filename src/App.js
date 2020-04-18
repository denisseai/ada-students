import React from 'react';
import StudentCollection from './componets/StudentCollection';
import './App.css';

const studentList = [
  {
    fullName: 'Ada Lovelace',
    birthday: 'Feb 1, 1832',
    email: 'ada@dev.org',
    present: true,
  },
  {
    fullName: 'Grace Hopper',
    birthday: 'Jan 2, 1932',
    email: 'grace@navy.mil',
    present: false,
  },
  {
    fullName: 'Dee del Rosa',
    birthday: 'Aug 2, 1992',
    email: 'dee@dev.org',
    present: true,
  },
  {
    fullName: 'Denisse A',
    birthday: 'Aug 3, 1987',
    email: 'denisse@dev.org',
    present: true,
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
