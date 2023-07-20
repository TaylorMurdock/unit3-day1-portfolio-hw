import picOfTaylor from "../screenshots/picOfTaylor.jpeg";

function Footer(props) {
  return (
    <div className="Footer" style={{ border: "3px solid black" }}>
      <div className="FooterCard">
        <h1>About The Developer</h1>
        <p>
          Hello there! I'm Taylor Murdock, a passionate software engineer with a
          flair for the great outdoors. I'm 28 years old and currently reside in
          the charming city of Asheville, NC. When I'm not immersed in coding,
          you'll likely find me exploring the breathtaking landscapes, either
          rock climbing, backpacking, or enjoying nature's wonders. As a
          dedicated parent, I cherish spending time with my lovely five-year-old
          daughter, who always keeps me inspired and motivated. My adventurous
          spirit extends beyond the mountains, as I am a social individual who
          loves making new friends and connecting with people from all walks of
          life. Currently, I'm pursuing my passion for technology at General
          Assembly, where I'm honing my skills in HTML, Python, CSS, React.js,
          and Express. My journey in the world of web development has been a
          rewarding one, and I can't wait to embark on new projects that
          showcase my creativity and problem-solving abilities. I'm always eager
          to take on exciting challenges and contribute my expertise to
          impactful projects. If you'd like to collaborate or discuss potential
          opportunities, feel free to reach out. Let's create amazing web
          experiences together! Thank you for visiting my portfolio, and I hope
          you enjoy exploring my projects!
        </p>
      </div>
      <img src={picOfTaylor} alt="Picture of Taylor" />
    </div>
  );
}

export default Footer;
