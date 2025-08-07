import { useState } from "react";
import "./Login.css";
import { subjectData } from "../../assets/subjectData";


function Login() {
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
    if (checked) {
      setSelectedSubjects((prev) => [...prev, value]);
    } else {
      setSelectedSubjects((prev) => prev.filter((subj) => subj !== value));
    }
  };

  const handleSelectAll = () => {
    setSelectedSubjects(
      selectedSubjects.length === subjects.length ? [] : [...subjects]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`You selected: ${selectedSubjects.join(", ")}`);
  };

  return (
    <div className="container">
      <h1>PETVET ACCOUNT REGISTRATION</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name*</label>
        <input type="text" placeholder="Enter First Name" name="firstname" />

        <label htmlFor="surname">Surname*</label>
        <input type="text" placeholder="Enter Surname" name="surname" />

        <label htmlFor="email">Email*</label>
        <input type="email" placeholder="Enter Email" name="email" />

        <label htmlFor="studentnumber">Student Number*</label>
        <input type="text" placeholder="Enter Student Number" name="studentnumber" />

        <label htmlFor="gender">Gender</label>
        <div>
          <input type="radio" name="gender" value="Male" /> Male
          <input type="radio" name="gender" value="Female" /> Female
          <input type="radio" name="gender" value="Other" /> Other
        </div>

        <label htmlFor="qualification">Qualification</label>
        <select
          name="qualification"
          id="qualification"
          value={qualification}
          onChange={handleQualificationChange}
        >
          <option value="">-- Select Qualification --</option>
          {Object.keys(subjectData).map((q) => (
            <option key={q} value={q}>{q}</option>
          ))}
        </select>

        <label htmlFor="course">Course</label>
        <select
          name="course"
          id="course"
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
            <button
              type="button"
              onClick={handleSelectAll}
              style={{ marginBottom: "8px" }}
            >
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
        <button type="submit">Confirm</button>
      </form>
    </div>
  );
}

export default Login;
