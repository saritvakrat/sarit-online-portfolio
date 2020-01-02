import React from 'react';
import { useLocation } from 'react-router-dom';

import { HeaderContainer, Header, Image } from './styles';

const UserHeader = ({ user }) => {
  const location = useLocation();

  return (
    <HeaderContainer isHome={location.pathname === '/'}>
      <Header>
        <Image src={user.basics.picture} />
        <div>
          <h2>{user.basics.name}</h2>
          <h4>
            <a
              href={`https://gitconnected.com/ActoMatics`}
              target="_blank"
              rel="noreferrer noopener"
            >
              @{user.basics.ActoMatics}
            </a>
          </h4>
          <p>{user.basics.label}</p>
          <p>Coding in TypeScript, NodeJS, JavaScript</p>
          <p>{user.basics.yearsOfExperience} years of experience as a developer</p>
          <p>
            Blog:{' '}
            <a href={'https://medium.com/@saritvakrat'} target="_blank" rel="noreferrer noopener">
              {'https://medium.com/@saritvakrat'}
            </a>
          </p>
        </div>
      </Header>
    </HeaderContainer>
  );
};

export default UserHeader;