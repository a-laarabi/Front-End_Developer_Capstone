import { Route, Routes } from 'react-router-dom';
import './App.css';
import BookingPage from './components/BookingPage';
import HomePage from './components/Homepage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
