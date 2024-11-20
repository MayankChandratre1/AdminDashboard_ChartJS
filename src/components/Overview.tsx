import React from 'react'
import { DashboardData } from './Dashboard'
import UserBarChart from './Charts/UserBarChart';
import PostsChart from './Charts/PostsChart';
import EngagementChart from './Charts/EngagementChart';
import BlockChainChart from './Charts/BlockChainChart';


const Overview = ({data}:{
    data: DashboardData,
}) => {
  

  return (
    <div className=''>
        <div className='border-b-2 pb-3 mb-3 w-[50%]'>
            <h1 className='text-2xl font-bold text-custom-accent my-2'>Users</h1>
            <UserBarChart data={data} isAllTime isDaily={false} />
        </div>
        <div className='border-b-2 pb-3 mb-3 w-[50%]'>
            <h1 className='text-2xl font-bold text-custom-accent my-2'>Posts</h1>
            <PostsChart data={data} isAllTime isDaily={false} />
        </div>
        <div className='border-b-2 pb-3 mb-3 w-[50%]'>
            <h1 className='text-2xl font-bold text-custom-accent my-2'>Engagement</h1>
            <EngagementChart data={data} isAllTime isDaily={false} />
        </div>
        <div className='border-b-2 pb-3 mb-3 w-[50%]'>
            <h1 className='text-2xl font-bold text-custom-accent my-2'>Blockchain</h1>
            <BlockChainChart data={data} isAllTime isDaily={false} />
        </div>
    </div>
  )
}

export default Overview