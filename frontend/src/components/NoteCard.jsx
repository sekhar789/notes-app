import { PenSquareIcon, Trash2Icon } from "lucide-react";
import { Link } from "react-router";
import { formatDate } from "../lib/utils";
import api from "../lib/axios";
import toast from "react-hot-toast";

const NoteCard = ({ note, setNotes }) => {
  const handleDelete = async (e, id) => {
    e.preventDefault(); // get rid of the navigation behaviour

    if (!window.confirm("Are you sure you want to delete this note?")) return;

    try {
      await api.delete(`/notes/${id}`);
      setNotes((prev) => prev.filter((note) => note._id !== id)); // get rid of the deleted one
      toast.success("Note deleted successfully");
    } catch (error) {
      console.log("Error in handleDelete", error);
      toast.error("Failed to delete note");
    }
  };

  return (
    <Link
      to={`/note/${note._id}`}
      className="card bg-white border border-[#e0e0e0] rounded-xl shadow-sm hover:shadow-xl hover:scale-[1.03] transition-all duration-300 ease-in-out font-sans"
    >
      <div className="card-body">
        <h3 className="card-title text-gray-900">{note.title}</h3>
        <p className="text-gray-600 line-clamp-3">{note.content}</p>
        <div className="card-actions justify-between items-center mt-4">
          <span className="text-sm text-gray-400">
            {formatDate(new Date(note.createdAt))}
          </span>
          <div className="flex items-center gap-1">
            <PenSquareIcon className="size-4 text-gray-400" />
            <button
              className="btn btn-ghost btn-xs text-white"
              onClick={(e) => handleDelete(e, note._id)}
            >
              <Trash2Icon className="size-4 text-white" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default NoteCard;
