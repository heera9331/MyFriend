import profileUrl from "../../../assets/images/insta1.png";
import imgUrl from "../../../assets/images/insta1.png";
import { CiMenuKebab } from "react-icons/ci";
import "./Posts.css";
import imgUrl2 from "../../../assets/images/insta2.png";

const Post = () => {
  return (
    <div className="post">
      <div className="post-header">
        <img src={profileUrl} alt="" className="post-profile" />
        <p className="username">UserName</p>
        <p className="post-time">50w</p>
        <p className="post-more">
          <CiMenuKebab />
        </p>
      </div>
      <div className="post-body">
        <img src={imgUrl2} alt="" className="post-img" />
      </div>
      <div className="post-controls"></div>
    </div>
  );
};
const Posts = () => {
  return (
    <div className="posts">
      <h1>Posts</h1>
      <Post/>
      <Post/>
    </div>
  );
};

export default Posts;
