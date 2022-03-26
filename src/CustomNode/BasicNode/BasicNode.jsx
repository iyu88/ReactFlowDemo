import "./BasicNode.css";
import NodeModal from "../../NodeModal/NodeModal";
import { useCallback, useState } from "react";
import { Handle, Position } from "react-flow-renderer";
// Handle -> 연결지점
// type : target -> 초기값 , source -> 추가 연결점

const handleStyle = { left: 10 };

export default function BasicNode({ data }) {
  const [onModal, setModal] = useState(false);
  const [textTest, setTextTest] = useState("Double Click Here");

  // DoubleClickEvent
  const onModalHandler = () => {
    setModal(true);
  };

  return (
    <>
      <div className="BasicNodeWrapper" onDoubleClick={onModalHandler}>
        {onModal ? (
          <NodeModal
            setModal={setModal}
            textTest={textTest}
            setTextTest={setTextTest}
          ></NodeModal>
        ) : (
          <></>
        )}
        <Handle type="target" position={Position.Top}></Handle>
        <div className="BasicNodeTextTest">{textTest}</div>
        <Handle
          type="source"
          position={Position.Bottom}
          id="a"
          style={handleStyle}
        ></Handle>
        <Handle type="source" position={Position.Bottom} id="b"></Handle>
        <Handle
          type="source"
          position={Position.Bottom}
          id="c"
          style={{ left: 135 }}
        ></Handle>
      </div>
    </>
  );
}
