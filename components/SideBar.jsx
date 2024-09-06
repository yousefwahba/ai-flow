import { useDnD } from "@/provider/DnDContext";
import { Database, Sparkle } from "lucide-react";
import Image from "next/image";
import LogoSrc from "@/assets/logo.svg";

const SideBar = () => {
  const [_, setType] = useDnD();

  const onDragStart = (event, nodeType) => {
    setType(nodeType);
    event.dataTransfer.setData("application/reactflow", nodeType);
    // event.dataTransfer.setData("application/reactflowlabel", label);
    // event.dataTransfer.setData("application/reactflowicon", icon);
    event.dataTransfer.effectAllowed = "move";
  };
  return (
    <aside className="border-r border-gray-200 p-4 bg-gray-50 space-y-4">
      <Image src={LogoSrc} alt="logo" width={200} height={100} />
      <div className="mb-2 text-xs">
        You can drag these nodes to the pane on the right.
      </div>

      <div
        className="bg-white p-2 mb-2 rounded shadow cursor-move flex items-center"
        onDragStart={(event) =>
          onDragStart(event, "ScrapUrlNode", "two", "three", "Database")
        }
        draggable
      >
        <Database size={20} className="mr-2" />
        <span>Web Scrapper</span>
      </div>
      <div
        className="bg-white p-2 rounded shadow cursor-move flex items-center"
        onDragStart={(event) =>
          onDragStart(event, "summary", "Summary Node", "FileText")
        }
        draggable
      >
        <Sparkle size={20} className="mr-2" />
        <span>Summary Node</span>
      </div>
    </aside>
  );
};

export default SideBar;
