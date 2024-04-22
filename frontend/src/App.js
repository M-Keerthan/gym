import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import WorkoutDetailView from './components/WorkoutDetailView';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className='pages'>
          {/* Other components or content */}
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/workouts/:id" element={<WorkoutDetailView />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
