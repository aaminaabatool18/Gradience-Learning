
// "use client"

// import { useState, useEffect } from "react"
// import {
//   FaBook,
//   FaGraduationCap,
//   FaSun,
//   FaMoon,
//   FaBell,
//   FaSignOutAlt,
//   FaCertificate,
//   FaCode,
//   FaEdit,
//   FaTrash,
// } from "react-icons/fa"
// import { useNavigate } from "react-router-dom"
// import Calendar from "react-calendar"
// import { ToastContainer, toast } from "react-toastify"
// import "react-calendar/dist/Calendar.css"
// import "react-toastify/dist/ReactToastify.css"
// import "./Dashboard.css"
// import CodeEditor from "./CodeEditor"
// import CoursePage from "./CoursePage"
// import "./CoursePage.css"
// import "./Certificates.css"
// import Chatbot from "./Chatbot" // Import the chatbot

// const Dashboard = () => {
//   const [activePanel, setActivePanel] = useState("overview")
//   const [markedDates, setMarkedDates] = useState([])
//   const [reminders, setReminders] = useState({})
//   const [selectedDate, setSelectedDate] = useState(null)
//   const [newReminder, setNewReminder] = useState("")
//   const [editIndex, setEditIndex] = useState(null)
//   const [darkMode, setDarkMode] = useState(false)
//   const [notes, setNotes] = useState(() => {
//     const savedNotes = localStorage.getItem("stickyNotes")
//     return savedNotes ? JSON.parse(savedNotes) : [""]
//   })
//   const [showCoursePage, setShowCoursePage] = useState(false)
//   const [searchTerm, setSearchTerm] = useState("")
//   const [filteredCourses, setFilteredCourses] = useState([])
//   const [filteredReminders, setFilteredReminders] = useState({})
//   const [currentVideo, setCurrentVideo] = useState(null)
//   const [certificates, setCertificates] = useState([])
//   const [points, setPoints] = useState(0)
//   const [streak, setStreak] = useState(0)

//   const navigate = useNavigate()

//   useEffect(() => {
//     document.body.classList.remove("light", "dark")
//     document.body.classList.add(darkMode ? "dark" : "light")
//   }, [darkMode])

//   useEffect(() => {
//     localStorage.setItem("stickyNotes", JSON.stringify(notes))
//   }, [notes])

//   useEffect(() => {
//     const courses = [
//       {
//         title: "Advanced UI/UX Design",
//         desc: "18/40 Lessons • 2 hours left",
//         url: "https://www.youtube.com/embed/jefp7vkPnuE?si=YsKoOmnF9EEoW3SS",
//         file: "https://example.com/advanced-ui-ux-design.pdf",
//       },
//       {
//         title: "Basic Web Development",
//         desc: "18/40 Lessons • 2 hours left",
//         url: "https://www.youtube.com/embed/bm0OyhwFDuY?si=QLRqK-2W39WDNfuS",
//         file: "https://example.com/basic-web-development.pdf",
//       },
//       {
//         title: "Python for Beginners",
//         desc: "25/40 Lessons • 3 hours left",
//         url: "https://www.youtube.com/embed/g4Ffdh41vRQ?si=5c6Cb2Hk0m5T6b2C",
//         file: "https://example.com/python-for-beginners.pdf",
//       },
//     ]

//     setFilteredCourses(courses.filter((course) => course.title.toLowerCase().includes(searchTerm.toLowerCase())))

//     const filtered = {}
//     Object.keys(reminders).forEach((dateKey) => {
//       filtered[dateKey] = reminders[dateKey].filter((reminder) =>
//         reminder.toLowerCase().includes(searchTerm.toLowerCase()),
//       )
//     })
//     setFilteredReminders(filtered)
//   }, [searchTerm, reminders])

//   const toggleTheme = () => setDarkMode((prev) => !prev)

//   const handleLogout = () => {
//     localStorage.removeItem("authenticated")
//     navigate("/")
//   }

//   const handleDateClick = (date, event) => {
//     if (event.detail === 2) {
//       setSelectedDate(date)
//     }
//     const alreadyMarked = markedDates.find((d) => d.toDateString() === date.toDateString())
//     if (!alreadyMarked) {
//       setMarkedDates([...markedDates, date])
//     }
//   }

//   const closeReminderPanel = () => {
//     setSelectedDate(null)
//     setNewReminder("")
//     setEditIndex(null)
//   }

//   const handleNoteChange = (index, value) => {
//     const updatedNotes = [...notes]
//     updatedNotes[index] = value
//     setNotes(updatedNotes)
//   }

//   const addNote = () => setNotes([...notes, ""])

//   const removeNote = (index) => setNotes(notes.filter((_, i) => i !== index))

//   const addReminder = () => {
//     if (!selectedDate || !newReminder) return

//     const dateKey = selectedDate.toDateString()
//     const updated = { ...reminders }
//     if (!updated[dateKey]) updated[dateKey] = []

//     if (editIndex !== null) {
//       updated[dateKey][editIndex] = newReminder
//       setEditIndex(null)
//       toast.success("Reminder updated!")
//     } else {
//       updated[dateKey].push(newReminder)
//       toast.success("Reminder added!")
//       setPoints(points + 10)
//     }

//     setReminders(updated)
//     setNewReminder("")
//   }

//   const editReminder = (index) => {
//     const dateKey = selectedDate.toDateString()
//     setNewReminder(reminders[dateKey][index])
//     setEditIndex(index)
//   }

//   const deleteReminder = (index) => {
//     const dateKey = selectedDate.toDateString()
//     const updated = { ...reminders }
//     updated[dateKey].splice(index, 1)
//     if (updated[dateKey].length === 0) delete updated[dateKey]
//     setReminders(updated)
//     toast.success("Reminder deleted!")
//     setPoints(points - 5)
//   }

//   const handleResumeClick = (url) => {
//     setCurrentVideo(url)
//   }

//   const downloadCertificate = (fileUrl) => {
//     window.open(fileUrl, "_blank")
//   }

