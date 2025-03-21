// Data soal
const soalUjian = [
  {
    nomor: 1,
    pertanyaan: "Jika semua A adalah B dan semua B adalah C, maka",
    pilihan: ["A. Semua A adalah C", "B. Semua C adalah A", "C. Beberapa A adalah C", "D. Beberapa C adalah A"],
    jawaban: "A",
  },
  {
    nomor: 2,
    pertanyaan: "Jika 5 orang dapat menyelesaikan pekerjaan dalam 10 hari, berapa hari yang dibutuhkan 10 orang untuk menyelesaikan pekerjaan yang sama?",
    pilihan: ["A. 5 hari", "B. 10 hari", "C. 15 hari", "D. 20 hari"],
    jawaban: "C",
  },
  {
    nomor: 3,
    pertanyaan: "Siapa presiden pertama Indonesia?",
    pilihan: ["A. Soeharto", "B. Joko Widodo", "C. Soekarno", "D. BJ Habibie"],
    jawaban: "C",
  },
  {
    nomor: 4,
    pertanyaan: "Siapa presiden pertama Indonesia?",
    pilihan: ["A. Soeharto", "B. Joko Widodo", "C. Soekarno", "D. BJ Habibie"],
    jawaban: "C",
  },
  {
    nomor: 5,
    pertanyaan: "Siapa presiden pertama Indonesia?",
    pilihan: ["A. Soeharto", "B. Joko Widodo", "C. Soekarno", "D. BJ Habibie"],
    jawaban: "C",
  },
  {
    nomor: 6,
    pertanyaan: "Siapa presiden pertama Indonesia?",
    pilihan: ["A. Soeharto", "B. Joko Widodo", "C. Soekarno", "D. BJ Habibie"],
    jawaban: "C",
  },
  {
    nomor: 7,
    pertanyaan: "Siapa presiden pertama Indonesia?",
    pilihan: ["A. Soeharto", "B. Joko Widodo", "C. Soekarno", "D. BJ Habibie"],
    jawaban: "C",
  },
  {
    nomor: 8,
    pertanyaan: "Siapa presiden pertama Indonesia?",
    pilihan: ["A. Soeharto", "B. Joko Widodo", "C. Soekarno", "D. BJ Habibie"],
    jawaban: "C",
  },
  {
    nomor: 9,
    pertanyaan: "Siapa presiden pertama Indonesia?",
    pilihan: ["A. Soeharto", "B. Joko Widodo", "C. Soekarno", "D. BJ Habibie"],
    jawaban: "C",
  },
  {
    nomor: 10,
    pertanyaan: "Siapa presiden pertama Indonesia?",
    pilihan: ["A. Soeharto", "B. Joko Widodo", "C. Soekarno", "D. BJ Habibie"],
    jawaban: "C",
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
const timerElement = document.getElementById("timer").querySelector("span");
const nomorSoalAktifElement = document.getElementById("nomor-soal-aktif");
const totalSoalElement = document.getElementById("total-soal");

// Ambil elemen audio dan tombol kontrol musik
const backsound = document.getElementById("backsound");
const toggleMusicButton = document.getElementById("toggle-music");

// Elemen pesan selamat datang
const pesanSelamatDatang = document.getElementById("pesan-selamat-datang");
const lanjutkanButton = document.getElementById("lanjutkan");

let soalAktif = 1; // Nomor soal yang sedang aktif
let jawabanPengguna = {}; // Menyimpan jawaban pengguna
let isMusicPlaying = true; // Status musik (aktif/non-aktif)
let waktuUjian = 0.5 * 60; // Waktu ujian dalam detik (30 detik)
let timerInterval; // Interval untuk timer

// Cek apakah pengguna sudah pernah mengakses web
const sudahPernahAkses = localStorage.getItem("sudahPernahAkses");

// Tampilkan pesan selamat datang jika belum pernah mengakses
if (!sudahPernahAkses) {
  pesanSelamatDatang.style.display = "flex"; // Tampilkan pesan selamat datang
  sebelumUjian.style.display = "none"; // Sembunyikan halaman awal
  saatUjian.style.display = "none"; // Sembunyikan halaman ujian
  hasilUjian.style.display = "none"; // Sembunyikan halaman hasil
} else {
  sebelumUjian.style.display = "block"; // Tampilkan halaman awal
}

// Tombol "Lanjutkan"
lanjutkanButton.addEventListener("click", () => {
  pesanSelamatDatang.style.display = "none"; // Sembunyikan pesan selamat datang
  sebelumUjian.style.display = "block"; // Tampilkan halaman awal
  localStorage.setItem("sudahPernahAkses", true); // Simpan status sudah pernah mengakses

  // Aktifkan musik setelah tombol "Lanjutkan" diklik
  backsound.play().catch(() => {
    console.log("Autoplay diblokir, musik akan dimulai setelah interaksi pengguna.");
  });
  isMusicPlaying = true; // Update status musik
  toggleMusicButton.innerHTML = '<i class="fas fa-volume-up"></i>'; // Update ikon musik nyala
});

// Fungsi untuk mengontrol musik
function toggleMusic() {
  if (isMusicPlaying) {
    backsound.pause(); // Matikan musik
    toggleMusicButton.innerHTML = '<i class="fas fa-volume-mute"></i>'; // Ikon musik mati
  } else {
    backsound.play(); // Nyalakan musik
    toggleMusicButton.innerHTML = '<i class="fas fa-volume-up"></i>'; // Ikon musik nyala
  }
  isMusicPlaying = !isMusicPlaying; // Toggle status musik
}

// Event listener untuk tombol kontrol musik
toggleMusicButton.addEventListener("click", toggleMusic);

// Tampilkan daftar nomor soal
soalUjian.forEach((soal) => {
  const li = document.createElement("li");
  li.textContent = soal.nomor; // Hanya menampilkan angka
  li.addEventListener("click", () => tampilkanSoal(soal.nomor));
  daftarNomorSoal.appendChild(li);
});

// Fungsi untuk menampilkan soal berdasarkan nomor
function tampilkanSoal(nomor) {
  soalAktif = nomor;

  // Update informasi "Soal ke.../Jumlah Soal"
  nomorSoalAktifElement.textContent = nomor;
  totalSoalElement.textContent = soalUjian.length;

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
      updateNomorSoalDijawab(soal.nomor); // Update tampilan nomor soal
      if (soalAktif < soalUjian.length) {
        tampilkanSoal(soalAktif + 1); // Pindah ke soal berikutnya
      }
    });
  });

  // Update status tombol navigasi
  updateTombolNavigasi();
}

