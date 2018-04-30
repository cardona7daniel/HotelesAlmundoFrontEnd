import React from 'react';
import styled from 'styled-components';
import Image from '../assets/images/logo-almundo.svg';

const HeaderStyle = styled.header`
  background-color: #002d70;
  padding: 15px 10px;
`;

const Header = () => {
  return (
    <HeaderStyle>
      <img src={Image} alt="Logo Almundo" />
    </HeaderStyle>
  );
};

export default Header;
