import { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { MdEdit } from "react-icons/md";

const TaskItem = ({ task, removeTask, editTask, completeTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    editTask(task.id, editedText);
    setIsEditing(false);
  };

  return (
    <li className="p-3 border-2 select-none flex items-center rounded-lg my-2">
      <input id={task.text} className="w-[20px] mx-2 h-[20px]" type="checkbox" checked={task.completed} onChange={() => completeTask(task.id)} />
      {isEditing ? (
        <>
          <input className="border-2 pl-2 py-2 font-bold text-gray-500 inline-block w-[80%]  mr-2" type="text" value={editedText} onChange={(e) => setEditedText(e.target.value)} />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <label htmlFor={task.text} className="w-full">
            <span  className="font-bold py-2 text-gray-500 inline-block w-[80%]">
              {task.text}
            </span>
          </label>
          <button className="text-2xl" onClick={handleEdit}>
            <MdEdit />
          </button>
        </>
      )}
      <button className="text-2xl " onClick={() => removeTask(task.id)}>
        <MdDeleteForever />
      </button>
    </li>
  );
};

export default TaskItem;
