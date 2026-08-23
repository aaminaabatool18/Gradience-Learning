// "use client"

// import { useState } from "react"
// import { Link, useNavigate } from "react-router-dom"
// import "./Homepage.css"

// function Homepage() {
//   const [reviews, setReviews] = useState([
//     {
//       name: "Areeba Khalid",
//       photo: "https://randomuser.me/api/portraits/women/44.jpg",
//       review: "Gradience revolutionized how I study!",
//     },
//     {
//       name: "Usman Iqbal",
//       photo: "https://randomuser.me/api/portraits/men/32.jpg",
//       review: "The gamified quizzes are so fun and effective.",
//     },
//     {
//       name: "Zara Ali",
//       photo: "https://randomuser.me/api/portraits/women/68.jpg",
//       review: "I never thought AI tutoring could be this good.",
//     },
//   ])
//   const [newReview, setNewReview] = useState("")
//   const [userName, setUserName] = useState("")
//   const [userPhoto, setUserPhoto] = useState("")
//   const [showReviewForm, setShowReviewForm] = useState(false)

//   const navigate = useNavigate()

//   const handleReviewSubmit = (e) => {
//     e.preventDefault()
//     if (newReview.trim() && userName.trim() && userPhoto.trim()) {
//       const newReviewData = {
//         name: userName,
//         photo: userPhoto,
//         review: newReview,
//       }
//       setReviews([...reviews, newReviewData])
//       setNewReview("")
//       setUserName("")
//       setUserPhoto("")
//       setShowReviewForm(false)
//     } else {
//       alert("Please fill in all fields.")
//     }
//   }

//   return (
//     <div className="main-container">
//       {/* Navbar */}
//       <header className="navbar">
//         <img src="logo.jpeg" alt="Logo" className="logo" />
//         <div className="nav-links">
//           <a href="#home">Home</a>
//           <a href="#about">About</a>
//           <Link to="/community">Community</Link>
//         </div>
//         <div className="auth-buttons">
//           <Link to="/login">
//             <button className="login-btn">Login</button>
//           </Link>
//           <Link to="/login">
//             <button className="signup-btn">Sign Up</button>
//           </Link>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section id="home" className="hero-section">
//         <video autoPlay muted loop playsInline className="hero-video">
//           <source src="/OrangeBackground.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//         <div className="hero-overlay"></div>

//         <div className="hero-text">
//           <h1>
//             Welcome to <strong>Gradience</strong>
//           </h1>
//           <p>
//             Gradience is your all-in-one AI-powered learning platform for CS students. From interactive notes to live
//             coding tools and gamified quizzes — we're building the future of smart education.
//           </p>
//           <div className="hero-buttons">
//             <Link to="/login">
//               <button className="cta-btn">Get Started</button>
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Highlights Section */}
//       <section className="highlights">
//         <div className="highlight-box">
//           <h2>25K+</h2>
//           <p>Happy Students</p>
//         </div>
//         <div className="highlight-box">
//           <h2>150+</h2>
//           <p>Interactive Modules</p>
//         </div>
//         <div className="highlight-box">
//           <h2>100+</h2>
//           <p>University Links</p>
//         </div>
//       </section>

//       {/* Feature Boxes Section */}
//       <section className="feature-boxes">
//         <div className="feature">
//           <img src="book.jpeg" alt="Book" />
//           <h3>Notes</h3>
//           <p>Summarized yet detailed notes and Flashcards</p>
//         </div>
//         <div className="feature">
//           <img src="https://cdn-icons-png.flaticon.com/512/167/167707.png" alt="Coding" />
//           <h3>Live Coding</h3>
//           <p>Write, run, and debug your code in-browser.</p>
//         </div>
//         <div className="feature">
//           <img src="https://cdn-icons-png.flaticon.com/512/744/744466.png" alt="Gamify" />
//           <h3>Gamified Progress</h3>
//           <p>Earn badges and track learning achievements.</p>
//         </div>
//       </section>

//       {/* Why Us Section */}
//       <section id="about" className="why-us-section">
//         <h2>Why Choose Gradience?</h2>
//         <div className="why-cards">
//           <div className="card">
//             <h3>AI Notes</h3>
//             <p>Smart summaries created just for you.</p>
//           </div>
//           <div className="card">
//             <h3>Code Playground</h3>
//             <p>Write, run and debug your code in real-time.</p>
//           </div>
//           <div className="card">
//             <h3>Flashcards & Quizzes</h3>
//             <p>Engage and revise with fun formats.</p>
//           </div>
//         </div>
//       </section>