// Fungsi untuk mengupdate tampilan nomor soal yang sudah dijawab
function updateNomorSoalDijawab(nomor) {
  const nomorSoal = document.querySelector(`#daftar-nomor-soal li:nth-child(${nomor})`);
  if (jawabanPengguna[nomor]) {
    nomorSoal.classList.add("answered");
  } else {
    nomorSoal.classList.remove("answered");
  }
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
  toggleMusicButton.innerHTML = '<i class="fas fa-volume-mute"></i>'; // Update ikon musik mati
  startTimer(); // Mulai timer
});

// Fungsi untuk memulai timer
function startTimer() {
  timerInterval = setInterval(() => {
    waktuUjian--; // Kurangi waktu ujian
    timerElement.textContent = formatTime(waktuUjian); // Update tampilan timer

    // Jika waktu habis, hentikan timer dan tampilkan hasil
    if (waktuUjian <= 0) {
      clearInterval(timerInterval);
      tampilkanHasilUjian();
    }
  }, 1000); // Update setiap 1 detik
}

// Fungsi untuk memformat waktu (MM:SS)
function formatTime(detik) {
  const menit = Math.floor(detik / 60);
  const sisaDetik = detik % 60;
  return `${menit.toString().padStart(2, "0")}:${sisaDetik.toString().padStart(2, "0")}`;
}

// Tombol "Selesaikan Ujian"
tombolSelesaikan.addEventListener("click", () => {
  clearInterval(timerInterval); // Hentikan timer
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
  toggleMusicButton.innerHTML = '<i class="fas fa-volume-up"></i>'; // Update ikon musik nyala
  // Reset timer
  waktuUjian = 0.5 * 60; // Reset waktu ujian ke 30 detik
  timerElement.textContent = formatTime(waktuUjian); // Update tampilan timer
  clearInterval(timerInterval); // Hentikan timer jika sedang berjalan
});

// Inisialisasi
backsound.muted = false; // Pastikan audio tidak dimute
backsound.play().catch(() => {
  // Tangkap error jika autoplay diblokir
  console.log("Autoplay diblokir, musik akan dimulai setelah interaksi pengguna.");
});