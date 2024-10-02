import logo from "../assets/Logo.svg";

function NavBar() {
  return (
    <nav className="fixed w-full z-50 backdrop-blur bg-white/70">
      <ul className="flex justify-between items-center  mx-6  sm:mx-10 p-2 ">
        <img
          draggable="false"
          className="w-24 sm:w-32"
          src={logo}
          alt="logo FruiFuel"
        />
        <div className="flex items-center gap-3  ">
          <li className="">
            <a href="#home" className="text-xs sm:text-lg">
              Home
            </a>
          </li>
          <li className="">
            <a href="#product" className="text-xs sm:text-lg">
              Produk
            </a>
          </li>
          <li className="">
            <a href="#about" className="text-xs sm:text-lg">
              Tentang
            </a>
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default NavBar;
