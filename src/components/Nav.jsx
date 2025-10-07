import {headerLogo} from '../assets/images';
import {hamburger} from '../assets/icons'; //Hamburger refers to 3 horizontal lines like used for more options part
import { navLinks } from '../constants';

const Nav = () => {
  return (
    <header className='padding-x py-10 absolute z-10 w-full '>
        <nav className=' flex justify-between items-center max-container  '> 
            <a href='/'>
                <img 
                    src={ headerLogo}
                    alt='logo'
                    height={29}
                    width={130}
                />
            </a>
            <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'> {/*It will be hidden for mobile devices and hamburger will be visible then */}
               {navLinks.map((items)=>(
                <li key={items.label}>
                    <a
                        href={items.href}
                        className='fonts-montserrat leading-normal text-lg text-s text-slate-gray '
                    >
                        {items.label}
                    </a>
                </li>
               ))}
            </ul>

            <div className='hidden max-lg:block'> {/*Initially it will be hidden but only visible for mobile devices when navbar becomes hidden*/}
                <img 
                    src={hamburger} 
                    alt='Hamburger'
                    width={25}
                    height={25}
                />
            </div>
        </nav>
    </header>
  )
}

export default Nav