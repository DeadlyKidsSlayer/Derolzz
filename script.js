// Data soal
const soalUjian = [
  {
    nomor: 1,
    pertanyaan: "Apa ibukota Indonesia?",
    pilihan: ["A. Jakarta", "B. IKN Tercintahh", "C. Surabaya", "D. Medan"],
    jawaban: "A",
  },
  {
    nomor: 2,
    pertanyaan: "Siapa presiden pertama Indonesia?",
    pilihan: ["A. Soeharto", "B. Joko Widodo", "C. Soekarno", "D. BJ Habibie"],
    jawaban: "C",
  },
  {
    nomor: 3,
    pertanyaan: "Apa lambang negara Indonesia?",
    pilihan: ["A. Garuda", "B. Harimau", "C. Elang", "D. Merpati"],
    jawaban: "A",
  },
];

// Kata-kata motivasi acak
const kataMotivasi = [
  "Heroes may not be braver than anyone else. They’re just brave five minutes longer.",
  "War is delightful to those who have not yet experienced it.",
  "A leader leads by example, not by force.",
  "If you know the enemy and know yourself you need not fear the results of a hundred battles!",
  "If a man has done his best, what else is there?.",
];

// Elemen HTML
const daftarNomorSoal = document.getElementById("daftar-nomor-soal");
const soalContainer = document.getElementById("soal-container");
const tombolSebelumnya = document.getElementById("sebelumnya");
const tombolSelanjutnya = document.getElementById("selanjutnya");
const tombolSelesaikan = document.getElementById("selesaikan-ujian");
const hasilUjian = document.getElementById("hasil-ujian");
const totalBenar = document.getElementById("total-benar");
const totalSalah = document.getElementById("total-salah");
const nilai = document.getElementById("nilai");
const motivasi = document.getElementById("motivasi");
const kolomNomorSoal = document.getElementById("kolom-nomor-soal");

let soalAktif = 1; // Nomor soal yang sedang aktif
let jawabanPengguna = {}; // Menyimpan jawaban pengguna

// Tampilkan daftar nomor soal
soalUjian.forEach((soal) => {
  const li = document.createElement("li");
  li.textContent = `Soal ${soal.nomor}`;
  li.addEventListener("click", () => tampilkanSoal(soal.nomor));
  daftarNomorSoal.appendChild(li);
});

// Fungsi untuk menampilkan soal berdasarkan nomor
function tampilkanSoal(nomor) {
  soalAktif = nomor;

  // Hapus kelas aktif dari semua nomor soal
  const semuaNomor = document.querySelectorAll("#daftar-nomor-soal li");
  semuaNomor.forEach((nomorSoal) => nomorSoal.classList.remove("active"));

  // Tambahkan kelas aktif ke nomor soal yang dipilih
  const nomorAktif = document.querySelector(`#daftar-nomor-soal li:nth-child(${nomor})`);
  nomorAktif.classList.add("active");

  // Tampilkan soal yang dipilih
  const soal = soalUjian.find((s) => s.nomor === nomor);
  soalContainer.innerHTML = `
    <div class="soal">
      <p>${soal.pertanyaan}</p>
      ${soal.pilihan
        .map(
          (pilihan) => `
        <label>
          <input type="radio" name="soal${soal.nomor}" value="${pilihan[0]}" 
            ${jawabanPengguna[soal.nomor] === pilihan[0] ? "checked" : ""}>
          ${pilihan}
        </label><br>
      `
        )
        .join("")}
    </div>
  `;

  // Tambahkan event listener untuk pilihan jawaban
  const pilihanJawaban = document.querySelectorAll('input[type="radio"]');
  pilihanJawaban.forEach((pilihan) => {
    pilihan.addEventListener("change", () => {
      jawabanPengguna[soal.nomor] = pilihan.value; // Simpan jawaban pengguna
      if (soalAktif < soalUjian.length) {
        tampilkanSoal(soalAktif + 1); // Pindah ke soal berikutnya
      }
    });
  });

  // Update status tombol navigasi
  updateTombolNavigasi();
}

// Fungsi untuk mengupdate status tombol navigasi
function updateTombolNavigasi() {
  tombolSebelumnya.disabled = soalAktif === 1; // Nonaktifkan tombol "Sebelumnya" jika soal pertama
  tombolSelanjutnya.disabled = soalAktif === soalUjian.length; // Nonaktifkan tombol "Selanjutnya" jika soal terakhir
}

// Tombol "Sebelumnya"
tombolSebelumnya.addEventListener("click", () => {
  if (soalAktif > 1) {
    tampilkanSoal(soalAktif - 1);
  }
});

// Tombol "Selanjutnya"
tombolSelanjutnya.addEventListener("click", () => {
  if (soalAktif < soalUjian.length) {
    tampilkanSoal(soalAktif + 1);
  }
});

// Tombol "Selesaikan Ujian"
tombolSelesaikan.addEventListener("click", () => {
  clearInterval(interval); // Hentikan timer
  hitungHasilUjian(); // Hitung hasil ujian
});

// Fungsi untuk menghitung hasil ujian
function hitungHasilUjian() {
  let benar = 0;
  let salah = 0;

  soalUjian.forEach((soal) => {
    if (jawabanPengguna[soal.nomor] === soal.jawaban) {
      benar++;
    } else {
      salah++;
    }
  });

  // Hitung nilai dalam bentuk persentase (1-100)
  const totalSoal = soalUjian.length;
  const nilaiPersentase = Math.round((benar / totalSoal) * 100);

  // Tampilkan hasil ujian
  totalBenar.textContent = benar;
  totalSalah.textContent = salah;
  nilai.textContent = `${nilaiPersentase}`;

  // Tampilkan kata-kata motivasi acak
  motivasi.textContent = kataMotivasi[Math.floor(Math.random() * kataMotivasi.length)];

  // Sembunyikan tampilan ujian dan tampilkan hasil
  document.getElementById("saat-ujian").style.display = "none";
  hasilUjian.style.display = "block";
}

// Tombol "Ulangi Ujian"
document.getElementById("ulangi-ujian").addEventListener("click", () => {
  location.reload(); // Muat ulang halaman
});

// Tampilkan soal pertama saat halaman dimuat
tampilkanSoal(1);

// Timer
let waktu = 30; // 30 detik
let interval;

// Tombol "Mulai Ujian"
document.getElementById("mulai-ujian").addEventListener("click", function () {
  document.getElementById("sebelum-ujian").style.display = "none"; // Sembunyikan halaman awal
  document.getElementById("saat-ujian").style.display = "block"; // Tampilkan halaman ujian
  kolomNomorSoal.style.display = "block"; // Tampilkan kolom nomor soal
  mulaiTimer();
});

// Fungsi untuk memulai timer
function mulaiTimer() {
  interval = setInterval(updateTimer, 1000);
}

// Fungsi untuk mengupdate timer
function updateTimer() {
  const menit = Math.floor(waktu / 30);
  const detik = waktu % 30;
  document.getElementById("timer").innerHTML = `⏳ Waktu: <span>${menit}:${detik < 10 ? "0" : ""}${detik}</span>`;

  if (waktu === 0) {
    clearInterval(interval);
    hitungHasilUjian(); // Tampilkan hasil ujian jika waktu habis
  } else {
    waktu--;
  }
}