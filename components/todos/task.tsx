import React from "react";
import { Checkbox } from "../ui/checkbox";
import { Doc } from "@/convex/_generated/dataModel";
import { clsx } from "clsx";
import { useToast } from "../ui/use-toast";

const Task = ({
  data,
  handleOnChange,
}: {
  data: Doc<"todos"> | Doc<"subTodos">;
  handleOnChange: any;
}) => {
  return (
    <div>
      <Checkbox
        id={data._id}
        checked={data.isCompleted}
        className={clsx(
          "data-[state=checked]:bg-gray-300 data-[state=checked]:border-gray-300",
          data.isCompleted && "border-gray-400"
        )}
        onCheckedChange={handleOnChange}
      />
      <label
        htmlFor={data._id}
        className={clsx(
          "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ml-2",
          data.isCompleted && "line-through"
        )}
      >
        {data?.taskName}
      </label>
    </div>
  );
};

export default Task;
