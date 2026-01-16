import ProfilePageHeader from "./Header";
import ProfileInfo from "./Info";
import Bio from "./Bio";
import Button from "./Button";
import StoryBar from "../HomePage/StoryBar";
const ProfilePage = ()=>{
return (
    <div>
        <ProfilePageHeader></ProfilePageHeader>
        <ProfileInfo/>
        <Bio></Bio>
        <div className="profile-button">

        <Button buttonType={'Edit Profile'}></Button>
        <Button buttonType={'Share Profile'}></Button>
        </div>
        {/* <StoryBar/> */}
    </div>
);
}

export default ProfilePage;