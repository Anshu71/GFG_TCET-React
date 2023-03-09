import React from 'react'

export default function AboutUs() {
  return (
    <div id="about" className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto">
            <h1 className="md:text-4xl text-2xl font-medium title-font text-gray-900 mb-12 text-center">About Us</h1>

            <div className="xl:w-1/2 lg:w-2/4 w-full mx-auto">
                <div className="h-full bg-gray-100 p-8 rounded-2xl hover:shadow-green-300 hover:shadow-lg">
                <a className="inline-flex items-center">
                    <img alt="testimonial" src="Images/gfg logo.png" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
                    <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-900 md:text-2xl text-lg">About GFG:</span>
                    </span>
                </a>
                <p className="leading-relaxed mb-3 text-justify md:text-xl text-sm">GeeksforGeeks is the best platform for people who are searching for useful articles dedicated to programming and technical related stuff. The platform provides you access to all types of training materials, from programming problems to practice for entrance exams, from basic to premium courses.  It is a excellent platform which allows users to share their knowledge through the contribution option. Besides these, GeeksforGeeks offers numerous coding events, campus programs, Internship opportunites and Giveaways for free to all individuals.</p>
                </div>
            </div>

            <br></br>

            <div className="xl:w-1/2 lg:w-2/4 w-full mx-auto">
                <div className="h-full bg-gray-100 p-8 rounded-2xl hover:shadow-green-300 hover:shadow-lg">
                <a className="inline-flex items-center">
                    <img alt="testimonial" src="Images/gfg tcet logo.jpg" className="md:w-12 md:h-12 w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"/>
                    <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-900 md:text-2xl text-lg">About GFG-TCET</span>
                    </span>
                </a>
                <p className="leading-relaxed mb-3 text-justify md:text-xl text-sm">The TCET's Student Chapter of GeeksforGeeks is a rapidly expanding community that focuses on knowledge exchange in a peer-to-peer learning environment and helps in building efficient and optimised solutions for real-world problems in accordance with the most recent technical trends. Our goal is to make students the best technologists and professionals possible who are prepared to work in the industry. We are here to offer the students with an access to variety of contests, events and webinars on coding, job placement and other resources that will help them in the long run.</p>
                </div>
            </div>
        </div>
    </div>
  )
}
