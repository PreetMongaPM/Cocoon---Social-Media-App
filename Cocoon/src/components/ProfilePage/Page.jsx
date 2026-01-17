import ProfilePageHeader from "./Header/Header";
import ProfileInfo from "./ProfileInfo/Info";
import Bio from "./Bio/Bio";
import Button from "./Button/Button";
import HighlightBar from "./HighlightBar/HighlightBar";
import HeroSection from "./HeroSection/HeroSection";
const ProfilePage = () => {
  return (
    <div>
      <ProfilePageHeader />
      <ProfileInfo />
      <Bio></Bio>
      <div className="profile-button">
        <Button buttonType={"Edit Profile"}></Button>
        <Button buttonType={"Share Profile"}></Button>
      </div>
      <HighlightBar />
      <HeroSection/>
      
    </div>
  );
};

export default ProfilePage;
