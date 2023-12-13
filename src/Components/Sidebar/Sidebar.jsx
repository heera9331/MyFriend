import "./Sidebar.css";
import { FaHome, FaSearch } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { MdExplore, MdOutlineAccountCircle } from "react-icons/md";
import { IoCreateOutline, IoMenuSharp } from "react-icons/io5";

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
                <span>Home</span>
              </li>
              <li className="nav-item">
                <FaSearch className="icon" />
                <span>Search</span>
              </li>
              <li className="nav-item">
                <MdExplore className="icon" />
                <span>Explore</span>
              </li>
              <li className="nav-item">
                <FaRegMessage className="icon" />
                <span>Messages</span>
              </li>
              <li className="nav-item">
                <IoCreateOutline className="icon" />
                <span>Create</span>
              </li>
              <li className="nav-item">
                <MdOutlineAccountCircle className="icon" />
                <span>Profile</span>
              </li>
              {/* <li className="nav-item">Messages</li>
              <li className="nav-item">Create</li>
              <li className="nav-item">Profile</li> */}
            </ul>
          </div>

          <div className="more">
            <ul className="menu">
              <li className="nav-item">
                <IoMenuSharp className="icon"/>
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
