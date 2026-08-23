// "use client"

// import { useState } from "react"
// import { useNavigate, Link } from "react-router-dom"
// import "./LoginSignup.css"
// // --- 1. IMPORT THE NEW COMPONENT ---

// import TermsConditions from "./TermsConditions"

// const LoginSignup = () => {
//   const [isLogin, setIsLogin] = useState(true)
//   const [isForgotPassword, setIsForgotPassword] = useState(false)
//   const [alertVisible, setAlertVisible] = useState(false)
//   const [alertMessage, setAlertMessage] = useState("")
//   const [isTermsVisible, setIsTermsVisible] = useState(false)
//   const navigate = useNavigate()

//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")

//   const toggleForm = () => {
//     setIsLogin(!isLogin)
//     setEmail("")
//     setPassword("")
//     setAlertVisible(false)
//   }

//   const toggleForgotPassword = () => {
//     setAlertVisible(false)
//     setIsForgotPassword(!isForgotPassword)
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()

//     if (isLogin) {
//       if (email === "user@gmail.com" && password === "123") {
//         console.log("Logging in...")
//         localStorage.setItem("loggedIn", "true")
//         navigate("/dashboard")
//       } else {
//         setAlertMessage("Invalid username or password. Please try again.")
//         setAlertVisible(true)
//       }
//     } else {
//       console.log("Signing up...")
//       localStorage.setItem("loggedIn", "true")
//       navigate("/dashboard")
//     }
//   }

//   const handleForgotPasswordSubmit = (e) => {
//     e.preventDefault()
//     console.log("Sending password reset link...")
//     setAlertMessage("Password reset link has been sent to your email!")
//     setAlertVisible(true)
//     setTimeout(() => {
//       setAlertVisible(false)
//       setIsForgotPassword(false)
//     }, 3000)
//   }

//   const showTerms = () => {
//     setIsTermsVisible(true)
//   }

//   const hideTerms = () => {
//     setIsTermsVisible(false)
//   }

//   return (
//     <div className="login-wrapper fade-in">
//       <div className="login-card slide-up">
//         <div className="login-left">
//           <Link to="/" className="back-home-link">
//             ← Back to Home
//           </Link>
//           {isForgotPassword ? (
//             <>
//               <h2>Forgot Password</h2>
//               <p className="login-sub">Enter your email to receive a password reset link</p>

//               <form className="login-form" onSubmit={handleForgotPasswordSubmit}>
//                 <input type="email" placeholder="Email address" required />
//                 <button type="submit">Send Reset Link</button>
//               </form>

//               <p className="toggle-text">
//                 <span className="toggle" onClick={toggleForgotPassword}>
//                   Back to Login
//                 </span>
//               </p>
//             </>
//           ) : (
//             <>
//               <h2>{isLogin ? "Welcome Back!" : "Create Your Account"}</h2>
//               <p className="login-sub">{isLogin ? "Please enter login details below" : "Sign up to get started"}</p>

//               <form className="login-form" onSubmit={handleSubmit}>
//                 {!isLogin && (
//                   <div className="split-input">
//                     <input type="text" placeholder="First name" required />
//                     <input type="text" placeholder="Last name" required />
//                   </div>
//                 )}
                
//                 <input
//                   type="email"
//                   placeholder="Email address"
//                   required
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
                
//                 <input
//                   type="password"
//                   placeholder="Password"
//                   required
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />

//                 {!isLogin && (
//                   <label className="terms">
//                     <input type="checkbox" required />I agree to the{" "}
//                     <span className="terms-link" onClick={showTerms}>
//                       <u>Terms & Conditions</u>
//                     </span>
//                   </label>
//                 )}

//                 {isLogin && (
//                   <a className="forgot" href="#" onClick={toggleForgotPassword}>
//                     Forgot password?
//                   </a>
//                 )}

//                 <button type="submit">{isLogin ? "Sign In" : "Sign Up"}</button>
//               </form>

//               <p className="toggle-text">
//                 {isLogin ? "Don't have an account?" : "Already a member?"}
//                 <span className="toggle" onClick={toggleForm}>
//                   {isLogin ? " Sign Up" : " Log In"}
//                 </span>
//               </p>
//             </>
//           )}
//         </div>

//         <div className="login-right fade-in">
//           <div className="illustration">
//             <img src="login.png" alt="3D Character" />
//           </div>
//         </div>
//       </div>

