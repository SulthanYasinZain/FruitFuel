import Gambar from "../assets/Logo.svg";

function About() {
  return (
    <div className="sm:flex sm:justify-evenly items-center mx-6 my-10">
      <div className="border-2 rounded-xl p-3 drop-shadow-lg sm:w-1/3 w-full mb-6 sm:mb-0">
        <img className="w-full h-auto" src={Gambar} alt="Gambar" />
      </div>
      <div className="sm:w-1/2 w-full">
        <h2 className="font-medium text-2xl mb-4">Tentang Kami</h2>
        <p className="leading-relaxed">
          Di FruitFuel, kami percaya bahwa tubuh Anda layak mendapatkan asupan
          terbaik dari buah-buahan segar dan bergizi. Misi kami sederhana:
          menyediakan buah potong premium yang langsung diantarkan kepada Anda,
          memastikan kemudahan tanpa mengorbankan kualitas. Baik untuk camilan
          cepat atau penambah energi sepanjang hari, pilihan buah kami
          menawarkan rasa segar dan manfaat kesehatan dalam setiap gigitan. Kami
          hanya memilih buah terbaik dari petani lokal terpercaya, memastikan
          setiap potongan memenuhi standar tinggi kami akan kesegaran. Semangat
          kami untuk gaya hidup sehat mendorong kami untuk membuat konsumsi buah
          segar menjadi mudah dan menyenangkan bagi semua orang.
        </p>
      </div>
    </div>
  );
}

export default About;
