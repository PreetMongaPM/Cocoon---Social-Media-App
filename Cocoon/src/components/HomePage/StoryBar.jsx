import ProfilePhoto from "./ProfilePhoto";

const StoryBar = () => {
  return (
    <div className="story-bar">
      <div className="story">
        <ProfilePhoto />
        <h3 style={{ fontSize: "9px", marginTop:"0px" }}>user_name</h3>
      </div>
      <div className="story">
        <ProfilePhoto />
        <h3 style={{ fontSize: "9px", marginTop:"0px" }}>user_name</h3>
      </div>
      <div className="story">
        <ProfilePhoto />
        <h3 style={{ fontSize: "9px", marginTop:"0px" }}>user_name</h3>
      </div>
    </div>
  );
};

export default StoryBar;
