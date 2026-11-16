import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "./pages/HomePage";
import ArticlePage from "./pages/ArticlePage";
import HomeLayout from "./components/HomeLayout";
import FeaturePage from "./pages/FeaturePage";
import SearchPage from "./pages/SearchPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        children: [
            {
                path: "/",
                element: <HomePage/>
            },
            {
                path: "feature",
                element: <FeaturePage/>
            }
        ]
    },
    {
        path: "/:author/:contentTitle",
        element: <ArticlePage/>
    },
    {
        path: "/search",
        element: <SearchPage/>
    }
])

export default function App() {
    return (
        <RouterProvider router={router}></RouterProvider>
    )
}
