// import React, { useState, useEffect } from "react";
// import "./CoursePage.css";

// const coursesData = {
//   Python: {
//     notes: "python_notes.pdf",
//     flashcards: [
//       "What is a list in Python?",
//       "How do you define a function?",
//       "What is a dictionary?",
//       "What is a lambda function?",
//       "How do you handle exceptions in Python?"
//     ],
//     video: "https://www.youtube.com/embed/rfscVS0vtbw",
//     quizzes: [
//       {
//         question: "What does 'len()' do?",
//         options: ["Returns the length", "Adds elements", "Deletes data", "None"],
//         answer: "Returns the length"
//       },
//       {
//         question: "Difference between list and tuple?",
//         options: ["List is mutable, tuple is not", "Both are immutable", "Tuple is faster", "None"],
//         answer: "List is mutable, tuple is not"
//       },
//       {
//         question: "Which keyword is used for function?",
//         options: ["func", "define", "def", "function"],
//         answer: "def"
//       },
//       {
//         question: "What does 'dict' stand for?",
//         options: ["Array", "Dictionary", "List", "Tuple"],
//         answer: "Dictionary"
//       },
//       {
//         question: "Which of these is a loop in Python?",
//         options: ["loop", "for", "do", "repeat"],
//         answer: "for"
//       }
//     ]
//   },
//   HTML: {
//     notes: "html_notes.pdf",
//     flashcards: [
//       "What is a <div>?",
//       "Purpose of <!DOCTYPE html>?",
//       "What does <head> contain?",
//       "Difference between <span> and <div>?"
//     ],
//     video: "https://www.youtube.com/embed/pQN-pnXPaVg",
//     quizzes: [
//       {
//         question: "What does <p> tag do?",
//         options: ["Creates a paragraph", "Creates a link", "Creates a button", "None"],
//         answer: "Creates a paragraph"
//       },
//       {
//         question: "What is semantic HTML?",
//         options: ["Tags with meaning", "Random HTML", "CSS styling", "JavaScript"],
//         answer: "Tags with meaning"
//       },
//       {
//         question: "What does <title> tag do?",
//         options: ["Styles page", "Sets browser title", "Adds image", "None"],
//         answer: "Sets browser title"
//       }
//     ]
//   },
//   CSS: {
//     notes: "css_notes.pdf",
//     flashcards: [
//       "Difference between class and id?",
//       "What is a flexbox?",
//       "Explain position property",
//       "What is specificity in CSS?"
//     ],
//     video: "https://www.youtube.com/embed/yfoY53QXEnI",
//     quizzes: [
//       {
//         question: "What does 'position: absolute' mean?",
//         options: ["Positions relative to parent", "Fixes in one place", "Invisible element", "None"],
//         answer: "Positions relative to parent"
//       },
//       {
//         question: "Explain the box model",
//         options: ["Margin, Border, Padding, Content", "Only Content", "Text Styling", "None"],
//         answer: "Margin, Border, Padding, Content"
//       },
//       {
//         question: "What selector is used for ID?",
//         options: [".class", "#id", "tag", "*"],
//         answer: "#id"
//       }
//     ]
//   },
//   Java: {
//     notes: "java_notes.pdf",
//     flashcards: [
//       "What is JVM?",
//       "What is inheritance?",
//       "Difference between interface and abstract class?",
//       "What is encapsulation?"
//     ],
//     video: "https://www.youtube.com/embed/grEKMHGYyns",
//     quizzes: [
//       {
//         question: "Define class and object",
//         options: ["Class is template, object is instance", "Both same", "Only class exists", "None"],
//         answer: "Class is template, object is instance"
//       },
//       {
//         question: "What is method overloading?",
//         options: ["Multiple methods with same name", "No overloading", "Changing return types only", "None"],
//         answer: "Multiple methods with same name"
//       },
//       {
//         question: "What is inheritance?",
//         options: ["One class acquires another", "Defines variables", "Loads class", "None"],
//         answer: "One class acquires another"
//       }
//     ]
//   },
//   React: {
//     notes: "react_notes.pdf",
//     flashcards: [
//       "What is JSX?",
//       "What are hooks?",
//       "What is useState used for?",
//       "Difference between useEffect and useLayoutEffect?"
//     ],
//     video: "https://www.youtube.com/embed/bMknfKXIFA8",
//     quizzes: [
//       {
//         question: "Difference between props and state",
//         options: ["Props are immutable, state is mutable", "Both same", "Props change over time", "None"],
//         answer: "Props are immutable, state is mutable"
//       },
//       {
//         question: "What is useEffect?",
//         options: ["Handles side effects", "Stores data", "Hooks rendering", "None"],
//         answer: "Handles side effects"
//       },
//       {
//         question: "What does useState return?",
//         options: ["Variable only", "Setter only", "Variable and setter", "None"],
//         answer: "Variable and setter"
//       }
//     ]
//   }
// };

