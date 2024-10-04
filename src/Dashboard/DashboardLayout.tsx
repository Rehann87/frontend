import React from 'react'
import { MdElectricBolt } from "react-icons/md";
import { TbDeviceMobileMessage } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

type Props = {}

const DashboardLayout = (props: Props) => {
  return (
    <div className="flex h-screen bg-slate-500">
      <main className="flex flex-col mt-[70px] items-center w-full ">
        <div className="flex gap-5 w-full max-w-3xl mb-5">
          <div className="bg-white p-5 rounded-lg shadow-md backdrop-filter backdrop-blur-sm flex-1">
            <p className="text-gray-600">Balance Overview</p>
            <h1 className="text-3xl">₹ 21,847.00</h1>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-md backdrop-filter backdrop-blur-2xl flex-1">
            <p className="text-gray-600">Expense & Income</p>
            <div className="flex justify-between">
              <div className="text-green-600">+ ₹ 15,000 <br /> Total Income This Month</div>
              <div className="text-red-600">- ₹ 12,000 <br /> Total Expense This Month</div>
            </div>
          </div>
        </div>

        <div className="bg-slate-200 border-2 rounded-lg shadow-md w-full max-w-3xl p-5">
          <h2 className="text-start">Saving Plan</h2>
          <h1 className="text-2xl text-start">2 Saving Plans</h1>
          <div className="flex justify-around bg-white rounded-lg p-5 mt-3 shadow-md">
            <div className="flex items-center">
              <p className="mr-2">Petrol</p> 
              <span>₹ 1,000</span>
            </div>
            <div className="flex items-center">
              <MdElectricBolt className="mr-2" />
              <p>Electricity Bill</p>
            </div>
            <div className="flex items-center">
              <TbDeviceMobileMessage className="mr-2" />
              <p>Mobile Recharge</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default DashboardLayout