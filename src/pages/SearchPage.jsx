import { useState } from "react";
import Search from "../components/Search";
import { useEffect } from "react";
import { CardArticle } from "../components/CardArticle";
import { useNavigate, useSearchParams } from "react-router";

export default function SearchPage() {
    const url = "http://localhost:5173/data.json";
    const [data, setData] = useState({});
    const [filter, setFilter] = useState([]);
    const [authors, setAuthors] = useState([]);
    const [params, setParams] = useSearchParams();

    useEffect(() => {
        async function getData() {
            const raw = await fetch(url);
            const json = await raw.json();
            setData(json);
            setAuthors(Object.keys(json));

            let articles = [];
            Object.keys(json).forEach((author) => {
                articles = [
                    ...articles,
                    ...json[author].articles.map((d) => ({
                        ...d,
                        metadata: { name: author, ...json[author] },
                    })),
                ];
            });

            const q = params.get("q");
            if (q) {
                setFilter(
                    articles.filter((article) => {
                        return article.title
                            .toLowerCase()
                            .includes(q.toLowerCase());
                    }),
                );
            } else {
                setFilter(articles);
            }

        }
        getData();
    }, []);

    useEffect(() =>{
        let articles = [];
        authors.forEach((author) => {
            articles = [
                ...articles,
                ...data[author].articles.map((d) => ({
                    ...d,
                    metadata: { name: author, ...data[author] },
                })),
            ];
        });

        const q = params.get("q");
        if (q) {
            setFilter(
                articles.filter((article) => {
                    return article.title
                        .toLowerCase()
                        .includes(q.toLowerCase());
                }),
            );
        } else {
            setFilter(articles);
        }
    }, [params]);


    const navigate = useNavigate();

    function search(query) {
        if (!query) {
            navigate("/");
            return;
        }
        setParams({ q: query });
    }

    return (
        <div className="w-full flex items-center justify-center flex-col">
            <div className="w-225 flex justify-start items-center flex-col">
                <Search defaultValue={params.get("q")} eventFn={search} />
                {filter.map((article,i) => {
                    return (
                        <CardArticle
                            avatar={article.metadata.avatar}
                            key={article.metadata.name + i}
                            author={article.metadata.name}
                            {...article}
                        />
                    );
                })}
            </div>
        </div>
    );
}
