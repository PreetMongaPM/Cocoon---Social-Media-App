import { GoPlus } from "react-icons/go";
import { IoLockClosedOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { IoReorderThree } from "react-icons/io5";

const ProfilePageHeader = ()=>{
    return(
    <div className="profile-header">
        <GoPlus />
        <div className="switch-account">
        <IoLockClosedOutline/>
        preet__monga
        <IoIosArrowDown />
        </div>
        <IoReorderThree />
    </div>
    );
}

export default ProfilePageHeader;