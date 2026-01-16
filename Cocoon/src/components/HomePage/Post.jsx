import ProfilePhoto from "./ProfilePhoto";
import { BsThreeDotsVertical } from "react-icons/bs";
import sample from "../../assets/sample.jpg";
import { FaRegHeart } from "react-icons/fa6";
import { BiRepost } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa";
import { TbSend } from "react-icons/tb";
import { FaRegBookmark } from "react-icons/fa6";

const Post = () => {
  return (
    <>
      <div className="post-container">
        <div className="post-head">
          <div className="post-head-left">
            <ProfilePhoto className="profile-photo"/>
            <h1 className="user-name">user_name</h1>
          </div>
          <div className="post-head-right">
            <button className="follow-button">Follow</button>
            <BsThreeDotsVertical />
          </div>
        </div>
        <div className="post-body">
          <img className="post" src={sample} alt="" />
          <div className="interactions">
            <div className="interactions-left">
              <div className="interactions-icons">
                <FaRegHeart size={20} />
                <p>9,999</p>
              </div>
              <div className="interactions-icons">
                <FaRegComment size={20} />
                <p>9,999</p>
              </div>
              <div className="interactions-icons">
                <BiRepost  size={30} />
                <p>9,999</p>
              </div>
              <div className="interactions-icons">
                <TbSend size={20} />
                <p>9,999</p>
              </div>
            </div>
            <div>
              <FaRegBookmark size={20} />
            </div>
          </div>
        </div>
        <div className="post-tail">
          <div className="caption">
            <span style={{fontWeight:"bold", fontSize:"0.8rem"}}>user_name </span>Save this Post
            <span style={{color:"grey"}}> ... more</span>
          </div>
          <div  className="post-time">
            5 January
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
