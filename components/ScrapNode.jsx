import { useScrapUrl } from "@/provider/ScrapUrlContext";
import { Handle } from "@xyflow/react";
import { Database } from "lucide-react";
import React from "react";

const ScrapUrlNode = ({ data }) => {
  const { scrapUrl, setScrapUrl } = useScrapUrl();

  const handleInputChange = (e) => {
    setScrapUrl(e.target.value);
  };
  return (
    <div className="bg-gray-200 rounded-lg p-4 w-64 shadow-lg">
      <div className="flex items-center bg-white p-2 rounded-lg mb-4 shadow-sm">
        <Database className="text-gray-600" size={24} />
        <label className="ml-2 text-lg font-semibold text-gray-700">
          Web Scraper
        </label>
      </div>
      <div className="mb-3">
        <input
          type="text"
          placeholder="Enter URL"
          value={scrapUrl}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400 transition duration-300"
        />
      </div>
      <Handle
        type="source"
        position="bottom"
        className="bg-gray-600 w-10 h-10"
        style={{ bottom: -10 }}
      />
    </div>
  );
};

export default ScrapUrlNode;
