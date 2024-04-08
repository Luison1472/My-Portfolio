import '../index.css';
import Header from '/src/components/Layouts/Header.jsx';
import Profile from '/src/pages/Profile.jsx';
import Skill from '/src/pages/Skill.jsx';
import Project from '/src/pages/Project.jsx';
import Footer from '/src/components/Layouts/Footer.jsx';
function Portfolio() {
  return (
    <>
      <Header/>
      <Profile/>
      <Skill/>
      <Project />
      <Footer/>
    </>
  );
}

export default Portfolio;