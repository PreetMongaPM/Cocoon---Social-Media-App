import { IoSearchOutline } from "react-icons/io5";
import { MdHomeFilled } from "react-icons/md";
import { FaFacebookMessenger } from "react-icons/fa";
import { MdOutlineExplore } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import { FaRegCircle } from "react-icons/fa";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">Cocoon</div>
      <div className="search">
        <IoSearchOutline/>
        <input type="searchBar" name="searchBar" id="searchBar" placeholder="Search"/>
      </div>
      <div className="controller">
        <div className="home">< MdHomeFilled className="icon"/></div>
        <div className="dm"><FaFacebookMessenger className="icon"/></div>
        <div className="explore"><MdOutlineExplore className="icon"/></div>
        <div className="notifications"><FaRegHeart className="icon"/></div>
        <div className="profile"><FaRegCircle className="icon"/></div>

      </div>
    </div>
  );
};

export default Header;