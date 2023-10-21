// 'use client'
//
// import React from 'react';
// import Link from "next/link";
// import { HandMetal } from 'lucide-react';
//
// const Navbar = () => {
//     return (
//         <aside className="navbar bg-base-100 fixed w-full z-10 top-0">
//             <section className="navbar-start">
//                 <div>
//                     <Link href="/"><HandMetal className="h-8 w-8 text-primary-500" /></Link>;
//                 </div>
//             </section>
//             <section className="navbar-center">
//                 <h2 className="text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">Quiz API</h2>
//             </section>
//             <section className="navbar-end">
//                 <button className="underline text-blue-500 hover:text-black">Admin</button>
//             </section>
//         </aside>
//     );
// };
//
// export default Navbar;

import React from 'react';
import Link from "next/link";
import { HandMetal } from 'lucide-react';

const Navbar = () => {
    return (
        <aside className="navbar bg-base-100 fixed w-full z-10 top-0 flex justify-between items-center p-4 shadow-lg">
            <section className="navbar-start flex items-center space-x-4">
                <div className="flex-shrink-0">
                    <Link href="/">
                        <HandMetal className="h-8 w-8 text-primary-500 hover:text-primary-600 transition-colors duration-200" />
                    </Link>
                </div>
            </section>
            <section className="navbar-center">
                <h2 className="text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">Quiz API</h2>
            </section>
            <section className="navbar-end">
                <button className="text-blue-500 hover:text-black transition-colors duration-200 px-4 py-2 border border-blue-500 rounded-md hover:bg-blue-500 hover:text-white">Login</button>
            </section>
        </aside>
    );
};

export default Navbar;
