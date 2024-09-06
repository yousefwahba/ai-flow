import React, { useState } from "react";
import { Handle, Position } from "@xyflow/react";
import { useScrapUrl } from "@/provider/ScrapUrlContext";

const SummaryNode = ({ id, data }) => {
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(false);
  const { scrapUrl } = useScrapUrl();

  const handleFetchSummary = async () => {
    console.log(scrapUrl);
    setLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setSummary(
      "This is a simulated summary of the flow data. In a real application, this would be fetched from a backend API."
    );
    setLoading(false);
  };

  return (
    <div className="px-4 py-2 shadow-md rounded-md bg-white border-2 border-stone-400">
      <div className="flex items-center mb-2">
        <div className="mr-2">{data.icon}</div>
        <div className="font-bold text-lg">{data.label}</div>
      </div>
      <button
        onClick={handleFetchSummary}
        disabled={loading}
        className="w-full px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-blue-300"
      >
        {loading ? "Fetching..." : "Get Summary"}
      </button>
      {summary && (
        <div className="mt-2 p-2 bg-gray-100 rounded">
          <p className="text-sm">{summary}</p>
        </div>
      )}
      <Handle type="target" position={Position.Left} className="w-2 h-2" />
    </div>
  );
};

export default SummaryNode;
