import { useState } from "react";

const d = new Date();
const currentDate = (d.getFullYear() + "-" + (d.getMonth() + 1) + '-' + d.getDate());
const nextMonthDate = (d.getFullYear() + "-" + (d.getMonth() + 2) + '-' + d.getDate());

const Booking = () => {

    const [fullName, setFullName] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState(0);
    const [occasion, setOccasion] = useState("Birthday");

    const formReset = (e) => {
        e.preventDefault();
        console.log("Form Resetted");
    
        setFullName("");
        setGuests(0);
        setOccasion("None");
        setDate("");
        setTime("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form subimitted");
    };

    return (
    <form onSubmit={handleSubmit}
    style={{display: "grid", maxWidth: "200px", gap: "20px"}}>
        
        <h1 className="uiTitle uiFormTitle">Reserve Table</h1>

        <section className="uiFormElement">
            <label className="uiLabel" htmlFor="fullName">Name</label>
            <input className="uiInput" id="fullName" 
            type="text" placeholder="Full Name" required
            value={fullName} onChange={(e) => {setFullName(e.target.value)}} />
        </section>

        <label for="res-date">Choose date</label>
        <input type="date" id="res-date" 
        value={date} onChange={(e) => (setDate(e.target.value))}/>

        <label for="res-time">Choose time</label>
        <select id="res-time" 
        value={time} onChange={(e) => (setTime(e.target.value))}>
            <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
            <option>22:00</option>
        </select>
       
        <label for="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" 
        value={guests} onChange={(e) => (setGuests(e.target.value))}/>
        
        <label for="occasion">Occasion</label>
        <select id="occasion"
        value={occasion} onChange={(e) => (setOccasion(e.target.value))}>
            <option>Birthday</option>
            <option>Anniversary</option>
        </select>

        <input type="submit" value="Make Your reservation" />
        <input type="button" value="Reset" />

    </form>
    );

};

export default Booking;