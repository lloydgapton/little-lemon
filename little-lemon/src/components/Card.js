import { Link } from "react-router-dom";

const Card = (props) => (
    <section className="uiCard">

        <img src={props.src} className="uiCardImg" alt={props.title}/>

        <header className="uiCardHeader centerStage hEnds">
            <h1 className="uiCardTitle">{props.title}</h1>
            <span className="uiCardPrice">
                <span className="dollarSign">$</span> 
                {props.price}
            </span>
        </header>

        <p className="uiCardPara">
            {props.description}
        </p>

        <Link to="/order" className="uiButton uiCardLink">Order Online</Link>

    </section>
);

export default Card;