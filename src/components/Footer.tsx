import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="mt-10 w-full bg-zinc-800 text-white py-8 text-center">
      <div className="flex flex-col items-center gap-4">
        <p className="text-lg font-semibold italic">“Man is a mystery. It needs to be unraveled.”</p>
        <p className="text-sm text-zinc-400">— Fyodor Dostoevsky</p>
        <div className="h-1 w-24 bg-teal-500 rounded-full"></div>
        <div className="flex gap-6 text-2xl mt-2">
          <a href="https://github.com" target="_blank" className="hover:text-gray-400 transition">
            <FaGithub />
          </a>
          <a href="https://linkedin.com" target="_blank" className="hover:text-blue-400 transition">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com" target="_blank" className="hover:text-blue-300 transition">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" className="hover:text-pink-400 transition">
            <FaInstagram />
          </a>
        </div>
        <p className="text-sm text-zinc-400">© 2025 Ahmed Fathir Syafaat. All rights reserved.</p>
      </div>
    </footer>
  );
}
