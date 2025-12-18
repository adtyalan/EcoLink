import { Suspense } from "react";
import { Products } from "../components/products/Products";
import { getAllProducts } from "./actions";
import ProductSkeleton from "@/components/skeletons/ProductSkeleton";
import Link from "next/link";

const Home = async () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center px-4 pt-14 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=80&sat=-10&blend=111827&sat=-50&exp=-10')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/85" />
        <div className="absolute -left-10 -top-10 h-64 w-64 bg-green-500/10 blur-3xl rounded-full" />
        <div className="absolute -right-10 bottom-0 h-80 w-80 bg-blue-500/10 blur-3xl rounded-full" />

        <div className="relative max-w-4xl mx-auto text-center px-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-5 rounded-full bg-white/10 backdrop-blur border border-white/10 text-sm text-white">
            🌿 Ekosistem sirkular • ♻️ Berkelanjutan • 🌏 Dampak nyata
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-300 via-emerald-200 to-blue-300 bg-clip-text text-transparent drop-shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
            Ecolink
          </h1>
          <p className="text-xl md:text-2xl text-[#D7DFE8] mb-10 max-w-3xl mx-auto leading-relaxed">
            Platform penghubung antara penyetor dan pembeli limbah, berbagi makanan sisa,
            dan produk kerajinan ramah lingkungan. Kurasi solusi hijau yang terasa premium
            dari awal Anda membuka halaman.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/limbah"
              className="px-8 py-4 bg-green-500 hover:bg-green-600 rounded-lg font-semibold transition-colors text-black shadow-[0_15px_50px_rgba(34,197,94,0.35)]"
            >
              Mulai Sekarang
            </Link>
            <Link
              href="#products"
              className="px-8 py-4 bg-white/90 text-black hover:bg-white rounded-lg font-semibold transition-colors shadow-[0_15px_40px_rgba(255,255,255,0.25)]"
            >
              Lihat Produk
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Tentang Ecolink
          </h2>
          <p className="text-lg text-[#A1A1A1] text-center leading-relaxed">
            Ecolink adalah platform inovatif yang berperan sebagai{" "}
            <span className="text-green-400 font-semibold">
              penengah antara penyetor dan pembeli limbah
            </span>
            . Kami tidak hanya memfasilitasi perdagangan limbah yang bertanggung
            jawab, tetapi juga menyediakan wadah untuk
            <span className="text-blue-400 font-semibold">
              {" "}
              berbagi makanan sisa
            </span>{" "}
            kepada yang membutuhkan dan menjual
            <span className="text-purple-400 font-semibold">
              produk kerajinan ramah lingkungan
            </span>
            . Bersama-sama, kita ciptakan ekosistem berkelanjutan untuk masa
            depan yang lebih hijau.
          </p>
        </div>
      </section>

      {/* Bento Box - Impact & Features */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Dampak & Fitur
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Impact Stats - Larger boxes */}
            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-green-900/50 to-green-800/30 p-8 rounded-2xl border border-green-700/50">
                <div className="text-5xl font-bold text-green-400 mb-2">
                  2,450kg
                </div>
                <div className="text-lg text-[#A1A1A1]">
                  Total Limbah Diproses
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-900/50 to-blue-800/30 p-8 rounded-2xl border border-blue-700/50">
                <div className="text-5xl font-bold text-blue-400 mb-2">
                  1,830
                </div>
                <div className="text-lg text-[#A1A1A1]">
                  Porsi Makanan Dibagikan
                </div>
              </div>
            </div>

            {/* Features - Vertical stack */}
            <div className="flex flex-col gap-4">
              <div className="bg-[#1A1A1A] p-6 rounded-2xl border border-[#2E2E2E] hover:border-green-500/50 transition-colors">
                <div className="text-2xl mb-2">♻️</div>
                <div className="font-semibold mb-1">Pengelolaan Limbah</div>
                <div className="text-sm text-[#A1A1A1]">
                  Jual beli limbah dengan mudah
                </div>
              </div>
              <div className="bg-[#1A1A1A] p-6 rounded-2xl border border-[#2E2E2E] hover:border-blue-500/50 transition-colors">
                <div className="text-2xl mb-2">🍱</div>
                <div className="font-semibold mb-1">Berbagi Makanan</div>
                <div className="text-sm text-[#A1A1A1]">
                  Bagikan makanan sisa
                </div>
              </div>
              <div className="bg-[#1A1A1A] p-6 rounded-2xl border border-[#2E2E2E] hover:border-purple-500/50 transition-colors">
                <div className="text-2xl mb-2">🎨</div>
                <div className="font-semibold mb-1">Eco Store</div>
                <div className="text-sm text-[#A1A1A1]">
                  Produk kerajinan ramah lingkungan
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Products Section */}
      <section id="products" className="py-20 px-4">
        <Suspense
          fallback={<ProductSkeleton extraClassname="" numberProducts={18} />}
        >
          <AllProducts />
        </Suspense>
      </section>
    </>
  );
};

const AllProducts = async () => {
  const products = await getAllProducts();

  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        Semua Produk
      </h2>
      <div className="flex gap-3 justify-center mb-12 flex-wrap">
        <Link
          href="/limbah"
          className="px-6 py-3 bg-green-600/20 border border-green-600 hover:bg-green-600 rounded-lg font-medium transition-colors"
        >
          ♻️ Limbah
        </Link>
        <Link
          href="/makanan"
          className="px-6 py-3 bg-blue-600/20 border border-blue-600 hover:bg-blue-600 rounded-lg font-medium transition-colors"
        >
          🍱 Makanan
        </Link>
        <Link
          href="/kerajinan"
          className="px-6 py-3 bg-purple-600/20 border border-purple-600 hover:bg-purple-600 rounded-lg font-medium transition-colors"
        >
          🎨 Kerajinan
        </Link>
      </div>
      <Products products={products} extraClassname="" />
    </div>
  );
};

export default Home;
