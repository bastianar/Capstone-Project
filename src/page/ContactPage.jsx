import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactPage = () => {
  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  const locations = [
    {
      name: "PESONA SPA BATUNUNGGAL",
      img: "/asset/tv-3/Batununggal.png",
      link: "https://wa.me/6285175057829",
      map: "https://maps.app.goo.gl/jtUtudVPQ4LEH95C6",
    },
    {
      name: "PESONA SPA ANTAPANI",
      img: "/asset/tv-3/Antapani.png",
      link: "https://wa.me/6285179573706",
      map: "https://maps.app.goo.gl/BFz3cYdqbyjtF1eG6",
    },
    {
      name: "PESONA SPA LENGKONG",
      img: "/asset/tv-3/Lengkong.png",
      link: "https://wa.me/6285179647166",
      map: "https://maps.app.goo.gl/mEmCERxhxoZDWagT9",
    },
    {
      name: "PESONA SPA SETIABUDI",
      img: "/asset/tv-3/Setiabudi.png",
      link: "https://wa.me/6285179885286",
      map: "https://maps.app.goo.gl/6pLHbKhyM7CJdNBD6",
    },
    {
      name: "PESONA SPA TKI 3",
      img: "/asset/tv-3/TKI 3.png",
      link: "https://wa.me/6285175254055",
      map: "https://maps.app.goo.gl/sxcTCQQB8WPPRejB8",
    },
    {
      name: "PESONA SPA UJUNG BERUNG",
      img: "/asset/tv-3/Ujung Berung.png",
      link: "https://wa.me/6285187236151",
      map: "https://maps.app.goo.gl/5tLfuXKK3D3yz5cC8",
    },
  ];

  return (
    <div className="font-sans text-center">
      {/* LOCATION SECTION */}
      <div className="pt-30 p-6 bg-[#5e3023] min-h-screen">
        <h1 className="text-3xl sm:text-3xl lg:text-4xl font-bold text-white mb-6" data-aos="fade-up">
          LOCATION
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-12 justify-items-center">
          {locations.map((loc, idx) => (
            <div key={idx} className="flex flex-col items-center text-center w-70 xl:w-100" data-aos="flip-up" data-aos-delay={100 * idx} data-aos-duration="800">
              <a href={loc.map} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity duration-300">
                <img src={loc.img} alt={`Image of ${loc.name}`} className="w-90 h-auto rounded-lg mb-4" loading="lazy" />
              </a>
              <p className="text-2xl xl:text-3xl font-bold text-white">
                <a>{loc.name}</a>
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CONTACT SECTION */}
      <div className="bg-white p-6">
        <h1 className="text-3xl sm:text-3xl lg:text-4xl font-bold text-black mb-6" data-aos="fade-up">
          CONTACT
        </h1>

        <div className="flex flex-col items-center space-y-4 pb-12">
          {locations.map((loc, idx) => (
            <div key={loc.name} className="flex items-center gap-4" data-aos="fade-up" data-aos-delay={150 * idx}>
              <img src="/asset/tv-3/whatsapp (1).png" alt="WhatsApp Icon" className="w-10 h-10" />
              <a
                href={loc.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#5B2C1F] hover:bg-[#4E2419] text-white rounded-xl shadow-md px-6 py-2 text-lg font-medium flex items-center justify-center transition-colors duration-300"
                style={{ width: 280, height: 48, textDecoration: "none" }}
              >
                {loc.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
