import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

/* Isso é necessário para criar rotas. Estou criando o navegador de páginas. */
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProjectPage from './components/project/ProjectPage';

/* Criando as rotas com o createBrowserRouter. Path é o Endpoint da rota e element é o componente que vai ser renderizado :D
é aqui que vai ser feito o roteamento de todas as páginas */
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Projeto",
    element: <ProjectPage />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*O RouterProvider é responsável por rotear todos os componentes passados no createBrowserRouter. */}
    <RouterProvider router={router} />
  </React.StrictMode>
);