//       {/* Trusted Institutions Section */}
//       <section className="trusted-section">
//         <h2>Trusted By Leading Institutions</h2>
//         <div className="trusted-logos">
//           <img src="unis.jpeg" alt="University" />
//         </div>
//       </section>

//       {/* Join Our Community Section */}
//       <section className="community-section">
//         <h2>Join Our Thriving Community</h2>
//         <p>
//           Be part of an engaging community where learners, tutors, and AI tools come together. Collaborate, share
//           knowledge, and grow together.
//         </p>
//         <button onClick={() => setShowReviewForm(true)} className="cta-btn">
//           Give Review
//         </button>
//       </section>

//       {/* Add Review Form Section */}
//       {showReviewForm && (
//         <section className="add-review-section">
//           <h2>Share Your Feedback</h2>
//           <form onSubmit={handleReviewSubmit}>
//             <input
//               type="text"
//               placeholder="Your Name"
//               value={userName}
//               onChange={(e) => setUserName(e.target.value)}
//               required
//             />
//             <input
//               type="url"
//               placeholder="Your Photo URL (optional)"
//               value={userPhoto}
//               onChange={(e) => setUserPhoto(e.target.value)}
//             />
//             <textarea
//               value={newReview}
//               onChange={(e) => setNewReview(e.target.value)}
//               placeholder="Write your review here..."
//               rows="4"
//               required
//             ></textarea>
//             <br />
//             <button type="submit" className="cta-btn">
//               Submit Review
//             </button>
//           </form>
//         </section>
//       )}

//       {/* Student Feedback Section */}
//       <section id="reviews-section" className="feedback-section">
//         <h2>Hear From Our Students</h2>
//         <div className="feedback-cards">
//           {reviews.length === 0 ? (
//             <p>No reviews yet. Be the first to share your experience!</p>
//           ) : (
//             reviews.map((review, index) => (
//               <div key={index} className="feedback">
//                 <img src={review.photo || "/placeholder.svg"} alt={review.name} />
//                 <p>"{review.review}"</p>
//                 <h4>– {review.name}</h4>
//               </div>
//             ))
//           )}
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="cta-section">
//         <h2>Join Thousands of Learners Today</h2>
//         <p>Start your smart learning journey with Gradience</p>
//         <Link to="/login">
//           <button className="cta-btn">Sign Up Free</button>
//         </Link>
//       </section>

//       {/* Footer */}
//       <footer className="footer">
//         <p>&copy; 2025 Gradience. Built with ❤ for CS students.</p>
//       </footer>
//     </div>
//   )
// }

// export default Homepage





// "use client"

// import { useState, useEffect } from "react"
// import { Link, useNavigate } from "react-router-dom"
// import "./Homepage.css"

// function Homepage() {
//   const [reviews, setReviews] = useState([
//     {
//       name: "Areeba Khalid",
//       photo: "https://randomuser.me/api/portraits/women/44.jpg",
//       review: "Gradience revolutionized how I study!",
//     },
//     {
//       name: "Usman Iqbal",
//       photo: "https://randomuser.me/api/portraits/men/32.jpg",
//       review: "The gamified quizzes are so fun and effective.",
//     },
//     {
//       name: "Zara Ali",
//       photo: "https://randomuser.me/api/portraits/women/68.jpg",
//       review: "I never thought AI tutoring could be this good.",
//     },
//   ])

//   const [newReview, setNewReview] = useState("")
//   const [userName, setUserName] = useState("")
//   const [userPhoto, setUserPhoto] = useState("")
//   const [showReviewForm, setShowReviewForm] = useState(false)
//   const [currentReview, setCurrentReview] = useState(0)

//   const navigate = useNavigate()

//   // Auto-rotate reviews every 2 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentReview((prev) => (prev + 1) % reviews.length)
//     }, 2000)

//     return () => clearInterval(interval)
//   }, [reviews.length])

//   const handleReviewSubmit = (e) => {
//     e.preventDefault()
//     if (newReview.trim() && userName.trim() && userPhoto.trim()) {
//       const newReviewData = {
//         name: userName,
//         photo: userPhoto,
//         review: newReview,
//       }
//       setReviews([...reviews, newReviewData])
//       setNewReview("")
//       setUserName("")
//       setUserPhoto("")
//       setShowReviewForm(false)
//     } else {
//       alert("Please fill in all fields.")
//     }
//   }

