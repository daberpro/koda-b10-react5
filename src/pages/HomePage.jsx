import { useState, useEffect } from "react";
import { FaHandsClapping, FaComments, FaRetweet } from "react-icons/fa6"
import { Link } from "react-router";

/**
 *
 * @param {{ image: String, author: String, title: String,claps: Number,comments: Number, publishedDate: String,repost: Number,content: String, tags: String[]}} props
 * @returns
 */
function CardArticle(props) {
    return (
        <Link to={`/${props.author}/${props.title}`}>
            <div className="flex justify-center items-start flex-row w-full h-75 p-4">
                <div className="flex flex-col w-[70%] gap-2">
                    <div className="w-fit items-center flex flex-row gap-2">
                        <div className="w-5 h-5 rounded-full bg-slate-100"></div>
                        <span className="text-slate-100">{props.author}</span>
                        <span className="text-slate-400">{props.publishedDate}</span>
                    </div>
                    <div className="flex flex-col gap-4">
                        <span className="text-white font-bold text-4xl">{props.title}</span>
                        <p className="text-slate-300">
                            {props.content?.substring(0,100) + (props.content?.length > 100 ? "..." : " ")}
                        </p>
                    </div>
                    <div className="w-fit *:text-white flex flex-row gap-4">
                        <div className="flex flex-row gap-2 items-center justify-center">
                            <FaHandsClapping />
                            {props.claps}
                        </div>
                        <div className="flex flex-row gap-2 items-center justify-center">
                            <FaComments />
                            {props.comments}
                        </div>
                        <div className="flex flex-row gap-2 items-center justify-center">
                            <FaRetweet />
                            {props.repost}
                        </div>
                    </div>
                </div>
                <div className="grow justify-center items-center flex">
                    <img src={props.image} className="w-50 h-37.5 rounded-lg"/>
                </div>
            </div>
        </Link>
    );
}

export default function HomePage() {

    const url = "http://localhost:5174/data.json";
    const [data, setData] = useState({});
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        async function getData() {
            const raw = await fetch(url);
            const json = await raw.json();
            setData(json);
            setAuthors(Object.keys(json));
        }
        getData();
    },[]);

    return (
        <div className="w-full flex items-center justify-center flex-col">
            <div className="w-225 flex items-center justify-start flex-col">
                {
                    authors.map((author) => {
                        const article = [];
                        data[author].forEach((d,i) => {
                            article.push(
                                <CardArticle key={author + i} author={author} {...d} />
                            );
                        });
                        return article;
                    })
                }
            </div>
        </div>
    );
}
