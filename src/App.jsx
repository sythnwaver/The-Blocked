import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import AuthTabs from "./Components/LoginPage/AuthTabs";
import RetroWindow from "./Components/Squarewindow/Window";

// Pages
import AccountPendingVerification from "./Components/VerifingPage/AccountPendingVerification"; // You'll create this

function App() {
  return (
    <Router>
      <Routes>
        {/* Login Page (with your retro window and auth tabs) */}
        <Route
          path="/login"
          element={
            <RetroWindow>
              <AuthTabs />
            </RetroWindow>
          }
        />

        {/* Account Pending Page */}
        <Route path="/account-pending" element={<AccountPendingVerification />} />

        {/* Default route (redirects to login) */}
        <Route path="*" element={<AuthTabs />} />
      </Routes>
    </Router>
  );
}

export default App;
