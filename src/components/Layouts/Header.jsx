
function Header() {

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavLinkClick = (sectionId, event) => {
    event.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <>
      <header className="bg-gray-800 text-white w-full fixed left-0 py-8 z-50">
      <nav className="flex justify-center">
        <ul className="flex gap-24 list-none font-medium text-2xl">
          <li className="mx-2"><a href="#profile" onClick={(e) => handleNavLinkClick('profile', e)} className="no-underline text-white">Profile</a></li>
          <li className="mx-2"><a href="#skills" onClick={(e) => handleNavLinkClick('skill_box', e)} className="no-underline text-white">Skills</a></li>
          <li className="mx-2"><a href="#project" onClick={(e) => handleNavLinkClick('project', e)} className="no-underline text-white">Project</a></li>
        </ul>
      </nav>
    </header>
    </>
  );
}

export default Header;