// export default function CoursePage({ onQuizComplete }) {
//   const [selectedCourse, setSelectedCourse] = useState(null);
//   const [activeTab, setActiveTab] = useState("notes");
//   const [userAnswers, setUserAnswers] = useState({});
//   const [score, setScore] = useState(null);
//   const [quizTimer, setQuizTimer] = useState(60);

//   useEffect(() => {
//     if (activeTab === "quizzes" && selectedCourse) {
//       setQuizTimer(60);
//       const interval = setInterval(() => {
//         setQuizTimer((prev) => {
//           if (prev <= 1) {
//             clearInterval(interval);
//             handleSubmitQuiz();
//             return 0;
//           }
//           return prev - 1;
//         });
//       }, 1000);
//       return () => clearInterval(interval);
//     }
//   }, [activeTab, selectedCourse]);

//   const handleAnswerChange = (questionIdx, selectedOption) => {
//     setUserAnswers((prev) => ({ ...prev, [questionIdx]: selectedOption }));
//   };
// const handleSubmitQuiz = () => {
//   const quiz = coursesData[selectedCourse].quizzes;
//   let calculatedScore = 0;

//   // Check the answers
//   quiz.forEach((q, idx) => {
//     if (userAnswers[idx] === q.answer) calculatedScore++;
//   });

//   setScore(calculatedScore);

//   // Generate certificate if score >= 70
//   if (calculatedScore / quiz.length >= 0.7) {
//     const certificate = {
//       courseName: selectedCourse,
//       score: `${((calculatedScore / quiz.length) * 100).toFixed(2)}%`,
//       date: new Date().toLocaleDateString(),
//       courseData: coursesData[selectedCourse]  // Include full course data
//     };

//     // Pass certificate data back to Dashboard component
//     onQuizComplete(certificate);  // Assuming onQuizComplete updates Dashboard state
//   } else {
//     console.log('Score less than 70%. No certificate awarded.');
//   }
// };


//   return (
//     <div className="container">
//       <h1 className="title">Courses</h1>
//       <div className="course-buttons">
//         {Object.keys(coursesData).map((course) => (
//           <button
//             key={course}
//             className={`course-button ${selectedCourse === course ? "active" : ""}`}
//             onClick={() => {
//               setSelectedCourse(course);
//               setActiveTab("notes");
//               setUserAnswers({});
//               setScore(null);
//             }}
//           >
//             {course}
//           </button>
//         ))}
//       </div>

//       {selectedCourse && (
//         <div>
//           <div className="tab-buttons">
//             {Object.keys(coursesData[selectedCourse]).map((tab) => (
//               <button
//                 key={tab}
//                 className={`tab-button ${activeTab === tab ? "active-tab" : ""}`}
//                 onClick={() => setActiveTab(tab)}
//               >
//                 {tab.charAt(0).toUpperCase() + tab.slice(1)}
//               </button>
//             ))}
//           </div>

