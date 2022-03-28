import Link from 'next/link';

import styled from 'styled-components';

function MainHeader() {
  return (
    <Header>
      <Logo>
        <Link href='/'>NextEvents</Link>
      </Logo>
      <Nav>
        <ul>
          <li>
            <Link href='/events'>Browse All Events</Link>
          </li>
        </ul>
      </Nav>
    </Header>
  );
}

const Header = styled.header`
width: 100%;
display: flex;
justify-content: space-between;
align-items: baseline;
padding: 1rem 10%;
height: 5rem;
background-color: #202020;
`;

const Logo = styled.div`
font-size: 1.5rem;
color: white;
font-family: 'Fira', sans-serif;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
color: #94fdfd;
`;

const Nav = styled.nav`
text-decoration: none;
color: #74dacc;
font-size: 1rem;
`;

export default MainHeader;
