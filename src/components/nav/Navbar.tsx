const Navbar = () => {
  return (
    <nav className="bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center text-gray-600 font-semibold text-3xl font-sans">
          <img className="h-16 w-20" src="/logo.png" alt="" />
          <a href="/">Smart Library</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
