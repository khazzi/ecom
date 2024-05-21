'use client';
import Link from 'next/link';
import CartSideBar from './CartSideBar';
import Nav from './Nav';
import { CgShoppingBag } from 'react-icons/cg';
import { useShoppingCart } from 'use-shopping-cart';

const Header = () => {
    const { cartCount, handleCartClick } = useShoppingCart();
  return (
    <header className='bg-white shadow-lg sticky top-0 py-8 z-40'>
        <div className="container mxauto flex justify-between items-center">
            <Link href='/' className='hover:text-current'>
            <h1 className='text-[26px]'>
                <span className='text-accent'>E</span>Lite_Pro
                </h1>
                </Link>
                <div className='flex items-center gap-[26px]'>
                    <Nav containerStyles="flex gap-[36px]" />
                    <div onClick={() => handleCartClick()} className='relative cursor-pointer'>
                        <CgShoppingBag className='text-[26px]' />
                        <div className='bg-accent w-[18px] h-[18px] absolute -right-1 -bottom-1 rounded-full text-white
                         flex items-center justify-center text-sm font-medium'>
                            {cartCount}
                            </div>
                    </div>
                    <CartSideBar />
                </div>
        </div>
    </header>
  )
}

export default Header