'use client'; // Dieser Hinweis macht die Komponente zu einer Client-Komponente

import Image from 'next/image';

export default function Home() {
  const handleClick = () => {
    alert('Button wurde geklickt!');
  };

  return (
    <main className="flex min-h-screen">
      {/* Linke Seite mit Farbverlauf von Hellblau zu Hellgrün */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center bg-gradient-to-r from-blue-300 to-green-300 p-8 transition-all duration-1000 ease-in-out">
        <div className="text-center mb-8">
          {/* Text mit Farbverlauf und benutzerdefinierter Unterstreichung */}
          <h1 className="text-[8rem] font-bold text-white bg-clip-text bg-gradient-to-r from-white to-teal-500 underline">
            Stübi Digital
          </h1>
        </div>

        {/* Button mit Hover-Effekt */}
        <button
          onClick={handleClick}
          className="px-8 py-4 text-lg font-semibold text-white bg-teal-500 rounded-lg shadow-lg hover:bg-teal-600 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-teal-300 transition-transform duration-300 ease-in-out"
        >
          Klick mich!
        </button>
      </div>

      {/* Rechte Seite: Bild */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white">
        <div className="relative w-full h-full max-w-2xl">
          <Image
            src="/OIP.jfif" // Ersetze mit deinem Bildpfad
            alt="Stübi Digital logo or representative image"
            layout="responsive"
            width={1400}
            height={500}
            objectFit="cover"
            quality={75}
          />
        </div>
      </div>
    </main>
  );
}
