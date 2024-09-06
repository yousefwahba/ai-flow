"use client";
import React, { useRef, useCallback } from "react";
import {
  ReactFlow,
  ReactFlowProvider,
  addEdge,
  useNodesState,
  useEdgesState,
  Controls,
  useReactFlow,
  Background,
} from "@xyflow/react";
import SideBar from "@/components/SideBar";
import { DnDProvider, useDnD } from "@/provider/DnDContext";
import "@xyflow/react/dist/style.css";
import ScrapUrlNode from "@/components/ScrapNode";
import { Database, Layers } from "lucide-react";
import SummaryNode from "./SummaryNode";

const initialNodes = [];

let id = 0;
const getId = () => `dndnode_${id++}`;

const DnDFlow = () => {
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const { screenToFlowPosition } = useReactFlow();
  const [type] = useDnD();

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      if (!reactFlowWrapper.current) return;

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const type = event.dataTransfer.getData("application/reactflow");
      const label = event.dataTransfer.getData("application/reactflowlabel");
      const iconType = event.dataTransfer.getData("application/reactflowicon");
      console.log("iconType", iconType);
      console.log("type", type);
      console.log("label", label);

      if (typeof type === "undefined" || !type) {
        return;
      }

      const position = screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });

      let icon;
      switch (iconType) {
        case "Layers":
          icon = <Layers size={20} />;
          break;
        case "Database":
          icon = <Database size={20} />;
          break;

        default:
          icon = <Layers size={20} />;
      }

      const newNode = {
        id: getId(),
        type,
        position,
        data: { label: `${type} node` },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [screenToFlowPosition, type]
  );
  const nodeTypes = {
    ScrapUrlNode: ScrapUrlNode,
    summary: SummaryNode,
  };

  return (
    <div className="dndflow">
      <div className="w-full h-screen flex" ref={reactFlowWrapper}>
        <SideBar />

        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onDrop={onDrop}
          onDragOver={onDragOver}
          nodeTypes={nodeTypes}
          fitView
        >
          <Background color="#aaa" />
          <Controls />
        </ReactFlow>
      </div>
    </div>
  );
};

export default DnDFlow;
