import Head from "next/head";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div id="header_name">Lah</div>
      <div id="links">
        <Link href="Lah_spring_2019_resume.pdf">Resume</Link>
        <Link href="https://github.com/MichaelLah">GitHub</Link>
        <Link href="/photography">Photography</Link>
      </div>
    </>
  );
};

export default Header;
