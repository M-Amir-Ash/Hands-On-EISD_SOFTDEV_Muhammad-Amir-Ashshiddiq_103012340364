// soal3.js
function statusPendaftaran(kuota, terdaftar) {
  if (!Number.isFinite(kuota) || !Number.isFinite(terdaftar) || kuota < 1 || terdaftar < 0) {
    return "Input tidak valid";
  }

  const batasDiterima = kuota - 3;

  if (terdaftar < batasDiterima) return "Pendaftaran diterima";
  if (terdaftar >= batasDiterima && terdaftar < kuota) return "Hampir penuh";
  if (terdaftar === kuota) return "Pendaftaran ditutup";
  return "Pendaftaran ditolak"; // terdaftar > kuota
}

// contoh
console.log(statusPendaftaran(25, 10)); // diterima
console.log(statusPendaftaran(25, 23)); // hampir penuh
console.log(statusPendaftaran(25, 25)); // ditutup
console.log(statusPendaftaran(25, 27)); // ditolak
