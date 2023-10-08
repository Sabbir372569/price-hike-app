import { AiOutlineMenu } from 'react-icons/ai';
import  { RxCross2 } from 'react-icons/rx';
import Link from '../Link/Link'
import { useState } from 'react';
const Navber = () => {

    const[open, setOpen] = useState(false)

    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '/dashboard', name: 'Dashboard' },
    ];

    return (
        <nav className='text-black p-6 bg-amber-300'>
            <div className='text-2xl md:hidden' onClick={() => setOpen(!open)}>
                {
                    // open === true ? 'open' : 'close'
                   open === true ? <RxCross2></RxCross2> : <AiOutlineMenu></AiOutlineMenu>
                }
            </div>
            {/* navber hide/show korar technic
            
             <ul className={
                `md:flex absolute duration-1000 ${open ? '' : 'hidden'} bg-amber-300 px-6 shadow-lg`
            }>

            ${open ? '' : 'hidden'}            option-01
            ${open ? 'top-10' : 'top-60'}      option-02
            ${open ? 'top-16' : '-top-60'}     option-03
            
            */}
            <ul className={
                `md:flex duration-1000 absolute md:static
                 ${open ? 'top-14' : '-top-60'}
                 bg-amber-300 px-6 `
            }>
                {
                    routes.map(route => <Link key={routes.id} route={route}></Link>)
                }                   
            </ul>
        </nav>
    );
};

export default Navber;