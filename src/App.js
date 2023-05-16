import React from 'react';
import './App.css';
import Header from './Header';
import Instructors from './Instructors';
import YogaStyles from './YogaStyles';
import BookingCalendar from './BookingCalendar';
import Footer from './Footer';


function App() {
  return (
    <>
      <Header />
      <Instructors />
      <YogaStyles />
      <BookingCalendar />
      <Footer />
    </>
  )
}

export default App;