//       {alertVisible && (
//         <div className="custom-alert">
//           <div className="alert-content">
//             <p>{alertMessage}</p>
//             <button onClick={() => setAlertVisible(false)}>Close</button>
//           </div>
//         </div>
//       )}

//       {/* --- 2. REPLACE THE OLD MODAL WITH THE NEW COMPONENT --- */}
//       {isTermsVisible && <TermsConditions onClose={hideTerms} />}

//     </div>
//   )
// }

// export default LoginSignup

// "use client"

// import { useState } from "react"
// import { useNavigate, Link } from "react-router-dom"
// import "./LoginSignup.css"
// import TermsConditions from "./TermsConditions"

// const LoginSignup = () => {
//   const [isLogin, setIsLogin] = useState(true)
//   const [isForgotPassword, setIsForgotPassword] = useState(false)
//   const [alertVisible, setAlertVisible] = useState(false)
//   const [alertMessage, setAlertMessage] = useState("")
//   const [isTermsVisible, setIsTermsVisible] = useState(false)
//   const [isFlipping, setIsFlipping] = useState(false)

//   const navigate = useNavigate()
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")

//   const toggleForm = () => {
//     setIsFlipping(true)

//     // Wait for half the animation to complete before changing content
//     setTimeout(() => {
//       setIsLogin(!isLogin)
//       setEmail("")
//       setPassword("")
//       setAlertVisible(false)
//     }, 300) // Half of the 600ms animation

//     // Reset flip state after animation completes
//     setTimeout(() => {
//       setIsFlipping(false)
//     }, 600)
//   }

