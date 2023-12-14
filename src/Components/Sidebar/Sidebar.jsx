import "./Sidebar.css";
import { FaHome, FaSearch } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { MdExplore, MdOutlineAccountCircle } from "react-icons/md";
import { IoCreateOutline, IoMenuSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <aside className="sidebar">
        <div className="sidebar-wrapper">
          <h1 className="brand">MyFriend</h1>
          <div className="sidebar-items">
            <ul className="menu">
              <li className="nav-item">
                <FaHome className="icon" />
                <Link to="/home">
                  <span>Home</span>
                </Link>
              </li>
              <li className="nav-item">
                <FaSearch className="icon" />

                <Link to="/search">
                  <span>Search</span>
                </Link>
              </li>
              <li className="nav-item">
                <MdExplore className="icon" />
                <Link to="/explore">
                  <span>Explore</span>
                </Link>
              </li>
              <li className="nav-item">
                <FaRegMessage className="icon" />
                <Link to="/messages">
                  <span>Messages</span>
                </Link>
              </li>
              <li className="nav-item">
                <IoCreateOutline className="icon" />
                <Link to="/create">
                  <span>Create</span>
                </Link>
              </li>
              <li className="nav-item">
                <MdOutlineAccountCircle className="icon" />
                <Link to="/profile">
                  <span>Profile</span>
                </Link>
              </li>
              {/* <li className="nav-item">Messages</li>
              <li className="nav-item">Create</li>
              <li className="nav-item">Profile</li> */}
            </ul>
          </div>

          <div className="more">
            <ul className="menu">
              <li className="nav-item">
                <IoMenuSharp className="icon" />
                <span>More</span>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
