import React from "react";
import { DashboardData } from "../Dashboard";
import BarChart from "./BarChart";

const BlockChainChart = ({
  data,
  isDaily,
  isAllTime,
}: {
  data: DashboardData;
  isDaily: boolean;
  isAllTime: boolean;
}) => {
  const blockchainMetrics = data.dashboard.blockchainMetrics;
  const labels = [
    "totalTokens",
    "totalWalletOnSolana",
    "totalWalletOnPolygon",
    "totalWalletOnEthereum",
  ];
  const blockChains = blockchainMetrics.allTime.totalChains;
  const [daily, setDaily] = React.useState<number[]>([]);
  const [monthly, setMonthly] = React.useState<number[]>([]);
  const [allTime, setAllTime] = React.useState<number[]>([]);

  React.useEffect(() => {
    setDaily([
      blockchainMetrics.daily.totalTokens,
      blockchainMetrics.daily.totalWalletOnSolana,
      blockchainMetrics.daily.totalWalletOnPolygon,
      blockchainMetrics.daily.totalWalletOnEthereum,
    ]);
    setMonthly([
      blockchainMetrics.monthly.totalTokens,
      blockchainMetrics.monthly.totalWalletOnSolana,
      blockchainMetrics.monthly.totalWalletOnPolygon,
      blockchainMetrics.monthly.totalWalletOnEthereum,
    ]);
    setAllTime([
      blockchainMetrics.allTime.totalTokens,
      blockchainMetrics.allTime.totalWalletOnSolana,
      blockchainMetrics.allTime.totalWalletOnPolygon,
      blockchainMetrics.allTime.totalWalletOnEthereum,
    ]);
  }, [blockchainMetrics, isDaily]);

  return (
    <div className="flex flex-col h-full">
      <div className="flex gap-2 items-center">
        <h1 className="text-custom-secondary font-semibold text-xl">
          Blockchains:{" "}
        </h1>
        {blockChains.map((chain, index) => (
          <div key={index}>
            <h1 className="text-custom-secondary font-semibold text-sm">
              {index + 1}.{chain}
            </h1>
          </div>
        ))}
      </div>
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

export default BlockChainChart;
