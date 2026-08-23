// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// // --- FIX IS HERE ---
// // Corrected the paths to start with './' to indicate the same directory.
// import Homepage from './Homepage';       // Was '.s/Homepage'
// import LoginSignup from './LoginSignup'; // This component's import seems okay
// import Dashboard from './Dashboard';       // Was '/Dashboard'

// function App() {
//   return (
//     <Router>
//       <div>
//         <Routes>
//           {/* Define the route for the Homepage */}
//           <Route path="/" element={<Homepage />} />

//           {/* Define the route for the Login/Signup page */}
//           <Route path="/login" element={<LoginSignup />} />

//           {/* Define the route for the Dashboard */}
//           <Route path="/dashboard" element={<Dashboard />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App; 
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your existing components
import Homepage from './Homepage';
import LoginSignup from './LoginSignup';
import Dashboard from './Dashboard';

// --- STEP 1: Import the CommunityPage component ---
import CommunityPage from './CommunityPage';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* Your existing routes */}
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          
          {/* --- STEP 2: Add the new route for the Community page --- */}
          <Route path="/community" element={<CommunityPage />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;