import { createElement } from 'react';
import { IconType } from 'react-icons';
import { NavLink } from 'react-router-dom';
import style from './sidemenu.module.css';

export interface iSubMenu {
  to: string;
  name: string;
}

export interface iMenuItem {
  name: string;
  iconClassName: IconType;
  to: string;
  subMenus?: iSubMenu[];
}

const MenuItem = ({ name, iconClassName, to, subMenus = [] }: iMenuItem) => {
  return (
    <>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive ? style.menu_item + ' ' + style.active : style.menu_item
        }>
        <div className={style.menu_icon}>{createElement(iconClassName)}</div>
        <span>{name}</span>
      </NavLink>
      {/* {subMenus && subMenus.length > 0 ? (
        <ul className={`sub-menu`}>
          {subMenus.map(({ to, name }, index) => (
            <li key={index}>
              <NavLink to={to}>{name}</NavLink>
            </li>
          ))}
        </ul>
      ) : null} */}
    </>
  );
};

export default MenuItem;
