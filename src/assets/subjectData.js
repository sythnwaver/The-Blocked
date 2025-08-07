// src/assets/subjectData.js
export const subjectData = {
  NCV: {
    "ICT Level 2": [
      "Mathematics",
      "English",
      "IIS",
      "ICT",
      "Electronics",
      "Life Orientation",
      "Contact Center"
    ],
    "ICT Level 3": [
      "Mathematics",
      "English",
      "SA&D",
      "PCP",
      "Life Orientation",
      "Contact Center",
      "CH&S"
    ]
  },
  Nated: {
    "Business Studies": ["Coming soon"],
    "Information Technology": ["Coming soon"],
    "Mechanical Engineering": ["Coming soon"]
  }
};

function Login() {
  const [qualification, setQualification] = useState("");
  const [course, setCourse] = useState("");
  const [subjects, setSubjects] = useState([]);
  const [selectedSubjects, setSelectedSubjects] = useState([]);

  const handleQualificationChange = (e) => {
    setQualification(e.target.value);
    setCourse("");
    setSubjects([]);
    setSelectedSubjects([]);
  };

  const handleCourseChange = (e) => {
    const selectedCourse = e.target.value;
    setCourse(selectedCourse);
    const subjectList = subjectData[qualification]?.[selectedCourse] || [];
    setSubjects(subjectList);
    setSelectedSubjects([]);
  };
}