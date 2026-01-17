import { GoPlus } from "react-icons/go";


const AddHighlight = () => {
  return (
  <div className="highlight">
    <div className="highlight-content add-highlight">
      <GoPlus size={20} className="plus-highlight-icon"/>
    </div>
    <div className="highlight-title">
      New
    </div>
  </div>
  );
};

export default AddHighlight;
