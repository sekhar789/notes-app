import { Link } from "react-router";
import { PlusIcon, Notebook } from "lucide-react";

const Navbar = () => {
  return (
    <header className="bg-[#24292e] border-b border-[#1b1f23] w-full">
      <div className="mx-auto max-w-6xl p-4 w-full">
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-2">
            <Notebook className="size-8 text-[#2ea44f]" />
            <h1 className="text-3xl font-bold text-white font-hero tracking-tight">Save Here</h1>
          </div>
          <Link to={"/create"} className="btn bg-[#2ea44f] text-white hover:bg-[#22863a] border-none flex items-center gap-2">
            <PlusIcon className="size-5" />
            <span>New Note</span>
          </Link>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
