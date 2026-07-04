import React, { useState } from "react";

const chartData = [
  { day: "MON", value: 14500 },
  { day: "TUES", value: 9000 },
  { day: "WED", value: 11500 },
  { day: "THURS", value: 7000 },
  { day: "FRI", value: 11500 },
  { day: "SAT", value: 3000 },
  { day: "SUN", value: 10000 },
];

const yAxisLabels = ["$18K", "$15K", "$10K", "$5K", "$2.5K", "$0.8K"];

const MAX_VALUE = 18000;

const tabs = ["Today", "Weekly", "Monthly", "Yearly"];

const SalesOverview = () => {
  const [activeTab, setActiveTab] = useState("Weekly");

  return (
    <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 w-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 pb-4 border-b border-gray-200">
        <h2 className="text-base sm:text-lg font-semibold text-[#333333]">
          Sales Overview
        </h2>

        <div className="flex items-center gap-3 sm:gap-6 overflow-x-auto no-scrollbar">
          {tabs.map((tab) => {
            const isActive = tab === activeTab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-xs sm:text-sm pb-1 whitespace-nowrap transition-colors ${
                  isActive
                    ? "text-green-600 font-medium border-b-2 border-green-600"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>
      </div>

      {/* Chart */}
      <div className="flex mt-6">
        {/* Y-axis labels */}
        <div className="flex flex-col justify-between text-[10px] sm:text-xs text-gray-500 pr-2 sm:pr-3 h-48 sm:h-56 md:h-64 py-1 shrink-0">
          {yAxisLabels.map((label) => (
            <span key={label}>{label}</span>
          ))}
        </div>

        {/* Bars */}
        <div className="flex-1 flex items-end justify-between gap-1.5 sm:gap-3 md:gap-4 h-48 sm:h-56 md:h-64 border-l border-b border-gray-200 pl-2 sm:pl-4 pb-0 overflow-x-auto">
          {chartData.map(({ day, value }) => {
            const heightPercent = (value / MAX_VALUE) * 100;
            return (
              <div
                key={day}
                className="flex flex-col items-center flex-1 min-w-6 h-full justify-end gap-2"
              >
                <div
                  className="w-4 sm:w-6 md:w-8 lg:w-10 bg-green-500 rounded-t-sm"
                  style={{ height: `${heightPercent}%` }}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* X-axis labels */}
      <div className="flex mt-2 pl-8 sm:pl-12 md:pl-14">
        <div className="flex-1 flex justify-between gap-1.5 sm:gap-3 md:gap-4">
          {chartData.map(({ day }) => (
            <span
              key={day}
              className="flex-1 min-w-6 text-center text-[9px] sm:text-[11px] md:text-xs text-gray-500 whitespace-nowrap"
            >
              {day}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SalesOverview;
