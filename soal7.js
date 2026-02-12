// soal7.js
const pendaftar = [
  { nama: "Alya", status: "active", nilaiSeleksi: 85 },
  { nama: "Bima", status: "inactive", nilaiSeleksi: 90 },
  { nama: "Citra", status: "active", nilaiSeleksi: 70 },
  { nama: "Doni", status: "active", nilaiSeleksi: 95 },
  { nama: "Eka", status: "inactive", nilaiSeleksi: 60 },
];

function filterDanMapping(data) {
  return data
    .filter((p) => p.status === "active" && p.nilaiSeleksi >= 80)
    .map((p) => ({ nama: p.nama, nilai: p.nilaiSeleksi }));
}

console.log(filterDanMapping(pendaftar));
