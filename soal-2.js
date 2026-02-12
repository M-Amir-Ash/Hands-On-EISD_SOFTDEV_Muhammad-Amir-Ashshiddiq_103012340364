// soal-2.js
const studyGroups = [
  { nama: "Software Development", kuota: 20, terdaftar: 18 },
  { nama: "UI/UX Design", kuota: 15, terdaftar: 15 },
  { nama: "Technopreneur", kuota: 25, terdaftar: 10 },
  { nama: "Intelligence System", kuota: 10, terdaftar: 10 },
];

function tampilkanKetersediaan(groups) {
  const tersedia = [];
  const penuh = [];

  for (const g of groups) {
    if (g.terdaftar < g.kuota) tersedia.push(g.nama);
    else penuh.push(g.nama);
  }

  console.log("Masih tersedia:", tersedia);
  console.log("Sudah penuh:", penuh);
}

tampilkanKetersediaan(studyGroups);
