import React from "react";
import { DashboardData } from "../Dashboard";
import BarChart from "./BarChart";

const EngagementChart = ({
  data,
  isDaily,
  isAllTime,
}: {
  data: DashboardData;
  isDaily: boolean;
  isAllTime: boolean;
}) => {
  const engagementMetrics = data.dashboard.engagementMetrics;
  const labels = [
    "totalLikes",
    "totalViews",
    "totalNotifications",
    "totalMessage",
    "privateChats",
  ];
  const [daily, setDaily] = React.useState<number[]>([]);
  const [monthly, setMonthly] = React.useState<number[]>([]);
  const [allTime, setAllTime] = React.useState<number[]>([]);

  React.useEffect(() => {
    setDaily([
      engagementMetrics.daily.totalLikes,
      engagementMetrics.daily.totalViews,
      engagementMetrics.daily.totalNotifications,
      engagementMetrics.daily.totalMessage,
      engagementMetrics.daily.privateChats,
    ]);
    setMonthly([
      engagementMetrics.monthly.totalLikes,
      engagementMetrics.monthly.totalViews,
      engagementMetrics.monthly.totalNotifications,
      engagementMetrics.monthly.totalMessage,
      engagementMetrics.monthly.privateChats,
    ]);
    setAllTime([
      engagementMetrics.allTime.totalLikes,
      engagementMetrics.allTime.totalViews,
      engagementMetrics.allTime.totalNotifications,
      engagementMetrics.allTime.totalMessage,
      engagementMetrics.allTime.privateChats,
    ]);
  }, [engagementMetrics, isDaily]);

  return (
    <div className="flex flex-col h-full">
      {!isAllTime && (
        <>
          {isDaily ? (
            <BarChart
              data={daily}
              label="Daily"
              labels={labels}
              backgroundColor="#FFD369"
            />
          ) : (
            <BarChart
              data={monthly}
              label="Monthly"
              labels={labels}
              backgroundColor="#FFD369"
            />
          )}
        </>
      )}

      {isAllTime && (
        <BarChart
          data={allTime}
          label="AllTime"
          labels={labels}
          backgroundColor="#FFD369"
        />
      )}
    </div>
  );
};

export default EngagementChart;
