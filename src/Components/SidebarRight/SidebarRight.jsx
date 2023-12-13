import "./SidebarRight.css";
import img1 from "../../assets/images/insta1.png"
const SidebarRight = () => {
  return (
    <div
      className="sidebar-right "
      style={{ position: "absolute", top: "0vh", right: "20vw" }}
    >
      <div className="profile">
        <img src={img1} alt="" />
        <p className="username">Username</p>
        <button className="btn">Click</button>
      </div>
    </div>
  );
};

export default SidebarRight;
