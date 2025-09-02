import { Link } from "react-router";
import { PlusIcon } from "lucide-react";

const Navbar = () => {
  return (
    <header className="bg-[#24292e] border-b border-[#1b1f23]">
      <div className="mx-auto max-w-6xl p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-white font-hero tracking-tight">Save Here </h1>
          <div className="flex items-center gap-4">
            <Link to={"/create"} className="btn bg-[#2ea44f] text-white hover:bg-[#22863a] border-none">
              <PlusIcon className="size-5" />
              <span>New Note</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
