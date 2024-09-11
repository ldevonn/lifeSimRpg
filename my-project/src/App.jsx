import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import LandingPage from "./components/landingPage/LandingPage.jsx";
import Layout from "./routes/Layout.jsx";
import GameMain from "./components/gameMain/GameMain.jsx";
import CareerApply from "./components/Careers/CareerApply.jsx";

const router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            { path: '/', element: <LandingPage/> },
            { path: '/main', element: <GameMain/>},
            { path: '/jobs/apply', element: <CareerApply/>}
        ]
    }
])

function App() {
    return (
        <RouterProvider router={router}/>
    )
}

export default App