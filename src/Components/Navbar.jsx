import logo from "../Images/ReactLogo.png"

const Navbar = () => {
    return (
        <>
            <nav>
                <img src={logo} alt="logo" />
                <h3>ReactFacts</h3>
                <h4>React Course - Project 1</h4>
            </nav>
        </>
    );
}

export default Navbar;