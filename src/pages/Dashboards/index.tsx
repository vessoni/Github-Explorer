import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => (
  <>
    <img src={logoImg} alt="Github Explorer" />
    <Title>Explore Repositorios no Github</Title>

    <Form action="">
      <input placeholder="Digite o nome do repositorio" />
      <button type="submit">Pesquisar</button>
    </Form>

    <Repositories>
      <a href="teste">
        <img
          src="https://avatars3.githubusercontent.com/u/4910383?s=460&u=83c4a27c7b7242163c6568a7e0535519ecde2eba&v=4"
          alt="Alexandre Vessoni"
        />
        <div>
          <strong>
            Teste/Alexandre
          </strong>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
        <FiChevronRight size={20} />
      </a>

      <a href="teste">
        <img
          src="https://avatars3.githubusercontent.com/u/4910383?s=460&u=83c4a27c7b7242163c6568a7e0535519ecde2eba&v=4"
          alt="Alexandre Vessoni"
        />
        <div>
          <strong>
            Teste/Alexandre
          </strong>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
        <FiChevronRight size={20} />
      </a>

      <a href="teste">
        <img
          src="https://avatars3.githubusercontent.com/u/4910383?s=460&u=83c4a27c7b7242163c6568a7e0535519ecde2eba&v=4"
          alt="Alexandre Vessoni"
        />
        <div>
          <strong>
            Teste/Alexandre
          </strong>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
        <FiChevronRight size={20} />
      </a>
    </Repositories>

  </>
);

export default Dashboard;
