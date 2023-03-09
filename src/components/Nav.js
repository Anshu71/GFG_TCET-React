import React from 'react';

export default function Nav() {
  return (
    <div>
        <nav class="bg-white shadow-lg">
        <div class="max-w-7xl mx-auto px-4"> 
        {/* <!-- max-w-7xl to perfectly fit it in the display form left side and right side--> */}
            <div class="flex justify-between">
                <div class="flex space-x-7">
                    <div>
                        {/* <!-- Website Logo --> */}
                        <a href="home.html" class="flex items-center py-4 px-2">
                            <img src="Images/gfg-gg-logo.svg" alt="Logo" class="h-10 w-10 mr-2"/>
                            <span class="font-sans text-black text-2xl">GeeksforGeeks</span>
                        </a>
                    </div>
                </div>
                {/* <!-- Navbar items --> */}
                <div class="hidden md:flex items-center space-x-3 font-sans text-xl">
                    <a href="#home" class="py-2 px-2 text-black rounded-lg hover:bg-green-400 transition duration-300">Home</a>
                    <a href="#about" class="py-2 px-2 text-black rounded-lg hover:bg-green-500 hover:text-white transition duration-300">AboutUs</a>
                    <a href="#events" class="py-2 px-2 text-black rounded-lg hover:bg-green-500 hover:text-white transition duration-300">Events</a>
                    <a href="#team" class="py-2 px-2 text-black rounded-lg hover:bg-green-500 hover:text-white transition duration-300">Team</a>
                    <a href="#contact" class="py-2 px-2 text-black rounded-lg hover:bg-green-500 hover:text-white transition duration-300">Contact Us</a>
                </div>
            </div>
        </div>

    </nav>
    <hr></hr>
    <hr></hr>
    </div>
  )
}