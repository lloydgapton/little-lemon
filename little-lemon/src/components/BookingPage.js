import BookingForm from "./BookingForm";

const BookingPage = (props) => (
    <article className="uiArticle hFlex">
        <img className="uiFormImg" 
        src="https://images.unsplash.com/photo-1551915267-7a7307660501?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" 
        alt="A Reserved Table" />

        <BookingForm 
            availableTimes={props.availableTimes} 
            // setAvailableTimes={props.setAvailableTimes}
        />

    </article>
);

export default BookingPage;