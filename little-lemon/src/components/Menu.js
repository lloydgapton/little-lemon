import Card from "./Card";

const menuItems = [
    {
        title: "Idli",
        description: "Indian Idli served with Sambar, Ginger & Coconut Chutney.",
        price: 4,
        src: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    }, 
    {
        title: "Dosa",
        description: "Ruthless Ravva Dosa served with Sambar, Ginger & Coconut Chutney.",
        price: 6,
        src: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    }, 
    {
        title: "Bonda",
        description: "Beautiful Bonda served with Mint Chutney.",
        price: 5,
        src: "https://images.unsplash.com/photo-1625242661157-e9e5708ffe5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    }, 
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
    },
    {
        title: "Bajji",
        description: "Bold Bajji helps you make bold moves in your social life.",
        price: 1,
        src: "https://images.unsplash.com/photo-1613764816537-a43baeb559c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
    },
    {
        title: "Cornwich",
        description: "Corn Sandwich with Mayo & Mint Sauce. Merciless & Ruthless with flavor. ",
        price: 3,
        src: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80"
    },
    {
        title: "Ceaser Salad",
        description: "Celestial Ceaser Salad. Chill with Crispy Kroutons.",
        price: 4,
        src: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    }, 
];

const Menu = () => (
    <article id="menu" className="uiArticle centerStage vFlex">

        <section id="menuHeader" className="hEnds">
            <h1 className="uiTitle">Menu</h1>
        </section>

        <section id="menuMain" className="uiGrid-3">

            {menuItems.map((item) => (
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

export default Menu;