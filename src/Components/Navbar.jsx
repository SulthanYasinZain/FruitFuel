import logo from "../assets/Logo.svg";

function NavBar() {
  return (
    <nav className="fixed w-full">
      <ul className="flex justify-between items-center  mx-6 mt-2 sm:mx-10">
        <img className="w-24 sm:w-32" src={logo} alt="logo FruiFuel" />
        <div className="flex items-center gap-3 mt-1.5 sm:mt-3.5">
          <li className="">
            <a href="#" className="text-xs sm:text-lg">
              Home
            </a>
          </li>
          <li className="">
            <a href="#" className="text-xs sm:text-lg">
              Tentang
            </a>
          </li>
          <li className="">
            <a href="#" className="text-xs sm:text-lg">
              Produk
            </a>
          </li>
          <li className="">
            <a href="#" className="text-xs sm:text-lg">
              Hubungi
            </a>
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default NavBar;
