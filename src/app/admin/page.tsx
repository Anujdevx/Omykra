"use client";

import { 
  Search, 
  Bell, 
  Plus, 
  CalendarDays, 
  ArrowUpRight, 
  ArrowUp,
  MoreVertical,
  ChevronUp
} from "lucide-react";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from "recharts";

// Mock data for the line chart
const revenueData = [
  { name: "Jan", revenue: 40000 },
  { name: "Feb", revenue: 55000 },
  { name: "Mar", revenue: 48000 },
  { name: "Apr", revenue: 65000 },
  { name: "May", revenue: 58000 },
  { name: "Jun", revenue: 75000 }, // Peak
  { name: "Jul", revenue: 75000 }, // Current
  { name: "Aug", revenue: null },
  { name: "Sep", revenue: null },
  { name: "Oct", revenue: null },
  { name: "Nov", revenue: null },
  { name: "Dec", revenue: null },
];

export default function AdminDashboard() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F3F3F3] p-6 pr-8 w-full max-w-[1204px] mx-auto pb-20">
      
      {/* ── Top Bar ──────────────────────────────────────────────────────── */}
      <div className="flex items-center justify-between h-20 bg-white rounded-[24px] px-6 mb-6 shadow-sm border border-[#D1D1D1] border-opacity-30">
        <div className="flex flex-col">
          <h1 className="text-[16px] font-medium text-black">Dashboard</h1>
          <span className="text-[10px] text-[#808080]">Internal Admin Portal</span>
        </div>

        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="flex items-center gap-2 bg-[#F3F3F3] rounded-[24px] px-3 py-2.5 w-[268px]">
            <Search size={16} className="text-[#808080]" />
            <input 
              type="text" 
              placeholder="Search clients, tickets, or staff..."
              className="bg-transparent border-none outline-none text-[10px] font-medium text-[#808080] w-full"
            />
          </div>

          {/* Profile & Notifications */}
          <div className="flex items-center gap-3">
            <button className="w-8 h-8 rounded-full bg-[#E6E6E6] flex items-center justify-center overflow-hidden" data-cursor="pointer">
               {/* Placeholder for avatar */}
               <div className="w-full h-full bg-[#00AB45] bg-opacity-20 flex items-center justify-center">
                 <span className="text-[#00AB45] text-xs font-bold">SJ</span>
               </div>
            </button>
            <button className="text-[#808080] hover:text-black transition-colors" data-cursor="pointer">
              <Bell size={20} />
            </button>
          </div>

          {/* New Action */}
          <button className="flex items-center gap-2 bg-[#084734] text-white px-4 py-2.5 rounded-[48px] hover:opacity-90 transition-opacity ml-2" data-cursor="pointer">
            <Plus size={16} />
            <span className="text-[16px] font-semibold">New</span>
          </button>
        </div>
      </div>

      {/* ── Header ───────────────────────────────────────────────────────── */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex flex-col gap-1">
          <h2 className="text-[24px] font-medium font-[family-name:var(--font-heading)] text-black">Good Morning, Sarah!</h2>
          <p className="text-[12px] font-medium text-[#808080]">
            Monitor the health of OmyKra, track customer growth, and manage platform operations from one place.
          </p>
        </div>
        <div className="flex items-center gap-3 bg-white px-3 py-2.5 rounded-lg border border-[#D1D1D1] border-opacity-30 shadow-sm">
          <CalendarDays size={16} className="text-black" />
          <span className="text-[12px] font-medium text-black whitespace-pre-line text-right">
            Tuesday{"\n"}14, July 2026
          </span>
        </div>
      </div>

      {/* ── Metric Cards ─────────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {/* Card 1 */}
        <div className="bg-white p-5 rounded-2xl flex flex-col gap-2 shadow-sm border border-[#D1D1D1] border-opacity-30">
          <span className="text-[12px] font-medium text-[#808080]">Total Active Clients</span>
          <span className="text-[24px] font-medium font-[family-name:var(--font-heading)] text-black">42</span>
          <div className="flex items-center gap-1 bg-[rgba(0,171,69,0.05)] text-[#00AB45] px-2.5 py-1 rounded-full self-start mt-1">
            <ArrowUpRight size={12} />
            <span className="text-[10px]">8% compared to last month</span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-5 rounded-2xl flex flex-col gap-2 shadow-sm border border-[#D1D1D1] border-opacity-30">
          <span className="text-[12px] font-medium text-[#808080]">Monthly Recurring Revenue (MRR)</span>
          <span className="text-[24px] font-medium font-[family-name:var(--font-heading)] text-black">£126,400</span>
          <div className="flex items-center gap-1 bg-[rgba(0,171,69,0.05)] text-[#00AB45] px-2.5 py-1 rounded-full self-start mt-1">
            <ArrowUpRight size={12} />
            <span className="text-[10px]">12.8% from last month</span>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-5 rounded-2xl flex flex-col gap-2 shadow-sm border border-[#D1D1D1] border-opacity-30">
          <span className="text-[12px] font-medium text-[#808080]">Open Tickets</span>
          <span className="text-[24px] font-medium font-[family-name:var(--font-heading)] text-black">18</span>
          <div className="flex items-center gap-1 bg-[rgba(239,68,68,0.1)] text-[#EF4444] px-2.5 py-1 rounded-full self-start mt-1">
            <span className="text-[10px]">6 high priority</span>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white p-5 rounded-2xl flex flex-col gap-2 shadow-sm border border-[#D1D1D1] border-opacity-30">
          <span className="text-[12px] font-medium text-[#808080]">Total Active Seats</span>
          <span className="text-[24px] font-medium font-[family-name:var(--font-heading)] text-black">1,248</span>
          <div className="flex items-center gap-1 bg-[rgba(138,56,245,0.1)] text-[#8A38F5] px-2.5 py-1 rounded-full self-start mt-1">
            <span className="text-[10px]">Across all organisations</span>
          </div>
        </div>
      </div>

      {/* ── Main Content Grid ────────────────────────────────────────────── */}
      <div className="flex flex-col lg:flex-row gap-6 mb-6">
        
        {/* Left Column (Charts) */}
        <div className="flex-1 flex flex-col gap-6">
          
          {/* Revenue Chart */}
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-[#D1D1D1] border-opacity-30 flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-[14px] font-medium text-black">Monthly Revenue</h3>
              <div className="flex items-center gap-2 border border-[#D1D1D1] px-2.5 py-1 rounded-lg">
                <span className="text-[12px] text-black">This Year</span>
                <ChevronUp size={14} className="text-[#808080]" />
              </div>
            </div>
            
            <div className="h-[200px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={revenueData} margin={{ top: 5, right: 0, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F3F3F3" />
                  <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fontSize: 10, fill: '#808080' }}
                    dy={10}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fontSize: 10, fill: '#808080' }}
                    tickFormatter={(value) => `£${value/1000}K`}
                  />
                  <Tooltip 
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                    formatter={(value: number) => [`£${value.toLocaleString()}`, "Revenue"]}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="revenue" 
                    stroke="#00AB45" 
                    strokeWidth={2}
                    dot={{ fill: '#00AB45', strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6, fill: '#CEF17B', stroke: '#00AB45' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Open Tickets Table */}
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-[#D1D1D1] border-opacity-30 flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-[14px] font-medium text-black">Open Tickets</h3>
              <div className="flex items-center gap-2 border border-[#D1D1D1] px-2.5 py-1 rounded-lg">
                <span className="text-[12px] text-black">View All</span>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#F3F3F3]">
                    <th className="pb-3 text-[12px] font-medium text-[#808080] font-normal">Ticket</th>
                    <th className="pb-3 text-[12px] font-medium text-[#808080] font-normal">Company</th>
                    <th className="pb-3 text-[12px] font-medium text-[#808080] font-normal">Priority</th>
                    <th className="pb-3 text-[12px] font-medium text-[#808080] font-normal">Assigned To</th>
                  </tr>
                </thead>
                <tbody className="text-[12px]">
                  {[
                    { id: "#234", company: "BrightPay", priority: "High", color: "text-[#EF4444]", bg: "bg-[rgba(239,68,68,0.1)]", assigned: "David K." },
                    { id: "#235", company: "Nova Ltd", priority: "Medium", color: "text-[#F59E0B]", bg: "bg-[rgba(245,158,11,0.1)]", assigned: "Sarah J." },
                    { id: "#236", company: "TechHive", priority: "Low", color: "text-[#00AB45]", bg: "bg-[rgba(0,171,69,0.1)]", assigned: "Unassigned" },
                    { id: "#237", company: "Acme Ltd", priority: "High", color: "text-[#EF4444]", bg: "bg-[rgba(239,68,68,0.1)]", assigned: "Michael T." },
                  ].map((ticket, i) => (
                    <tr key={i} className="border-b border-[#F3F3F3] last:border-0 hover:bg-[#F9F9F9] transition-colors cursor-pointer" data-cursor="pointer">
                      <td className="py-3 font-medium text-black">{ticket.id}</td>
                      <td className="py-3 text-black">{ticket.company}</td>
                      <td className="py-3">
                        <span className={`px-2.5 py-1 rounded-full ${ticket.bg} ${ticket.color}`}>
                          {ticket.priority}
                        </span>
                      </td>
                      <td className="py-3 text-black">{ticket.assigned}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Column (Recents & Summary) */}
        <div className="w-[360px] shrink-0 flex flex-col gap-6">
          
          {/* Recent Activity */}
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-[#D1D1D1] border-opacity-30 flex flex-col flex-1">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-[14px] font-medium text-black">Recent Activity</h3>
              <MoreVertical size={16} className="text-[#808080] cursor-pointer" />
            </div>

            <div className="flex flex-col gap-4">
              {[
                "Acme Ltd upgraded to Growth Plan",
                "Client exceeded AI usage limit",
                "Sarah invited 12 new users",
                "Payment received from TechHive",
                "BrightPay submitted Ticket #248"
              ].map((activity, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#00AB45] mt-1.5 shrink-0" />
                  <p className="text-[12px] text-black leading-relaxed">{activity}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Usage Summary */}
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-[#D1D1D1] border-opacity-30 flex flex-col">
            <h3 className="text-[14px] font-medium text-black mb-4">System Status</h3>
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center">
                <span className="text-[12px] text-[#808080]">API Requests (Today)</span>
                <span className="text-[12px] font-medium text-black">18,430</span>
              </div>
              <div className="w-full h-1.5 bg-[#F3F3F3] rounded-full overflow-hidden">
                <div className="h-full bg-[#00AB45] w-[75%]" />
              </div>
              
              <div className="flex justify-between items-center mt-2">
                <span className="text-[12px] text-[#808080]">Active AI Agents</span>
                <span className="text-[12px] font-medium text-black">91%</span>
              </div>
              <div className="w-full h-1.5 bg-[#F3F3F3] rounded-full overflow-hidden">
                <div className="h-full bg-[#CEF17B] w-[91%]" />
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
