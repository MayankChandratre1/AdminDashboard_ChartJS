import { Toggle } from "./ui/toggle";
import UserBarChart from "./Charts/UserBarChart";
import { DashboardData } from "./Dashboard";
import { Switch } from "./ui/switch";
import React from "react";
import PostsChart from "./Charts/PostsChart";
import EngagementChart from "./Charts/EngagementChart";
import BlockChainChart from "./Charts/BlockChainChart";
import Overview from "./Overview";

const Analytics = ({
  selected,
  data,
}: {
  selected: string;
  data: DashboardData;
}) => {
  const [isDaily, setIsDaily] = React.useState(true);
  const [isAllTime, setIsAllTime] = React.useState(false);
  return (
    <div className="h-full max-h-full px-5 py-2 flex flex-col">
      <div className="">
        <h1 className="text-2xl font-bold text-custom-accent my-2">
          {selected}
        </h1>
        {selected !== "Overview" && (
          <>
            <Toggle
              pressed={isAllTime}
              onPressedChange={(e) => setIsAllTime(e)}
              className="mb-3 active:scale-90 border rounded-full py-2 border-black"
              variant={"default"}
              aria-label="Toggle italic"
            >
              All Time
            </Toggle>
            <div className="flex gap-2">
              <p>Daily</p>
              <Switch
                className="data-[state=checked]:bg-custom-primary"
                disabled={isAllTime}
                checked={!isDaily}
                onCheckedChange={(e) => {
                  setIsDaily(!e);
                }}
              />
              <p>Monthly</p>
            </div>
          </>
        )}
      </div>
      <div className=" flex-1">
        {selected === "Users" && (
          <UserBarChart data={data} isDaily={isDaily} isAllTime={isAllTime} />
        )}
        {selected === "Posts" && (
          <PostsChart data={data} isDaily={isDaily} isAllTime={isAllTime} />
        )}
        {selected === "Engagement" && (
          <EngagementChart
            data={data}
            isDaily={isDaily}
            isAllTime={isAllTime}
          />
        )}
        {selected === "Blockchain" && (
          <BlockChainChart
            data={data}
            isDaily={isDaily}
            isAllTime={isAllTime}
          />
        )}
        {selected === "Overview" && <Overview data={data} />}
      </div>
    </div>
  );
};

export default Analytics;
