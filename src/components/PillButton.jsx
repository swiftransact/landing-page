
const PillButton = () => {
  return (
    <div className="rounded-full p-[2px] bg-gradient-to-r from-gray-700 via-white to-orange-500 inline-block shadow-md">
    <div className="flex items-center gap-2 bg-black rounded-full px-5 py-2 text-white text-sm md:text-base">
      <span className="font-semibold">Swifttransact Web App</span>
      <span className="text-gray-400">|</span>
      <button className="text-gray-400 hover:text-orange-500 transition flex items-center gap-1 cursor-pointer">
        Join waitlist
        <span className="text-white">&rarr;</span>
      </button>
    </div>
  </div>

  );
}

export default PillButton;