import styled from "styled-components";

const Navbar = () => {
  return (
    <StyledNavbar className="navbar">
      <ul className="left-navbar">
        <li>WATCHER</li>
      </ul>
      <ul className="right-navbar">
        <li>Categories</li>
        <li>Charts</li>
      </ul>
    </StyledNavbar>
  );
};

const StyledNavbar = styled.nav`
  height: 75px;
  background-color: #505df6;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .left-navbar,
  .right-navbar {
    list-style: none;
    padding: 0px 20px;
  }

  .left-navbar {
    font-size: 25px;
    font-weight: 700;
  }

  .right-navbar {
    display: flex;
  }

  .right-navbar li {
    margin: 0px 15px;
  }
`;

export default Navbar;
