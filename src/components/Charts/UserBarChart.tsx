import React from "react";
import { DashboardData } from "../Dashboard";
import BarChart from "./BarChart";

const UserBarChart = ({
  data,
  isDaily,
  isAllTime,
}: {
  data: DashboardData;
  isDaily: boolean;
  isAllTime: boolean;
}) => {
  const userMetrics = data.dashboard.userMetrics;
  const labels = ["totalUsers", "activeUsers", "totalReferrals", "creator"];
  const [daily, setDaily] = React.useState<number[]>([]);
  const [monthly, setMonthly] = React.useState<number[]>([]);
  const [allTime, setAllTime] = React.useState<number[]>([]);

  React.useEffect(() => {
    setDaily([
      userMetrics.daily.totalUser,
      userMetrics.daily.activeUser,
      userMetrics.daily.totalReferral,
      userMetrics.daily.creator,
    ]);
    setMonthly([
      userMetrics.monthly.totalUser,
      userMetrics.monthly.activeUser,
      userMetrics.monthly.totalReferral,
      userMetrics.monthly.creator,
    ]);
    setAllTime([
      userMetrics.allTime.totalUser,
      userMetrics.allTime.activeUser,
      userMetrics.allTime.totalReferral,
      userMetrics.allTime.creator,
    ]);
  }, [userMetrics, isDaily]);

  return (
    <div className="flex flex-col h-full">
      {!isAllTime && (
        <>
          {isDaily ? (
            <BarChart
              data={daily}
              label="DailyUsers"
              labels={labels}
              backgroundColor="#FFD369"
            />
          ) : (
            <BarChart
              data={monthly}
              label="MonthlyUsers"
              labels={labels}
              backgroundColor="#FFD369"
            />
          )}
        </>
      )}

      {isAllTime && (
        <BarChart
          data={allTime}
          label="AllTimeUsers"
          labels={labels}
          backgroundColor="#FFD369"
        />
      )}
    </div>
  );
};

export default UserBarChart;
