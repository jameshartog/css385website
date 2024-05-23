import React from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
} from "./NavbarElements";

const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars />

                <NavMenu>
                    <NavLink to="/" tabIndex={1}>
                        Home
                    </NavLink>
                    <NavLink to="/documents" tabIndex={2}>
                        Documents
                    </NavLink>
                    <NavLink to="/credits" tabIndex={3}>
                        Credits
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;