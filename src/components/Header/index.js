import {
  Nav,
  NavContainer,
  NavLogo,
  NavLinks,
  NavItem,
  NavLink,
  NavAccount,
  NavUser,
  SignIn,
  SignUp,
} from "./HeaderElements";

const Header = () => {
  return (
    <header>
      <Nav>
        <NavContainer>
          <NavLogo to="/">Tesla</NavLogo>
          <NavLinks>
            <NavItem>
              <NavLink to="rent">Rent</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="yourcar">Your Car</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="discover">Discover</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="safety">Safety</NavLink>
            </NavItem>
          </NavLinks>
          <NavAccount>
            <NavUser>UserIcon</NavUser>
            <SignIn>Sign In</SignIn>
            <SignUp>Sign Up</SignUp>
          </NavAccount>
        </NavContainer>
      </Nav>
    </header>
  );
};

export default Header;
