"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Users, 
  Ticket, 
  ShieldCheck, 
  Banknote, 
  LineChart, 
  Settings, 
  HelpCircle, 
  User, 
  LogOut, 
  Moon,
  PanelLeftClose,
  Star
} from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const mainMenuItems = [
    { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { name: "Clients", href: "/admin/clients", icon: Users },
    { name: "Tickets", href: "/admin/tickets", icon: Ticket },
    { name: "Staff and Access", href: "/admin/staff", icon: ShieldCheck },
    { name: "Revenue and Cost", href: "/admin/revenue", icon: Banknote },
    { name: "Usage Analytics", href: "/admin/analytics", icon: LineChart },
  ];

  const otherToolsItems = [
    { name: "Settings", href: "/admin/settings", icon: Settings },
    { name: "Help Center", href: "/admin/help", icon: HelpCircle },
    { name: "Profile", href: "/admin/profile", icon: User },
    { name: "Log Out", href: "#", icon: LogOut },
  ];

  return (
    <div className="flex min-h-screen bg-[#F3F3F3] font-sans overflow-hidden">
      
      {/* ── Sidebar ──────────────────────────────────────────────────────── */}
      <div className="w-[236px] bg-white border-r border-[#D1D1D1] flex flex-col justify-between py-9 px-6 shrink-0 h-screen sticky top-0 overflow-y-auto">
        
        <div className="flex flex-col gap-12">
          {/* Logo & Collapse */}
          <div className="flex items-center justify-between">
            <Link href="/" data-cursor="pointer">
              <Image 
                src="/images/admin-logo.png" 
                alt="OmyKra Admin" 
                width={114} 
                height={36} 
                className="object-contain"
              />
            </Link>
            <button className="text-[#808080] hover:text-primary transition-colors" data-cursor="pointer">
              <PanelLeftClose size={20} />
            </button>
          </div>

          {/* Menus */}
          <div className="flex flex-col gap-12">
            
            {/* Main Menu */}
            <div className="flex flex-col gap-3">
              <span className="text-[10px] font-normal tracking-wider text-[#808080]">MAIN MENU</span>
              <nav className="flex flex-col gap-2">
                {mainMenuItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      data-cursor="pointer"
                      className={`flex items-center gap-2 px-3 py-2.5 rounded-lg transition-colors ${
                        isActive 
                          ? "bg-[rgba(8,71,52,0.1)] text-[#084734]" 
                          : "text-[#808080] hover:bg-[#F3F3F3]"
                      }`}
                    >
                      <item.icon size={18} strokeWidth={isActive ? 2.5 : 2} />
                      <span className="text-[12px] font-medium">{item.name}</span>
                    </Link>
                  );
                })}
              </nav>
            </div>

            <div className="h-px bg-[#D1D1D1] w-full" />

            {/* Other Tools */}
            <div className="flex flex-col gap-3">
              <span className="text-[10px] font-normal tracking-wider text-[#808080]">OTHER TOOLS</span>
              <nav className="flex flex-col gap-2">
                {otherToolsItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    data-cursor="pointer"
                    className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-[#808080] hover:bg-[#F3F3F3] transition-colors"
                  >
                    <item.icon size={18} strokeWidth={2} />
                    <span className="text-[12px] font-medium">{item.name}</span>
                  </Link>
                ))}
                
                {/* Dark Mode Toggle */}
                <div className="flex items-center justify-between px-3 py-2.5 mt-2">
                  <div className="flex items-center gap-2 text-[#808080]">
                    <Moon size={18} />
                    <span className="text-[12px] font-medium">Dark Mode</span>
                  </div>
                  <button className="w-9 h-4 bg-[#E6E6E6] rounded-full relative cursor-pointer" data-cursor="pointer">
                    <div className="w-3 h-3 bg-white rounded-full absolute left-1 top-0.5 shadow-sm" />
                  </button>
                </div>
              </nav>
            </div>

          </div>
        </div>

        {/* Premium Upgrade */}
        <div className="mt-12 p-5 bg-[rgba(0,171,69,0.05)] rounded-2xl flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <Star size={16} className="text-black" />
            <span className="text-[12px] font-medium text-black">Upgrade to</span>
            <span className="bg-[#00AB45] text-white text-[12px] font-medium px-2 py-0.5 rounded">Premium</span>
          </div>
          <p className="text-[10px] text-[#333333] leading-relaxed">
            Your premium account will expire in 18 days
          </p>
          <button className="w-full py-2 bg-[#084734] text-white text-[12px] font-medium rounded-[48px] hover:opacity-90 transition-opacity" data-cursor="pointer">
            Upgrade Now
          </button>
        </div>

      </div>

      {/* ── Main Content ─────────────────────────────────────────────────── */}
      <div className="flex-1 overflow-y-auto">
        {children}
      </div>

    </div>
  );
}
