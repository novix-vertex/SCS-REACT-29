import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar-section">
            <h3>Horizon Courts</h3>
            <menu>
                <a class="aboutus" href="#">About Us</a>
                <a href="#">Services</a>
                <a href="#">Coaches</a>
                <a href="#">Events</a>
                <a href="#">Contacts</a>
            </menu>
            <h4>Book Now <i class="ri-arrow-right-up-long-line"></i></h4>
        </nav>
    )
}

export default Navbar