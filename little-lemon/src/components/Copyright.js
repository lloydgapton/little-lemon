import Logo from "../assets/Logo.svg";

const Copyright = () => {
    
    const d = new Date()
    const updated = "Updated Mar 6, 2023";

    return (
        <>
            <img src={Logo} alt="Logo" />
            <section id="copyright" className="centerStage">
                Copyright &copy; Little Lemon {d.getFullYear()}.&nbsp;
                <span className="uiSecondary">{updated}</span>
            </section>
        </>
    )
};

export default Copyright;