//   return (
//     <div className="main-container">
//       {/* Navbar */}
//       <header className="navbar">
//         <img src="logo.jpeg" alt="Logo" className="logo" />
//         <div className="nav-links">
//           <a href="#home">Home</a>
//           <a href="#about">About</a>
//           <a href="#review">Rew</a>
//         </div>
//         <div className="auth-buttons">
//           <Link to="/login">
//             <button className="login-btn">Login</button>
//           </Link>
//           <Link to="/login">
//             <button className="signup-btn">Sign Up</button>
//           </Link>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section id="home" className="hero-section">
//         <video autoPlay muted loop playsInline className="hero-video">
//           <source src="/OrangeBackground.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//         <div className="hero-overlay"></div>
//         <div className="hero-text">
//           <h1>
//             Welcome to <strong>Gradience</strong>
//           </h1>
//           <p>
//             Gradience is your all-in-one AI-powered learning platform for CS students. From interactive notes to live
//             coding tools and gamified quizzes — we're building the future of smart education.
//           </p>
//           <div className="hero-buttons">
//             <Link to="/login">
//               <button className="cta-btn">Get Started</button>
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Highlights Section */}
//       <section className="highlights">
//         <div className="highlight-box">
//           <h2>25K+</h2>
//           <p>Happy Students</p>
//         </div>
//         <div className="highlight-box">
//           <h2>150+</h2>
//           <p>Interactive Modules</p>
//         </div>
//         <div className="highlight-box">
//           <h2>100+</h2>
//           <p>University Links</p>
//         </div>
//       </section>

//       {/* Feature Boxes Section */}
//       <section className="feature-boxes">
//         <div className="feature">
//           <img src="book.jpeg" alt="Book" />
//           <h3>Notes</h3>
//           <p>Summarized yet detailed notes and Flashcards</p>
//         </div>
//         <div className="feature">
//           <img src="https://cdn-icons-png.flaticon.com/512/167/167707.png" alt="Coding" />
//           <h3>Live Coding</h3>
//           <p>Write, run, and debug your code in-browser.</p>
//         </div>
//         <div className="feature">
//           <img src="https://cdn-icons-png.flaticon.com/512/744/744466.png" alt="Gamify" />
//           <h3>Gamified Progress</h3>
//           <p>Earn badges and track learning achievements.</p>
//         </div>
//       </section>

//       {/* Why Us Section */}
//       <section id="about" className="why-us-section">
//         <h2>Why Choose Gradience?</h2>
//         <div className="why-cards">
//           <div className="card">
//             <h3>AI Notes</h3>
//             <p>Smart summaries created just for you.</p>
//           </div>
//           <div className="card">
//             <h3>Code Playground</h3>
//             <p>Write, run and debug your code in real-time.</p>
//           </div>
//           <div className="card">
//             <h3>Flashcards & Quizzes</h3>
//             <p>Engage and revise with fun formats.</p>
//           </div>
//         </div>
//       </section>

//       {/* Trusted Institutions Section */}
//       <section className="trusted-section">
//         <h2>Trusted By Leading Institutions</h2>
//         <div className="trusted-logos">
//           <img src="unis.jpeg" alt="University" />
//         </div>
//       </section>

     

//       {/* Add Review Form Section */}
//       {showReviewForm && (
//         <section className="add-review-section">
//           <h2>Share Your Feedback</h2>
//           <form onSubmit={handleReviewSubmit}>
//             <input
//               type="text"
//               placeholder="Your Name"
//               value={userName}
//               onChange={(e) => setUserName(e.target.value)}
//               required
//             />
//             <input
//               type="url"
//               placeholder="Your Photo URL (optional)"
//               value={userPhoto}
//               onChange={(e) => setUserPhoto(e.target.value)}
//             />
//             <textarea
//               value={newReview}
//               onChange={(e) => setNewReview(e.target.value)}
//               placeholder="Write your review here..."
//               rows="4"
//               required
//             ></textarea>
//             <br />
//             <button type="submit" className="cta-btn">
//               Submit Review
//             </button>
//           </form>
//         </section>
//       )}