//           <div className="tab-content">
//             {activeTab === "notes" && (
//               <div>
//                 <iframe
//                   src={coursesData[selectedCourse].notes}
//                   width="100%"
//                   height="500px"
//                   title="Course Notes"
//                   frameBorder="0"
//                 ></iframe>
//                 <div style={{ marginTop: '10px', textAlign: 'center' }}>
//                   <a
//                     href={coursesData[selectedCourse].notes}
//                     download
//                     className="download-button"
//                   >
//                     Download Notes
//                   </a>
//                 </div>
//               </div>
//             )}
//             {activeTab === "flashcards" && (
//               <div className="flashcard-container">
//                 {coursesData[selectedCourse].flashcards.map((fc, idx) => (
//                   <div className="flashcard" key={idx}>{fc}</div>
//                 ))}
//               </div>
//             )}
//             {activeTab === "video" && (
//               <div className="video-wrapper">
//                 <iframe
//                   className="video"
//                   src={coursesData[selectedCourse].video}
//                   title="Course Video"
//                   allowFullScreen
//                 ></iframe>
//               </div>
//             )}
//             {activeTab === "quizzes" && (
//               <div>
//                 <div className="quiz-timer">Time Left: {quizTimer}s</div>
//                 <form onSubmit={(e) => { e.preventDefault(); handleSubmitQuiz(); }}>
//                   {coursesData[selectedCourse].quizzes.map((q, idx) => (
//                     <div key={idx} style={{ marginBottom: '20px' }}>
//                       <p><strong>{idx + 1}. {q.question}</strong></p>
//                       {q.options.map((opt, i) => (
//                         <label key={i} style={{ display: 'block', marginBottom: '5px' }}>
//                           <input
//                             type="radio"
//                             name={`question-${idx}`}
//                             value={opt}
//                             checked={userAnswers[idx] === opt}
//                             onChange={() => handleAnswerChange(idx, opt)}
//                           />{' '}
//                           {opt}
//                         </label>
//                       ))}
//                     </div>
//                   ))}
//                   <button type="submit" className="submit-button">Submit Quiz</button>
//                 </form>
//                 {score !== null && (
//                   <div className="score">Your Score: {score}/{coursesData[selectedCourse].quizzes.length}</div>
//                 )}
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
"use client"

import { useState, useEffect } from "react"
import {
  FaBook,
  FaPlay,
  FaBrain,
  FaQuestionCircle,
  FaDownload,
  FaClock,
  FaStar,
  FaUsers,
  FaGraduationCap,
  FaTrophy,
  FaCheckCircle,
  FaTimesCircle,
  FaChevronRight,
  FaFileAlt,
  FaVideo,
  FaLightbulb,
} from "react-icons/fa"
import "./CoursePage.css"

