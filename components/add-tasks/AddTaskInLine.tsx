import { AnyAaaaRecord } from "dns";
import { Button } from "../ui/button";

const AddtaskInLine = ({ setShowAddTask }: { setShowAddTask: any }) => {
  return (
    <div className="flex gap-3 self-end">
      <Button
        className="bg-gray-300/40 text-gray-950 px-6 hover:bg-gray-300"
        variant={"outline"}
        onClick={() => setShowAddTask(false)}
      >
        Cancel
      </Button>
      <Button className="px-6" type="submit">
        Add Task
      </Button>
    </div>
  );
};

export default AddtaskInLine;
