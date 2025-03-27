import Link from 'next/link';
import Image from 'next/image';

export default function Essays() {
  const metadata = {
    title: "Esai | Artikel Teknologi & Rekayasa Perangkat Lunak",
    description: "Baca berbagai esai menarik tentang IT Governance, Rekayasa Perangkat Lunak, dan pola desain dalam pengembangan perangkat lunak.",
    openGraph: {
      url: "https://yourwebsite.com/essays",
      images: ["/images/article1.png", "/images/article2.png", "/images/article3.png"]
    }
  };

  const articles = [
    {
      title: "Kenapa Pola Desain yang Salah Bisa Merusak Seluruh Proyek Perangkat Lunak?",
      date: "13 Maret 2025",
      image: "/images/article1.png",
      link: "https://www.kompasiana.com/afafbahri0203/67d229d3c925c456033688d2/kenapa-pola-desain-yang-salah-bisa-merusak-seluruh-proyek-perangkat-lunak"
    },
    {
      title: "Mengenal IT Governance: Apa, Mengapa, dan Bagaimana Menerapkannya?",
      date: "26 Februari 2025",
      image: "/images/article2.png",
      link: "https://www.kompasiana.com/firna0547/67be84c6c925c404380f1f22/it-governance"
    },
    {
      title: "Pentingnya Rekayasa Perangkat Lunak (RPL) dalam Bidang Teknik Informatika",
      date: "4 Maret 2025",
      image: "/images/article3.png",
      link: "https://www.kompasiana.com/azzahranabila6574/67bd2255ed64156afe611b52/pentingnya-rekayasa-perangkat-lunak-rpl-dalam-bidang-teknik-informatika"
    }
  ];

  return (
    <div className="mt-16 px-8">
      <h1 className="font-bold text-4xl text-zinc-800 mb-6">Esai</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <div key={index} className="border rounded-lg shadow-lg bg-white overflow-hidden">
            <Link href={article.link}>
              <Image
                src={article.image}
                alt={article.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover cursor-pointer"
              />
            </Link>
            <div className="p-4">
              <Link href={article.link}>
                <h2 className="text-xl font-semibold text-zinc-700 hover:text-teal-500 cursor-pointer">{article.title}</h2>
              </Link>
              <p className="text-sm text-zinc-500 mt-3">{article.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
