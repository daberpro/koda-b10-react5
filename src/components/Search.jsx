import { NavLink } from "react-router";

export default function Search(props) {
    function onSubmit(e) {
        e.preventDefault();
        if (props.hasOwnProperty("eventFn")) {
            props.eventFn(e.target?.query?.value);
        }
    }

    return (
        <form
            onSubmit={onSubmit}
            className="w-full px-4 py-10 flex items-center flex-row justify-between"
        >
            <input
                defaultValue={props.defaultValue || ""}
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
    );
}
