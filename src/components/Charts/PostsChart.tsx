import React from "react";
import { DashboardData } from "../Dashboard";
import BarChart from "./BarChart";

const PostsChart = ({
  data,
  isDaily,
  isAllTime,
}: {
  data: DashboardData;
  isDaily: boolean;
  isAllTime: boolean;
}) => {
  const contentMetrics = data.dashboard.contentMetrics;
  const labels = [
    "totalPosts",
    "totalCategory",
    "totalPostExitCount",
    "totalPostShares",
    "totalViews",
    "totalComments",
    "totalPostBlocked",
    "totalPostDeleted",
  ];
  const [daily, setDaily] = React.useState<number[]>([]);
  const [monthly, setMonthly] = React.useState<number[]>([]);
  const [allTime, setAllTime] = React.useState<number[]>([]);

  React.useEffect(() => {
    setDaily([
      contentMetrics.daily.totalPosts,
      contentMetrics.daily.totalCategory,
      contentMetrics.daily.totalPostExitCount,
      contentMetrics.daily.totalPostShares,
      contentMetrics.daily.totalViews,
      contentMetrics.daily.totalComments,
      contentMetrics.daily.totalPostBlocked,
      contentMetrics.daily.totalPostDeleted,
    ]);
    setMonthly([
      contentMetrics.monthly.totalPosts,
      contentMetrics.monthly.totalCategory,
      contentMetrics.monthly.totalPostExitCount,
      contentMetrics.monthly.totalPostShares,
      contentMetrics.monthly.totalViews,
      contentMetrics.monthly.totalComments,
      contentMetrics.monthly.totalPostBlocked,
      contentMetrics.monthly.totalPostDeleted,
    ]);
    setAllTime([
      contentMetrics.allTime.totalPosts,
      contentMetrics.allTime.totalCategory,
      contentMetrics.allTime.totalPostExitCount,
      contentMetrics.allTime.totalPostShares,
      contentMetrics.allTime.totalViews,
      contentMetrics.allTime.totalComments,
      contentMetrics.allTime.totalPostBlocked,
      contentMetrics.allTime.totalPostDeleted,
    ]);
  }, [contentMetrics, isDaily]);

  return (
    <div className="flex flex-col h-full">
      {!isAllTime && (
        <>
          {isDaily ? (
            <BarChart
              data={daily}
              label="DailyPosts"
              labels={labels}
              backgroundColor="#FFD369"
            />
          ) : (
            <BarChart
              data={monthly}
              label="MonthlyPosts"
              labels={labels}
              backgroundColor="#FFD369"
            />
          )}
        </>
      )}

      {isAllTime && (
        <BarChart
          data={allTime}
          label="AllTimePosts"
          labels={labels}
          backgroundColor="#FFD369"
        />
      )}
    </div>
  );
};

export default PostsChart;
