import React from 'react';
import Student from './components/Student';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Ada Students
        </h1>
      </header>
      <main>
        <Student />
      </main>
    </div>
  );
}

export default App;
