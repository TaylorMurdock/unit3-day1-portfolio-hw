function Header(props) {
  return (
    <header className="Header" style={{ border: "3px solid black" }}>
      <div>
        <h1>Taylor Murdock's Portfolio</h1>
        <a
          href="https://github.com/TaylorMurdock"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/taylor-murdock-b39198270/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </header>
  );
}
export default Header;
