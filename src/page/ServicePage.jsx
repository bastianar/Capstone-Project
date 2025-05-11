const ServicePage = () => {
  return (
    <>
      <div className="thumbNail w-full display flex justify-center items-center py-10 sm:py-30 lg:py-45">
        <img src="/public/asset/tv-2/Service.png" alt="" className="w-xs sm:w-xl md:w-3xl lg:w-5xl xl:w-7xl" />
      </div>

      <div className="ourService bg-white w-full">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-center py-10 sm:py-15 lg:py-25">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center text-black">OUR SERVICES</h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-4xl text-center font-light mt-4 text-black">
              PESONA Spa provide healing massages for body and circulation.
              <br />
              plus reflexology to relieve stress and revitalize. Enjoy our warm 
              <br /> hospitaly and holistic focus on your well-being.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicePage;
