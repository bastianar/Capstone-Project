const Footer = () => {
  return (
    <>
      <div className="footer grid grid-rows-3 sm:grid-cols-3 sm:py-35 md:py-40 w-full gap-5 h-150 sm:h-80 lg:h-80  bg-[#5e3023] items-center justify-around">
        <div className="text-content flex flex-col items-center  text-white">
          <h1 className="text-2xl lg:text-4xl font-semibold">PESONA</h1>
          <h3 className="text-lg lg:text-2xl font-light">Family Spa & Reflexology</h3>
        </div>
        <div className="text-content flex flex-col items-center text-white">
          <h1 className="text-2xl lg:text-3xl font-base text-center mb-5">Our Branch:</h1>
          <ul className="grid grid-rows-2 sm:grid-cols-2 text-[15px] md:text-lg font-light items-center gap-2 underline decoration-1 ">
            <li>
              <a href="#">Pesona Spa Batununggal</a>
            </li>
            <li>
              <a href="#">Pesona Spa Antapani</a>
            </li>
            <li>
              <a href="#">Pesona Spa Lengkong</a>
            </li>
            <li>
              <a href="#">Pesona Spa Setiabudi</a>
            </li>
            <li>
              <a href="#">Pesona Spa TKI 3</a>
            </li>
            <li>
              <a href="#">Pesona Spa Ujung Berung</a>
            </li>
          </ul>
        </div>
        <div className="text-content flex flex-col items-center text-white">
          <p className="text-2xl lg:text-3xl font-base text-center mb-5">Social Media:</p>
          <div className="flex gap-5">
            <a href="https://www.instagram.com/pesonaspa.id/">
              <img src="../asset/instagram.png" alt="" className="w-6 lg:w-8 " />
            </a>
            <a href="https://www.tiktok.com/@pesonafamilyspa">
              <img src="../asset/tiktok.png" alt="" className="w-6 lg:w-8 " />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
