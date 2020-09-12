import React, { useState } from 'react'

function ProjectCollaborators() {
    const [username, setUsername] = useState("Hello World")
    const [description, setDescription] = useState("Hello World Description")
    function setname(name) {
        setUsername(name)
    }
    function setdesc(desc) {
        setDescription(desc)
    }
    const stylename = { backgroundImage: 'url("https://images.unsplash.com/photo-1522093537031-3ee69e6b1746?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a634781c01d2dd529412c2d1e2224ec0&auto=format&fit=crop&w=2098&q=80")' }
    return (
        <div class="font-sans leading-tight  bg-grey-lighter p-8">
            <div class="max-w-6xl mx-auto bg-white rounded-lg  shadow-lg">
                <div class="bg-cover h-40" style={stylename}></div>
                <div class="border-b px-4 pb-6">
                    <div class="text-center sm:text-left sm:flex mb-4">
                        <img class="h-32 w-32 rounded-full border-4 border-white -mt-16 mr-4" src="https://randomuser.me/api/portraits/women/21.jpg" alt="" />
                        <div class="py-2">
                            <h3 class="font-bold text-2xl mb-1">{username}</h3>
                            <div class="inline-flex text-grey-dark sm:flex items-center">

                                <svg className="w-6 h-6 p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                {description}
                            </div>
                        </div>
                    </div>

                </div>
                <div class="px-4 py-4">
                    <div class="flex items-center text-grey-darker mb-4">
                    <svg className="w-6 h-6 p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                        <span><strong class="text-black">Collaborators</strong> </span>
                    </div>
                    <div class="flex">
                        <div class="flex flex-row-reverse justify-end mr-2">
                            <img class="border-2 border-white rounded-full h-10 w-10" src="https://randomuser.me/api/portraits/men/32.jpg" alt="" />
                            <img class="border-2 border-white rounded-full h-10 w-10 -mr-2" src="https://randomuser.me/api/portraits/women/31.jpg" alt="" />
                            <img class="border-2 border-white rounded-full h-10 w-10 -mr-2" src="https://randomuser.me/api/portraits/men/33.jpg" alt="" />
                            <img class="border-2 border-white rounded-full h-10 w-10 -mr-2" src="https://randomuser.me/api/portraits/women/32.jpg" alt="" />
                            <img class="border-2 border-white rounded-full h-10 w-10 -mr-2" src="https://randomuser.me/api/portraits/men/44.jpg" alt="" />
                            <img class="border-2 border-white rounded-full h-10 w-10 -mr-2" src="https://randomuser.me/api/portraits/women/42.jpg" alt="" />
                        </div>
                        <span class="flex items-center justify-center text-sm text-grey-darker font-semibold border-2 border-grey-light rounded-full h-10 w-10">+3</span>
                    </div>

                </div>


            </div>
        </div>
    )


}

export default ProjectCollaborators