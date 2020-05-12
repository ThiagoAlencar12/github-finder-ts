import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/github-logo.svg';

import { Header, RepoInfo, Issues } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Logo" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepoInfo>
        <header>
          <img
            src="https://api.adorable.io/avatars/160/abott@adorable.png"
            alt="adorable"
          />
          <div>
            <strong>Adorable test</strong>
            <p>Adorable</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1808</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>34</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>65</strong>
            <span>Issues Abertas</span>
          </li>
        </ul>
      </RepoInfo>

      <Issues>
        <Link to="teste">
          <div>
            <strong>asasd</strong>
            <p>asdasd</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
