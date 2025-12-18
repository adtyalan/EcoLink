// Terjemahan dan Konfigurasi Kategori Produk untuk Bahasa Indonesia

export const CATEGORIES = {
  limbah: {
    name: "Limbah",
    description: "Limbah yang dapat didaur ulang",
    path: "/limbah",
    longDescription: "Temukan produk limbah yang dapat didaur ulang untuk mendukung gaya hidup berkelanjutan. Setiap pembelian membantu mengurangi limbah dan menjaga lingkungan kita."
  },
  makanan: {
    name: "Makanan",
    description: "Sisa makanan gratis - tinggal checkout",
    path: "/makanan",
    longDescription: "Ambil sisa makanan gratis yang masih layak konsumsi. Cukup checkout dan nikmati makanan berkualitas tanpa membayar. Berkontribusi pada zero waste initiative kami."
  },
  kerajinan: {
    name: "Kerajinan",
    description: "Produk ramah lingkungan",
    path: "/kerajinan",
    longDescription: "Koleksi produk kerajinan tangan yang ramah lingkungan. Diproduksi dengan bahan berkelanjutan dan mendukung artisan lokal untuk masa depan yang lebih hijau."
  }
};

export const UI_TRANSLATIONS = {
  // Navbar & Navigation
  collections: "Koleksi",
  viewAll: "LIHAT SEMUA",
  discoverWardrobe: "Temukan produk pilihan untuk setiap kebutuhan Anda.",
  editProfile: "Edit Profil",
  login: "Masuk",
  logout: "Keluar",
  orders: "Pesanan",
  viewOrders: "Lihat Pesanan",
  
  // Search & Filter
  search: "Cari",
  searchProducts: "Cari Produk",
  
  // Cart & Wishlist
  cart: "Keranjang",
  wishlist: "Wishlist",
  addToCart: "Tambah ke Keranjang",
  checkout: "Checkout",
  deleteFav: "Hapus dari Favorit",
  
  // Product Details
  composition: "KOMPOSISI",
  care: "PERAWATAN",
  origin: "ASAL",
  sizes: "Ukuran",
  colors: "Warna",
  quantity: "Jumlah",
  
  // Descriptions
  compositionDesc: "Kami bekerja dengan program pemantauan untuk memastikan kepatuhan terhadap standar sosial, lingkungan, dan kesehatan serta keselamatan kami untuk produk kami. Untuk menilai kepatuhan, kami telah mengembangkan program audit dan rencana perbaikan berkelanjutan.",
  careDesc: "Merawat pakaian Anda adalah merawat lingkungan. Mencuci dengan suhu lebih rendah dan siklus spin yang lembut lebih lembut pada pakaian dan membantu melindungi warna, bentuk, dan struktur kain. Selain itu, mereka mengurangi jumlah energi yang digunakan dalam proses perawatan.",
  originDesc: "Kami bekerja dengan pemasok, pekerja, serikat pekerja, dan organisasi internasional untuk mengembangkan rantai pasokan di mana hak asasi manusia dihormati dan dipromosikan, berkontribusi pada Tujuan Pembangunan Berkelanjutan Perserikatan Bangsa-Bangsa. Berkat kolaborasi dengan pemasok kami, kami bekerja untuk mengetahui fasilitas dan proses yang digunakan untuk memproduksi produk kami untuk memahami ketertelusuran mereka.",
  madeIn: "Dibuat di",
  
  // Form Fields
  name: "Nama",
  email: "Email",
  password: "Kata Sandi",
  confirmPassword: "Konfirmasi Kata Sandi",
  register: "Daftar",
  signin: "Masuk",
  signup: "Buat Akun",
  
  // Buttons & Actions
  save: "Simpan",
  cancel: "Batal",
  delete: "Hapus",
  continue: "Lanjutkan",
  noAccount: "Belum punya akun?",
  haveAccount: "Sudah punya akun?",
  
  // Messages
  productNotFound: "Produk tidak ditemukan",
  loading: "Memuat...",
  empty: "Kosong",
  
  // Currency
  currency: "Rp",
};

export const formatPrice = (price: number): string => {
  return `Rp ${price.toLocaleString('id-ID')}`;
};

export const getOldCategoryUrl = (oldCategory: string): string => {
  const mapping: { [key: string]: string } = {
    "t-shirts": "limbah",
    "pants": "makanan",
    "sweatshirts": "kerajinan"
  };
  return mapping[oldCategory] || oldCategory;
};
