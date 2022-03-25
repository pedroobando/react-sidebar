import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SideMenu from './components/SideMenu';

import logo from './assets/logo/servident-mj.svg';
import user from './assets/user.jpg';

import './App.css';
import { iMenuItem } from './components/MenuItem';
import { BsNewspaper, BsSpeedometer2, BsVectorPen } from 'react-icons/bs';

const menuItems: iMenuItem[] = [
  { name: 'Dashboard', to: '/', iconClassName: BsSpeedometer2 },
  { name: 'Content', to: '/content', iconClassName: BsNewspaper },
  { name: 'Design', to: '/desing', iconClassName: BsVectorPen },
  { name: 'Design2', to: '/desing2', iconClassName: BsSpeedometer2 },
];

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <SideMenu
              logo={logo}
              avata={user}
              fullname={'Pedro Obando'}
              email={'pedroobando@hotmail.com'}
              menuItems={menuItems}
            />
          }>
          <Route index element={<h1>Pagina</h1>} />
          <Route path="/content" element={<h1>Content</h1>} />
          <Route path="/desing" element={<h1>Desing</h1>} />
          <Route path="/desing2" element={<h1>Desing2</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
