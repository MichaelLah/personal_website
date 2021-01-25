import Head from "next/head";
import styled from "styled-components";
import Link from "next/link";

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px;
  #header_name {
      margin: 16px;
  }
`;

const StyledLinks = styled.ul`
  a {
    padding: 5px;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <div id="header_name">Lah</div>
      <StyledLinks>
        <Link href="Lah_spring_2019_resume.pdf">Resume</Link>
        <Link href="https://github.com/MichaelLah">GitHub</Link>
        <Link href="/photography">Photography</Link>
        <Link href="/contact">Contact</Link>
      </StyledLinks>
    </StyledHeader>
  );
};

export default Header;
