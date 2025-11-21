import { LuCodeXml } from "react-icons/lu";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <>
      <nav className="px-20 py-5 fixed flex items-center justify-center top-0 left-0 w-full bg-white shadow-md">
        <div className="flex items-center justify-between w-full max-w-7xl mx-autot">
          <div>
            <h1 className=" flex items-center justify-center gap-2 text-4xl font-bold">
              <LuCodeXml />
              JustNgoding
            </h1>
            <span>Solusi website anda</span>
          </div>
          <div>
            <ul className="flex gap-10 text-lg font-medium">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-orange-400" : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products"
                  className={({ isActive }) =>
                    isActive ? "text-orange-400" : ""
                  }
                >
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/portofolio"
                  className={({ isActive }) =>
                    isActive ? "text-orange-400" : ""
                  }
                >
                  Portofolio
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    isActive ? "text-orange-400" : ""
                  }
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "text-orange-400" : ""
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "text-orange-400" : ""
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
