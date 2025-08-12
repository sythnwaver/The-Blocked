import React from "react";
import "./AccountPendingVerification.css";
import RetroWindow from "../Squarewindow/Window";

function AccountPendingVerification() {
  return (
    <div className="verification-container">
    <RetroWindow/>
      <h1>Registration Successful 🎉</h1>
      <p>Your account has been created and is now pending verification.</p>
      <p>You will receive an email once your account is approved.</p>
    </div>
  );
}

export default AccountPendingVerification;
