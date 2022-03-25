import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import MenuItem, { iMenuItem } from './MenuItem';
import style from './sidemenu.module.css';

import { BsArrowLeftSquareFill, BsArrowRightSquareFill, BsSearch } from 'react-icons/bs';

interface iSideMenuProps {
  logo: string;
  avata?: string;
  fullname: string;
  email: string;
  menuItems: iMenuItem[];
}

const SideMenu = ({ logo, avata = '', fullname, email, menuItems }: iSideMenuProps) => {
  const [inactive, setInactive] = useState<boolean>(false);

  const handleBtnActive = () => setInactive((btnStatus) => !btnStatus);

  return (
    <>
      <div className={inactive ? style.side_menu + ' ' + style.inactive : style.side_menu}>
        <div className={style.top_section}>
          <div className={style.logo}>
            <img src={logo} alt="logotipo" />
          </div>
          <div onClick={handleBtnActive} className={style.toggle_menu_btn}>
            {inactive ? <BsArrowRightSquareFill /> : <BsArrowLeftSquareFill />}
          </div>
        </div>
        <div className={style.search_controller}>
          <button className={style.search_btn}>
            <BsSearch />
          </button>

          <input type="text" placeholder="search" />
        </div>

        <div className={style.divider}></div>
        <nav className={style.main_menu}>
          {menuItems.map((menuItem, index) => (
            <MenuItem
              key={index}
              name={menuItem.name}
              to={menuItem.to}
              subMenus={menuItem.subMenus || []}
              iconClassName={menuItem.iconClassName}
            />
          ))}

          {/* <li>
            <a className="menu-item" href="#">
              <div className="menu-icon">
                <BsSpeedometer2 />
              </div>
              Dashboard
            </a>
          </li>

          <li>
            <a className="menu-item" href="#">
              <div className="menu-icon">
                <BsNewspaper />
              </div>
              Content
            </a>
          </li>

          <li>
            <a className="menu-item" href="#">
              <div className="menu-icon">
                <BsVectorPen />
              </div>
              Desing
            </a>
          </li> */}
        </nav>

        <div className={style.side_menu_footer}>
          <div className={style.avatar}>
            <img src={avata} alt="avatar user" />
          </div>
          <div className={style.user_info}>
            <h5>{fullname}</h5>
            <p>{email}</p>
          </div>
        </div>
      </div>
      <div className={inactive ? style.container + ' ' + style.inactive : style.container}>
        <Outlet />
      </div>
    </>
  );
};

export default SideMenu;
