import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function Stats() {
  const stats = [
    {
      value: "80+",
      label: "Waitlisted Users",
    },
    {
      value: "100K+",
      label: "Transaction Volume (USD)",
    },
    {
      value: "99%",
      label: "Customer Satisfaction Rate",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What currencies can I make payments with?",
      answer: "You can make payments with multiple crpto currencies including USDC, USDT, BTC, ETH, and more.",
    },
    {
      question: "How long does it take for my crypto payment to be completed?",
      answer: "Your crypto payment is completed almost instantly. Typically, it only takes a few minutes for the transaction to be completed.",
    },
    {
      question: "Do I need a KYC to make crypto payments?",
      answer: "Yes you need a KYC to be able to make crypto payments.",
    },
    {
      question: "Is there a transaction limt?",
      answer: "Yes, there are minimum and maximum limits per transaction, which vary depending on your KYC and payment method used.",
    },
    {
      question: "Is Swiftransact secure?",
      answer: "Absolutely. Swiftransact uses bank-grade encryption, real-time monitoring, and multi-layered security protocols to protect your transactions and data.",
    },
    {
      question: "Are there any fees for using Swiftransact?",
      answer: "We charge minimal fees for processing transactions, which are transparently displayed before you confirm any transaction.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <section className="bg-black text-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Side */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Numbers are <br className="hidden md:block" />
              telling our story
            </h2>
            <p className="text-gray-400 text-sm max-w-md">
              In the world of crypto, numbers shape the narrative. 
              Market caps define dominance, block confirmations validate trust 
              and hash rates reveal network strength. 
              Each digit tells a tale of value, security 
              and the relentless march of decentralization.
            </p>
          </div>

          {/* Stat Box */}
          <div className="relative">
            {/* Glow Background */}
            <div className="absolute -inset-2 rounded-xl bg-purple-500 blur-2xl opacity-30" />

            <div className="relative bg-gradient-to-b from-[#1e1e2f] to-[#0a0a0f] rounded-xl overflow-hidden divide-y divide-[#2b2b3a] backdrop-blur-md border border-zinc-800">
              {stats.map((stat, index) => (
                <div key={index} className="px-8 py-6">
                  <h3 className="text-3xl font-bold mb-1">{stat.value}</h3>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-black text-white py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-center text-gray-400 text-sm mb-10 uppercase tracking-wide">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`border rounded-lg overflow-hidden transition-all duration-300 ${
                    isOpen
                      ? "border-purple-500 shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                      : "border-zinc-700"
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className={`w-full flex justify-between items-center px-6 py-4 text-left font-medium transition-colors duration-300 ${
                      isOpen ? "bg-zinc-900" : "bg-zinc-950 hover:bg-zinc-900"
                    }`}
                  >
                    {faq.question}
                    {isOpen ? (
                      <FaMinus className="text-gray-400" />
                    ) : (
                      <FaPlus className="text-gray-400" />
                    )}
                  </button>

                  <div
                    className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${
                      isOpen ? "max-h-40 py-4" : "max-h-0 py-0"
                    }`}
                  >
                    <p className="text-sm text-gray-400">{faq.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
