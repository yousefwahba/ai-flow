"use client";
import React, { useState } from "react";
import { Handle, Position } from "@xyflow/react";
import { useScrapUrl } from "@/provider/ScrapUrlContext";
import { generateText } from "ai";
import { google } from "@ai-sdk/google";
import { getAnswer } from "@/app/actions/actions";

const SummaryNode = ({ id, data }) => {
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(false);
  const { scrapUrl, setScrapUrl } = useScrapUrl();

  const handleFetchSummary = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://scraper-py.vercel.app/scrap?url=${scrapUrl}`
      );
      const result = await response.json();
      const textData = JSON.stringify(result);
      console.log(textData);

      //Ai part
      // const res = await fetch("/api/chat", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: textData,
      // });

      // const data = await res.json();
      // console.log(data);

      const { text } = await getAnswer(textData);
      console.log(text);
      setSummary(text);
    } catch (error) {
      console.log(error);
    }
    // await new Promise((resolve) => setTimeout(resolve, 1500));
    // setSummary(
    //   "This is a simulated summary of the flow data. In a real application, this would be fetched from a backend API."
    // );
    setLoading(false);
    setScrapUrl("");
  };

  return (
    <div className="w-96 h-auto px-5 py-4 shadow-lg rounded-lg bg-white border-2 border-gray-300 hover:border-gray-400 transition-all duration-200 ease-in-out">
      <div className="flex items-center mb-4 space-x-3">
        <div className="text-3xl text-blue-500">{data.icon}</div>
        <h2 className="font-semibold text-xl text-gray-800">{data.label}</h2>
      </div>
      <button
        onClick={handleFetchSummary}
        disabled={loading}
        className={`w-full py-2 text-white font-medium rounded-md transition-all duration-200 ${
          loading
            ? "bg-blue-300 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-600"
        }`}
      >
        {loading ? "Fetching..." : "Get Summary"}
      </button>
      {summary && (
        <div className="mt-4 p-4 bg-gray-50 rounded-lg shadow-inner">
          <p className="text-gray-700 text-sm">{summary}</p>
        </div>
      )}
      <Handle
        type="target"
        position={Position.Left}
        className="w-3 h-3 bg-blue-500"
      />
    </div>
  );
};

export default SummaryNode;
