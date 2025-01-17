import React from 'react'

const SigIn = () => {
   

    
  return (
    <>
   {/* sigin Form in tailwind css */}
   <div className="flex justify-center items-center h-screen bg-gray-200">
    <div className="bg-white p-4 rounded-lg w-1/3">
        <h2 className="text-3xl font-bold mb-10 text-gray-800 text-center ">Sign In</h2>
        <form>
            <div className="mb-6">
                <label htmlFor="username" className="block text-gray-800 font-bold">Username</label>
                <input type="text" name="username" id="username" placeholder="Enter Username" className="w-full p-3 rounded-lg bg-gray-200 mt-2 border-none" />
            </div>
            <div className="mb-6">
                <label htmlFor="email" className="block text-gray-800 font-bold">Email Address</label>
                <input type="email" name="email" id="email" placeholder="Enter Email Address" className="w-full p-3 rounded-lg bg-gray-200 mt-2 border-none" />
            </div>
            <div className="mb-6">
                <label htmlFor="password" className="block text-gray-800 font-bold">Password</label>
                <input type="password" name="password" id="password" placeholder="Enter Password" className="w-full p-3 rounded-lg bg-gray-200 mt-2 border-none" />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-lg">Sign In</button>
            {/* Google button */}
            <button type="submit" className="w-full bg-red-600 text-white p-3 rounded-lg mt-4">Sign In With Google</button>
            {/* Error Message */}
            <div className="text-center mt-4">
                <a href="#" className="text-sm text-blue-500">You have  account already login </a>
            </div>
        

        </form>
    </div>
</div>
    </>
  )
}

export default SigIn