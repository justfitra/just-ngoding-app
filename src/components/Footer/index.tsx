const Footer = () => {
  return (
    <>
      <footer>
        <div className="bg-white text-gray-800 py-10">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <h2 className="text-xl font-bold">Just Ngoding</h2>
                <p className="text-gray-400">
                  Membantu Anda memulai project Anda
                </p>
              </div>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-white">
                  Home
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  Services
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  Contact
                </a>
              </div>
            </div>
            <div className="mt-8 text-center text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Just Ngoding. All rights
              reserved.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
