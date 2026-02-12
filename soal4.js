// soal4.js
function validasiData({ nama, email, studyGroup, jumlahTerdaftar }) {
  const namaValid = typeof nama === "string" && nama.trim().length > 0;

  const emailValid =
    typeof email === "string" &&
    email.trim().length > 0 &&
    email.includes("@");

  const groupValid = typeof studyGroup === "string" && studyGroup.trim().length > 0;

  const jumlahValid = Number.isFinite(jumlahTerdaftar) && jumlahTerdaftar >= 1;

  if (namaValid && emailValid && groupValid && jumlahValid) {
    console.log("Data valid");
  } else {
    console.log("Data tidak valid");
  }
}

// contoh
validasiData({ nama: "Amir", email: "amir@gmail.com", studyGroup: "Software Development", jumlahTerdaftar: 10 });
validasiData({ nama: ".", email: "aaa", studyGroup: "", jumlahTerdaftar: 0 });
