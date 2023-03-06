import { Link } from "react-router-dom";

const HeroSection = () => (
    <article id="hero" className="uiArticle centerStage">

        <section id="heroText" className="uiArticleText centerStage vFlex">
            <h1 className="uiTitle">Little Lemon</h1>
            <h4 className="uiSubtitle">Stavanger</h4>
            <p className="uiPara">
                One of the Norway's best Restaurant. <br></br>
                "Restaurant of the Year" by Critical Claims.
                <br></br>
            </p>
            <Link to="/reservations" className="navLink">Reserve a Table</Link>
        </section>

        <img id="heroImg" className="uiArticleImg" src="https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="Food" />
        
    </article>
);

export default HeroSection;