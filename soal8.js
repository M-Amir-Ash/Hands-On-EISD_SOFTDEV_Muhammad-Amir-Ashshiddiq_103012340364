// soal8.js
const peserta = [
  { nama: "Alya", statusAkun: "active", kategori: "Web", nilai: 85 },
  { nama: "Bima", statusAkun: "active", kategori: "Data", nilai: 75 },
  { nama: "Citra", statusAkun: "inactive", kategori: "Web", nilai: 901 },
  { nama: "Doni", statusAkun: "active", kategori: "Web", nilai: 95 },
  { nama: "Eka", statusAkun: "active", kategori: "Data", nilai: 80 },
];

function filterKelasLanjutan(data) {
  const hasil = data.filter(
    (p) => p.statusAkun === "active" && p.kategori === "Web" && p.nilai >= 80
  );

  for (const p of hasil) {
    console.log(`${p.nama} - ${p.nilai}`);
  }

  return hasil;
}

filterKelasLanjutan(peserta);
