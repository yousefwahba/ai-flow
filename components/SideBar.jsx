import { useDnD } from "@/provider/DnDContext";

const SideBar = () => {
  const [_, setType] = useDnD();

  const onDragStart = (event, nodeType) => {
    setType(nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <aside className="border-r border-gray-200 p-4 bg-gray-50">
      <div className="mb-2 text-xs">
        You can drag these nodes to the pane on the right.
      </div>
      <div
        className="dndnode input border border-blue-700 rounded-sm h-5 p-1 mb-2 flex justify-center items-center cursor-grab"
        onDragStart={(event) => onDragStart(event, "input")}
        draggable
      >
        Input Node
      </div>
      <div
        className="dndnode border border-gray-800 rounded-sm h-5 p-1 mb-2 flex justify-center items-center cursor-grab"
        onDragStart={(event) => onDragStart(event, "default")}
        draggable
      >
        Default Node
      </div>
      <div
        className="dndnode output border border-pink-600 rounded-sm h-5 p-1 mb-2 flex justify-center items-center cursor-grab"
        onDragStart={(event) => onDragStart(event, "output")}
        draggable
      >
        Output Node
      </div>
    </aside>
  );
};

export default SideBar;
