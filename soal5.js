// soal5.js
const data = [
  { nama: "Web Development Dasar", peserta: 18 },
  { nama: "Logic & Algorithm", peserta: 15 },
  { nama: "Frontend Fundamental", peserta: 10 },
  { nama: "Backend Introduction", peserta: 10 },
];

function hitungTotalDanRataRata(arr) {
  let total = 0;

  for (const item of arr) {
    total += item.peserta;
  }

  const rataRata = arr.length > 0 ? total / arr.length : 0;

  console.log("Total peserta:", total);
  console.log("Rata-rata per Study Group:", rataRata);
}

hitungTotalDanRataRata(data);