//   const toggleForgotPassword = () => {
//     setAlertVisible(false)
//     setIsForgotPassword(!isForgotPassword)
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     if (isLogin) {
//       if (email === "user@gmail.com" && password === "123") {
//         console.log("Logging in...")
//         localStorage.setItem("loggedIn", "true")
//         navigate("/dashboard")
//       } else {
//         setAlertMessage("Invalid username or password. Please try again.")
//         setAlertVisible(true)
//       }
//     } else {
//       console.log("Signing up...")
//       localStorage.setItem("loggedIn", "true")
//       navigate("/dashboard")
//     }
//   }

//   const handleForgotPasswordSubmit = (e) => {
//     e.preventDefault()
//     console.log("Sending password reset link...")
//     setAlertMessage("Password reset link has been sent to your email!")
//     setAlertVisible(true)
//     setTimeout(() => {
//       setAlertVisible(false)
//       setIsForgotPassword(false)
//     }, 3000)
//   }

//   const showTerms = () => {
//     setIsTermsVisible(true)
//   }

//   const hideTerms = () => {
//     setIsTermsVisible(false)
//   }

//   return (
//     <div className="login-wrapper fade-in">
//       <div className="login-card slide-up">
//         <div className={`login-left ${isFlipping ? "flipping" : ""}`}>
//           <Link to="/" className="back-home-link">
//             ← Back to Home
//           </Link>

//           <div className="form-container">
//             {isForgotPassword ? (
//               <div className="form-content">
//                 <h2>Forgot Password</h2>
//                 <p className="login-sub">Enter your email to receive a password reset link</p>
//                 <form className="login-form" onSubmit={handleForgotPasswordSubmit}>
//                   <input type="email" placeholder="Email address" required />
//                   <button type="submit">Send Reset Link</button>
//                 </form>
//                 <p className="toggle-text">
//                   <span className="toggle" onClick={toggleForgotPassword}>
//                     Back to Login
//                   </span>
//                 </p>
//               </div>
//             ) : (
//               <div className="form-content">
//                 <h2>{isLogin ? "Welcome Back!" : "Create Your Account"}</h2>
//                 <p className="login-sub">{isLogin ? "Please enter login details below" : "Sign up to get started"}</p>
//                 <form className="login-form" onSubmit={handleSubmit}>
//                   {!isLogin && (
//                     <div className="split-input">
//                       <input type="text" placeholder="First name" required />
//                       <input type="text" placeholder="Last name" required />
//                     </div>
//                   )}

//                   <input
//                     type="email"
//                     placeholder="Email address"
//                     required
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                   />

//                   <input
//                     type="password"
//                     placeholder="Password"
//                     required
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                   />

//                   {!isLogin && (
//                     <label className="terms">
//                       <input type="checkbox" required />I agree to the{" "}
//                       <span className="terms-link" onClick={showTerms}>
//                         <u>Terms & Conditions</u>
//                       </span>
//                     </label>
//                   )}

//                   {isLogin && (
//                     <a className="forgot" href="#" onClick={toggleForgotPassword}>
//                       Forgot password?
//                     </a>
//                   )}

//                   <button type="submit">{isLogin ? "Sign In" : "Sign Up"}</button>
//                 </form>

//                 <p className="toggle-text">
//                   {isLogin ? "Don't have an account?" : "Already a member?"}
//                   <span className="toggle" onClick={toggleForm}>
//                     {isLogin ? " Sign Up" : " Log In"}
//                   </span>
//                 </p>
//               </div>
//             )}
//           </div>
//         </div>

//         <div className="login-right fade-in">
//           <div className="illustration">
//             <img src="login.png" alt="3D Character" />
//           </div>
//         </div>
//       </div>

//       {alertVisible && (
//         <div className="custom-alert">
//           <div className="alert-content">
//             <p>{alertMessage}</p>
//             <button onClick={() => setAlertVisible(false)}>Close</button>
//           </div>
//         </div>
//       )}

//       {isTermsVisible && <TermsConditions onClose={hideTerms} />}
//     </div>
//   )
// }

// export default LoginSignup
"use client"

import { useState, useEffect } from "react"
import { useNavigate, Link } from "react-router-dom"
import "./LoginSignup.css"
import TermsConditions from "./TermsConditions"

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true)
  const [isForgotPassword, setIsForgotPassword] = useState(false)
  const [alertVisible, setAlertVisible] = useState(false)
  const [alertMessage, setAlertMessage] = useState("")
  const [isTermsVisible, setIsTermsVisible] = useState(false)
  const [isFlipping, setIsFlipping] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")

  // Form validation states
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})

  // Add entrance animation on mount
  useEffect(() => {
    const card = document.querySelector(".login-card")
    if (card) {
      card.style.transform = "translateY(50px)"
      card.style.opacity = "0"

      setTimeout(() => {
        card.style.transition = "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)"
        card.style.transform = "translateY(0)"
        card.style.opacity = "1"
      }, 100)
    }
  }, [])

  // Validation functions
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email) return "Email is required"
    if (!emailRegex.test(email)) return "Please enter a valid email address"
    return ""
  }

  const validatePassword = (password) => {
    if (!password) return "Password is required"
    if (password.length < 6) return "Password must be at least 6 characters"
    return ""
  }

  const validateName = (name, fieldName) => {
    if (!name) return `${fieldName} is required`
    if (name.length < 2) return `${fieldName} must be at least 2 characters`
    if (!/^[a-zA-Z\s]+$/.test(name)) return `${fieldName} can only contain letters`
    return ""
  }

  // Real-time validation
  useEffect(() => {
    const newErrors = {}

    if (touched.email) {
      newErrors.email = validateEmail(email)
    }

    if (touched.password) {
      newErrors.password = validatePassword(password)
    }

    if (!isLogin && touched.firstName) {
      newErrors.firstName = validateName(firstName, "First name")
    }

    if (!isLogin && touched.lastName) {
      newErrors.lastName = validateName(lastName, "Last name")
    }

    setErrors(newErrors)
  }, [email, password, firstName, lastName, touched, isLogin])

  const handleInputChange = (field, value) => {
    switch (field) {
      case "email":
        setEmail(value)
        break
      case "password":
        setPassword(value)
        break
      case "firstName":
        setFirstName(value)
        break
      case "lastName":
        setLastName(value)
        break
    }

    // Mark field as touched
    setTouched((prev) => ({ ...prev, [field]: true }))
  }

  const handleInputBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }))
  }

  const isFormValid = () => {
    const emailError = validateEmail(email)
    const passwordError = validatePassword(password)

    if (!isLogin) {
      const firstNameError = validateName(firstName, "First name")
      const lastNameError = validateName(lastName, "Last name")
      return !emailError && !passwordError && !firstNameError && !lastNameError
    }

    return !emailError && !passwordError
  }

  const toggleForm = () => {
    setIsFlipping(true)

    // Add smooth transition effect
    const formContent = document.querySelector(".form-content")
    if (formContent) {
      formContent.style.transform = "translateX(-20px)"
      formContent.style.opacity = "0.7"
    }

    // Wait for half the animation to complete before changing content
    setTimeout(() => {
      setIsLogin(!isLogin)
      setEmail("")
      setPassword("")
      setFirstName("")
      setLastName("")
      setAlertVisible(false)
      setErrors({})
      setTouched({})

      // Reset form content position
      if (formContent) {
        formContent.style.transform = "translateX(20px)"
      }
    }, 300) // Half of the 600ms animation

    // Complete the transition
    setTimeout(() => {
      if (formContent) {
        formContent.style.transform = "translateX(0)"
        formContent.style.opacity = "1"
      }
    }, 400)

    // Reset flip state after animation completes
    setTimeout(() => {
      setIsFlipping(false)
    }, 600)
  }

  const toggleForgotPassword = () => {
    setAlertVisible(false)
    setErrors({})
    setTouched({})

    // Add transition effect
    const formContent = document.querySelector(".form-content")
    if (formContent) {
      formContent.style.transform = "scale(0.95)"
      formContent.style.opacity = "0.7"

      setTimeout(() => {
        setIsForgotPassword(!isForgotPassword)
        formContent.style.transform = "scale(1)"
        formContent.style.opacity = "1"
      }, 200)
    } else {
      setIsForgotPassword(!isForgotPassword)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Mark all fields as touched to show validation errors
    const allFields = isLogin
      ? { email: true, password: true }
      : { email: true, password: true, firstName: true, lastName: true }

    setTouched(allFields)

    // Check if form is valid
    if (!isFormValid()) {
      setAlertMessage("Please fix the errors below and try again.")
      setAlertVisible(true)
      return
    }

    setIsLoading(true)

    // Add loading animation
    const button = e.target.querySelector('button[type="submit"]')
    if (button) {
      button.disabled = true
      button.innerHTML = isLogin ? "Signing In..." : "Signing Up..."
    }

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1500))

    if (isLogin) {
      if (email === "user@gmail.com" && password === "123456") {
        console.log("Logging in...")
        localStorage.setItem("loggedIn", "true")

        // Success animation
        if (button) {
          button.innerHTML = "✓ Success!"
          button.style.background = "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
        }

        setTimeout(() => {
          navigate("/dashboard")
        }, 1000)
      } else {
        setAlertMessage("Invalid username or password. Please try again.")
        setAlertVisible(true)

        // Reset button
        if (button) {
          button.disabled = false
          button.innerHTML = "Sign In"
          button.style.background = ""
        }
      }
    } else {
      console.log("Signing up...")
      localStorage.setItem("loggedIn", "true")

      // Success animation
      if (button) {
        button.innerHTML = "✓ Account Created!"
        button.style.background = "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
      }

      setTimeout(() => {
        navigate("/dashboard")
      }, 1000)
    }

    setIsLoading(false)
  }

  const handleForgotPasswordSubmit = async (e) => {
    e.preventDefault()

    // Validate email for forgot password
    setTouched({ email: true })
    const emailError = validateEmail(email)

    if (emailError) {
      setAlertMessage("Please enter a valid email address.")
      setAlertVisible(true)
      return
    }

    setIsLoading(true)

    const button = e.target.querySelector('button[type="submit"]')
    if (button) {
      button.disabled = true
      button.innerHTML = "Sending..."
    }

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log("Sending password reset link...")
    setAlertMessage("Password reset link has been sent to your email!")
    setAlertVisible(true)

    if (button) {
      button.innerHTML = "✓ Sent!"
      button.style.background = "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    }

    setTimeout(() => {
      setAlertVisible(false)
      setIsForgotPassword(false)
      if (button) {
        button.disabled = false
        button.innerHTML = "Send Reset Link"
        button.style.background = ""
      }
    }, 3000)

    setIsLoading(false)
  }

  const showTerms = () => {
    setIsTermsVisible(true)
  }

  const hideTerms = () => {
    setIsTermsVisible(false)
  }

  // Enhanced input focus effects
  const handleInputFocus = (e) => {
    const parent = e.target.parentElement
    if (parent) {
      parent.style.transform = "translateY(-2px)"
    }
  }

  const handleInputBlurEffect = (e) => {
    const parent = e.target.parentElement
    if (parent) {
      parent.style.transform = "translateY(0)"
    }
  }

  return (
    <div className="login-wrapper fade-in">
      <div className="login-card slide-up">
        <div className={`login-left ${isFlipping ? "flipping" : ""}`}>
          <Link to="/" className="back-home-link">
            ← Back to Home
          </Link>

          <div className="form-container">
            {isForgotPassword ? (
              <div className="form-content">
                <h2>Forgot Password</h2>
                <p className="login-sub">Enter your email to receive a password reset link</p>

                <form className="login-form" onSubmit={handleForgotPasswordSubmit}>
                  <div className="input-group">
                    <input
                      type="email"
                      placeholder="Email address"
                      value={email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      onFocus={handleInputFocus}
                      onBlur={(e) => {
                        handleInputBlurEffect(e)
                        handleInputBlur("email")
                      }}
                      className={errors.email && touched.email ? "error" : ""}
                      required
                    />
                    {errors.email && touched.email && <span className="error-message">{errors.email}</span>}
                  </div>
                  <button type="submit" disabled={isLoading || (touched.email && errors.email)}>
                    Send Reset Link
                  </button>
                </form>

                <p className="toggle-text">
                  <span className="toggle" onClick={toggleForgotPassword}>
                    Back to Login
                  </span>
                </p>
              </div>
            ) : (
              <div className="form-content">
                <h2>{isLogin ? "Welcome Back!" : "Create Your Account"}</h2>
                <p className="login-sub">{isLogin ? "Please enter login details below" : "Sign up to get started"}</p>

                <form className="login-form" onSubmit={handleSubmit}>
                  {!isLogin && (
                    <div className="split-input">
                      <div className="input-group">
                        <input
                          type="text"
                          placeholder="First name"
                          value={firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                          onFocus={handleInputFocus}
                          onBlur={(e) => {
                            handleInputBlurEffect(e)
                            handleInputBlur("firstName")
                          }}
                          className={errors.firstName && touched.firstName ? "error" : ""}
                          required
                        />
                        {errors.firstName && touched.firstName && (
                          <span className="error-message">{errors.firstName}</span>
                        )}
                      </div>
                      <div className="input-group">
                        <input
                          type="text"
                          placeholder="Last name"
                          value={lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
                          onFocus={handleInputFocus}
                          onBlur={(e) => {
                            handleInputBlurEffect(e)
                            handleInputBlur("lastName")
                          }}
                          className={errors.lastName && touched.lastName ? "error" : ""}
                          required
                        />
                        {errors.lastName && touched.lastName && (
                          <span className="error-message">{errors.lastName}</span>
                        )}
                      </div>
                    </div>
                  )}

                  <div className="input-group">
                    <input
                      type="email"
                      placeholder="Email address"
                      value={email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      onFocus={handleInputFocus}
                      onBlur={(e) => {
                        handleInputBlurEffect(e)
                        handleInputBlur("email")
                      }}
                      className={errors.email && touched.email ? "error" : ""}
                      required
                    />
                    {errors.email && touched.email && <span className="error-message">{errors.email}</span>}
                  </div>

                  <div className="input-group">
                    <input
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => handleInputChange("password", e.target.value)}
                      onFocus={handleInputFocus}
                      onBlur={(e) => {
                        handleInputBlurEffect(e)
                        handleInputBlur("password")
                      }}
                      className={errors.password && touched.password ? "error" : ""}
                      required
                    />
                    {errors.password && touched.password && <span className="error-message">{errors.password}</span>}
                  </div>

                  {!isLogin && (
                    <label className="terms">
                      <input type="checkbox" required />I agree to the{" "}
                      <span className="terms-link" onClick={showTerms}>
                        <u>Terms & Conditions</u>
                      </span>
                    </label>
                  )}

                  {isLogin && (
                    <a className="forgot" href="#" onClick={toggleForgotPassword}>
                      Forgot password?
                    </a>
                  )}

                  <button type="submit" disabled={isLoading || !isFormValid()}>
                    {isLogin ? "Sign In" : "Sign Up"}
                  </button>
                </form>

                <p className="toggle-text">
                  {isLogin ? "Don't have an account?" : "Already a member?"}
                  <span className="toggle" onClick={toggleForm}>
                    {isLogin ? " Sign Up" : " Log In"}
                  </span>
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="login-right fade-in">
          <div className="illustration">
            <img src="login.png" alt="3D Character" />
          </div>
        </div>
      </div>

      {alertVisible && (
        <div className="custom-alert">
          <div className="alert-content">
            <p>{alertMessage}</p>
            <button onClick={() => setAlertVisible(false)}>Close</button>
          </div>
        </div>
      )}

      {isTermsVisible && <TermsConditions onClose={hideTerms} />}
    </div>
  )
}

export default LoginSignup
