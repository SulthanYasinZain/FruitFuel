const quotes = [
  "Semangat ya CFD-nya, tambah energi dari buah segar ini!",
  "Yuk, segarin harimu di CFD! Makan buah biar makin semangat!",
  "Nikmatin buahnya, lanjut seru-seruan di CFD!",
  "CFD lebih asyik kalau kamu segar, makan buah dulu yuk!",
  "Isi tenaga di CFD? Buah segar jawabannya!",
  "Buah segar, mood juga segar! Semangat terus di CFD!",
  "Makan buah, biar stamina tetap kuat keliling CFD!",
  "Udah scan, sekarang ambil energi dari buahnya buat lanjut CFD!",
  "CFD makin seru bareng buah segar, yuk lanjutkan harimu!",
  "Buah segar, langkah pun makin cepat di CFD!",
  "Ayo tetap semangat keliling CFD, buah ini bikin kamu makin kuat!",
  "Semangat keliling CFD! Jangan lupa, buah segar dulu biar makin kuat!",
  "Nggak ada kata lelah di CFD kalau ada buah segar!",
  "Panasnya CFD nggak masalah, ada buah segar bikin adem!",
  "Isi ulang energi di CFD dengan buah segar ini, yuk!",
  "Scan QR, makan buah, dan lanjutkan petualangan CFD-mu!",
  "CFD lebih seru kalau kamu segar, buahnya bikin tenaga balik lagi!",
  "Udah segar? Yuk, lanjut lagi di CFD-nya!",
  "Kuat sampai akhir CFD? Bisa banget dengan buah segar ini!",
  "Buah segar dulu, lanjut eksplor CFD tanpa batas!",
];

function QrBanner() {
  return (
    <main className="mx-8">
      <h1 className="text-center">
        {quotes[Math.floor(Math.random() * quotes.length)]}
      </h1>
    </main>
  );
}

export default QrBanner;
