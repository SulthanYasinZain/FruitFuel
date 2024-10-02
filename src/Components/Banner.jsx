import mango from "../assets/mango.webp";

function Banner() {
  return (
    <div id="home" className="w-full h-78 sm:h-full ">
      <div className="flex flex-col sm:flex-row-reverse justify-around items-center h-max sm:h-1/2 mx-6 py-10 gap-4 sm:mx-14 sm:py-14">
        <img
          draggable="false"
          className="w-44 sm:w-[500px] order-1 sm:order-none"
          src={mango}
          alt="Gambar Mangga"
        />
        <div className="text-center sm:text-left order-2 sm:order-none">
          <h1 className="text-5xl sm:text-8xl font-medium drop-shadow-sm mt-1 ">
            Fuel Your Day with{" "}
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Freshness
            </span>
          </h1>
          <p className="text-lg sm:text-2xl drop-shadow-sm mt-2">
            Nikmati kesegaran buah potong terbaik setiap hari, langsung dari
            alam ke tanganmu!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
