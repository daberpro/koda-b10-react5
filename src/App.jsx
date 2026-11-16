import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "./pages/HomePage";
import ArticlePage from "./pages/ArticlePage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>
    },
    {
        path: "/:user/:contentTitle",
        element: <ArticlePage/>
    }
])

export default function App() {
    return (
        <RouterProvider router={router}></RouterProvider>
    )
}
