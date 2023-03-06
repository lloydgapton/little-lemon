import { Link } from "react-router-dom";

const About = () => (
    <article id="about" className="uiArticle centerStage">

        <section id="aboutText" className="uiArticleText centerStage vFlex">
            <h1 className="uiTitle">Little Lemon</h1>
            <h4 className="uiSubtitle">Stavanger</h4>
            <p className="uiPara">
                Little Lemon is a family-owned restaurant. <br></br>
                We serve over 5k customers everyday. <br></br>
                Our goal is simple. Deliver mouth-watering dishes at the minimum cost.
                <br></br>
                <br></br>
                On Saturdays, you will get your first dish for free.
                <br></br>
            </p>
            <Link to="/reservations" className="navLink">Reserve a Table</Link>
        </section>

        <img id="aboutImg" className="uiArticleImg" src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" alt="Food" />
        
    </article>
);

export default About;