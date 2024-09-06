import DnDFlow from "@/components/DnDFlow";
import { DnDProvider } from "@/provider/DnDContext";
import { ReactFlowProvider } from "@xyflow/react";

const App = () => (
  <ReactFlowProvider>
    <DnDProvider>
      <DnDFlow />
    </DnDProvider>
  </ReactFlowProvider>
);

export default App;
