import { useState } from "react";
import "./AuthTabs.css";
import { subjectData } from "../../assets/subjectData";
import { Link } from "react-router-dom";

function AuthTabs() {
  const [activeTab, setActiveTab] = useState("login");

  // State for registration form
  const [qualification, setQualification] = useState("");
  const [course, setCourse] = useState("");
  const [subjects, setSubjects] = useState([]);
  const [selectedSubjects, setSelectedSubjects] = useState([]);

  const handleQualificationChange = (e) => {
    const selectedQualification = e.target.value;
    setQualification(selectedQualification);
    setCourse("");
    setSubjects([]);
    setSelectedSubjects([]);
  };

  const handleCourseChange = (e) => {
    const selectedCourse = e.target.value;
    setCourse(selectedCourse);
    const courseSubjects = subjectData[qualification]?.[selectedCourse] || [];
    setSubjects(courseSubjects);
    setSelectedSubjects([]);
  };

  const handleSubjectChange = (e) => {
    const { value, checked } = e.target;
    setSelectedSubjects((prev) =>
      checked ? [...prev, value] : prev.filter((subj) => subj !== value)
    );
  };

  const handleSelectAll = () => {
    setSelectedSubjects(
      selectedSubjects.length === subjects.length ? [] : [...subjects]
    );
  };

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    alert("Login submitted!");
  };

  const handleSubmitRegister = (e) => {
    e.preventDefault();
    alert(`You selected: ${selectedSubjects.join(", ")}`);
  };

  return (
    <div className="auth-tabs-container">
      {/* Tab Buttons */}
      <div className="tab-buttons">
        <button
          className={activeTab === "login" ? "active" : ""}
          onClick={() => setActiveTab("login")}
        >
          Login
        </button>
        <button
          className={activeTab === "register" ? "active" : ""}
          onClick={() => setActiveTab("register")}
        >
          Register
        </button>
      </div>

      {/* Login Form */}
      {activeTab === "login" && (
        <form onSubmit={handleSubmitLogin} className="form-section">
          <label htmlFor="name">Name*</label>
          <input type="text" placeholder="Enter Name" name="name" />

          <label htmlFor="Surname">Surname*</label>
          <input type="text" placeholder="Surname" name="surname" />

          <label htmlFor="studentnumber">Student Number*</label>
          <input
            type="text"
            placeholder="Enter Student Number"
            name="studentnumber"
          />
            {/* This is for the password but students will just use thier student card number */}
          {/* <label htmlFor="password">Password*</label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
          /> */}

          <button type="submit">Login</button>
        </form>
      )}

      {/* Register Form */}
      {activeTab === "register" && (
        <form onSubmit={handleSubmitRegister} className="form-section">
          <h1>PETVET ACCOUNT REGISTRATION</h1>
          <label htmlFor="firstName">First Name*</label>
          <input type="text" placeholder="Enter First Name" name="firstname" />

          <label htmlFor="surname">Surname*</label>
          <input type="text" placeholder="Enter Surname" name="surname" />

          <label htmlFor="email">Email*</label>
          <input type="email" placeholder="Enter Email" name="email" />

          <label htmlFor="studentnumber">Student Number*</label>
          <input
            type="text"
            placeholder="Enter Student Number"
            name="studentnumber"
          />

          <label htmlFor="gender">Gender</label>
          <div>
            <input type="radio" name="gender" value="Male" /> Male
            <input type="radio" name="gender" value="Female" /> Female
            <input type="radio" name="gender" value="Other" /> Other
          </div>

          <label htmlFor="qualification">Qualification</label>
          <select
            name="qualification"
            value={qualification}
            onChange={handleQualificationChange}
          >
            <option value="">-- Select Qualification --</option>
            {Object.keys(subjectData).map((q) => (
              <option key={q} value={q}>
                {q}
              </option>
            ))}
          </select>

          <label htmlFor="course">Course</label>
          <select
            name="course"
            value={course}
            onChange={handleCourseChange}
            disabled={!qualification}
          >
            <option value="">-- Select Course --</option>
            {qualification &&
              Object.keys(subjectData[qualification]).map((courseOption) => (
                <option key={courseOption} value={courseOption}>
                  {courseOption}
                </option>
              ))}
          </select>

          {subjects.length > 0 && (
            <>
              <label>Subjects</label>
              <button type="button" onClick={handleSelectAll}>
                {selectedSubjects.length === subjects.length
                  ? "Deselect All"
                  : "Select All"}
              </button>
              <div>
                {subjects.map((subject) => (
                  <div key={subject}>
                    <input
                      type="checkbox"
                      value={subject}
                      checked={selectedSubjects.includes(subject)}
                      onChange={handleSubjectChange}
                    />
                    <label>{subject}</label>
                  </div>
                ))}
              </div>
            </>
          )}
          <br />
          
          <Link to="./VerifingPage/AccountPendingVerification">
          <button type="submit">Register</button>
          </Link>

        </form>
      )}
    </div>
  );
}

export default AuthTabs;
