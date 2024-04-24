import { Outlet } from "react-router-dom";
import Heade from "../components/Heade";

const MainLayout = () => {
    return (
        <div>
            <Heade></Heade>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;