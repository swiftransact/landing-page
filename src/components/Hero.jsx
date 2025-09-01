import "react";
import Navbar from "./Navbar";
import PillButton from "./PillButton";
import OrangeCirlce from '/assets/orange-circle.png';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-white bg-gradient-to-br from-black via-gray-900 to-black relative text-center px-4">
      <Navbar />
      {/* Background Blur Effects - Responsive */}
      <div className="absolute rounded-full blur-[120px] opacity-30 z-0 bg-orange-600 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] top-20 left-1/4 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute rounded-full blur-[150px] opacity-20 z-0 bg-purple-600 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] top-10 right-1/2 transform translate-x-1/2"></div>


      <div className="relative z-10 max-w-4xl">
        <p className="text-sm text-gray-400 mb-2 pt-[2rem]">
          Crypto Off-Ramp Platform Built For Everyone
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug">
          Swift Crypto
          <br /> Transactions for
          <br /> the Future of{" "}
          <span className="relative inline-block">
            Finance.
            <div className="absolute bottom-[-1rem] left-[-1.2rem] w-[110%] sm:w-[120%] pointer-events-none">
              <img src={OrangeCirlce} alt="orange-circle" />
            </div>
          </span>
        </h1>

        <div className="mt-8 flex gap-4 flex-wrap justify-center pb-[3rem]">
          <button className="bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-orange-500 transition">
            Learn More
          </button>
          <button className="bg-black border border-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-orange-500 transition">
            <a href="https://t.co/9TNjNaMuod">Join Our Community </a>
          </button>
        </div>

        <div className="flex justify-center">
          <PillButton />
        </div>
      </div>
    </section>
  );
};

export default Hero;
