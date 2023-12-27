import React from 'react';
import Calendar from './components/Calendar';

function App() {
  const currentYear = new Date().getFullYear();
  // Example for January of the current year
  return <Calendar month={0} year={currentYear} />;
}

export default App;