const coursesData = {
  Python: {
    title: "Python for Data Science",
    description: "Learn Python programming for data analysis and machine learning",
    instructor: "Alex Rodriguez",
    duration: "10 hours",
    lessons: 45,
    rating: 4.7,
    students: 9800,
    difficulty: "Beginner",
    category: "Programming",
    thumbnail: "https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?w=400&h=250&fit=crop&auto=format",
    notes: "python_notes.pdf",
    flashcards: [
      "What is a list in Python?",
      "How do you define a function?",
      "What is a dictionary?",
      "What is a lambda function?",
      "How do you handle exceptions in Python?",
    ],
    video: "https://www.youtube.com/embed/rfscVS0vtbw",
    quizzes: [
      {
        question: "What does 'len()' do?",
        options: ["Returns the length", "Adds elements", "Deletes data", "None"],
        answer: "Returns the length",
      },
      {
        question: "Difference between list and tuple?",
        options: ["List is mutable, tuple is not", "Both are immutable", "Tuple is faster", "None"],
        answer: "List is mutable, tuple is not",
      },
      {
        question: "Which keyword is used for function?",
        options: ["func", "define", "def", "function"],
        answer: "def",
      },
      {
        question: "What does 'dict' stand for?",
        options: ["Array", "Dictionary", "List", "Tuple"],
        answer: "Dictionary",
      },
      {
        question: "Which of these is a loop in Python?",
        options: ["loop", "for", "do", "repeat"],
        answer: "for",
      },
    ],
  },
  HTML: {
    title: "HTML Fundamentals",
    description: "Master the building blocks of web development with HTML",
    instructor: "Sarah Johnson",
    duration: "6 hours",
    lessons: 25,
    rating: 4.5,
    students: 15200,
    difficulty: "Beginner",
    category: "Web Development",
    thumbnail: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=400&h=250&fit=crop&auto=format",
    notes: "html_notes.pdf",
    flashcards: [
      "What is a <div>?",
      "Purpose of <!DOCTYPE html>?",
      "What does <head> contain?",
      "Difference between <span> and <div>?",
    ],
    video: "https://www.youtube.com/embed/pQN-pnXPaVg",
    quizzes: [
      {
        question: "What does <p> tag do?",
        options: ["Creates a paragraph", "Creates a link", "Creates a button", "None"],
        answer: "Creates a paragraph",
      },
      {
        question: "What is semantic HTML?",
        options: ["Tags with meaning", "Random HTML", "CSS styling", "JavaScript"],
        answer: "Tags with meaning",
      },
      {
        question: "What does <title> tag do?",
        options: ["Styles page", "Sets browser title", "Adds image", "None"],
        answer: "Sets browser title",
      },
    ],
  },
  CSS: {
    title: "CSS Styling & Design",
    description: "Create beautiful and responsive web designs with CSS",
    instructor: "Mike Chen",
    duration: "8 hours",
    lessons: 35,
    rating: 4.6,
    students: 12800,
    difficulty: "Intermediate",
    category: "Web Development",
    thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop&auto=format",
    notes: "css_notes.pdf",
    flashcards: [
      "Difference between class and id?",
      "What is a flexbox?",
      "Explain position property",
      "What is specificity in CSS?",
    ],
    video: "https://www.youtube.com/embed/yfoY53QXEnI",
    quizzes: [
      {
        question: "What does 'position: absolute' mean?",
        options: ["Positions relative to parent", "Fixes in one place", "Invisible element", "None"],
        answer: "Positions relative to parent",
      },
      {
        question: "Explain the box model",
        options: ["Margin, Border, Padding, Content", "Only Content", "Text Styling", "None"],
        answer: "Margin, Border, Padding, Content",
      },
      {
        question: "What selector is used for ID?",
        options: [".class", "#id", "tag", "*"],
        answer: "#id",
      },
    ],
  },
  Java: {
    title: "Java Programming",
    description: "Learn object-oriented programming with Java",
    instructor: "Emma Wilson",
    duration: "12 hours",
    lessons: 50,
    rating: 4.8,
    students: 18500,
    difficulty: "Intermediate",
    category: "Programming",
    thumbnail: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=250&fit=crop&auto=format",
    notes: "java_notes.pdf",
    flashcards: [
      "What is JVM?",
      "What is inheritance?",
      "Difference between interface and abstract class?",
      "What is encapsulation?",
    ],
    video: "https://www.youtube.com/embed/grEKMHGYyns",
    quizzes: [
      {
        question: "Define class and object",
        options: ["Class is template, object is instance", "Both same", "Only class exists", "None"],
        answer: "Class is template, object is instance",
      },
      {
        question: "What is method overloading?",
        options: ["Multiple methods with same name", "No overloading", "Changing return types only", "None"],
        answer: "Multiple methods with same name",
      },
      {
        question: "What is inheritance?",
        options: ["One class acquires another", "Defines variables", "Loads class", "None"],
        answer: "One class acquires another",
      },
    ],
  },
  React: {
    title: "React Development",
    description: "Build modern web applications with React",
    instructor: "David Kim",
    duration: "15 hours",
    lessons: 60,
    rating: 4.9,
    students: 22000,
    difficulty: "Advanced",
    category: "Web Development",
    thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop&auto=format",
    notes: "react_notes.pdf",
    flashcards: [
      "What is JSX?",
      "What are hooks?",
      "What is useState used for?",
      "Difference between useEffect and useLayoutEffect?",
    ],
    video: "https://www.youtube.com/embed/bMknfKXIFA8",
    quizzes: [
      {
        question: "Difference between props and state",
        options: ["Props are immutable, state is mutable", "Both same", "Props change over time", "None"],
        answer: "Props are immutable, state is mutable",
      },
      {
        question: "What is useEffect?",
        options: ["Handles side effects", "Stores data", "Hooks rendering", "None"],
        answer: "Handles side effects",
      },
      {
        question: "What does useState return?",
        options: ["Variable only", "Setter only", "Variable and setter", "None"],
        answer: "Variable and setter",
      },
    ],
  },
}

