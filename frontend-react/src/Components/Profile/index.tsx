import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ProfileStyle } from "./styled";

const Profile = () => (
  <ProfileStyle>
    <div>
      <img
        src="https://avatars.githubusercontent.com/u/52430346?s=400&u=6dd1e89b74a804d6f2b263251541c6faa989a179&v=4"
        alt="jeferson soares"
      />
      <h3>Jeferson Soares</h3>
    </div>

    <div>
      <a href="https://github.com/jef-sorridente" target="_blank">
        <FaGithub />
        jef-sorridente
      </a>
    </div>
    <div>
      <a
        href="https://www.linkedin.com/in/jeferson-soares-dev/"
        target="_blank"
      >
        <FaLinkedin />
        jeferson-soares-dev
      </a>
    </div>
  </ProfileStyle>
);

export default Profile;
