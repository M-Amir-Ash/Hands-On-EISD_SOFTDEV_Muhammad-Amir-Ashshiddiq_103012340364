// soal9.js
function simulasiPendaftaran(kuota, urutan) {
  const diterima = [];
  const ditolak = [];

  for (const nama of urutan) {
    if (diterima.length < kuota) {
      diterima.push(nama);
    } else {
      ditolak.push(nama);
      break;
    }
  }

  console.log("Diterima:", diterima);
  console.log("Ditolak:", ditolak);
}

simulasiPendaftaran(3, ["Dea", "Ijat", "Arra", "Budi", "Andi"]);
