// soal10.js
function simulasiPeminjaman(stokAwal, antrian) {
  let stok = stokAwal;
  const berhasil = [];
  const gagal = [];

  for (const nama of antrian) {
    if (stok > 0) {
      berhasil.push(nama);
      stok -= 1;
    } else {
      gagal.push(nama);
      break; // stop saat stok habis
    }
  }

  console.log("Berhasil pinjam:", berhasil);
  console.log("Gagal pinjam:", gagal);
  console.log("Sisa stok:", stok);
}

simulasiPeminjaman(4, ["Alya", "Bima", "Citra", "Doni", "Eka", "Farah"]);
