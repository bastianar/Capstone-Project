import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  let navigate = useNavigate();

  const images = ["../asset/tv-1/Group 17.png", "../asset/tv-1/Group 18.png", "../asset/tv-1/Group 19.png", "../asset/tv-1/Group 20.png"];
  const [current, setCurrent] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // ganti gambar setiap 3 detik

    return () => clearInterval(interval); // bersihkan interval saat komponen unmount
  }, [images.length]);
  return (
    <>
      {/* Hero Section */}
      <div className="hero h-screen grid gap-10 lg:grid-cols-2  items-center justify-items-center mx-auto">
        <div className="mt-20 lg:mt-50">
          <div>
            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-6xl xl:text-8xl font-semibold">PESONA</h1>
            <h3 className="text-2xl sm:text-3xl md:text-5xl lg:text-3xl xl:text-5xl font-semibold">Family Spa & Reflexology</h3>
            <p className="text-lg sm:text-2xl lg:text-lg xl:text-2xl font-normal mt-10">
              Open everyday: 10:00 - 22:00 WIB
              <br />
              <span className="text-lg sm:text-2xl lg:text-lg xl:text-2xl font-normal">Last Reservation: 20:00 WIB</span>
            </p>
          </div>
        </div>
        <div className="wrapper h-120 sm:h-auto w-80 sm:w-120 mt:20 lg:mt-50 overflow-hidden">
          <div className="hero-image my[-100px]">
            <img src="../asset/tv-1/Mask group.png" className="w-200" />
            <img src="../asset/tv-1/Mask group (2).png" className="w-200" />
            <img src="../asset/tv-1/Mask group (1).png" className="w-200" />
          </div>
        </div>
      </div>
      {/* Hero Section */}

      {/* Text Section */}
      <div className="text-section mt-32 py-10 w-full h-120 bg-white flex flex-col items-center justify-center">
        <div
          className="text-content flex flex-col items-center justify-center text-black"
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-delay="0"
          data-aos-duration="600"
          data-aos-easing="ease-in-out"
          data-aos-mirror="false"
          data-aos-once="false"
          data-aos-anchor-placement="bottom-bottom"
        >
          <p className="text-2xl md:text-4xl font-extrabold text-center mb-5">
            A COZY SPOT TO REFRESH YOUR BODY,
            <br /> RELAX YOUR MIND, AND RECHARGE YOUR VIBE
          </p>
          <p className="text-base md:text-2xl font-light text-center">
            Inspired by traditional massage, Pesona Spa brings you a chill and unforgettable experience,
            <br />
            from therapy and family massages to reflexology and safe car.
          </p>
        </div>
        <div
          className="bg-[#5e3023] w-30 h-max mt-15 mb-10 rounded-lg hover:bg-[#88574c] transition-all duration-200"
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-delay="100"
          data-aos-duration="600"
          data-aos-easing="ease-in-out"
          data-aos-mirror="false"
          data-aos-once="false"
          data-aos-anchor-placement="top-bottom"
        >
          <button type="button" className="p-[10px] text-xl w-30 cursor-pointer" onClick={() => navigate("/service")}>
            Read more
          </button>
        </div>
      </div>
      {/* Text Section */}

      {/* Slide Show */}
      <div className="slideshow mt-25 py-10 h-120 flex flex-col  items-center justify-center w-ful">
        <div
          className="slideshow-container flex justify-center items-center overflow-hidden rounded-4xl"
          data-aos="flip-down"
          data-aos-offset="100"
          data-aos-delay="100"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
          data-aos-mirror="false"
          data-aos-once="false"
          data-aos-anchor-placement="top-bottom"
        >
          <img src={images[current]} className="w-80 h-80 sm:w-150 md:w-180 lg:w-250 lg:h-120 bg-top" alt={`Slide ${current + 1}`} />
        </div>

        <div className="dots w-full rounded-b-full flex gap-3 justify-center mt-5">
          {images.map((_, index) => (
            <span key={index} className={`dot w-4 h-4 rounded-full cursor-pointer transition-all duration-300 border-3 ${index === current ? "bg-[#5e3023]" : "bg-white"}`} onClick={() => setCurrent(index)}></span>
          ))}
        </div>
      </div>
      {/* Slide Show */}

      {/* Text Section */}
      <div className="text-section mt-32 py-10 w-full h-120 bg-white flex flex-col items-center justify-center">
        <div
          className="text-content flex flex-col items-center justify-center text-black"
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-delay="100"
          data-aos-duration="600"
          data-aos-easing="ease-in-out"
          data-aos-mirror="false"
          data-aos-once="false"
          data-aos-anchor-placement="top-bottom"
        >
          <p className="text-2xl md:text-4xl font-extrabold text-center mb-5">RESERVATION TREATMENT</p>
          <p className="text-base md:text-2xl font-light text-center">
            PESONA Family Spa & Reflexology offers
            <br />
            uplifting experiences to resore body and soul.
          </p>
        </div>
        <div
          className="bg-[#5e3023] mt-15 w-30 h-max mb-10 rounded-lg hover:bg-[#88574c] transition-all duration-200"
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-delay="100"
          data-aos-duration="600"
          data-aos-easing="ease-in-out"
          data-aos-mirror="false"
          data-aos-once="false"
          data-aos-anchor-placement="top-bottom"
        >
          <button type="button" className="p-[10px] text-lg w-30 cursor-pointer">
            Reservation
          </button>
        </div>
      </div>
      {/* Text Section */}
    </>
  );
};

export default HomePage;
