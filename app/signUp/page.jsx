// app/components/SignupForm.jsx
"use client";
import { useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function SignupForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
  
    const handleSignUp = async (e) => {
      e.preventDefault();
      setMessage("");  
  
      const { error } = await supabase.auth.signUp({name, email, password });
  
      if (error) {
        setMessage("Error: " + error.message);
      } else {
        setMessage("Sign up successful! Check your email for confirmation.");
      }
    };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSignUp} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

        {message && <p className="text-red-500 text-sm mb-4">{message}</p>}

        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-1 px-4 py-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 px-4 py-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mt-1 px-4 py-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <button type="submit"
          className="w-full py-2 bg-green-700 text-white font-semibold rounded hover:bg-green-900 focus:outline-none"> Sign Up
        </button>
      </form>
    </div>
  );
}
