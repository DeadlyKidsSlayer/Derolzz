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
  {
    nomor: 4,
    pertanyaan: "Apa nama pulau terbesar di Indonesia?",
    pilihan: ["A. Jawa", "B. Sumatera", "C. Kalimantan", "D. Papua"],
    jawaban: "C",
  },
  {
    nomor: 5,
    pertanyaan: "Siapa pencipta lagu 'Indonesia Raya'?",
    pilihan: ["A. W.R. Supratman", "B. Ismail Marzuki", "C. Gesang", "D. Iwan Fals"],
    jawaban: "A",
  },
  {
    nomor: 6,
    pertanyaan: "Apa nama gunung tertinggi di Indonesia?",
    pilihan: ["A. Gunung Rinjani", "B. Gunung Semeru", "C. Gunung Kerinci", "D. Gunung Jaya Wijaya"],
    jawaban: "D",
  },
  {
    nomor: 7,
    pertanyaan: "Apa nama sungai terpanjang di Indonesia?",
    pilihan: ["A. Sungai Kapuas", "B. Sungai Mahakam", "C. Sungai Musi", "D. Sungai Bengawan Solo"],
    jawaban: "A",
  },
  {
    nomor: 8,
    pertanyaan: "Apa nama danau terbesar di Indonesia?",
    pilihan: ["A. Danau Toba", "B. Danau Singkarak", "C. Danau Poso", "D. Danau Sentani"],
    jawaban: "A",
  },
  {
    nomor: 9,
    pertanyaan: "Apa nama bandara internasional di Jakarta?",
    pilihan: ["A. Soekarno-Hatta", "B. Juanda", "C. Ngurah Rai", "D. Hasanuddin"],
    jawaban: "A",
  },
  {
    nomor: 10,
    pertanyaan: "Apa nama mata uang Indonesia?",
    pilihan: ["A. Rupiah", "B. Ringgit", "C. Dolar", "D. Yen"],
    jawaban: "A",
  },
  {
    nomor: 11,
    pertanyaan: "Apa nama provinsi termuda di Indonesia?",
    pilihan: ["A. Kalimantan Utara", "B. Gorontalo", "C. Kepulauan Riau", "D. Banten"],
    jawaban: "A",
  },
  {
    nomor: 12,
    pertanyaan: "Apa nama candi terbesar di Indonesia?",
    pilihan: ["A. Candi Borobudur", "B. Candi Prambanan", "C. Candi Mendut", "D. Candi Sewu"],
    jawaban: "A",
  },
  {
    nomor: 13,
    pertanyaan: "Apa nama hewan endemik Indonesia?",
    pilihan: ["A. Komodo", "B. Harimau", "C. Gajah", "D. Orangutan"],
    jawaban: "A",
  },
  {
    nomor: 14,
    pertanyaan: "Apa nama tarian tradisional dari Bali?",
    pilihan: ["A. Tari Kecak", "B. Tari Saman", "C. Tari Piring", "D. Tari Jaipong"],
    jawaban: "A",
  },
  {
    nomor: 15,
    pertanyaan: "Apa nama alat musik tradisional dari Jawa Barat?",
    pilihan: ["A. Angklung", "B. Gamelan", "C. Sasando", "D. Kolintang"],
    jawaban: "A",
  },
  {
    nomor: 16,
    pertanyaan: "Apa nama makanan khas Padang?",
    pilihan: ["A. Rendang", "B. Soto", "C. Gudeg", "D. Rawon"],
    jawaban: "A",
  },
  {
    nomor: 17,
    pertanyaan: "Apa nama pahlawan nasional dari Aceh?",
    pilihan: ["A. Cut Nyak Dhien", "B. Kartini", "C. Diponegoro", "D. Pattimura"],
    jawaban: "A",
  },
  {
    nomor: 18,
    pertanyaan: "Apa nama festival budaya terkenal di Yogyakarta?",
    pilihan: ["A. Sekaten", "B. Galungan", "C. Nyepi", "D. Cap Go Meh"],
    jawaban: "A",
  },
  {
    nomor: 19,
    pertanyaan: "Apa nama suku asli dari Papua?",
    pilihan: ["A. Asmat", "B. Dayak", "C. Batak", "D. Minang"],
    jawaban: "A",
  },
  {
    nomor: 20,
    pertanyaan: "Apa nama kerajaan Hindu tertua di Indonesia?",
    pilihan: ["A. Kutai", "B. Majapahit", "C. Sriwijaya", "D. Singasari"],
    jawaban: "A",
  },
  {
    nomor: 21,
    pertanyaan: "Apa nama festival layang-layang terkenal di Bali?",
    pilihan: ["A. Bali Kite Festival", "B. Waisak", "C. Galungan", "D. Nyepi"],
    jawaban: "A",
  },
  {
    nomor: 22,
    pertanyaan: "Apa nama danau vulkanik terbesar di dunia yang ada di Indonesia?",
    pilihan: ["A. Danau Toba", "B. Danau Singkarak", "C. Danau Poso", "D. Danau Sentani"],
    jawaban: "A",
  },
  {
    nomor: 23,
    pertanyaan: "Apa nama pulau yang dikenal sebagai 'Pulau Dewata'?",
    pilihan: ["A. Bali", "B. Lombok", "C. Sumatra", "D. Sulawesi"],
    jawaban: "A",
  },
  {
    nomor: 24,
    pertanyaan: "Apa nama tarian tradisional dari Sumatra Barat?",
    pilihan: ["A. Tari Piring", "B. Tari Kecak", "C. Tari Saman", "D. Tari Jaipong"],
    jawaban: "A",
  },
  {
    nomor: 25,
    pertanyaan: "Apa nama alat musik tradisional dari Maluku?",
    pilihan: ["A. Tifa", "B. Angklung", "C. Gamelan", "D. Sasando"],
    jawaban: "A",
  },
  {
    nomor: 26,
    pertanyaan: "Apa nama makanan khas Yogyakarta?",
    pilihan: ["A. Gudeg", "B. Rendang", "C. Soto", "D. Rawon"],
    jawaban: "A",
  },
  {
    nomor: 27,
    pertanyaan: "Apa nama pahlawan nasional dari Jawa Tengah?",
    pilihan: ["A. Diponegoro", "B. Kartini", "C. Cut Nyak Dhien", "D. Pattimura"],
    jawaban: "A",
  },
  {
    nomor: 28,
    pertanyaan: "Apa nama festival budaya terkenal di Bali?",
    pilihan: ["A. Nyepi", "B. Sekaten", "C. Galungan", "D. Cap Go Meh"],
    jawaban: "A",
  },
  {
    nomor: 29,
    pertanyaan: "Apa nama suku asli dari Kalimantan?",
    pilihan: ["A. Dayak", "B. Asmat", "C. Batak", "D. Minang"],
    jawaban: "A",
  },
  {
    nomor: 30,
    pertanyaan: "Apa nama kerajaan Buddha terbesar di Indonesia?",
    pilihan: ["A. Sriwijaya", "B. Majapahit", "C. Kutai", "D. Singasari"],
    jawaban: "A",
  },
  {
    nomor: 31,
    pertanyaan: "Apa nama festival budaya terkenal di Toraja?",
    pilihan: ["A. Rambu Solo", "B. Waisak", "C. Galungan", "D. Nyepi"],
    jawaban: "A",
  },
  {
    nomor: 32,
    pertanyaan: "Apa nama danau terbesar di Sumatra?",
    pilihan: ["A. Danau Toba", "B. Danau Singkarak", "C. Danau Poso", "D. Danau Sentani"],
    jawaban: "A",
  },
  {
    nomor: 33,
    pertanyaan: "Apa nama pulau yang dikenal sebagai 'Pulau Seribu Pura'?",
    pilihan: ["A. Bali", "B. Lombok", "C. Sumatra", "D. Sulawesi"],
    jawaban: "A",
  },
  {
    nomor: 34,
    pertanyaan: "Apa nama tarian tradisional dari Aceh?",
    pilihan: ["A. Tari Saman", "B. Tari Kecak", "C. Tari Piring", "D. Tari Jaipong"],
    jawaban: "A",
  },
  {
    nomor: 35,
    pertanyaan: "Apa nama alat musik tradisional dari Nusa Tenggara Timur?",
    pilihan: ["A. Sasando", "B. Angklung", "C. Gamelan", "D. Tifa"],
    jawaban: "A",
  },
  {
    nomor: 36,
    pertanyaan: "Apa nama makanan khas Manado?",
    pilihan: ["A. Tinutuan", "B. Rendang", "C. Soto", "D. Rawon"],
    jawaban: "A",
  },
  {
    nomor: 37,
    pertanyaan: "Apa nama pahlawan nasional dari Maluku?",
    pilihan: ["A. Pattimura", "B. Kartini", "C. Diponegoro", "D. Cut Nyak Dhien"],
    jawaban: "A",
  },
  {
    nomor: 38,
    pertanyaan: "Apa nama festival budaya terkenal di Jawa Tengah?",
    pilihan: ["A. Sekaten", "B. Waisak", "C. Galungan", "D. Nyepi"],
    jawaban: "A",
  },
  {
    nomor: 39,
    pertanyaan: "Apa nama suku asli dari Sulawesi?",
    pilihan: ["A. Toraja", "B. Dayak", "C. Batak", "D. Minang"],
    jawaban: "A",
  },
  {
    nomor: 40,
    pertanyaan: "Apa nama kerajaan Islam pertama di Indonesia?",
    pilihan: ["A. Samudera Pasai", "B. Demak", "C. Mataram", "D. Banten"],
    jawaban: "A",
  },
  {
    nomor: 41,
    pertanyaan: "Apa nama festival budaya terkenal di Bali?",
    pilihan: ["A. Galungan", "B. Waisak", "C. Sekaten", "D. Nyepi"],
    jawaban: "A",
  },
  {
    nomor: 42,
    pertanyaan: "Apa nama danau terbesar di Jawa?",
    pilihan: ["A. Danau Toba", "B. Danau Singkarak", "C. Danau Poso", "D. Danau Sentani"],
    jawaban: "A",
  },
  {
    nomor: 43,
    pertanyaan: "Apa nama pulau yang dikenal sebagai 'Pulau Rempah-Rempah'?",
    pilihan: ["A. Maluku", "B. Bali", "C. Sumatra", "D. Sulawesi"],
    jawaban: "A",
  },
  {
    nomor: 44,
    pertanyaan: "Apa nama tarian tradisional dari Jawa Timur?",
    pilihan: ["A. Tari Remo", "B. Tari Kecak", "C. Tari Piring", "D. Tari Jaipong"],
    jawaban: "A",
  },
  {
    nomor: 45,
    pertanyaan: "Apa nama alat musik tradisional dari Papua?",
    pilihan: ["A. Tifa", "B. Angklung", "C. Gamelan", "D. Sasando"],
    jawaban: "A",
  },
  {
    nomor: 46,
    pertanyaan: "Apa nama makanan khas Makassar?",
    pilihan: ["A. Coto Makassar", "B. Rendang", "C. Soto", "D. Rawon"],
    jawaban: "A",
  },
  {
    nomor: 47,
    pertanyaan: "Apa nama pahlawan nasional dari Jawa Barat?",
    pilihan: ["A. Dewi Sartika", "B. Kartini", "C. Diponegoro", "D. Cut Nyak Dhien"],
    jawaban: "A",
  },
  {
    nomor: 48,
    pertanyaan: "Apa nama festival budaya terkenal di Sumatra Barat?",
    pilihan: ["A. Tabuik", "B. Waisak", "C. Galungan", "D. Nyepi"],
    jawaban: "A",
  },
  {
    nomor: 49,
    pertanyaan: "Apa nama suku asli dari Nusa Tenggara Timur?",
    pilihan: ["A. Manggarai", "B. Dayak", "C. Batak", "D. Minang"],
    jawaban: "A",
  },
  {
    nomor: 50,
    pertanyaan: "Apa nama kerajaan Hindu terbesar di Indonesia?",
    pilihan: ["A. Majapahit", "B. Sriwijaya", "C. Kutai", "D. Singasari"],
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
const timerElement = document.getElementById("timer").querySelector("span");

// Ambil elemen audio dan tombol kontrol musik
const backsound = document.getElementById("backsound");
const toggleMusicButton = document.getElementById("toggle-music");

// Elemen pesan selamat datang
const pesanSelamatDatang = document.getElementById("pesan-selamat-datang");
const lanjutkanButton = document.getElementById("lanjutkan");

let soalAktif = 1; // Nomor soal yang sedang aktif
let jawabanPengguna = {}; // Menyimpan jawaban pengguna
let isMusicPlaying = true; // Status musik (aktif/non-aktif)
let waktuUjian = 60 * 60; // Waktu ujian dalam detik (3600 detik)
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
  toggleMusicButton.innerHTML = '<i class="fas fa-volume-up"></i> Matikan Musik'; // Update teks tombol
});

