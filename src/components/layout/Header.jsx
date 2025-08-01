import Logo from "../../../public/assets/app-logo.png";

const Header = () => (
  <header className="bg-blue-600 text-white shadow-md px-6">
    <div className="container flex items-center">
      <img src={Logo} alt="SkyFinder Logo" className="h-28 w-28" />
      <h1 className="text-4xl font-bold">Sky Finder</h1>
    </div>
  </header>
);

export default Header;
