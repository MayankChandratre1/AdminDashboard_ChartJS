"use client"
import React from "react";
import { Button } from "./ui/button";
import { Users, GlobeLock, HandHeart, PanelsTopLeft } from 'lucide-react';
import { StickyNote } from 'lucide-react';
import Analytics from "./Analytics";

export type DashboardData = {
    status: boolean,
    dashboard:{
        userMetrics:{
            daily:{
                totalUser: number,
                activeUser: number,
                totalReferral: number,
                creator: number,
                chartData: [{
                    timestamp: string,
                    count: number
                }]
            },
            monthly:{
                totalUser: number,
                activeUser: number,
                totalReferral: number,
                creator: number,
                chartData: [{
                    timestamp: string,
                    count: number
                }]
            },
            allTime:{
                totalUser: number,
                activeUser: number,
                totalReferral: number,
                creator: number
            }
        },
        contentMetrics:{
            daily:{
                totalPosts: number,
                totalCategory: number,
                totalPostExitCount: number,
                totalPostShares: number,
                totalViews: number,
                totalComments: number,
                totalPostBlocked: number,
                totalPostDeleted: number,
                chartData: [{
                    timestamp: string,
                    count: number
                }]
            },
            monthly:{
                totalPosts: number,
                totalCategory: number,
                totalPostExitCount: number,
                totalPostShares: number,
                totalViews: number,
                totalComments: number,
                totalPostBlocked: number,
                totalPostDeleted: number,
                chartData: [{
                    timestamp: string,
                    count: number
                }]
            },
            allTime:{
                totalPosts: number,
                totalCategory: number,
                totalPostExitCount: number,
                totalPostShares: number,
                totalViews: number,
                totalComments: number,
                totalPostBlocked: number,
                totalPostDeleted: number
            },
        }
        engagementMetrics:{
            daily:{
                totalLikes: number,
                totalViews: number,
                totalNotifications: number,
                totalMessage: number,
                privateChats: number,
                chartData: [{
                    timestamp: string,
                    count: number
                }]
            },
            monthly:{
                totalLikes: number,
                totalViews: number,
                totalNotifications: number,
                totalMessage: number,
                privateChats: number,
                chartData: [{
                    timestamp: string,
                    count: number
                }]
            },
            allTime:{
                totalLikes: number,
                totalViews: number,
                totalNotifications: number,
                totalMessage: number,
                privateChats: number,
            },
        }
        blockchainMetrics:{
            daily:{
                totalTokens: number,
                totalWalletOnSolana: number,
                totalWalletOnPolygon: number,
                totalWalletOnEthereum: number,
                chartData: [{
                    timestamp: string,
                    count: number
                }]
            },
            monthly:{
                totalTokens: number,
                totalWalletOnSolana: number,
                totalWalletOnPolygon: number,
                totalWalletOnEthereum: number,
                chartData: [{
                    timestamp: string,
                    count: number
                }]
            }
            allTime:{
                totalTokens: number,
                totalWalletOnSolana: number,
                totalWalletOnPolygon: number,
                totalWalletOnEthereum: number,
                totalChains: string[]
            },
        }
    }
}

const Dashboard = () => {
  const [selected, setSelected] = React.useState("Users");
  const [data, setData] = React.useState<DashboardData | null>(null);

    React.useEffect(() => {
        fetch("http://localhost:3001/")
        .then((res) => res.json())
        .then((data) => {
            console.log(data.status);
            setData(data)
        });
    }, []);

  return (
    <section className="grid grid-cols-6 mt-4 gap-2 flex-1">
      <Menu selected={selected} setSelected={setSelected} />
      <main className=" col-span-5 bg-secondary rounded-xl border-2 border-black">
        {
            data ? <Analytics selected={selected} data={data} /> : <h1>Loading...</h1>
        }
      </main>
    </section>
  );
};


const Menu = ({ selected, setSelected }: { selected: string, setSelected: React.Dispatch<React.SetStateAction<string>> }) => {
    return (
        <aside className="bg-custom-accent col-span-1 px-2 py-3 rounded-2xl max-h-fit">
        <h4 className="mt-1 mb-5 px-2 text-xl text-custom-primary font-bold">Category</h4>
        <ul>
            <MenuItem name="Overview" selected={selected} onClick={()=> setSelected("Overview")}/>
            <MenuItem name="Users" selected={selected} onClick={()=> setSelected("Users")} />
            <MenuItem name="Posts" selected={selected} onClick={()=> setSelected("Posts")}/>
            <MenuItem name="Engagement" selected={selected} onClick={()=> setSelected("Engagement")} />
            <MenuItem name="Blockchain" selected={selected} onClick={()=> setSelected("Blockchain")}/>
        </ul>
      </aside>
    )
}

const MenuItem = ({ name, selected, onClick }: { name: string, selected:string, onClick: ()=>void }) => {
  return (
    <li className={`px-2 rounded-xl my-1  ${selected === name ? "bg-custom-background":"hover:bg-custom-background/40"}`}>
      <Button onClick={onClick} variant={"ghost"} className={`p-0 w-full justify-start hover:bg-transparent   ${selected === name ? "":"text-custom-background"}`}>
        {name === "Users" && <Users size={24} />}
        {name === "Posts" && <StickyNote size={24} />}
        {name === "Engagement" && <HandHeart size={24} />}
        {name === "Blockchain" && <GlobeLock size={24} />}
        {name === "Overview" && <PanelsTopLeft size={24} />}
        &nbsp;&nbsp;
      {name}
      </Button>
    </li>
  );
};

export default Dashboard;
