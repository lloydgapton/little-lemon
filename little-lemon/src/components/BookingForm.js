import { useState } from "react";

const BookingForm = (props) => {

    const [fullName, setFullName] = useState("");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("None");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    
    const formReset = (e) => {
        e.preventDefault();
        console.log("Form Resetted");
        
        setFullName("");
        setGuests(1);
        setOccasion("None");
        setDate("");
        setTime("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form subimitted");
    };

    return (
        <form onSubmit={handleSubmit} className="uiForm centerStage vFlex">
        <h1 className="uiTitle uiFormTitle">Reserve Table</h1>

        <section className="uiFormElement">
            <label className="uiLabel" htmlFor="fullName">Name</label>
            <input className="uiInput" id="fullName" 
            type="text" placeholder="Full Name" required
            value={fullName} onChange={(e) => {setFullName(e.target.value)}} />
        </section>

        <section className="uiFormElement">
            <label className="uiLabel" htmlFor="res-date">Date</label>
            <input className="uiInput" type="date" id="res-date" required
            value={date} onChange={(e) => (setDate(e.target.value))}/>
        </section>

        <section className="uiFormElement">
            <label className="uiLabel" htmlFor="res-time">Time</label>
            <select className="uiInput" id="res-time" 
            value={time} onChange={(e) => (setTime(e.target.value))}>
                {props.availableTimes.map((t) => (<option>{t}</option>))}
            </select>
        </section>
        
        <section className="uiFormElement">
            <label className="uiLabel" htmlFor="guests">Guests</label>
            <input className="uiInput" id="guests" name="guests" 
            type="number" placeholder="1" min={0} max={10} required
            value={guests} onChange={(e) => {setGuests(e.target.value)}}/> 
        </section>

        <section className="uiFormElement">
            <label className="uiLabel" htmlFor="occasion">Occasion</label>
            <select className="uiInput" id="occasion" name="occasion"
            value={occasion} onSelect={(e) => {setOccasion(e.target.value)}}>
                <option>None</option>
                <option>Birthday</option>
                <option>Anniversary</option>  
            </select> 
        </section>
        
        <section className="uiFormElement">
            <button type="button" className="uiButton" onClick={formReset}>Reset</button>
            <button type="submit" className="uiButton uiFormSubmit">Reserve</button>
        </section>
    </form>
    );
}

export default BookingForm;