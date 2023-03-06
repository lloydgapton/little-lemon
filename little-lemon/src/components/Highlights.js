import { Link } from "react-router-dom";
import Card from "./Card";

const specialItems = [
    {
        title: "Noodles",
        description: "Authentic Norwegian Noodles served with spicy sauce.",
        price: 9,
        src: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
    }, 
    {
        title: "Fried Rice",
        description: "Fresh Fried Rice topped with spring onions & Schezwan sauce.",
        price: 13,
        src: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1925&q=80"
    }, 
    {
        title: "Samosa",
        description: "Delicous Samosas. An absolute way to credit someone special.",
        price: 2,
        src: "https://images.unsplash.com/photo-1566222499048-9538f86d4675?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1435&q=80"
    }
];

const Highlights = () => (
    <article id="specials" className="uiArticle centerStage vFlex">

        <section id="specialsHeader" className="hEnds">
            <h1 className="uiTitle">Specials</h1>
            <Link to="/menu" className="uiButton">Online Menu</Link>
        </section>

        <section id="specialsMain" className="uiGrid-3">

            {specialItems.map((item) => (
                <Card 
                title={item.title} 
                price={item.price} 
                src={item.src} 
                description={item.description}
                />
            ))}

        </section>
    </article>
);

export default Highlights;