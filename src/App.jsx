import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import Archive from './Archive';

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/archive" element={<Archive />} />
      </Routes>
    </div>
  );
}

export default App;
