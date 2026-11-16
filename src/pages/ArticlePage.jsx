import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import { FaHandsClapping, FaComments, FaRetweet } from "react-icons/fa6";

export default function ArticlePage() {
    const { author, contentTitle } = useParams();
    const url = "http://localhost:5174/data.json";
    const [data, setData] = useState({});

    useEffect(() => {
        async function getData() {
            const raw = await fetch(url);
            const json = await raw.json();
            setData(json[author].articles.find(({ title }) => title === contentTitle));
        }
        getData();
    }, []);

    return (
        <div className="w-full min-h-screen max-h-fit flex items-center flex-col">
            <div className="w-255 pt-20 items-start justify-start gap-4 flex flex-col">
                <div className="flex flex-row justify-start items-center py-4 gap-4">
                    {data.tags?.map((data, i) => {
                        return (
                            <div className="px-1 border border-white/25 rounded-4xl text-white flex flex-row justify-between items-center" key={`tags-${i}`}>
                                <div className="h-[30px] px-2 flex items-center justify-center">{data}</div>
                                <div className="h-[30px] px-2 flex items-center border-l border-l-white/25 justify-center">+</div>
                            </div>
                        );
                    })}
                </div>
                <div className="flex flex-col gap-4">
                    <h1 className="text-5xl text-white font-bold">
                        {data.title}
                    </h1>
                    <div className="w-fit items-center flex flex-row gap-2">
                        <div className="w-10 h-10 rounded-full bg-slate-100"></div>
                        <span className="text-slate-100">{author}</span>
                        <button className="text-white px-4 py-1 rounded-4xl border border-white">
                            Follow
                        </button>
                        <span className="text-slate-200">4 min read</span>
                        <span className="text-slate-400">
                            {data.publishedDate}
                        </span>
                    </div>
                </div>
                <div className="w-full py-4 *:text-white border-y border-white/25 flex flex-row gap-4">
                    <div className="flex flex-row gap-2 items-center justify-center">
                        <FaHandsClapping />
                        {data.claps}
                    </div>
                    <div className="flex flex-row gap-2 items-center justify-center">
                        <FaComments />
                        {data.comments}
                    </div>
                    <div className="flex flex-row gap-2 items-center justify-center">
                        <FaRetweet />
                        {data.repost}
                    </div>
                </div>
                <div className="w-full flex flex-col mt-10">
                    <img src={data.image} alt="" />
                    <p className="text-white py-4">{data.content}</p>
                </div>
            </div>
        </div>
    );
}
