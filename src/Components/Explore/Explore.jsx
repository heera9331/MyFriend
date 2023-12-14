import "./Explore.css";
import img1 from "../../assets/images/insta2.png";


const Explore = () => {
  return (
    <div className="main explore">
      <div className="content">
        <div className="cards">
          <div className="card">
            <img src={img1} alt="" />
          </div>
          <div className="card">
            <img src={img1} alt="" />
          </div>
          <div className="card">
            <img src={img1} alt="" />
          </div>
          <div className="card">
            <img src={img1} alt="" />
          </div>
          <div className="card">
            <img src={img1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
