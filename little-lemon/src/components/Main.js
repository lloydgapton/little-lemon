import { Route, Routes } from "react-router-dom";
import { useReducer} from "react";
import HomePage from "./HomePage";
import About from "./About";
import Menu from "./Menu";
import BookingPage from "./BookingPage";
import Login from "./Login";
import Order from "./Order";

const Main = () => { 
    
    const availableTimes = [
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00"
    ];

    const updateTimes = () => {
        return availableTimes;
    };

    const initializeTimes = () => {
        return [
            "17:00",
            "18:00",
            "19:00",
            "20:00",
            "21:00",
            "22:00"
        ];
    };

    return (
    <main>
        <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/home" element={<HomePage />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/menu" element={<Menu />}></Route>

            <Route path="/reservations" element={

            <BookingPage 
                availableTimes={availableTimes} 
            />
            
            }></Route>

            <Route path="/order" element={<Order />}></Route>
            <Route path="/login" element={<Login />}></Route>
        </Routes>
    </main>
    );
};

export default Main;