"use client";

import MobileSidebar from "@/components/nav/Mobilesidebar";
import Sidebar from "@/components/nav/Sidebar";
import { api } from "@/convex/_generated/api";
import { useMutation } from "convex/react";
import { useEffect } from "react";

export default function Dashboard() {
  const storeUser = useMutation(api.users.store);

  useEffect(() => {
    storeUser({});
  }, []);

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Sidebar />
      <MobileSidebar />
    </div>
  );
}
