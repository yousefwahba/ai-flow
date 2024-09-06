import DnDFlow from "@/components/DnDFlow";
import { DnDProvider } from "@/provider/DnDContext";
import { ScrapUrlProvider } from "@/provider/ScrapUrlContext";
import { ToasterProvider } from "@/provider/toaster-provider";
import { ReactFlowProvider } from "@xyflow/react";

const App = () => (
  <ReactFlowProvider>
    <DnDProvider>
      <ScrapUrlProvider>
        <ToasterProvider />
        <DnDFlow />
      </ScrapUrlProvider>
    </DnDProvider>
  </ReactFlowProvider>
);

export default App;
