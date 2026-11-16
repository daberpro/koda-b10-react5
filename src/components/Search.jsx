import { NavLink } from "react-router";

export default function Search() {
    return (
        <>
            <form className="w-full px-4 py-10 flex items-center flex-row justify-between">
                <input
                    placeholder="Search Article"
                    className="border border-white text-white grow rounded-full py-2 px-4 outline-0"
                    type="text"
                    name="query"
                />
                <button
                    className="text-white px-6 py-2 cursor-pointer"
                    type="submit"
                >
                    Search
                </button>
            </form>
            <div className="w-full items-center flex gap-4 border-b border-b-white/25">
                <NavLink to={"/"} className={({ isActive })=> "text-white p-4 " + (isActive? "border-b border-b-white/50" : "")}>For You</NavLink>
                <NavLink to={"/feature"} className={({ isActive })=> "text-white p-4 " + (isActive? "border-b border-b-white/50" : "")}>Feature</NavLink>
            </div>
        </>
    );
}
