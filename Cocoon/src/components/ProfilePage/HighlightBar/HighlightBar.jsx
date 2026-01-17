import AddHighlight from "./AddHighlight";
import PastHighlight from "./PastHighlight";

const HighlightBar = () => {
  return (
    <div className="highlight-bar">
      <AddHighlight />
      <PastHighlight />
      <PastHighlight />
      <PastHighlight />
      <PastHighlight />
      <PastHighlight />
    </div>
  );
};

export default HighlightBar;
