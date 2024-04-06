import { getCategories } from "../api";
import { Outlet, NavLink } from "react-router-dom";

export default function Categories() {
  const categoires = getCategories();
  return (
    <div className="container">
      <h1>Session Categories</h1>
      <ul className="categories">
        {categoires.map((cat) => (
          <li key={cat.id}>
            <NavLink
              className={({ isActive }) =>
                isActive ? "category-active" : null
              }
              to={cat.id}
            >
              {cat.name}
            </NavLink>
          </li>
        ))}
      </ul>
      {/* It will disply the nested content display */}
      <Outlet />
    </div>
  );
}
