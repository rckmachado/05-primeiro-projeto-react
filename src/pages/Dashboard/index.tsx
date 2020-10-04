import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
    return (
    <>
        <img src={logoImg} alt="Github Explores" />
        <Title>Explore repositórios no Github</Title>

        <Form>
            <input placeholder="Digite o nome do repositório" />
            <button type="submit">Pesquisar</button>
        </Form>

        <Repositories>
            <a href="teste">
                <img src="https://avatars0.githubusercontent.com/u/32842682?s=460&u=5480b9d87d927dfde282a4a6aa4c32cca9d61608&v=4" 
                alt="Rick M"/>

                <div>
                    <strong>rocketseat/unform</strong>
                    <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
                </div>

                <FiChevronRight size={20} />
            </a>
        </Repositories>
    </>
 );
}

export default Dashboard;