//       {/* Student Feedback Section with Carousel */}
//       <section id="reviews-section" className="feedback-section">
//         <h2>Hear From Our Students</h2>
//         <div className="carousel-container">
//           {reviews.length === 0 ? (
//             <p>No reviews yet. Be the first to share your experience!</p>
//           ) : (
//             <div className="feedback-carousel">
//               {reviews.map((review, index) => (
//                 <div 
//                   key={index} 
//                   className={`feedback ${index === currentReview ? 'active' : ''}`}
//                 >
//                   <img src={review.photo || "/placeholder.svg"} alt={review.name} />
//                   <p>"{review.review}"</p>
//                   <h4>– {review.name}</h4>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="cta-section">
//         <h2>Join Thousands of Learners Today</h2>
//         <p>Start your smart learning journey with Gradience</p>
//         <Link to="/login">
//           <button className="cta-btn">Sign Up Free</button>
//         </Link>
//       </section>

//       {/* Footer */}
//       <footer className="footer">
//         <p>© 2025 Gradience. Built with ❤ for CS students.</p>
//       </footer>
//     </div>
//   )
// }

// export default Homepage



import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import {
  FaPlay,
  FaBook,
  FaCode,
  FaGamepad,
  FaBrain,
  FaUsers,
  FaTrophy,
  FaRocket,
  FaStar,
  FaQuoteLeft,
  FaChevronRight,
  FaGraduationCap,
  FaLightbulb,
  FaHeart,
  FaArrowRight,
  FaCheckCircle,
  FaMoon,
  FaSun,
} from "react-icons/fa"
import "./Homepage.css"

