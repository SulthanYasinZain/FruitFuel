import mango from "../assets/mango.webp";

function Banner() {
  return (
    <div className="w-full h-56 sm:h-1/2">
      <div className="flex justify-around items-center h-max sm:h-1/2 mx-6 py-10 gap-2 sm:mx-8">
        <div>
          <h1 className="text-lg sm:text-8xl font-medium drop-shadow-sm mt-1 ">
            Fuel Your Day with{" "}
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Freshness
            </span>
          </h1>
          <p className="text-[9px] sm:text-3xl drop-shadow-sm mt-1">
            Nikmati kesegaran buah potong terbaik setiap hari, langsung dari
            alam ke tanganmu!
          </p>
          <div className="flex gap-2">
            <button className="text-[9px] sm:text-xs bg-accent rounded p-1.5 mt-3 sm:w-[100px] sm:h-[50px] drop-shadow-md">
              Lihat Produk
            </button>
          </div>
        </div>
        <img className="w-44 sm:w-[500px]" src={mango} alt="Gambar Mangga" />
      </div>
    </div>
  );
}

export default Banner;
