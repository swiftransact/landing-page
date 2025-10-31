import {useState} from 'react';
import {Menu, X} from 'lucide-react';
import Logo from '/assets/Logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-black text-white py-3 px-4 md:px-8 shadow-sm fixed top-4 left-1/2 transform -translate-x-1/2 z-50 rounded-xl w-[95%] max-w-6xl backdrop-blur-sm border border-neutral-700">
    <div className="flex items-center justify-between">
     
      <div className="hidden md:flex space-x-6">
        <a href="/" className="hover:text-orange-500">Home</a>
        <a href="#" className="hover:text-orange-500">About</a>
        <a href="https://t.co/ND2Qj1wBFP" className="hover:text-orange-500">Blog</a>
      </div>

      <div className="text-2xl font-bold">
        <img
          src={Logo}
          alt="Logo"
          className="h-6 md:h-7 mx-auto"
        />
      </div>

      <div className="hidden md:flex items-center space-x-4">
        <a href="/waitlist" className="hover:text-orange-500 text-sm">Join Waitlist</a>
        <button className="bg-white text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-orange-500 transition">
          <a href="https://t.co/9TNjNaMuod">Join Community </a>
        </button>
      </div>

      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
    </div>

    {/* Mobile Dropdown Menu */}
    {isOpen && (
      <div className="md:hidden mt-4 space-y-3">
        <a href="#" className="block text-sm">Home</a>
        <a href="#" className="block text-sm">About</a>
        <a href="https://t.co/ND2Qj1wBFP" className="block text-sm">Blog</a>
        <a href="#" className="block text-sm">Join Waitlist</a>
        <button className="w-full bg-white text-black py-2 rounded-md text-sm font-medium">
           <a href="https://t.co/9TNjNaMuod">Join Community </a>
        </button>
      </div>
    )}
  </nav>
  )
}

export default Navbar;