import { useState } from "react";
import Navbar from "../components/Navbar";

export default function Waitlist() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Replace this with your backend or API (Airtable, Firebase, etc.)
    console.log("Waitlist data:", formData);

    setSubmitted(true);
    setFormData({ name: "", email: "", location: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white flex flex-col items-center justify-center px-6 py-12">
      <Navbar/>
      <div className="max-w-lg w-full text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text">
          Join the <span className="text-orange-500">Swiftransact</span> Waitlist
        </h1>
        <p className="text-gray-400 mb-8">
          Be among the first to experience seamless crypto payments in your local currency
        </p>

        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="bg-gray-800/40 backdrop-blur-md p-6 rounded-2xl shadow-lg space-y-5 border border-gray-700"
          >
            <div>
              <label htmlFor="name" className="block text-left mb-2 text-sm">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none text-white"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-left mb-2 text-sm">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none text-white"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="location" className="block text-left mb-2 text-sm">
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none text-white"
                placeholder="Port Harcourt, Nigeria"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 font-semibold rounded-lg bg-white text-black hover:bg-orange-500 transition-all duration-200 cursor-pointer"
            >
              Join Waitlist
            </button>
          </form>
        ) : (
          <div className="bg-gray-800/40 p-6 rounded-2xl border border-gray-700">
            <h2 className="text-2xl font-semibold mb-3 text-indigo-400">
              Thank you for joining! 🎉
            </h2>
            <p className="text-gray-400">
              You’ll be among the first to get access when we launch.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
