import Header from "../components/Header";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />

      {/* Visual divider */}
      <div className="h-24 bg-gradient-to-b from-transparent to-white/50"></div>

      {/* Placeholder content to allow scrolling */}
      <section id="destinations" className="py-20 bg-gray-50 text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-montserrat font-bold text-gray-900 mb-4">Destinations & Packages</h2>
          <p className="text-gray-500">Coming soon...</p>
        </div>
      </section>
    </main>
  );
}
