import Story from "./Story";
import { BsThreeDotsVertical } from "react-icons/bs";
const Post = () => {
  return (
    <>
      <div>
        <div className="post-head">
          <div className="post-head-left">
            <Story />
            <h1>user_name</h1>
          </div>
          <div className="post-head-right">
            <button>Follow</button>
            <BsThreeDotsVertical />
          </div>
          <div className="post-body">
            <img src="" alt="" />
            <div className="interactions">
                //add like comment send save icons
            </div>
          </div>
          <div className="post-tail">
            <div className="likes"></div>
            <div className="caption"></div>
            <div className="comments"></div>
            <div className="post-time"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
