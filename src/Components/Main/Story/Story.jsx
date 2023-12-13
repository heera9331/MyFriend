import img1 from "../../../assets/images/insta1.png";
import "./Story.css";

// const ImgCointainer = ({ imgUrl }) => {
//   console.log(imgUrl);
//   return (
//     <div className="story-img-wrapper">
//       <img className="story-img" src={imgUrl} alt="" />
//     </div>
//   );
// };

const Story = () => {
  return (
    <>
      <div className="story">
        <div className="story-wrapper">
          <img className="story-img" src={img1} />
          <img className="story-img" src={img1} />
          <img className="story-img" src={img1} />
          <img className="story-img" src={img1} />
          <img className="story-img" src={img1} />
          <img className="story-img" src={img1} />
          <img className="story-img" src={img1} />
          <img className="story-img" src={img1} />
        </div>
      </div>
    </>
  );
};

export default Story;
