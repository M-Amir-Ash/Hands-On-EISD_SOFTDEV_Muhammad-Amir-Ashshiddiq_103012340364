// soal6.js
const emailList = [
  "Andi@gmail.com",
  "Budi@gmail.com",
  "Sari@gmail.com",
  "Andi@gmail.com",
  "Rina@gmail.com",
  "Budi@gmail.com",
];

function deteksiDuplikatEmail(list) {
  const seen = new Set();
  const dup = new Set();

  for (const email of list) {
    if (seen.has(email)) dup.add(email);
    else seen.add(email);
  }

  if (dup.size === 0) console.log("Tidak ada data duplikat.");
  else console.log("Email duplikat terdeteksi:", Array.from(dup));
}

deteksiDuplikatEmail(emailList);
