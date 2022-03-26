import "./Flow.css";
import { useCallback, useState } from "react";
import ReactFlow, {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  Background,
  useReactFlow,
} from "react-flow-renderer";
import BasicNode from "../CustomNode/BasicNode/BasicNode";
import initialNodes from "../TempData/FlowNodes/initialNodes";
import initialEdges from "../TempData/FlowEdges/initialEdges";

/*
Node : 드래그 가능한 블록 ( 다른 노드와 연결 가능 )
Edge : 두 노드 사이의 연결
Handle : 노드를 연결할 때 사용하는 구멍 ( 한 곳에서 시작해서 다른 곳에서 끝남 )
Connection Line : 두 노드를 연결할 때 그려지는 선
*/

/* 커스텀 노드 */
// 항상 함수 밖
const nodeTypes = { $basic: BasicNode };

export default function Flow() {
  /* 기본 함수 */
  // 노드와 엣지의 id 로 연결 및 렌더링
  // useState 로 연결 상태 관리
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback((changes) => {
    setNodes((nds) => applyNodeChanges(changes, nds), [setNodes]);
  });

  const onEdgesChange = useCallback((changes) => {
    setEdges((eds) => applyEdgeChanges(changes, eds), [setEdges]);
  });

  /*
  노드 연결 
  const onConnect = useCallback((connection) => {
    setEdges((eds) => addEdge(connection, eds), [setEdges]);
  });
  */

  // 새로 연결된 점을 점선 애니매이션
  const onConnect = useCallback((connection) => {
    setEdges((eds) => addEdge({ ...connection, animated: true }, eds));
  });

  /* 노드 추가 */
  // node Id
  let nodeId = 3;

  const reactFlowInstance = useReactFlow();

  const onAddNodes = useCallback(() => {
    const id = `${++nodeId}`;
    const newNode = {
      id,
      position: {
        x: Math.random() * 200,
        y: Math.random() * 200,
      },
      data: {
        label: `New Node ${id}`,
      },
      type: "$basic",
    };
    reactFlowInstance.addNodes(newNode);
  }, []);

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      nodeTypes={nodeTypes}
      fitView
    >
      <button className="FlowAddNodes" onClick={onAddNodes}>
        Add New Nodes
      </button>
      <Background />
    </ReactFlow>
  );
}
