import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FeedbackForm from './pages/FeedbackForm';
import ThankYou from './pages/ThankYou';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        {/* 1. main page */}
        <Route path="/" element={<Home/>} />
        
        {/* 2. feedback page -Dynamic ID ke saath*/}
        <Route path="/feedback/:id" element={<FeedbackForm />} />
        
        {/* 3. success page */}
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
