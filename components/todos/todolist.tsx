import { api } from "@/convex/_generated/api";
import { useMutation, useQuery } from "convex/react";
import React from "react";
import Task from "./task";
import { useToast } from "../ui/use-toast";
import { Doc } from "@/convex/_generated/dataModel";
import { CircleCheck } from "lucide-react";
import Completedtodos from "./Completedtodos";
import { AddTaskWrapper } from "../add-tasks/Addtaskbutton";

const TodoList = () => {
  const todos = useQuery(api.todos.get) ?? [];
  const completedtodos = useQuery(api.todos.completedTodos) ?? [];
  const inCompletedTodos = useQuery(api.todos.inCompletedTodos) ?? [];

  const { toast } = useToast();

  const checkATodo = useMutation(api.todos.checkATodo);
  const unCheckATodo = useMutation(api.todos.unCheckATodo);

  if (todos === undefined) {
    <p>Loading....</p>;
  }

  const handleOnChangeTodo = (task: Doc<"todos">) => {
    if (task.isCompleted) {
      unCheckATodo({ taskId: task._id });
    } else {
      checkATodo({ taskId: task._id });
      toast({
        title: "✅ Task completed",
        description: "You're a rockstar",
        duration: 3000,
      });
    }
  };

  return (
    <div className="xl:px-40">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold md:text-2xl"> Inbox</h1>
      </div>

      <div className="flex flex-col gap-1 py-4">
        <div className="flex flex-col justify-center">
          {inCompletedTodos.map((task: Doc<"todos">, idx: number) => (
            <Task
              key={task._id}
              data={task}
              handleOnChange={() => handleOnChangeTodo(task)}
            />
          ))}
        </div>

        <AddTaskWrapper />

        <div className="flex flex-col justify-center border-t-2 border-gray-400">
          {completedtodos.map((task, idx) => (
            <Task
              key={task._id}
              data={task}
              handleOnChange={() => handleOnChangeTodo(task)}
            />
          ))}
        </div>

        <Completedtodos total={completedtodos.length} />
      </div>
    </div>
  );
};

export default TodoList;
