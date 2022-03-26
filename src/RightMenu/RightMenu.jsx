import "./RightMenu.css";
import Flow from "../Flow/Flow";
import { ReactFlowProvider } from "react-flow-renderer";

export default function RightMenu() {
  return (
    <>
      <div className="RightMenuWrapper">
        <ReactFlowProvider>
          <Flow></Flow>
        </ReactFlowProvider>
      </div>
    </>
  );
}
