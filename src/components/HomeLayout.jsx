import { Outlet } from "react-router";
import Search from "./Search";

export default function HomeLayout() {
    return (
        <div className="w-full flex items-center justify-center flex-col">
            <div className="w-225 flex justify-start items-center flex-col">
                <Search />
                <Outlet/>
            </div>
        </div>
    );
}
