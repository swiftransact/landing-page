import { FaBolt, FaShieldAlt, FaHeadphones, FaThLarge } from "react-icons/fa";

export default function Features() {
  const features = [
    {
      title: "Speed",
      icon: <FaBolt size={24} />,
      description:
      "With Swiftransact, your money doesn’t wait in line. We’ve built a lightning-fast system that gets your transfers from “sent” to “received” in moments. Whether you’re paying a supplier across town or sending funds across borders. No delays. No stress. Just instant movement.",
    },
    {
      title: "Security",
      icon: <FaShieldAlt size={24} />,
      description:
      "Every transaction on Swiftransact is wrapped in bank-grade encryption and blockchain-backed trust. We don’t just move your money, we guard it. Your data stays private, your funds stay protected, and you stay in control.",
    },
    {
      title: "24/7 Support",
      icon: <FaHeadphones size={24} />,
      description:
  "We know money moves at all hours and so do we. Our dedicated support team is always here, day or night, to answer questions, fix issues, and make sure you’re never left waiting. No bots. Just real people who care.",    
},
    {
      title: "Interface",
      icon: <FaThLarge size={24} />,
      description:
      "We’ve stripped away the clutter to give you a clean, intuitive dashboard that’s as easy to use as it is powerful. Send, track, and manage your transactions without the guesswork, so you can focus on what matters most.",
    },
  ];

  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-lg text-gray-400 font-medium">Why Use Swiftransact</h2>
        <p className="text-sm text-gray-300 mt-2">
          Swiftransact offers secure, fast, and easy crypto transactions.
          <br />
          Spend your crypto effortlessly without p2p.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className={`rounded-lg p-6 bg-zinc-900/50 text-left backdrop-blur-sm hover:bg-zinc-800/70 transition-all ${
              feature.title ===  "border border-zinc-700" 
            }`}
          >
            <div className="text-orange-500 mb-4">{feature.icon}</div>
            <h3 className="text-white font-semibold text-lg mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-300">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
