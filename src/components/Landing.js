import React from 'react'

export default function Landing () {
  const background = {
    borderRadius: "0% 0% 35% 35%",
    backgroundImage: "url('Images/about.gif')",
    backgroundRepeat: "no-repeat",
    height: "auto",
    maxWidth: "100%",
    maxHeight: "100%"
  }
  return (
    <div id="home" class='text-gray-600 body-font'>
        <div style={background}>
            <div class=" container mx-auto flex flex-col px-5 pt-8 pb-10 justify-center items-center" style={{borderRadius: "0% 0% 35% 35%"}}>
                <img class="lg:w-2/12 md:w-3/12 w-3/12 mb-10 object-cover object-center rounded" alt="hero" src="Images/gfg logo tran.png"/>
                <div class="w-full md:w-4/5 flex flex-col mb-16 items-center text-center font-[open-sauce]">
                    <h1 class="title-font lg:text-6xl md:text-4xl text-2xl "><b class="text-green-800">GeeksforGeeks </b> <b class="text-black">Student Chapter</b></h1>
                    <br></br>
                    <p class="leading-relaxed lg:text-[30px] md:text-xl text-sm lg:mb-24 md:mb-14" style={{color: "#435653"}}>Thakur College of Engineering and Technology</p>
                </div>
            </div>
        </div>
    </div>
  )
}