//   const handleQuizComplete = (course) => {
//     const newCertificate = {
//       courseName: course.title,
//       score: "100%",
//       date: new Date().toLocaleDateString(),
//       fileUrl: course.file,
//     }
//     setCertificates((prev) => [...prev, newCertificate])
//     setPoints(points + 50)
//     setStreak(streak + 1)
//     if (streak % 5 === 0) {
//       toast.success(`Awesome! You've worked hard and aced the quiz!`)
//     }
//     toast.success(`You completed the quiz!, Certificate awarded!`)
//   }

//   return (
//     <>
//       <ToastContainer
//         position="top-right"
//         autoClose={3000}
//         hideProgressBar={false}
//         newestOnTop
//         closeOnClick
//         pauseOnHover
//       />
//       <div className="dashboard-layout">
//         <aside className={`sidebar ${darkMode ? "dark-sidebar" : "light-sidebar"}`}>
//           <div className="brand">
//             <img src="Logo.jpeg" alt="Logo" className="logo" />
//           </div>
//           <nav className="nav-menu">
//             <div
//               className="nav-item"
//               onClick={() => {
//                 setActivePanel("overview")
//                 setShowCoursePage(false)
//               }}
//             >
//               <FaBook /> Overview
//             </div>
//             <div
//               className="nav-item"
//               onClick={() => {
//                 setActivePanel("ide")
//                 setShowCoursePage(false)
//               }}
//             >
//               <FaCode /> IDE
//             </div>
//             <div
//               className="nav-item"
//               onClick={() => {
//                 setActivePanel("courses")
//                 setShowCoursePage(true)
//               }}
//             >
//               <FaGraduationCap /> Courses
//             </div>
//             <div
//               className="nav-item"
//               onClick={() => {
//                 setActivePanel("certificates")
//                 setShowCoursePage(false)
//               }}
//             >
//               <FaCertificate /> Certificates
//             </div>
//           </nav>
//         </aside>

//         <main className={`main-panel ${activePanel === "ide" ? "full-width" : ""}`}>
//           <header className={`top-header ${darkMode ? "dark-heading" : "light-heading"}`}>
//             <h2>{activePanel === "ide" ? "IDE Editor" : showCoursePage ? "Courses" : "Dashboard"}</h2>
//             <div className="top-right">
//               <input
//                 className="search-input"
//                 placeholder="Search here..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//               />
//               <button onClick={toggleTheme} className="toggle-theme">
//                 {darkMode ? <FaSun /> : <FaMoon />}
//               </button>
//               <img src="user.jpeg" alt="User" className="profile-pic" />
//               <button onClick={handleLogout} className="logout-button" title="Logout">
//                 <FaSignOutAlt /> Logout
//               </button>
//             </div>
//           </header>

//           {activePanel === "certificates" && (
//             <section className="certifications-section">
//               <h3>Your Certificates</h3>
//               <div className="certificate-list">
//                 {certificates.length === 0 ? (
//                   <p>No certificates awarded yet. Complete a quiz to earn your certificate!</p>
//                 ) : (
//                   certificates.map((certificate, idx) => (
//                     <div className="certificate-box" key={idx}>
//                       <h4>{certificate.courseName}</h4>
//                       <p>Score: {certificate.score}</p>
//                       <p>Issued on: {certificate.date}</p>
//                       <button className="download-certificate" onClick={() => downloadCertificate("certificate.pdf")}>
//                         Download Certificate
//                       </button>
//                     </div>
//                   ))
//                 )}
//               </div>
//             </section>
//           )}

//           {showCoursePage ? (
//             <div className="course-panel">
//               <CoursePage onQuizComplete={handleQuizComplete} />
//             </div>
//           ) : (
//             <>
//               {activePanel === "overview" && (
//                 <>
//                   <section className="learning-section">
//                     {" "}
//                     <br></br>
//                     <h3>Continue Learning</h3> <br></br>
//                     <div className="course-summary">
//                       {filteredCourses.map((course, idx) => (
//                         <div className="course-box" key={idx}>
//                           <h4>{course.title}</h4>
//                           <p>{course.desc}</p>
//                           <button className="resume-button" onClick={() => handleResumeClick(course.url)}>
//                             Resume Course
//                           </button>
//                         </div>
//                       ))}
//                     </div>
//                   </section>
//                   {currentVideo && (
//                     <section className="video-section">
//                       <iframe
//                         src={currentVideo}
//                         title="Course Video"
//                         width="100%"
//                         height="500px"
//                         allowFullScreen
//                       ></iframe>
//                     </section>
//                   )}
//                   <h3>Recommended Courses For You</h3> <br></br>
//                   <div className="recommended-grid">
//                     {filteredCourses.map((course, idx) => (
//                       <div className="course-card" key={idx}>
//                         <div className="video-frame">
//                           <iframe src={course.url} title={course.title} allowFullScreen></iframe>
//                         </div>
//                         <div className="course-details">
//                           <h4>{course.title}</h4>
//                           <p>{course.desc}</p>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </>
//               )}
//               {activePanel === "ide" && <CodeEditor onBack={() => setActivePanel("overview")} />}
//             </>
//           )}
//         </main>

//         <aside className="right-panel">
//           <div className="profile-box">
//             <img src="user.jpeg" alt="User" className="profile-avatar" />
//             <h4>Guest</h4>
//             <p>UI/UX Designer & Developer</p>
//           </div>
//           <div className="streak-stats">
//             <p>🎯 Points: {points}</p>
//             <p>🔥 Streak: {streak} Days</p>
//             <br></br>
//           </div>
//           <div className="calendar-section reminders">
//             {" "}
//             <br></br>
//             <h4>
//               <FaBell color="#f97438" /> Reminders
//             </h4>{" "}
//             <br></br>
//             <div className={`calendar-reminder-wrapper ${selectedDate ? "flip" : ""}`}>
//               {!selectedDate ? (
//                 <Calendar onClickDay={(date, event) => handleDateClick(date, window.event)} />
//               ) : (
//                 <div className="notification-panel enhanced">
//                   <h5>Reminders for {selectedDate.toDateString()}</h5>
//                   <ul className="reminder-list">
//                     {(reminders[selectedDate.toDateString()] || []).map((rem, idx) => (
//                       <li key={idx}>
//                         <span>{rem}</span>
//                         <span>
//                           <FaEdit className="reminder-icon edit" onClick={() => editReminder(idx)} />
//                           <FaTrash className="reminder-icon delete" onClick={() => deleteReminder(idx)} />
//                         </span>
//                       </li>
//                     ))}
//                   </ul>
//                   <input
//                     type="text"
//                     className="reminder-input"
//                     placeholder="Add a reminder..."
//                     value={newReminder}
//                     onChange={(e) => setNewReminder(e.target.value)}
//                   />
//                   <div className="reminder-actions">
//                     <button className="btn-primary" onClick={addReminder}>
//                       {editIndex !== null ? "Update" : "Save"}
//                     </button>
//                     <button className="btn-secondary" onClick={closeReminderPanel}>
//                       Back
//                     </button>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//           <div className="sticky-notes-section">
//             {" "}
//             <br></br>
//             <h4>Sticky Notes</h4> <br></br>
//             {notes.map((note, index) => (
//               <div className="sticky-note" key={index}>
//                 <textarea value={note} onChange={(e) => handleNoteChange(index, e.target.value)} />
//                 <button onClick={() => removeNote(index)}>✕</button>
//               </div>
//             ))}
//             <button onClick={addNote}>+ Add Note</button>
//           </div>
//         </aside>
//       </div>

