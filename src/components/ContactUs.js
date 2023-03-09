import React from 'react'

export default function ContactUs() {
  return (
    <div id="contact" class="text-gray-600 body-font relative ">
        <hr></hr>
        <hr></hr>
        <form name="contact" method="POST" data-netlify="true">
            <div class="container px-5 py-8 mx-auto">
                <div class="flex flex-col text-center w-full mb-12">
                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Us</h1>
                <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Please share your view here.</p>
                </div>
                <div class="lg:w-1/2 md:w-2/3 mx-auto">
                <div class="flex flex-wrap -m-2">
                    <div class="p-2 w-1/2">
                    <div class="relative">
                        <label htmlFor="name" class="leading-7 text-sm text-gray-600">Name</label>
                        <input type="text" id="name" name="name" required="required" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    </div>
                    </div>
                    <div class="p-2 w-1/2">
                    <div class="relative">
                        <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                        <input type="email" id="email" name="email" required="required" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    </div>
                    </div>
                    <div class="p-2 w-1/2">
                    <div class="relative">
                        <label for="number" class="leading-7 text-sm text-gray-600">Number</label>
                        <input type="tel" id="number" name="number" required="required" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    </div>
                    </div>
                    <div class="p-2 w-1/2">
                    <div class="relative">
                        <label for="college" class="leading-7 text-sm text-gray-600">College</label>
                        <input type="text" id="college" name="college" required="required" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    </div>
                    </div>
                    <div class="p-2 w-full">
                    <div class="relative">
                        <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
                        <textarea id="message" name="message" required="required" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                    </div>
                    </div>
                    <div data-netlify-recaptcha="true"></div>
                    <div class="p-2 w-full">
                    <button class="flex mx-auto mt-6 text-black bg-white border-0 py-2 px-5 focus:outline-none hover:bg-green-500 hover:text-white rounded drop-shadow-2xl" type="submit">Submit</button>
                    </div>
                </div>
            </div>
            </div>
        </form>
    </div>
  )
}
