import { NavLink, Outlet, useNavigate } from "react-router";
import Search from "./Search";

export default function HomeLayout() {
    const navigate = useNavigate();

    return (
        <div className="w-full flex items-center justify-center flex-col">
            <div className="w-225 flex justify-start items-center flex-col">
                <Search
                    eventFn={(query) => {
                        const params = new URLSearchParams();
                        params.set("q", query);
                        navigate(`/search?${params.toString()}`);
                    }}
                />
                <div className="w-full items-center flex gap-4 border-b border-b-white/25">
                    <NavLink to={"/"} className={({ isActive })=> "text-white p-4 " + (isActive? "border-b border-b-white/50" : "")}>For You</NavLink>
                    <NavLink to={"/feature"} className={({ isActive })=> "text-white p-4 " + (isActive? "border-b border-b-white/50" : "")}>Feature</NavLink>
                </div>
                <Outlet />
            </div>
        </div>
    );
}
