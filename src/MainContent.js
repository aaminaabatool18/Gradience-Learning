import Header from "./Header"
import OverviewPanel from "./OverviewPanel"
import CertificatesPanel from "./CertificatesPanel"
import CodeEditor from "./CodeEditor"
import CoursePage from "./CoursePage"

const MainContent = ({
  activePanel,
  showCoursePage,
  darkMode,
  searchTerm,
  setSearchTerm,
  toggleTheme,
  handleLogout,
  filteredCourses,
  currentVideo,
  handleResumeClick,
  certificates,
  downloadCertificate,
  handleQuizComplete,
  setActivePanel,
}) => {
  const getTitle = () => {
    if (activePanel === "ide") return "IDE Editor"
    if (showCoursePage) return "Courses"
    return "Dashboard"
  }

  return (
    <main className={`main-panel ${activePanel === "ide" ? "full-width" : ""}`}>
      <Header
        title={getTitle()}
        darkMode={darkMode}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        toggleTheme={toggleTheme}
        handleLogout={handleLogout}
      />

      {activePanel === "certificates" && (
        <CertificatesPanel certificates={certificates} downloadCertificate={downloadCertificate} />
      )}

      {showCoursePage ? (
        <div className="course-panel">
          <CoursePage onQuizComplete={handleQuizComplete} />
        </div>
      ) : (
        <>
          {activePanel === "overview" && (
            <OverviewPanel
              filteredCourses={filteredCourses}
              currentVideo={currentVideo}
              handleResumeClick={handleResumeClick}
            />
          )}

          {activePanel === "ide" && <CodeEditor onBack={() => setActivePanel("overview")} />}
        </>
      )}
    </main>
  )
}

export default MainContent