//       {/* Add the Chatbot component */}
//       <Chatbot />
//     </>
//   )
// }

// export default Dashboard
"use client"

import { useState, useEffect } from "react"
import {
  FaBook,
  FaGraduationCap,
  FaSun,
  FaMoon,
  FaBell,
  FaSignOutAlt,
  FaCertificate,
  FaCode,
  FaEdit,
  FaTrash,
  FaSearch,
  FaPlay,
  FaDownload,
  FaTrophy,
  FaFire,
  FaPlus,
  FaTimes,
  FaChevronRight,
  FaStar,
  FaClock,
  FaUser,
  FaCalendarAlt,
  FaCheckCircle,
  FaAward,
  FaBars,
  FaHome,
} from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import Calendar from "react-calendar"
import { ToastContainer, toast } from "react-toastify"
import "react-calendar/dist/Calendar.css"
import "react-toastify/dist/ReactToastify.css"
import "./Dashboard.css"
import CodeEditor from "./CodeEditor"
import CoursePage from "./CoursePage"
import "./CoursePage.css"
import "./Certificates.css"
import Chatbot from "./Chatbot"

const Dashboard = () => {
  const [activePanel, setActivePanel] = useState("overview")
  const [markedDates, setMarkedDates] = useState([])
  const [reminders, setReminders] = useState(() => {
    const saved = localStorage.getItem("dashboardReminders")
    return saved ? JSON.parse(saved) : {}
  })
  const [selectedDate, setSelectedDate] = useState(null)
  const [newReminder, setNewReminder] = useState("")
  const [editIndex, setEditIndex] = useState(null)
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("dashboardTheme")
    return saved ? JSON.parse(saved) : false
  })
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("stickyNotes")
    return savedNotes ? JSON.parse(savedNotes) : ["Welcome to your dashboard! 📚", ""]
  })
  const [showCoursePage, setShowCoursePage] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredCourses, setFilteredCourses] = useState([])
  const [currentVideo, setCurrentVideo] = useState(null)
  const [certificates, setCertificates] = useState(() => {
    const saved = localStorage.getItem("userCertificates")
    return saved ? JSON.parse(saved) : []
  })
  const [points, setPoints] = useState(() => {
    const saved = localStorage.getItem("userPoints")
    return saved ? Number.parseInt(saved) : 1250
  })
  const [streak] = useState(() => {
    const saved = localStorage.getItem("userStreak")
    const lastLogin = localStorage.getItem("lastLoginDate")
    const today = new Date().toDateString()

    if (lastLogin === today) {
      return saved ? Number.parseInt(saved) : 7
    } else if (lastLogin) {
      const lastDate = new Date(lastLogin)
      const todayDate = new Date()
      const diffTime = Math.abs(todayDate - lastDate)
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

      if (diffDays === 1) {
        const newStreak = saved ? Number.parseInt(saved) + 1 : 1
        localStorage.setItem("userStreak", newStreak.toString())
        localStorage.setItem("lastLoginDate", today)
        return newStreak
      } else {
        localStorage.setItem("userStreak", "1")
        localStorage.setItem("lastLoginDate", today)
        return 1
      }
    } else {
      localStorage.setItem("userStreak", "1")
      localStorage.setItem("lastLoginDate", today)
      return 1
    }
  })
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [courseProgress, setCourseProgress] = useState(() => {
    const saved = localStorage.getItem("courseProgress")
    return saved ? JSON.parse(saved) : {}
  })
  const [achievements, setAchievements] = useState(() => {
    const saved = localStorage.getItem("userAchievements")
    return saved ? JSON.parse(saved) : []
  })
  const [dailyGoal, setDailyGoal] = useState(() => {
    const saved = localStorage.getItem("dailyGoal")
    return saved ? JSON.parse(saved) : { target: 2, completed: 0, date: new Date().toDateString() }
  })
  const [notifications, setNotifications] = useState(() => {
    const saved = localStorage.getItem("userNotifications")
    return saved
      ? JSON.parse(saved)
      : [
          {
            id: 1,
            title: "Course Progress",
            message: "You're 80% through Advanced UI/UX Design",
            time: "2 hours ago",
            type: "progress",
            read: false,
          },
          {
            id: 2,
            title: "New Achievement",
            message: "You've earned the 'Week Warrior' badge!",
            time: "1 day ago",
            type: "achievement",
            read: false,
          },
          {
            id: 3,
            title: "Reminder",
            message: "Don't forget your daily learning goal",
            time: "3 hours ago",
            type: "reminder",
            read: true,
          },
        ]
  })
  const [showNotifications, setShowNotifications] = useState(false)

  const navigate = useNavigate()

  const courses = [
    {
      id: 1,
      title: "Advanced UI/UX Design",
      desc: "Master modern design principles and create stunning user interfaces",
      lessons: 40,
      duration: "8 hours",
      url: "https://www.youtube.com/embed/c9Wg6Cb_YlU", // Real UI/UX Design Course
      file: "https://example.com/advanced-ui-ux-design.pdf",
      category: "Design",
      difficulty: "Advanced",
      instructor: "Sarah Johnson",
      rating: 4.8,
      students: 12500,
      thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop&auto=format",
    },
    {
      id: 2,
      title: "Full Stack Web Development",
      desc: "Build complete web applications from frontend to backend",
      lessons: 60,
      duration: "12 hours",
      url: "https://www.youtube.com/embed/nu_pCVPKzTk", // Real Full Stack Course
      file: "https://example.com/web-development.pdf",
      category: "Development",
      difficulty: "Intermediate",
      instructor: "Mike Chen",
      rating: 4.9,
      students: 18200,
      thumbnail: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=250&fit=crop&auto=format",
    },
    {
      id: 3,
      title: "Python for Data Science",
      desc: "Learn Python programming for data analysis and machine learning",
      lessons: 45,
      duration: "10 hours",
      url: "https://www.youtube.com/embed/_uQrJ0TkZlc", // Real Python Data Science Course
      file: "https://example.com/python-data-science.pdf",
      category: "Programming",
      difficulty: "Beginner",
      instructor: "Alex Rodriguez",
      rating: 4.7,
      students: 9800,
      thumbnail: "https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?w=400&h=250&fit=crop&auto=format",
    },
    {
      id: 4,
      title: "Mobile App Development",
      desc: "Create native mobile apps for iOS and Android platforms",
      lessons: 35,
      duration: "7 hours",
      url: "https://www.youtube.com/embed/0-S5a0eXPoc", // Real Mobile Development Course
      file: "https://example.com/mobile-development.pdf",
      category: "Development",
      difficulty: "Advanced",
      instructor: "Emma Wilson",
      rating: 4.6,
      students: 7500,
      thumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop&auto=format",
    },
  ]

  // Initialize course progress
  useEffect(() => {
    const initialProgress = {}
    courses.forEach((course) => {
      if (!courseProgress[course.id]) {
        initialProgress[course.id] = {
          progress: Math.floor(Math.random() * 80) + 10, // Random progress between 10-90%
          completedLessons: Math.floor(((Math.floor(Math.random() * 80) + 10) / 100) * course.lessons),
          lastAccessed: new Date().toISOString(),
          timeSpent: Math.floor(Math.random() * 300) + 60, // Random time in minutes
        }
      }
    })
    if (Object.keys(initialProgress).length > 0) {
      setCourseProgress((prev) => ({ ...prev, ...initialProgress }))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Save data to localStorage
  useEffect(() => {
    localStorage.setItem("dashboardTheme", JSON.stringify(darkMode))
  }, [darkMode])

  useEffect(() => {
    localStorage.setItem("stickyNotes", JSON.stringify(notes))
  }, [notes])

  useEffect(() => {
    localStorage.setItem("dashboardReminders", JSON.stringify(reminders))
  }, [reminders])

  useEffect(() => {
    localStorage.setItem("userPoints", points.toString())
  }, [points])

  useEffect(() => {
    localStorage.setItem("userStreak", streak.toString())
  }, [streak])

  useEffect(() => {
    localStorage.setItem("userCertificates", JSON.stringify(certificates))
  }, [certificates])

  useEffect(() => {
    localStorage.setItem("courseProgress", JSON.stringify(courseProgress))
  }, [courseProgress])

  useEffect(() => {
    localStorage.setItem("userAchievements", JSON.stringify(achievements))
  }, [achievements])

  useEffect(() => {
    localStorage.setItem("dailyGoal", JSON.stringify(dailyGoal))
  }, [dailyGoal])

  useEffect(() => {
    localStorage.setItem("userNotifications", JSON.stringify(notifications))
  }, [notifications])

  // Check daily goal reset
  useEffect(() => {
    const today = new Date().toDateString()
    if (dailyGoal.date !== today) {
      setDailyGoal({ target: 2, completed: 0, date: today })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    document.body.classList.remove("light", "dark")
    document.body.classList.add(darkMode ? "dark" : "light")
  }, [darkMode])

  useEffect(() => {
    setFilteredCourses(
      courses.filter(
        (course) =>
          course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          course.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
          course.instructor.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm])

  useEffect(() => {
    checkAchievements()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [points, streak, certificates.length])

  const checkAchievements = () => {
    const newAchievements = []

    // Points achievements
    if (points >= 1000 && !achievements.find((a) => a.id === "points_1000")) {
      newAchievements.push({
        id: "points_1000",
        title: "Point Master",
        description: "Earned 1000 points",
        icon: "🏆",
        date: new Date().toLocaleDateString(),
      })
    }

    // Streak achievements
    if (streak >= 7 && !achievements.find((a) => a.id === "streak_7")) {
      newAchievements.push({
        id: "streak_7",
        title: "Week Warrior",
        description: "7 day learning streak",
        icon: "🔥",
        date: new Date().toLocaleDateString(),
      })
    }

    // Certificate achievements
    if (certificates.length >= 3 && !achievements.find((a) => a.id === "cert_3")) {
      newAchievements.push({
        id: "cert_3",
        title: "Certificate Collector",
        description: "Earned 3 certificates",
        icon: "📜",
        date: new Date().toLocaleDateString(),
      })
    }

    if (newAchievements.length > 0) {
      setAchievements((prev) => [...prev, ...newAchievements])
      newAchievements.forEach((achievement) => {
        toast.success(`🎉 Achievement Unlocked: ${achievement.title}!`)
      })
    }
  }

  const toggleTheme = () => {
    setDarkMode((prev) => !prev)
    toast.success(`Switched to ${!darkMode ? "dark" : "light"} mode`)
  }

  const handleLogout = () => {
    // Clear user session data but keep learning progress
    localStorage.removeItem("authenticated")
    localStorage.removeItem("loggedIn")
    toast.success("Logged out successfully!")
    setTimeout(() => {
      navigate("/")
    }, 1000)
  }

  const handleDateClick = (date, event) => {
    if (event.detail === 2) {
      setSelectedDate(date)
    }
    const alreadyMarked = markedDates.find((d) => d.toDateString() === date.toDateString())
    if (!alreadyMarked) {
      setMarkedDates([...markedDates, date])
    }
  }

  const closeReminderPanel = () => {
    setSelectedDate(null)
    setNewReminder("")
    setEditIndex(null)
  }

  const handleNoteChange = (index, value) => {
    const updatedNotes = [...notes]
    updatedNotes[index] = value
    setNotes(updatedNotes)
  }

  const addNote = () => {
    setNotes([...notes, ""])
    toast.success("New note added!")
  }

  const removeNote = (index) => {
    if (notes.length > 1) {
      setNotes(notes.filter((_, i) => i !== index))
      toast.success("Note removed!")
    }
  }

  const addReminder = () => {
    if (!selectedDate || !newReminder.trim()) {
      toast.error("Please enter a reminder!")
      return
    }

    const dateKey = selectedDate.toDateString()
    const updated = { ...reminders }
    if (!updated[dateKey]) updated[dateKey] = []

    if (editIndex !== null) {
      updated[dateKey][editIndex] = newReminder.trim()
      setEditIndex(null)
      toast.success("Reminder updated!")
    } else {
      updated[dateKey].push(newReminder.trim())
      toast.success("Reminder added!")
      setPoints((prev) => prev + 5)
    }

    setReminders(updated)
    setNewReminder("")
  }

  const editReminder = (index) => {
    const dateKey = selectedDate.toDateString()
    setNewReminder(reminders[dateKey][index])
    setEditIndex(index)
  }

  const deleteReminder = (index) => {
    const dateKey = selectedDate.toDateString()
    const updated = { ...reminders }
    updated[dateKey].splice(index, 1)
    if (updated[dateKey].length === 0) delete updated[dateKey]
    setReminders(updated)
    toast.success("Reminder deleted!")
  }

  const handleResumeClick = (course) => {
    setCurrentVideo(course.url)

    // Update course progress
    const updatedProgress = { ...courseProgress }
    if (!updatedProgress[course.id]) {
      updatedProgress[course.id] = { progress: 0, completedLessons: 0, timeSpent: 0 }
    }
    updatedProgress[course.id].lastAccessed = new Date().toISOString()
    updatedProgress[course.id].timeSpent += 30 // Add 30 minutes
    setCourseProgress(updatedProgress)

    // Update daily goal
    const today = new Date().toDateString()
    if (dailyGoal.date === today && dailyGoal.completed < dailyGoal.target) {
      setDailyGoal((prev) => ({ ...prev, completed: prev.completed + 1 }))
      if (dailyGoal.completed + 1 >= dailyGoal.target) {
        toast.success("🎯 Daily goal completed! +50 points")
        setPoints((prev) => prev + 50)
      }
    }

    setPoints((prev) => prev + 10)
    toast.success(`Resumed: ${course.title}`)
  }

  const downloadCertificate = (certificate) => {
    // Simulate certificate download
    toast.success(`Downloading certificate `)
    // In a real app, this would trigger an actual download
    const link = document.createElement("a")
    link.href = "/certificate.pdf"
    link.download = `certificate.pdf`
    link.click()
  }

  const addNotification = (notification) => {
    const newNotification = {
      id: Date.now(),
      ...notification,
      time: "Just now",
      read: false,
    }
    setNotifications((prev) => [newNotification, ...prev])
  }

  const markNotificationAsRead = (id) => {
    setNotifications((prev) => prev.map((notif) => (notif.id === id ? { ...notif, read: true } : notif)))
  }

  const clearAllNotifications = () => {
    setNotifications([])
  }

  const handleQuizComplete = (course) => {
    const score = Math.floor(Math.random() * 20) + 80 // Random score between 80-100%
    const newCertificate = {
      id: Date.now(),
      courseName: course.title,
      score: `${score}%`,
      date: new Date().toLocaleDateString(),
      fileUrl: course.file,
      instructor: course.instructor,
      category: course.category,
    }

    setCertificates((prev) => [...prev, newCertificate])
    setPoints((prev) => prev + 100)

    // Update course progress to 100%
    const updatedProgress = { ...courseProgress }
    updatedProgress[course.id] = {
      ...updatedProgress[course.id],
      progress: 100,
      completedLessons: course.lessons,
      completed: true,
    }
    setCourseProgress(updatedProgress)

    addNotification({
      title: "Course Completed!",
      message: `You've completed ${course.title} and earned a certificate!`,
      type: "achievement",
    })
    toast.success(`🎉 Course completed! Certificate earned! +100 points`)
  }

  const completeLesson = (courseId) => {
    const updatedProgress = { ...courseProgress }
    const course = courses.find((c) => c.id === courseId)

    if (updatedProgress[courseId] && updatedProgress[courseId].progress < 100) {
      const newProgress = Math.min(updatedProgress[courseId].progress + 10, 100)
      const newCompletedLessons = Math.floor((newProgress / 100) * course.lessons)

      updatedProgress[courseId] = {
        ...updatedProgress[courseId],
        progress: newProgress,
        completedLessons: newCompletedLessons,
        lastAccessed: new Date().toISOString(),
      }

      setCourseProgress(updatedProgress)
      setPoints((prev) => prev + 20)
      toast.success("Lesson completed! +20 points")

      if (newProgress === 100) {
        addNotification({
          title: "Course Ready!",
          message: `${course.title} is ready for final quiz!`,
          type: "progress",
        })
        toast.success("🎉 Course completed! Take the quiz to earn your certificate!")
      }
    }
  }

  const menuItems = [
    { id: "overview", icon: FaHome, label: "Overview", showCoursePage: false },
    { id: "courses", icon: FaGraduationCap, label: "Courses", showCoursePage: true },
    { id: "ide", icon: FaCode, label: "Code Editor", showCoursePage: false },
    { id: "certificates", icon: FaCertificate, label: "Certificates", showCoursePage: false },
  ]

  const getProgressColor = (progress) => {
    if (progress < 30) return "from-red-500 to-red-600"
    if (progress < 70) return "from-yellow-500 to-orange-500"
    return "from-green-500 to-emerald-600"
  }

  const formatTime = (minutes) => {
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme={darkMode ? "dark" : "light"}
        toastStyle={{
          background: darkMode ? "#1e293b" : "#ffffff",
          color: darkMode ? "#f8fafc" : "#1e293b",
        }}
      />

      <div
        className={`dashboard-container ${darkMode ? "dark-theme" : "light-theme"} ${activePanel === "ide" ? "ide-active" : ""}`}
      >
        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="mobile-overlay" onClick={() => setMobileMenuOpen(false)}>
            <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
              <div className="mobile-menu-header">
                <img src="Lgo.png" alt="Logo" className="mobile-logo" />
                <span className="mobile-brand">Gradience</span>
                <button className="mobile-close" onClick={() => setMobileMenuOpen(false)}>
                  <FaTimes />
                </button>
              </div>
              <nav className="mobile-nav">
                {menuItems.map((item) => (
                  <div
                    key={item.id}
                    className={`mobile-nav-item ${activePanel === item.id ? "active" : ""}`}
                    onClick={() => {
                      setActivePanel(item.id)
                      setShowCoursePage(item.showCoursePage)
                      setMobileMenuOpen(false)
                    }}
                  >
                    <item.icon className="mobile-nav-icon" />
                    <span className="mobile-nav-label">{item.label}</span>
                  </div>
                ))}
              </nav>
            </div>
          </div>
        )}

        {/* Sidebar */}
        <aside className={`modern-sidebar ${sidebarCollapsed ? "collapsed" : ""}`}>
          <div className="sidebar-header">
            <div className="brand-section">
              <img src="Lgo.png" alt="Logo" className="brand-logo" />
              {!sidebarCollapsed && <span className="brand-text">Gradience</span>}
            </div>
            <button className="sidebar-toggle" onClick={() => setSidebarCollapsed(!sidebarCollapsed)}>
              <FaChevronRight className={sidebarCollapsed ? "" : "rotated"} />
            </button>
          </div>

          <nav className="sidebar-nav">
            {menuItems.map((item) => (
              <div
                key={item.id}
                className={`nav-item ${activePanel === item.id ? "active" : ""}`}
                onClick={() => {
                  setActivePanel(item.id)
                  setShowCoursePage(item.showCoursePage)
                }}
                title={sidebarCollapsed ? item.label : ""}
              >
                <item.icon className="nav-icon" />
                {!sidebarCollapsed && <span className="nav-label">{item.label}</span>}
                {!sidebarCollapsed && activePanel === item.id && <div className="nav-indicator" />}
              </div>
            ))}
          </nav>

          <div className="sidebar-footer">
            <div className="user-profile-mini">
              <img src="user.jpeg" alt="User" className="profile-mini-avatar" />
              {!sidebarCollapsed && (
                <div className="profile-mini-info">
                  <span className="profile-mini-name">Guest User</span>
                  <span className="profile-mini-role">Premium Student</span>
                </div>
              )}
            </div>
            {!sidebarCollapsed && (
              <button className="sidebar-logout-btn" onClick={handleLogout}>
                <FaSignOutAlt />
                <span>Logout</span>
              </button>
            )}
          </div>
        </aside>

        {/* Main Content */}
        <main className={`main-content ${activePanel === "ide" ? "ide-mode" : ""}`}>
          {/* Header */}
          <header className="modern-header">
            <div className="header-left">
              <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(true)}>
                <FaBars />
              </button>
              <div className="header-title-section">
                <h1 className="page-title">
                  {activePanel === "ide"
                    ? "Code Editor"
                    : showCoursePage
                      ? "My Courses"
                      : activePanel === "certificates"
                        ? "Certificates"
                        : "Dashboard"}
                </h1>
                <p className="page-subtitle">
                  {activePanel === "overview" && `Welcome back! You're on a ${streak} day streak 🔥`}
                  {activePanel === "ide" && "Write, test, and debug your code"}
                  {activePanel === "courses" && "Continue your learning journey"}
                  {activePanel === "certificates" && "Your achievements and certifications"}
                </p>
              </div>
            </div>

            <div className="header-right">
              <div className="search-container">
                <FaSearch className="search-icon" />
                <input
                  className="search-input"
                  placeholder="Search courses, notes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div className="header-actions">
                <button onClick={toggleTheme} className="theme-toggle" title="Toggle theme">
                  {darkMode ? <FaSun /> : <FaMoon />}
                </button>

                <div className="notifications-container">
                  <button
                    className="notifications-btn"
                    onClick={() => setShowNotifications(!showNotifications)}
                    title="Notifications"
                  >
                    <FaBell />
                    {notifications.filter((n) => !n.read).length > 0 && (
                      <span className="notification-badge">{notifications.filter((n) => !n.read).length}</span>
                    )}
                  </button>

                  {showNotifications && (
                    <div className="notifications-dropdown">
                      <div className="notifications-header">
                        <h3>Notifications</h3>
                        <button onClick={clearAllNotifications} className="clear-all-btn">
                          Clear All
                        </button>
                      </div>
                      <div className="notifications-list">
                        {notifications.length === 0 ? (
                          <div className="no-notifications">
                            <FaBell className="no-notif-icon" />
                            <p>No notifications</p>
                          </div>
                        ) : (
                          notifications.map((notification) => (
                            <div
                              key={notification.id}
                              className={`notification-item ${notification.read ? "read" : "unread"}`}
                              onClick={() => markNotificationAsRead(notification.id)}
                            >
                              <div className="notification-content">
                                <h4>{notification.title}</h4>
                                <p>{notification.message}</p>
                                <span className="notification-time">{notification.time}</span>
                              </div>
                              <div className={`notification-type ${notification.type}`}>
                                {notification.type === "progress" && <FaBook />}
                                {notification.type === "achievement" && <FaTrophy />}
                                {notification.type === "reminder" && <FaBell />}
                              </div>
                            </div>
                          ))
                        )}
                      </div>
                    </div>
                  )}
                </div>

                <div className="header-profile">
                  <img src="user.jpeg" alt="User" className="header-avatar" />
                  <div className="profile-dropdown">
                    <div className="dropdown-item">
                      <FaUser /> Profile
                    </div>
                    <div className="dropdown-item">
                      <FaTrophy /> Achievements
                    </div>
                    <div className="dropdown-divider"></div>
                    <button onClick={handleLogout} className="dropdown-item logout">
                      <FaSignOutAlt /> Logout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* Content Area */}
          <div className="content-area">
            {activePanel === "certificates" && (
              <section className="certificates-section">
                <div className="section-header">
                  <h2>Your Certificates</h2>
                  <p>Showcase your achievements and completed courses</p>
                </div>
                <div className="certificates-grid">
                  {certificates.length === 0 ? (
                    <div className="empty-state">
                      <FaCertificate className="empty-icon" />
                      <h3>No certificates yet</h3>
                      <p>Complete courses and quizzes to earn certificates!</p>
                      <button
                        className="cta-button"
                        onClick={() => {
                          setActivePanel("courses")
                          setShowCoursePage(true)
                        }}
                      >
                        Browse Courses
                      </button>
                    </div>
                  ) : (
                    certificates.map((certificate, idx) => (
                      <div className="certificate-card" key={idx}>
                        <div className="certificate-header">
                          <FaCertificate className="certificate-icon" />
                          <div className="certificate-badge">Certified</div>
                        </div>
                        <div className="certificate-content">
                          <h3>{certificate.courseName}</h3>
                          <p className="certificate-instructor">by {certificate.instructor}</p>
                          <div className="certificate-details">
                            <div className="detail-item">
                              <FaStar className="detail-icon" />
                              <span>Score: {certificate.score}</span>
                            </div>
                            <div className="detail-item">
                              <FaCalendarAlt className="detail-icon" />
                              <span>Issued: {certificate.date}</span>
                            </div>
                            <div className="detail-item">
                              <FaAward className="detail-icon" />
                              <span>{certificate.category}</span>
                            </div>
                          </div>
                        </div>
                        <button className="download-btn" onClick={() => downloadCertificate(certificate)}>
                          <FaDownload /> Download Certificate
                        </button>
                      </div>
                    ))
                  )}
                </div>
              </section>
            )}

            {showCoursePage ? (
              <div className="course-panel">
                <CoursePage onQuizComplete={handleQuizComplete} />
              </div>
            ) : (
              <>
                {activePanel === "overview" && (
                  <>
                    {/* Daily Goal Progress */}
                    <div className="daily-goal-card">
                      <div className="goal-header">
                        <h3>Daily Learning Goal</h3>
                        <span className="goal-status">
                          {dailyGoal.completed}/{dailyGoal.target} completed
                        </span>
                      </div>
                      <div className="goal-progress">
                        <div
                          className="goal-progress-fill"
                          style={{ width: `${(dailyGoal.completed / dailyGoal.target) * 100}%` }}
                        ></div>
                      </div>
                      <p className="goal-text">
                        {dailyGoal.completed >= dailyGoal.target
                          ? "🎉 Great job! You've completed your daily goal!"
                          : `${dailyGoal.target - dailyGoal.completed} more session${dailyGoal.target - dailyGoal.completed > 1 ? "s" : ""} to reach your goal`}
                      </p>
                    </div>

                    {/* Stats Cards */}
                    <div className="stats-grid">
                      <div className="stat-card points">
                        <div className="stat-icon">
                          <FaTrophy />
                        </div>
                        <div className="stat-content">
                          <h3>{points.toLocaleString()}</h3>
                          <p>Total Points</p>
                          <div className="stat-trend">+50 this week</div>
                        </div>
                      </div>
                      <div className="stat-card streak">
                        <div className="stat-icon">
                          <FaFire />
                        </div>
                        <div className="stat-content">
                          <h3>{streak}</h3>
                          <p>Day Streak</p>
                          <div className="stat-trend">Keep it up!</div>
                        </div>
                      </div>
                      <div className="stat-card courses">
                        <div className="stat-icon">
                          <FaGraduationCap />
                        </div>
                        <div className="stat-content">
                          <h3>{filteredCourses.length}</h3>
                          <p>Active Courses</p>
                          <div className="stat-trend">
                            {Object.values(courseProgress).filter((p) => p.progress === 100).length} completed
                          </div>
                        </div>
                      </div>
                      <div className="stat-card certificates-stat">
                        <div className="stat-icon">
                          <FaCertificate />
                        </div>
                        <div className="stat-content">
                          <h3>{certificates.length}</h3>
                          <p>Certificates</p>
                          <div className="stat-trend">{achievements.length} achievements</div>
                        </div>
                      </div>
                    </div>

                    {/* Continue Learning Section */}
                    <section className="learning-section">
                      <div className="section-header">
                        <h2>Continue Learning</h2>
                        <p>Pick up where you left off</p>
                      </div>
                      <div className="courses-grid">
                        {filteredCourses.slice(0, 3).map((course) => {
                          const progress = courseProgress[course.id] || {
                            progress: 0,
                            completedLessons: 0,
                            timeSpent: 0,
                          }
                          return (
                            <div className="course-card modern" key={course.id}>
                              <div className="course-image">
                                <img src={course.thumbnail || "/placeholder.svg"} alt={course.title} />
                                <div className="course-overlay">
                                  <button className="play-btn" onClick={() => handleResumeClick(course)}>
                                    <FaPlay />
                                  </button>
                                </div>
                              </div>
                              <div className="course-header">
                                <div className="course-category">{course.category}</div>
                                <div className="course-difficulty">{course.difficulty}</div>
                              </div>
                              <div className="course-content">
                                <h3>{course.title}</h3>
                                <p className="course-instructor">by {course.instructor}</p>
                                <p className="course-desc">{course.desc}</p>

                                <div className="course-meta">
                                  <div className="meta-item">
                                    <FaBook className="meta-icon" />
                                    <span>
                                      {progress.completedLessons}/{course.lessons} lessons
                                    </span>
                                  </div>
                                  <div className="meta-item">
                                    <FaClock className="meta-icon" />
                                    <span>{formatTime(progress.timeSpent)} spent</span>
                                  </div>
                                  <div className="meta-item">
                                    <FaStar className="meta-icon" />
                                    <span>
                                      {course.rating} ({course.students.toLocaleString()})
                                    </span>
                                  </div>
                                </div>

                                <div className="progress-container">
                                  <div className="progress-bar">
                                    <div
                                      className={`progress-fill bg-gradient-to-r ${getProgressColor(progress.progress)}`}
                                      style={{ width: `${progress.progress}%` }}
                                    ></div>
                                  </div>
                                  <span className="progress-text">{progress.progress}% Complete</span>
                                </div>
                              </div>
                              <div className="course-actions">
                                <button className="resume-btn" onClick={() => handleResumeClick(course)}>
                                  <FaPlay /> Continue Learning
                                </button>
                                {progress.progress < 100 && (
                                  <button className="lesson-btn" onClick={() => completeLesson(course.id)}>
                                    <FaCheckCircle /> Complete Lesson
                                  </button>
                                )}
                                {progress.progress === 100 && (
                                  <button className="quiz-btn" onClick={() => handleQuizComplete(course)}>
                                    <FaAward /> Take Quiz
                                  </button>
                                )}
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </section>

                    {/* Current Video */}
                    {currentVideo && (
                      <section className="video-section">
                        <div className="video-header">
                          <h3>Now Playing</h3>
                          <button className="close-video-btn" onClick={() => setCurrentVideo(null)}>
                            <FaTimes />
                          </button>
                        </div>
                        <div className="video-container">
                          <iframe
                            src={currentVideo}
                            title="Course Video"
                            width="100%"
                            height="500px"
                            allowFullScreen
                          ></iframe>
                        </div>
                      </section>
                    )}

                    {/* Recent Achievements */}
                    {achievements.length > 0 && (
                      <section className="achievements-section">
                        <div className="section-header">
                          <h2>Recent Achievements</h2>
                          <p>Your latest accomplishments</p>
                        </div>
                        <div className="achievements-grid">
                          {achievements.slice(-3).map((achievement, idx) => (
                            <div className="achievement-card" key={idx}>
                              <div className="achievement-icon">{achievement.icon}</div>
                              <div className="achievement-content">
                                <h4>{achievement.title}</h4>
                                <p>{achievement.description}</p>
                                <span className="achievement-date">{achievement.date}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </section>
                    )}

                    {/* Recommended Courses */}
                    <section className="recommended-section">
                      <div className="section-header">
                        <h2>Recommended For You</h2>
                        <p>Based on your learning preferences</p>
                      </div>
                      <div className="recommended-grid">
                        {filteredCourses.slice(1).map((course) => (
                          <div className="recommended-card" key={course.id}>
                            <div className="video-thumbnail">
                              <img src={course.thumbnail || "/placeholder.svg"} alt={course.title} />
                              <div className="play-overlay">
                                <FaPlay />
                              </div>
                              <div className="course-duration">{course.duration}</div>
                            </div>
                            <div className="recommended-content">
                              <h4>{course.title}</h4>
                              <p className="instructor">by {course.instructor}</p>
                              <p className="description">{course.desc}</p>
                              <div className="course-meta">
                                <span className="category">{course.category}</span>
                                <span className="difficulty">{course.difficulty}</span>
                                <div className="rating">
                                  <FaStar className="star-icon" />
                                  <span>{course.rating}</span>
                                </div>
                              </div>
                              <button
                                className="enroll-btn"
                                onClick={() => {
                                  toast.success(`Enrolled in ${course.title}!`)
                                  setPoints((prev) => prev + 25)
                                }}
                              >
                                Enroll Now
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </section>
                  </>
                )}
                {activePanel === "ide" && <CodeEditor onBack={() => setActivePanel("overview")} />}
              </>
            )}
          </div>
        </main>

        {/* Right Panel */}
        <aside className="right-sidebar">
          {/* Profile Card */}
          <div className="profile-card">
            <div className="profile-header">
              <img src="user.jpeg" alt="User" className="profile-avatar" />
              <div className="profile-info">
                <h3>Guest User</h3>
                <p>Premium Student</p>
              </div>
            </div>
            <div className="profile-stats">
              <div className="stat">
                <FaTrophy  className="stat-icon" />
                <span>{points.toLocaleString()} pts</span>
              </div>
              <div className="stat">
                <FaFire className="stat-icon" />
                <span>{streak} days</span>
              </div>
            </div>
            <div className="profile-level">
              <div className="level-info">
              <br></br>
              </div>
              <div className="level-progress">
                <div className="level-fill" style={{ width: `${((points % 500) / 500) * 100}%` }}></div>
              </div>
            </div>
          </div>

          {/* Calendar & Reminders */}
          <div className="calendar-card">
            <div className="card-header">
              <FaBell className="header-icon" />
              <h3>Reminders</h3>
              <span className="reminder-count">
                {Object.values(reminders).reduce((acc, curr) => acc + curr.length, 0)}
              </span>
            </div>
            <div className={`calendar-container ${selectedDate ? "flipped" : ""}`}>
              {!selectedDate ? (
                <Calendar
                  onClickDay={(date, event) => handleDateClick(date, window.event)}
                  className="modern-calendar"
                  tileClassName={({ date }) => {
                    const hasReminder = reminders[date.toDateString()]
                    return hasReminder ? "has-reminder" : null
                  }}
                />
              ) : (
                <div className="reminder-panel">
                  <div className="panel-header">
                    <h4>{selectedDate.toLocaleDateString()}</h4>
                    <button className="close-btn" onClick={closeReminderPanel}>
                      <FaTimes />
                    </button>
                  </div>
                  <div className="reminders-list">
                    {(reminders[selectedDate.toDateString()] || []).map((rem, idx) => (
                      <div className="reminder-item" key={idx}>
                        <span className="reminder-text">{rem}</span>
                        <div className="reminder-actions">
                          <button onClick={() => editReminder(idx)} className="edit-btn">
                            <FaEdit />
                          </button>
                          <button onClick={() => deleteReminder(idx)} className="delete-btn">
                            <FaTrash />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="add-reminder">
                    <input
                      type="text"
                      placeholder="Add a reminder..."
                      value={newReminder}
                      onChange={(e) => setNewReminder(e.target.value)}
                      className="reminder-input"
                      onKeyPress={(e) => e.key === "Enter" && addReminder()}
                    />
                    <button onClick={addReminder} className="add-btn">
                      {editIndex !== null ? "Update" : "Add"}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sticky Notes */}
          <div className="notes-card">
            <div className="card-header">
              <h3>Quick Notes</h3>
              <button onClick={addNote} className="add-note-btn">
                <FaPlus />
              </button>
            </div>
            <div className="notes-container">
              {notes.map((note, index) => (
                <div className="sticky-note modern" key={index}>
                  <textarea
                    value={note}
                    onChange={(e) => handleNoteChange(index, e.target.value)}
                    placeholder="Write a note..."
                  />
                  {notes.length > 1 && (
                    <button onClick={() => removeNote(index)} className="remove-note">
                      <FaTimes />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>

      <Chatbot />
    </>
  )
}

export default Dashboard