export default function CoursePage({ onQuizComplete }) {
  const [selectedCourse, setSelectedCourse] = useState(null)
  const [activeTab, setActiveTab] = useState("overview")
  const [userAnswers, setUserAnswers] = useState({})
  const [score, setScore] = useState(null)
  const [quizTimer, setQuizTimer] = useState(60)
  const [currentFlashcard, setCurrentFlashcard] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)
  const [quizSubmitted, setQuizSubmitted] = useState(false)

  useEffect(() => {
    if (activeTab === "quizzes" && selectedCourse && !quizSubmitted) {
      setQuizTimer(60)
      const interval = setInterval(() => {
        setQuizTimer((prev) => {
          if (prev <= 1) {
            clearInterval(interval)
            handleSubmitQuiz()
            return 0
          }
          return prev - 1
        })
      }, 1000)

      return () => clearInterval(interval)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab, selectedCourse, quizSubmitted])

  const handleAnswerChange = (questionIdx, selectedOption) => {
    setUserAnswers((prev) => ({ ...prev, [questionIdx]: selectedOption }))
  }

  const handleSubmitQuiz = () => {
    const quiz = coursesData[selectedCourse].quizzes
    let calculatedScore = 0

    quiz.forEach((q, idx) => {
      if (userAnswers[idx] === q.answer) calculatedScore++
    })

    setScore(calculatedScore)
    setQuizSubmitted(true)

    if (calculatedScore / quiz.length >= 0.7) {
      const certificate = {
        courseName: coursesData[selectedCourse].title,
        score: `${((calculatedScore / quiz.length) * 100).toFixed(2)}%`,
        date: new Date().toLocaleDateString(),
        instructor: coursesData[selectedCourse].instructor,
        category: coursesData[selectedCourse].category,
      }
      onQuizComplete(certificate)
    }
  }

  const resetQuiz = () => {
    setUserAnswers({})
    setScore(null)
    setQuizSubmitted(false)
    setQuizTimer(60)
  }

  const nextFlashcard = () => {
    if (selectedCourse) {
      setCurrentFlashcard((prev) => (prev + 1) % coursesData[selectedCourse].flashcards.length)
      setShowAnswer(false)
    }
  }

  const prevFlashcard = () => {
    if (selectedCourse) {
      setCurrentFlashcard((prev) => (prev === 0 ? coursesData[selectedCourse].flashcards.length - 1 : prev - 1))
      setShowAnswer(false)
    }
  }

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Beginner":
        return "difficulty-beginner"
      case "Intermediate":
        return "difficulty-intermediate"
      case "Advanced":
        return "difficulty-advanced"
      default:
        return "difficulty-beginner"
    }
  }

  const getCategoryColor = (category) => {
    switch (category) {
      case "Programming":
        return "category-programming"
      case "Web Development":
        return "category-web"
      case "Design":
        return "category-design"
      default:
        return "category-programming"
    }
  }

  return (
    <div className="course-page-container">
      <div className="course-page-header">
        <h1 className="course-page-title">
          <FaGraduationCap className="title-icon" />
          Course Library
        </h1>
        <p className="course-page-subtitle">Choose a course to start your learning journey</p>
      </div>

      <div className="courses-grid">
        {Object.entries(coursesData).map(([courseKey, course]) => (
          <div
            key={courseKey}
            className={`course-card ${selectedCourse === courseKey ? "selected" : ""}`}
            onClick={() => {
              setSelectedCourse(courseKey)
              setActiveTab("overview")
              setUserAnswers({})
              setScore(null)
              setQuizSubmitted(false)
              setCurrentFlashcard(0)
              setShowAnswer(false)
            }}
          >
            <div className="course-thumbnail">
              <img src={course.thumbnail || "/placeholder.svg"} alt={course.title} />
              <div className="course-overlay">
                <FaPlay className="play-icon" />
              </div>
            </div>
            <div className="course-info">
              <div className="course-badges">
                <span className={`difficulty-badge ${getDifficultyColor(course.difficulty)}`}>{course.difficulty}</span>
                <span className={`category-badge ${getCategoryColor(course.category)}`}>{course.category}</span>
              </div>
              <h3 className="course-title">{course.title}</h3>
              <p className="course-instructor">by {course.instructor}</p>
              <p className="course-description">{course.description}</p>
              <div className="course-stats">
                <div className="stat-item">
                  <FaClock className="stat-icon" />
                  <span>{course.duration}</span>
                </div>
                <div className="stat-item">
                  <FaBook className="stat-icon" />
                  <span>{course.lessons} lessons</span>
                </div>
                <div className="stat-item">
                  <FaStar className="stat-icon" />
                  <span>{course.rating}</span>
                </div>
                <div className="stat-item">
                  <FaUsers className="stat-icon" />
                  <span>{course.students.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedCourse && (
        <div className="course-content">
          <div className="course-content-header">
            <div className="selected-course-info">
              <img
                src={coursesData[selectedCourse].thumbnail || "/placeholder.svg"}
                alt={coursesData[selectedCourse].title}
                className="selected-course-thumbnail"
              />
              <div className="selected-course-details">
                <h2>{coursesData[selectedCourse].title}</h2>
                <p>by {coursesData[selectedCourse].instructor}</p>
                <div className="course-meta">
                  <span className={`difficulty-badge ${getDifficultyColor(coursesData[selectedCourse].difficulty)}`}>
                    {coursesData[selectedCourse].difficulty}
                  </span>
                  <span className="course-rating">
                    <FaStar /> {coursesData[selectedCourse].rating}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="tab-navigation">
            {[
              { key: "overview", label: "Overview", icon: FaBook },
              { key: "video", label: "Video", icon: FaVideo },
              { key: "notes", label: "Notes", icon: FaFileAlt },
              { key: "flashcards", label: "Flashcards", icon: FaLightbulb },
              { key: "quizzes", label: "Quiz", icon: FaQuestionCircle },
            ].map((tab) => (
              <button
                key={tab.key}
                className={`tab-button ${activeTab === tab.key ? "active" : ""}`}
                onClick={() => setActiveTab(tab.key)}
              >
                <tab.icon className="tab-icon" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          <div className="tab-content">
            {activeTab === "overview" && (
              <div className="overview-content">
                <div className="overview-grid">
                  <div className="overview-card">
                    <FaBook className="overview-icon" />
                    <h3>Course Materials</h3>
                    <p>Access comprehensive notes and study materials</p>
                    <button className="overview-btn" onClick={() => setActiveTab("notes")}>
                      View Notes <FaChevronRight />
                    </button>
                  </div>
                  <div className="overview-card">
                    <FaVideo className="overview-icon" />
                    <h3>Video Lectures</h3>
                    <p>Watch detailed video explanations and tutorials</p>
                    <button className="overview-btn" onClick={() => setActiveTab("video")}>
                      Watch Video <FaChevronRight />
                    </button>
                  </div>
                  <div className="overview-card">
                    <FaBrain className="overview-icon" />
                    <h3>Flashcards</h3>
                    <p>Practice with interactive flashcards</p>
                    <button className="overview-btn" onClick={() => setActiveTab("flashcards")}>
                      Study Cards <FaChevronRight />
                    </button>
                  </div>
                  <div className="overview-card">
                    <FaTrophy className="overview-icon" />
                    <h3>Take Quiz</h3>
                    <p>Test your knowledge and earn certificates</p>
                    <button className="overview-btn" onClick={() => setActiveTab("quizzes")}>
                      Start Quiz <FaChevronRight />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "notes" && (
              <div className="notes-content">
                <div className="content-header">
                  <h3>Course Notes</h3>
                  <a href={coursesData[selectedCourse].notes} download className="download-btn">
                    <FaDownload /> Download PDF
                  </a>
                </div>
                <div className="notes-viewer">
                  <iframe
                    src={coursesData[selectedCourse].notes}
                    width="100%"
                    height="600px"
                    title="Course Notes"
                    frameBorder="0"
                  ></iframe>
                </div>
              </div>
            )}

            {activeTab === "flashcards" && (
              <div className="flashcards-content">
                <div className="flashcard-header">
                  <h3>Study Flashcards</h3>
                  <div className="flashcard-counter">
                    {currentFlashcard + 1} / {coursesData[selectedCourse].flashcards.length}
                  </div>
                </div>
                <div className="flashcard-container">
                  <div className={`flashcard ${showAnswer ? "flipped" : ""}`}>
                    <div className="flashcard-front">
                      <div className="flashcard-content">
                        <FaLightbulb className="flashcard-icon" />
                        <p>{coursesData[selectedCourse].flashcards[currentFlashcard]}</p>
                        <button className="reveal-btn" onClick={() => setShowAnswer(true)}>
                          Reveal Answer
                        </button>
                      </div>
                    </div>
                    <div className="flashcard-back">
                      <div className="flashcard-content">
                        <FaCheckCircle className="flashcard-icon success" />
                        <p>Think about this concept and try to explain it in your own words.</p>
                        <button className="reveal-btn" onClick={() => setShowAnswer(false)}>
                          Show Question
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flashcard-controls">
                    <button className="control-btn" onClick={prevFlashcard}>
                      Previous
                    </button>
                    <button className="control-btn primary" onClick={nextFlashcard}>
                      Next
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "video" && (
              <div className="video-content">
                <div className="content-header">
                  <h3>Course Video</h3>
                  <div className="video-info">
                    <span>
                      <FaClock /> {coursesData[selectedCourse].duration}
                    </span>
                    <span>
                      <FaBook /> {coursesData[selectedCourse].lessons} lessons
                    </span>
                  </div>
                </div>
                <div className="video-player">
                  <iframe
                    src={coursesData[selectedCourse].video}
                    title="Course Video"
                    width="100%"
                    height="500px"
                    allowFullScreen
                    frameBorder="0"
                  ></iframe>
                </div>
              </div>
            )}

            {activeTab === "quizzes" && (
              <div className="quiz-content">
                <div className="quiz-header">
                  <h3>Knowledge Quiz</h3>
                  {!quizSubmitted && (
                    <div className="quiz-timer">
                      <FaClock className="timer-icon" />
                      Time Left: {Math.floor(quizTimer / 60)}:{(quizTimer % 60).toString().padStart(2, "0")}
                    </div>
                  )}
                </div>

                {!quizSubmitted ? (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault()
                      handleSubmitQuiz()
                    }}
                    className="quiz-form"
                  >
                    {coursesData[selectedCourse].quizzes.map((q, idx) => (
                      <div key={idx} className="question-card">
                        <div className="question-header">
                          <span className="question-number">{idx + 1}</span>
                          <h4 className="question-text">{q.question}</h4>
                        </div>
                        <div className="options-grid">
                          {q.options.map((opt, i) => (
                            <label key={i} className={`option-label ${userAnswers[idx] === opt ? "selected" : ""}`}>
                              <input
                                type="radio"
                                name={`question-${idx}`}
                                value={opt}
                                checked={userAnswers[idx] === opt}
                                onChange={() => handleAnswerChange(idx, opt)}
                              />
                              <span className="option-text">{opt}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    ))}
                    <button type="submit" className="submit-quiz-btn">
                      <FaTrophy /> Submit Quiz
                    </button>
                  </form>
                ) : (
                  <div className="quiz-results">
                    <div className="results-header">
                      <div
                        className={`score-circle ${score / coursesData[selectedCourse].quizzes.length >= 0.7 ? "pass" : "fail"}`}
                      >
                        <span className="score-text">
                          {score}/{coursesData[selectedCourse].quizzes.length}
                        </span>
                        <span className="score-percentage">
                          {((score / coursesData[selectedCourse].quizzes.length) * 100).toFixed(0)}%
                        </span>
                      </div>
                      <div className="results-info">
                        <h3>Quiz Completed!</h3>
                        {score / coursesData[selectedCourse].quizzes.length >= 0.7 ? (
                          <div className="pass-message">
                            <FaCheckCircle className="success-icon" />
                            <p>Congratulations! You passed the quiz and earned a certificate!</p>
                          </div>
                        ) : (
                          <div className="fail-message">
                            <FaTimesCircle className="fail-icon" />
                            <p>You need 70% or higher to pass. Keep studying and try again!</p>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="results-actions">
                      <button className="retry-btn" onClick={resetQuiz}>
                        Try Again
                      </button>
                      <button className="continue-btn" onClick={() => setActiveTab("overview")}>
                        Continue Learning
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
