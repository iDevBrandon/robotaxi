import { Nav, NavContainer, NavLogo } from "./HeaderElements";

const Header = () => {
  return (
    <header>
      <Nav>
        <NavContainer>
          <NavLogo to="/">Tesla</NavLogo>
        </NavContainer>
      </Nav>
    </header>
  );
};

export default Header;