function Homepage() {
  const [reviews, setReviews] = useState([
    {
      name: "Areeba Khalid",
      photo: "https://randomuser.me/api/portraits/women/44.jpg",
      review: "Gradience revolutionized how I study! The AI-powered notes are incredible.",
      rating: 5,
      course: "Computer Science",
    },
    {
      name: "Usman Iqbal",
      photo: "https://randomuser.me/api/portraits/men/32.jpg",
      review: "The gamified quizzes are so fun and effective. I've improved my grades significantly!",
      rating: 5,
      course: "Software Engineering",
    },
    {
      name: "Zara Ali",
      photo: "https://randomuser.me/api/portraits/women/68.jpg",
      review: "I never thought AI tutoring could be this good. The live coding feature is amazing!",
      rating: 5,
      course: "Data Science",
    },
    {
      name: "Ahmed Hassan",
      photo: "https://randomuser.me/api/portraits/men/15.jpg",
      review: "Best learning platform I've ever used. The interactive flashcards are perfect!",
      rating: 5,
      course: "Web Development",
    },
  ])

  const [newReview, setNewReview] = useState("")
  const [userName, setUserName] = useState("")
  const [userPhoto, setUserPhoto] = useState("")
  const [showReviewForm, setShowReviewForm] = useState(false)
  const [currentReview, setCurrentReview] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  // Initialize dark mode from localStorage
  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode")
    if (savedDarkMode) {
      setIsDarkMode(JSON.parse(savedDarkMode))
    } else {
      // Check system preference
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      setIsDarkMode(prefersDark)
    }
  }, [])

  // Apply dark mode to document
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark-mode")
    } else {
      document.documentElement.classList.remove("dark-mode")
    }
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode))
  }, [isDarkMode])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [reviews.length])

  const handleReviewSubmit = (e) => {
    e.preventDefault()
    if (newReview.trim() && userName.trim()) {
      const newReviewData = {
        name: userName,
        photo:
          userPhoto ||
          `https://randomuser.me/api/portraits/${Math.random() > 0.5 ? "men" : "women"}/${Math.floor(
            Math.random() * 99,
          )}.jpg`,
        review: newReview,
        rating: 5,
        course: "Student",
      }

      setReviews([...reviews, newReviewData])
      setNewReview("")
      setUserName("")
      setUserPhoto("")
      setShowReviewForm(false)
    }
  }

  const features = [
   
    {
      icon: FaCode,
      title: "Live Code Editor",
      description: "Write, run, and debug your code in real-time with our advanced IDE",
      color: "from-green-500 to-teal-600",
    },
    {
      icon: FaGamepad,
      title: "Gamified Learning",
      description: "Earn badges, track progress, and compete with friends while learning",
      color: "from-orange-500 to-red-600",
    },
    {
      icon: FaUsers,
      title: "Community Support",
      description: "Connect with peers, mentors, and experts in our thriving community",
      color: "from-pink-500 to-rose-600",
    },
  ]

  const stats = [
    { number: "25K+", label: "Happy Students", icon: FaUsers },
    { number: "150+", label: "Interactive Modules", icon: FaBook },
    { number: "100+", label: "University Partners", icon: FaGraduationCap },
    { number: "98%", label: "Success Rate", icon: FaTrophy },
  ]

  const benefits = [
    "Real-time code execution and debugging",
    "Personalized study paths and recommendations",
    "Gamified progress tracking and achievements",
  ]

  return (
    <div className="homepage-container">
      {/* Enhanced Navbar */}
      <header className={`modern-navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="navbar-content">
          <div className="brand-section">
            <img src="Lgo.png" alt="Gradience Logo" className="brand-logo" />
            <span className="brand-name">Gradience</span>
          </div>
          <nav className="nav-links">
            <a href="#home" className="nav-link">
              Home
            </a>
            <a href="#features" className="nav-link">
              Features
            </a>
            <a href="#about" className="nav-link">
              About
            </a>
            <a href="#reviews" className="nav-link">
              Reviews
            </a>
          </nav>
          <div className="auth-buttons">
            
            <Link to="/login" className="login-btn">
              Login
            </Link>
            <Link to="/login" className="signup-btn">
              <span>Get Started</span>
              <FaArrowRight className="btn-icon" />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-background">
          <video autoPlay muted loop playsInline className="hero-video">
            <source src="/bg.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <FaRocket className="badge-icon" />
              <span>The Future of Learning</span>
            </div>
            <h1 className="hero-title">
              Welcome to <span className="gradient-text">Gradience</span>
            </h1>
            <p className="hero-description">
              Transform your CS education with our E-learning platform. Interactive notes, live coding, and
              gamified progress tracking - all in one revolutionary platform.
            </p>
            <div className="hero-actions">
              <Link to="/login" className="cta-primary">
                <span>Start Learning Free</span>
                <FaPlay className="btn-icon" />
              </Link>
             
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <FaUsers className="stat-icon" />
                <span>25K+ Students</span>
              </div>
              <div className="stat-item">
                <FaStar className="stat-icon" />
                <span>4.9/5 Rating</span>
              </div>
              <div className="stat-item">
                <FaTrophy className="stat-icon" />
                <span>98% Success</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon-wrapper">
                  <stat.icon className="stat-icon" />
                </div>
                <div className="stat-content">
                  <h3 className="stat-number">{stat.number}</h3>
                  <p className="stat-label">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <FaLightbulb className="badge-icon" />
              <span>Features</span>
            </div>
            <h2 className="section-title">Why Choose Gradience?</h2>
            <p className="section-description">
              Discover the powerful features that make learning CS subjects engaging and effective
            </p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className={`feature-icon bg-gradient-to-r ${feature.color}`}>
                  <feature.icon />
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                 
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="about" className="benefits-section">
        <div className="container">
          <div className="benefits-content">
            <div className="benefits-text">
              <div className="section-badge">
                <FaCheckCircle className="badge-icon" />
                <span>Benefits</span>
              </div>
              <h2 className="section-title">Everything You Need to Excel</h2>
              <p className="section-description">
                Our comprehensive platform provides all the tools and resources you need to master computer science
                concepts and advance your career.
              </p>
              <div className="benefits-list">
                {benefits.map((benefit, index) => (
                  <div key={index} className="benefit-item">
                    <FaCheckCircle className="check-icon" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
              <Link to="/login" className="cta-primary">
                <span>Get Started Today</span>
                <FaArrowRight className="btn-icon" />
              </Link>
            </div>
            <div className="benefits-visual">
              <div className="visual-card">
                <div className="card-header">
                  <div className="card-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <span className="card-title">Live Code Editor</span>
                </div>
                <div className="card-content">
                  <div className="code-line">
                    <span className="code-keyword">function</span>
                    <span className="code-function"> fibonacci</span>
                    <span className="code-bracket">(n) {"{"}</span>
                  </div>
                  <div className="code-line">
                    <span className="code-indent"> </span>
                    <span className="code-keyword">if</span>
                    <span className="code-bracket"> (n &lt;= 1) return n;</span>
                  </div>
                  <div className="code-line">
                    <span className="code-indent"> </span>
                    <span className="code-keyword">return</span>
                    <span className="code-function"> fibonacci</span>
                    <span className="code-bracket">(n-1) + </span>
                    <span className="code-function">fibonacci</span>
                    <span className="code-bracket">(n-2);</span>
                  </div>
                  <div className="code-line">
                    <span className="code-bracket">{"}"}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Section */}
      <section className="trusted-section">
        <div className="container">
          <h2 className="trusted-title">Trusted by Leading Institutions</h2>
          <div className="trusted-logos">
            <img src="unis.jpeg" alt="Partner Universities" className="trusted-image" />
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="reviews-section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <FaQuoteLeft className="badge-icon" />
              <span>Testimonials</span>
            </div>
            <h2 className="section-title">What Our Students Say</h2>
            <p className="section-description">
              Join thousands of successful students who have transformed their learning experience
            </p>
          </div>
          <div className="reviews-carousel">
            <div className="carousel-container">
              {reviews.map((review, index) => (
                <div key={index} className={`review-card ${index === currentReview ? "active" : ""}`}>
                  <div className="review-content">
                    <div className="stars">
                      {[...Array(review.rating)].map((_, i) => (
                        <FaStar key={i} className="star" />
                      ))}
                    </div>
                    <p className="review-text">"{review.review}"</p>
                  </div>
                  <div className="reviewer-info">
                    <img src={review.photo || "/placeholder.svg"} alt={review.name} className="reviewer-avatar" />
                    <div className="reviewer-details">
                      <h4 className="reviewer-name">{review.name}</h4>
                      <p className="reviewer-course">{review.course}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="carousel-indicators">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === currentReview ? "active" : ""}`}
                  onClick={() => setCurrentReview(index)}
                />
              ))}
            </div>
          </div>
          <div className="review-actions">
            <button onClick={() => setShowReviewForm(true)} className="add-review-btn">
              <FaHeart className="btn-icon" />
              <span>Share Your Experience</span>
            </button>
          </div>
        </div>
      </section>

      {/* Review Form Modal */}
      {showReviewForm && (
        <div className="modal-overlay" onClick={() => setShowReviewForm(false)}>
          <div className="review-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Share Your Feedback</h3>
              <button className="close-btn" onClick={() => setShowReviewForm(false)}>
                ×
              </button>
            </div>
            <form onSubmit={handleReviewSubmit} className="review-form">
              <div className="form-group">
                <label>Your Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Photo URL (Optional)</label>
                <input
                  type="url"
                  placeholder="https://example.com/photo.jpg"
                  value={userPhoto}
                  onChange={(e) => setUserPhoto(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Your Review</label>
                <textarea
                  value={newReview}
                  onChange={(e) => setNewReview(e.target.value)}
                  placeholder="Share your experience with Gradience..."
                  rows="4"
                  required
                />
              </div>
              <button type="submit" className="submit-btn">
                <FaHeart className="btn-icon" />
                <span>Submit Review</span>
              </button>
            </form>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <div className="cta-text">
              <h2 className="cta-title">Ready to Transform Your Learning?</h2>
              <p className="cta-description">
                Join thousands of students who are already excelling with Gradience. Start your journey today and unlock
                your potential.
              </p>
            </div>
            <div className="cta-actions">
              <Link to="/login" className="cta-primary large">
                <span>Start Learning Free</span>
                <FaRocket className="btn-icon" />
              </Link>
              <p className="cta-note">No credit card required • Free forever</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="modern-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="brand-section">
                <img src="Lgo.png" alt="Gradience" className="footer-logo" />
                <span className="brand-name">Gradience</span>
              </div>
              <p className="footer-description">
                Empowering the next generation of computer scientists with E-learning experiences.
              </p>
            </div>
            <div className="footer-links">
              <div className="link-group">
                <h4>Product</h4>
                <a href="#features">Features</a>
                <a href="#pricing">Pricing</a>
                <a href="#demo">Demo</a>
              </div>
              <div className="link-group">
                <h4>Company</h4>
                <a href="#about">About</a>
                <a href="#careers">Careers</a>
                <a href="#contact">Contact</a>
              </div>
              <div className="link-group">
                <h4>Support</h4>
                <a href="#help">Help Center</a>
                <a href="#docs">Documentation</a>
                <a href="#community">Community</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              &copy; 2025 Gradience. Built with <FaHeart className="heart-icon" /> for CS students.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Homepage
