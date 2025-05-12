const ServicePage = () => {
  return (
    <>
      <div className="thumbNail w-full display flex justify-center items-center py-10 sm:py-30 lg:py-45">
        <img src="/public/asset/tv-2/Service.png" alt="" className="w-xs sm:w-xl md:w-3xl lg:w-5xl xl:w-7xl" />
      </div>

      <div className="ourService bg-white w-full">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-center py-10 sm:py-15 lg:py-25">
            <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center text-black">OUR SERVICES</h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-4xl text-center font-light mt-4 text-black">
              PESONA Spa provide healing massages for body and circulation.
              <br />
              plus reflexology to relieve stress and revitalize. Enjoy our warm
              <br /> hospitaly and holistic focus on your well-being.
            </p>
          </div>
        </div>
      </div>

      <div className="service-list w-full bg-white">
        <div className="container mx-auto ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-10 px-4 2xl:px-30 py-10 w-full justify-items-center">
            <div className="service-item w-70 xl:w-100 justify-items-center-safe text-center">
              <img src="/public/asset/tv-2/Reflexology.png" alt="" className="w-90 h-auto rounded-lg mb-4" />
              <h2 className="text-2xl xl:text-3xl font-bold text-black">Reflexology</h2>
              <p className="text-lg text-gray-600 mt-2">
                Unlock the healing power within. <br /> Our reflexology treatments target key points on your feet to promote wellness and address various healt concerns.
              </p>
            </div>
            <div className="service-item w-70 xl:w-100 justify-items-center-safe text-center">
              <img src="/public/asset/tv-2/Body Massage.png" alt="" className="w-90 h-auto rounded-lg mb-4" />
              <h2 className="text-2xl xl:text-3xl font-bold text-black">Full Body Massage</h2>
              <p className="text-lg text-gray-600 mt-2">Transform your well-being with our signature full body massage. Let our expert touch release tension and restore harmony to your body & mind.</p>
            </div>
            <div className="service-item w-70 xl:w-100 justify-items-center-safe text-center">
              <img src="/public/asset/tv-2/Body Scrub.png" alt="" className="w-90 h-auto rounded-lg mb-4" />
              <h2 className="text-2xl xl:text-3xl font-bold text-black">Full Body Massage + Scrub</h2>
              <p className="text-lg text-gray-600 mt-2">Treat yourself to the complete spa include: a soothing full body massage followes by a refreshing scrub. Unwind, detoxify, and reveal your skin’s natural beauty.</p>
            </div>
            <div className="service-item w-70 xl:w-100 justify-items-center-safe text-center">
              <img src="/public/asset/tv-2/Kerokan.png" alt="" className="w-90 h-auto rounded-lg mb-4" />
              <h2 className="text-2xl xl:text-3xl font-bold text-black">Coint Therapy</h2>
              <p className="text-lg text-gray-600 mt-2">Discover traditional Coint Therapy (Kerokan) ata PESONA SPA for natural wellness.</p>
            </div>
            <div className="service-item w-70 xl:w-100 justify-items-center-safe text-center">
              <img src="/public/asset/tv-2/Face Massage.png" alt="" className="w-90 h-auto rounded-lg mb-4" />
              <h2 className="text-2xl xl:text-3xl font-bold text-black">Face Therapy</h2>
              <p className="text-lg text-gray-600 mt-2">Experience the rejuvenating and tension-relieving benefits of Face Therapy (Totok Wajah) at PESONA SPA.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicePage;