// Fungsi untuk mengontrol musik
function toggleMusic() {
  if (isMusicPlaying) {
    backsound.pause(); // Matikan musik
    toggleMusicButton.innerHTML = '<i class="fas fa-volume-mute"></i> Nyalakan Musik';
    toggleMusicButton.setAttribute('data-tooltip', 'Nyalakan Musik');
  } else {
    backsound.play(); // Nyalakan musik
    toggleMusicButton.innerHTML = '<i class="fas fa-volume-up"></i> Matikan Musik';
    toggleMusicButton.setAttribute('data-tooltip', 'Matikan Musik');
  }
  isMusicPlaying = !isMusicPlaying; // Toggle status musik

  // Tambahkan efek suara klik
  const clickSound = new Audio('click-sound.mp3'); // Ganti dengan path file suara klik
  clickSound.play();
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
  toggleMusicButton.innerHTML = '<i class="fas fa-volume-mute"></i> Nyalakan Musik'; // Update teks tombol
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
  toggleMusicButton.innerHTML = '<i class="fas fa-volume-up"></i> Matikan Musik'; // Update teks tombol
  // Reset timer
  waktuUjian = 60 * 60; // Reset waktu ujian ke 3600 detik
  timerElement.textContent = formatTime(waktuUjian); // Update tampilan timer
  clearInterval(timerInterval); // Hentikan timer jika sedang berjalan
});

// Inisialisasi
backsound.muted = false; // Pastikan audio tidak dimute
backsound.play().catch(() => {
  // Tangkap error jika autoplay diblokir
  console.log("Autoplay diblokir, musik akan dimulai setelah interaksi pengguna.");
});