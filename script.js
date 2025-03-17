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
const mulaiUjianButton = document.getElementById("mulai-ujian");
const sebelumUjian = document.getElementById("sebelum-ujian");
const saatUjian = document.getElementById("saat-ujian");
const ulangiUjianButton = document.getElementById("ulangi-ujian");

// Ambil elemen audio dan tombol kontrol musik
const backsound = document.getElementById("backsound");
const toggleMusicButton = document.getElementById("toggle-music");

let soalAktif = 1; // Nomor soal yang sedang aktif
let jawabanPengguna = {}; // Menyimpan jawaban pengguna
let isMusicPlaying = true; // Status musik (aktif/non-aktif)

// Fungsi untuk mengontrol musik
function toggleMusic() {
  if (isMusicPlaying) {
    backsound.pause(); // Matikan musik
    toggleMusicButton.innerHTML = '<i class="fas fa-music"></i> Nyalakan Musik';
  } else {
    backsound.play(); // Nyalakan musik
    toggleMusicButton.innerHTML = '<i class="fas fa-music"></i> Matikan Musik';
  }
  isMusicPlaying = !isMusicPlaying; // Toggle status musik
}

// Event listener untuk tombol kontrol musik
toggleMusicButton.addEventListener("click", toggleMusic);

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

// Tombol "Mulai Ujian"
mulaiUjianButton.addEventListener("click", () => {
  sebelumUjian.style.display = "none";
  saatUjian.style.display = "block";
  kolomNomorSoal.style.display = "block";
  tampilkanSoal(1); // Tampilkan soal pertama
  backsound.pause(); // Hentikan musik saat ujian dimulai
  isMusicPlaying = false; // Update status musik
  toggleMusicButton.innerHTML = '<i class="fas fa-music"></i> Nyalakan Musik'; // Update teks tombol
});

// Tombol "Selesaikan Ujian"
tombolSelesaikan.addEventListener("click", () => {
  hitungHasilUjian(); // Hitung hasil ujian
  tampilkanHasilUjian(); // Tampilkan halaman hasil ujian
});

// Fungsi untuk menghitung hasil ujian
function hitungHasilUjian() {
  let benar = 0;
  let salah = 0;

  soalUjian.forEach((soal) => {
    const jawabanPenggunaSoal = jawabanPengguna[soal.nomor];
    if (jawabanPenggunaSoal === soal.jawaban) {
      benar++;
    } else {
      salah++;
    }
  });

  // Update nilai di halaman hasil
  totalBenar.textContent = benar;
  totalSalah.textContent = salah;
  nilai.textContent = ((benar / soalUjian.length) * 100).toFixed(2); // Hitung nilai dalam persentase

  // Tampilkan kata motivasi acak
  motivasi.textContent = kataMotivasi[Math.floor(Math.random() * kataMotivasi.length)];
}

// Fungsi untuk menampilkan halaman hasil ujian
function tampilkanHasilUjian() {
  saatUjian.style.display = "none"; // Sembunyikan halaman ujian
  hasilUjian.style.display = "block"; // Tampilkan halaman hasil
  kolomNomorSoal.style.display = "none"; // Sembunyikan kolom nomor soal
}

// Tombol "Ulangi Ujian"
ulangiUjianButton.addEventListener("click", () => {
  // Reset jawaban pengguna
  jawabanPengguna = {};
  // Kembali ke halaman awal
  hasilUjian.style.display = "none";
  sebelumUjian.style.display = "block";
  kolomNomorSoal.style.display = "none";
  // Reset tampilan soal
  soalAktif = 1;
  tampilkanSoal(1);
  // Reset musik ke awal dan putar ulang
  backsound.currentTime = 0; // Reset musik ke awal
  backsound.play(); // Putar musik
  isMusicPlaying = true; // Update status musik
  toggleMusicButton.innerHTML = '<i class="fas fa-music"></i> Matikan Musik'; // Update teks tombol
});

// Inisialisasi
backsound.muted = false; // Pastikan audio tidak dimute
backsound.play().catch(() => {
  // Tangkap error jika autoplay diblokir
  console.log("Autoplay diblokir, musik akan dimulai setelah interaksi pengguna.");
});