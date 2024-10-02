import Gambar from "../assets/Logo.svg";

function About() {
  return (
    <div
      id="about"
      className="sm:flex sm:justify-evenly items-center mx-8 sm:mx-6 my-10"
    >
      <div className="bg-background border-2 rounded-xl p-3 drop-shadow-md sm:w-1/3 w-full mb-6 sm:mb-0">
        <img
          draggable="false"
          className="w-full h-auto"
          src={Gambar}
          alt="Gambar"
        />
      </div>
      <div className="sm:w-1/2 w-full">
        <h2 className="font-medium text-3xl mb-4">Tentang Kami</h2>
        <p className="leading-relaxed text-sm">
          Di {""}
          <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent font-bold">
            FruitFuel
          </span>
          , kami percaya bahwa tubuh Anda layak mendapatkan asupan terbaik dari
          buah-buahan segar dan bergizi. Misi kami sederhana: menyediakan buah
          potong premium yang langsung diantarkan kepada Anda, memastikan
          kemudahan tanpa mengorbankan kualitas. Baik untuk camilan cepat atau
          penambah energi sepanjang hari, pilihan buah kami menawarkan rasa
          segar dan manfaat kesehatan dalam setiap gigitan. Kami hanya memilih
          buah terbaik dari petani lokal terpercaya, memastikan setiap potongan
          memenuhi standar tinggi kami akan kesegaran. Semangat kami untuk gaya
          hidup sehat mendorong kami untuk membuat konsumsi buah segar menjadi
          mudah dan menyenangkan bagi semua orang.
        </p>
      </div>
    </div>
  );
}

export default About;
