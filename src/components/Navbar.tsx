import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Amazing 3D</Link>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/about" className="hover:text-gray-300">About</Link>
          <Link to="/projects" className="hover:text-gray-300">Projects</Link>
          <Link to="/contact" className="hover:text-gray-300">Contact</Link>
        </div>
        <div className="md:hidden">
          <Menu className="w-6 h-6 cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;