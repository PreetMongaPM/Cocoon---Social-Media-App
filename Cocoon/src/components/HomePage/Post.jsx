import ProfilePhoto from "./ProfilePhoto";
import { BsThreeDotsVertical } from "react-icons/bs";
import sample from "../../assets/sample.jpg";
import { FaRegHeart } from "react-icons/fa6";

import { FaRegComment } from "react-icons/fa";
import { TbSend } from "react-icons/tb";
import { FaRegBookmark } from "react-icons/fa6";

const Post = () => {
  return (
    <>
      <div className="post-container">
        <div className="post-head">
          <div className="post-head-left">
            <ProfilePhoto className="profile-photo" />
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
              <FaRegHeart size={20}/>
              <FaRegComment size={20}/>
              <TbSend size={20} />
            </div>
            <div>
              <FaRegBookmark size={20}/>
            </div>
          </div>
        </div>
        <div className="post-tail">
          <div className="likes"></div>
          <div className="username"></div>
          <div className="caption"></div>
          <div className="comments"></div>
          <div className="post-time"></div>
        </div>
      </div>
    </>
  );
};

export default Post;
