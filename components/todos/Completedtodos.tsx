import { CircleCheck } from "lucide-react";
import React from "react";

const Completedtodos = ({ total }: { total: number }) => {
  return (
    <div>
      <label htmlFor="completedTask" className="flex">
        <CircleCheck className="mr-2" />
        {total} Completed Tasks
      </label>
    </div>
  );
};

export default Completedtodos;
