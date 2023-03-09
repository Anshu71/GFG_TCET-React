import React from 'react'

export default function Events() {
  return (
    <div id="events" class="text-gray-600 body-font">
      <hr></hr>
        <div class="container px-5 py-12 mx-auto">
            <div class="flex flex-col text-center w-full mb-20">
                <h1 class="text-4xl font-medium title-font mb-4 text-black hover:cursor-pointer">Upcoming Events</h1>
            </div>
          <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">

            <div class="p-4 md:w-1/2 sm:mb-0 mb-6 hover:drop-shadow-2xl hover:shadow-green-300">
              <div class="rounded-lg h-64 overflow-hidden ">
                <img alt="content" class="object-cover object-center h-full w-full " src="Images/Google_Hack.png"/>
              </div>
              <h2 class="text-xl font-medium title-font text-gray-900 mt-5">Solving for India Hackathon</h2>
              <p class="text-base leading-relaxed mt-2">GeeksforGeeks is collaborating with Google Cloud and AMD for the very first time to bring to you a Pan-India Hackathon.
                100 colleges from all across India will be participating in this Hackathon.</p>
              <button class="flex mx-auto mt-6 text-black bg-white border-0 py-2 px-5 focus:outline-none hover:bg-green-500 hover:text-white rounded drop-shadow-2xl"><a target="_blank" href="https://bit.ly/gfghackathon" class="">Register</a></button>
            </div>
      
            <div class="p-4 md:w-1/2 sm:mb-0 mb-6 hover:drop-shadow-2xl">
              <div class="rounded-lg h-64 overflow-hidden">
                <img alt="content" class="object-cover object-center h-full w-full" src="Images/UN1.png"/>
              </div>
              <h2 class="text-xl font-medium title-font text-gray-900 mt-5">On The Way</h2>
              <p class="text-base leading-relaxed mt-2">Hey Geeks, Stay Tuned for more Contests & Events !!!</p>
              <button class="flex mx-auto mt-6 text-black bg-white border-0 py-2 px-5 focus:outline-none hover:bg-green-500 hover:text-white rounded drop-shadow-2xl">On the Way</button>
            </div>
          </div>
        </div>
    </div>
  )
}
