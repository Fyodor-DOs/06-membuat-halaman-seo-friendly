import type { Metadata } from 'next';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import profile from '../../../public/images/profile.png';

export const metadata: Metadata = {
  title: 'Tentang Saya',
  description: 'Halaman tentang saya.',
  openGraph: {
    title: 'Tentang Saya',
    description: 'Halaman tentang saya.',
  },
};

export default function About() {
  return (
    <div className="mt-16 px-8 flex flex-col items-center text-center min-h-screen py-10">
      <header className="mb-6">
        <h1 className="font-bold text-5xl text-zinc-800">Tentang Saya</h1>
      </header>
      <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center mt-6">
        <Image
          src="/images/profile.png"
          alt="Foto Profil"
          width={150}
          height={150}
          className="rounded-full border-4 border-zinc-300 shadow-lg"
        />
        <h2 className="text-2xl font-semibold mt-4 text-zinc-800">Ahmed Fathir Syafaat</h2>
        <p className="mt-2 text-lg text-zinc-600 max-w-lg">
          Saya adalah seorang pengembang web dan mobile dengan minat besar dalam desain UI/UX dan teknologi terbaru.
          Saya selalu berusaha menciptakan pengalaman pengguna yang menarik dan fungsional.
        </p>
      </div>
    </div>
  );
}
