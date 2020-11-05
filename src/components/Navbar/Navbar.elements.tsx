import styled from 'styled-components';
import { FaMagento } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Container } from '../../globalStyles';

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 999;

  background: #101522;
  height: 80px;
  font-size: 1.2rem;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-space-between;
  height: 80px;

  ${Container}
`;

export const NavLogo = styled(Link)`
  display: flex;
  align-items: center;
  justify-self: flex-start;
  
  color: #fff;
  text-decoration: none;
  font-size: 2rem;

  cursor: pointer;
`;

export const NavIcon = styled(FaMagento)`
  margin-right: 0.5rem;
`;