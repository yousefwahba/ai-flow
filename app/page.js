import DnDFlow from "@/components/DnDFlow";
import { DnDProvider } from "@/provider/DnDContext";
import { ScrapUrlProvider } from "@/provider/ScrapUrlContext";
import { ReactFlowProvider } from "@xyflow/react";

const App = () => (
  <ReactFlowProvider>
    <DnDProvider>
      <ScrapUrlProvider>
        <DnDFlow />
      </ScrapUrlProvider>
    </DnDProvider>
  </ReactFlowProvider>
);

export default App;
