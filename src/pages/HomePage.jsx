import { useState, useEffect } from "react";
import { CardArticle } from "../components/CardArticle";

export default function HomePage() {
    const url = "http://localhost:5173/data.json";
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
    }, []);

    return (
        <div className="w-full flex items-center justify-start flex-col">
            {authors.map((author) => {
                const article = [];
                data[author].articles.forEach((d, i) => {
                    article.push(
                        <CardArticle
                            avatar={data[author].avatar}
                            key={author + i}
                            author={author}
                            {...d}
                        />,
                    );
                });
                return article;
            })}
        </div>
    );
}
