import { Plus } from "lucide-react";
import React, { useState } from "react";
import AddtaskInLine from "./AddTaskInLine";

export const AddTaskWrapper = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  return showAddTask ? (
    <AddtaskInLine setShowAddTask={setShowAddTask} />
  ) : (
    <AddTaskButton onClick={() => setShowAddTask(true)} />
  );
};
const AddTaskButton = ({ onClick }: { onClick: any }) => {
  return (
    <button className="flex mt-2 flex-1" onClick={onClick}>
      <div className="flex items-center justify-center gap-1 text-center">
        <Plus className="h-4 w-4 text-primary hover:bg-primary hover:rounded-xl hover:text-white" />
        <h3 className="text-base font-light tracking-tight text-foreground/70">
          Add Task
        </h3>
      </div>
    </button>
  );
};

export default AddTaskButton;
