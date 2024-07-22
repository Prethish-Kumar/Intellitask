"use client";

import MobileSidebar from "@/components/nav/Mobilesidebar";
import Sidebar from "@/components/nav/Sidebar";
import TodoList from "@/components/todos/todolist";
import { api } from "@/convex/_generated/api";
import { useMutation } from "convex/react";
import { useEffect } from "react";

export default function Dashboard() {
  const storeUser = useMutation(api.users.store);

  useEffect(() => {
    storeUser({});
  }, []);

  return (
    <div>
      <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        <Sidebar />
        <div className="flex flex-col">
          <MobileSidebar />
          <main className="flex flex-1 flex-col gap-4 p-4 lg:px-8">
            <TodoList />
          </main>
        </div>
      </div>
    </div>
  );
}
