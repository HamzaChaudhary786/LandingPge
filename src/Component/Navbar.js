import React from 'react'

export const Navbar = () => {
    return (
        <>
            <header className="bg-gray-900 text-white ">
                <div className="container flex mx-auto justify-between items-center">
                    <div>Logo Here</div>
                    <button id="toggle" className="md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    <nav id="nav" className="fixed  top-6 bottom-0 -right-full bg-gray-900 w-52 md:auto md:static ">
                        <ul className="md:flex ">
                            <li className=" md:space-x-4 p-4" href="#">Home</li>
                            <li className=" md:space-x-4 p-4" href="#">Menu</li>
                            <li className=" md:space-x-4 p-4" href="#">About</li>
                        </ul>

                    </nav>
                </div>
            </header>
        </>

    )
}

export default Navbar;