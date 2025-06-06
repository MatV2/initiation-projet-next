"use client";
import { useState } from "react";
import Link from "next/link";

export default function RegisterPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (form.password !== form.confirmPassword) {
      setError("Les mots de passe ne correspondent pas.");
      return;
    }
    setLoading(true);
    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    setLoading(false);
    if (!res.ok) {
      setError(data.message || "Erreur lors de l'inscription.");
    } else {
      setSuccess("Inscription réussie ! Vous pouvez vous connecter.");
      setForm({ name: "", email: "", password: "", confirmPassword: "" });
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black px-4">
      <div className="w-full max-w-md bg-gray-900 rounded-xl shadow-lg p-8 border border-gray-800">
        <h1 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-red-600 to-blue-600 text-transparent bg-clip-text">
          Créer un compte
        </h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-300 mb-1" htmlFor="name">Nom</label>
            <input
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-1" htmlFor="email">Email</label>
            <input
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-1" htmlFor="password">Mot de passe</label>
            <input
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
              type="password"
              id="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              minLength={6}
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-1" htmlFor="confirmPassword">Confirmer le mot de passe</label>
            <input
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              required
              minLength={6}
            />
          </div>
          {error && <div className="text-red-500 text-sm text-center">{error}</div>}
          {success && <div className="text-green-500 text-sm text-center">{success}</div>}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-red-600 to-blue-600 text-white font-bold py-2 rounded-lg transition duration-300 hover:from-red-700 hover:to-blue-700 disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "Inscription..." : "S'inscrire"}
          </button>
        </form>
        <p className="text-gray-400 text-sm mt-4 text-center">
          Déjà un compte ?{' '}
          <Link href="/login" className="text-blue-400 hover:underline">Se connecter</Link>
        </p>
      </div>
    </main>
  );
} 