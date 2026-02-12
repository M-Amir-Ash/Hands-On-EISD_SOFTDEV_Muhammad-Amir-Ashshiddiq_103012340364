# Perbaikan Prioritas Sistem Pendaftaran Study Group EISD Lab

## Analisis Permasalahan

Pada hari pertama peluncuran website pendaftaran Study Group EISD Lab, ditemukan beberapa kendala utama:

- Data peserta tercatat lebih dari satu kali karena tombol **"Daftar"** ditekan berulang saat proses loading.
- Ditemukan data tidak valid seperti nama kosong, nama berupa simbol, atau email tanpa format yang benar.
- Beberapa kelas dengan kuota maksimal 25 peserta terisi hingga lebih dari 30 peserta.
- Panitia mengalami kebingungan dalam menentukan data mana yang dianggap resmi karena adanya duplikasi dan data tidak valid.

Permasalahan tersebut menunjukkan bahwa sistem belum memiliki kontrol dan validasi yang memadai di sisi backend.

---

## Prioritas Perbaikan

Jika hanya diperbolehkan memperbaiki satu aspek sistem, maka perbaikan yang diprioritaskan adalah:

> **Penerapan validasi dan pengelolaan kuota yang ketat di sisi backend.**

---

## Alasan Pemilihan Prioritas

Seluruh permasalahan yang muncul berakar pada kurangnya kontrol di tingkat server. Sistem menerima setiap permintaan tanpa proses penyaringan yang tegas, sehingga:

- Data duplikat tetap tersimpan.
- Data tidak valid tetap diterima.
- Kuota kelas dapat terlampaui.

Frontend dapat membantu dalam pengalaman pengguna, namun keputusan akhir mengenai sah atau tidaknya data harus ditentukan oleh backend sebagai otoritas utama.

---

## Solusi yang Diusulkan

### 1. Validasi Data di Backend

Setiap data yang masuk harus melalui proses validasi, antara lain:

- Nama tidak boleh kosong dan harus masuk akal.
- Email wajib memiliki format yang valid.
- Seluruh field wajib harus terisi.
- Data tidak boleh duplikat (misalnya dengan menjadikan email sebagai unique identifier).

Dengan mekanisme ini, sistem hanya akan menyimpan data yang benar-benar memenuhi kriteria.

---

### 2. Mekanisme Kuota dengan Overbooking Terbatas

Untuk mengatasi potensi data tidak valid atau duplikat, diterapkan pendekatan:

- Kuota resmi kelas tetap, misalnya 25 peserta.
- Sistem dapat menerima sejumlah kecil pendaftar tambahan sebagai buffer (misalnya hingga 27–30 data).
- Data tersebut tidak langsung dianggap resmi.
- Backend melakukan proses penyaringan berdasarkan:
  - Validasi kelengkapan dan format data
  - Keunikan data (tidak duplikat)
  - Urutan waktu pendaftaran

Setelah proses seleksi selesai, sistem hanya menetapkan 25 peserta yang valid dan memenuhi syarat sebagai peserta resmi. Data yang tidak sesuai akan ditolak.

---

## Dampak Perbaikan

Dengan pendekatan ini:

- Kuota kelas tetap terjaga dan tidak melebihi kapasitas.
- Data duplikat dan tidak valid dapat disaring secara otomatis.
- Proses rekapitulasi menjadi lebih terstruktur.
- Status data resmi dapat ditentukan secara objektif, yaitu:
  > Data yang telah lolos validasi backend, tidak duplikat, dan termasuk dalam batas kuota resmi.

---

## Kesimpulan

Fondasi sistem pendaftaran yang baik bukan hanya terletak pada tampilan antarmuka, tetapi pada aturan dan kontrol yang dijaga di sisi backend. Dengan memperkuat validasi dan mekanisme kuota, sistem menjadi lebih adil, tertib, dan dapat dipertanggungjawabkan secara teknis maupun administratif.
