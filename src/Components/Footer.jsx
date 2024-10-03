import Instagram from "../assets/Instagram.webp";
import Whatsapp from "../assets/whatsapp.png";

function Footer() {
  return (
    <footer className="bg-text w-screen h-1/2 text-background">
      <div className="mx-6 p-2 py-8 sm:flex gap-10">
        <div>
          <h1 className="font-bold">Kantor Kami</h1>
          <p className="text-sm sm:w-[300px]">
            Universitas Pembangunan Nasional "Veteran" Jakarta, Jalan RS.
            Fatmawati Raya, Pd. Labu, Kec. Cilandak, Kota Jakarta Selatan,
            Daerah Khusus Ibukota Jakarta 12450
          </p>
        </div>

        <div className="mt-4 sm:mt-0">
          <h1 className="font-bold mb-2">Sosial Media Kami</h1>
          <div className="flex gap-2">
            <a href="https://instagram.com/fruitfuel.co">
              <img width="35px" src={Instagram} alt="Logo Instagram" />
            </a>
            <a href="https://instagram.com/fruitfuel.co">
              <img width="35px" src={Whatsapp} alt="Logo Instagram" />
            </a>
          </div>
        </div>
      </div>
      <p className="text-center text-sm py-5">
        &copy; 2024 FruitFuel. Designed By Yasin
      </p>
    </footer>
  );
}

export default Footer;
