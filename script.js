// Data soal per sesi
const sesiUjian = [
  {
    nama: "Sesi 1 - Tes Logika",
    soal: [
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
        jawaban: "A",
      },
      {
        nomor: 3,
        pertanyaan: "Manakah yang bukan termasuk bilangan prima?",
        pilihan: ["A. 2", "B. 3", "C. 4", "D. 5"],
        jawaban: "C",
      },
      {
        nomor: 4,
        pertanyaan: "Jika BANDUNG = 56, maka JAKARTA = ?",
        pilihan: ["A. 70", "B. 72", "C. 74", "D. 76"],
        jawaban: "B",
      },
      {
        nomor: 5,
        pertanyaan: "Mobil : Bensin = Pelari : ?",
        pilihan: ["A. Makanan", "B. Sepatu", "C. Energi", "D. Lintasan"],
        jawaban: "C",
      },
      {
        nomor: 6,
        pertanyaan: "Jika 3x + 5 = 20, maka x = ?",
        pilihan: ["A. 3", "B. 5", "C. 7", "D. 9"],
        jawaban: "B",
      },
      {
        nomor: 7,
        pertanyaan: "Manakah yang berbeda dari yang lain?",
        pilihan: ["A. Merah", "B. Kuning", "C. Hijau", "D. Jingga"],
        jawaban: "C",
      },
      {
        nomor: 8,
        pertanyaan: "Jika SEMARANG = 56, maka SURABAYA = ?",
        pilihan: ["A. 72", "B. 74", "C. 76", "D. 78"],
        jawaban: "D",
      },
      {
        nomor: 9,
        pertanyaan: "1, 3, 6, 10, 15, ...",
        pilihan: ["A. 20", "B. 21", "C. 22", "D. 23"],
        jawaban: "B",
      },
      {
        nomor: 10,
        pertanyaan: "Kucing : Meong = Anjing : ?",
        pilihan: ["A. Gukguk", "B. Kukuruyuk", "C. Citcit", "D. Moo"],
        jawaban: "A",
      }
    ]
  },
  {
    nama: "Sesi 2 - Pengetahuan Umum",
    soal: [
      {
        nomor: 1,
        pertanyaan: "Siapa presiden pertama Indonesia?",
        pilihan: ["A. Soeharto", "B. Joko Widodo", "C. Soekarno", "D. BJ Habibie"],
        jawaban: "C",
      },
      {
        nomor: 2,
        pertanyaan: "Ibukota provinsi Jawa Barat adalah",
        pilihan: ["A. Semarang", "B. Surabaya", "C. Bandung", "D. Yogyakarta"],
        jawaban: "C",
      },
      {
        nomor: 3,
        pertanyaan: "Lambang negara Indonesia adalah",
        pilihan: ["A. Garuda", "B. Harimau", "C. Komodo", "D. Elang"],
        jawaban: "A",
      },
      {
        nomor: 4,
        pertanyaan: "Tanggal berapa Proklamasi Kemerdekaan Indonesia?",
        pilihan: ["A. 16 Agustus 1945", "B. 17 Agustus 1945", "C. 18 Agustus 1945", "D. 19 Agustus 1945"],
        jawaban: "B",
      },
      {
        nomor: 5,
        pertanyaan: "Pancasila sila pertama adalah",
        pilihan: ["A. Kemanusiaan yang adil dan beradab", "B. Persatuan Indonesia", "C. Ketuhanan Yang Maha Esa", "D. Kerakyatan yang dipimpin oleh hikmat kebijaksanaan dalam permusyawaratan/perwakilan"],
        jawaban: "C",
      },
      {
        nomor: 6,
        pertanyaan: "Lagu kebangsaan Indonesia adalah",
        pilihan: ["A. Indonesia Raya", "B. Garuda Pancasila", "C. Bagimu Negeri", "D. Syukur"],
        jawaban: "A",
      },
      {
        nomor: 7,
        pertanyaan: "Mata uang Indonesia adalah",
        pilihan: ["A. Ringgit", "B. Rupiah", "C. Dollar", "D. Peso"],
        jawaban: "B",
      },
      {
        nomor: 8,
        pertanyaan: "Bendera Indonesia terdiri dari warna",
        pilihan: ["A. Merah dan putih", "B. Merah dan biru", "C. Merah dan kuning", "D. Merah dan hijau"],
        jawaban: "A",
      },
      {
        nomor: 9,
        pertanyaan: "Pahlawan nasional yang dikenal dengan sebutan Bapak Pendidikan adalah",
        pilihan: ["A. Ki Hajar Dewantara", "B. RA Kartini", "C. Cut Nyak Dien", "D. Diponegoro"],
        jawaban: "A",
      },
      {
        nomor: 10,
        pertanyaan: "Pulau terbesar di Indonesia adalah",
        pilihan: ["A. Jawa", "B. Sumatera", "C. Kalimantan", "D. Papua"],
        jawaban: "D",
      }
    ]
  },
  {
    nama: "Sesi 3 - Wawasan Kebangsaan",
    soal: [
      {
        nomor: 1,
        pertanyaan: "Lembaga negara yang bertugas membuat undang-undang adalah",
        pilihan: ["A. Eksekutif", "B. Legislatif", "C. Yudikatif", "D. Eksaminatif"],
        jawaban: "B",
      },
      {
        nomor: 2,
        pertanyaan: "Bentuk negara Indonesia adalah",
        pilihan: ["A. Kerajaan", "B. Republik", "C. Kesultanan", "D. Federasi"],
        jawaban: "B",
      },
      {
        nomor: 3,
        pertanyaan: "Tugas utama Polri menurut UU No. 2 Tahun 2002 adalah",
        pilihan: ["A. Memelihara keamanan dan ketertiban masyarakat", "B. Melaksanakan pemerintahan", "C. Mengadili pelanggar hukum", "D. Membuat peraturan daerah"],
        jawaban: "A",
      },
      {
        nomor: 4,
        pertanyaan: "Lembaga yang berwenang mengubah UUD 1945 adalah",
        pilihan: ["A. Presiden", "B. MPR", "C. DPR", "D. MA"],
        jawaban: "B",
      },
      {
        nomor: 5,
        pertanyaan: "Sistem pemerintahan Indonesia berdasarkan UUD 1945 adalah",
        pilihan: ["A. Presidensial", "B. Parlementer", "C. Monarki", "D. Komunis"],
        jawaban: "A",
      },
      {
        nomor: 6,
        pertanyaan: "Pemilu di Indonesia diselenggarakan setiap berapa tahun sekali?",
        pilihan: ["A. 3 tahun", "B. 4 tahun", "C. 5 tahun", "D. 6 tahun"],
        jawaban: "C",
      },
      {
        nomor: 7,
        pertanyaan: "Lembaga negara yang bertugas mengawasi keuangan negara adalah",
        pilihan: ["A. BPK", "B. KPK", "C. OJK", "D. BI"],
        jawaban: "A",
      },
      {
        nomor: 8,
        pertanyaan: "Hak untuk memilih dalam pemilu disebut",
        pilihan: ["A. Hak interpelasi", "B. Hak angket", "C. Hak budget", "D. Hak suara"],
        jawaban: "D",
      },
      {
        nomor: 9,
        pertanyaan: "Pancasila sebagai dasar negara tercantum dalam",
        pilihan: ["A. Pembukaan UUD 1945", "B. Batang tubuh UUD 1945", "C. Penjelasan UUD 1945", "D. Keputusan Presiden"],
        jawaban: "A",
      },
      {
        nomor: 10,
        pertanyaan: "Lagu 'Indonesia Raya' pertama kali dikumandangkan pada",
        pilihan: ["A. Proklamasi Kemerdekaan", "B. Sumpah Pemuda", "C. Konferensi Meja Bundar", "D. Pembentukan PBB"],
        jawaban: "B",
      }
    ]
  }
];

// Kata-kata motivasi acak
const kataMotivasi = [
  "Heroes may not be braver than anyone else. They're just brave five minutes longer.",
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
const infoSesiAktifElement = document.getElementById("info-sesi-aktif").querySelector("span");
const sesiHasilElement = document.getElementById("sesi-hasil");
const tungguSesiElement = document.getElementById("tunggu-sesi");
const countdownElement = document.getElementById("countdown");

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
let sesiAktif = 0; // Indeks sesi yang sedang aktif (0 untuk sesi pertama)
let jawabanSemuaSesi = {}; // Menyimpan jawaban semua sesi

// Cek apakah pengguna sudah pernah mengakses web
const sudahPernahAkses = localStorage.getItem("sudahPernahAkses");

// Tampilkan pesan selamat datang jika belum pernah mengakses
if (!sudahPernahAkses) {
  pesanSelamatDatang.style.display = "flex"; // Tampilkan pesan selamat datang
  sebelumUjian.style.display = "none"; // Sembunyikan halaman awal
  saatUjian.style.display = "none"; // Sembunyikan halaman ujian
  hasilUjian.style.display = "none"; // Sembunyikan halaman hasil
  tungguSesiElement.style.display = "none"; // Sembunyikan halaman tunggu
} else {
  sebelumUjian.style.display = "block"; // Tampilkan halaman awal
  tungguSesiElement.style.display = "none"; // Sembunyikan halaman tunggu
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

// Fungsi untuk mengupdate teks tombol berdasarkan sesi aktif
function updateTombolSelesaikan() {
  if (sesiAktif < sesiUjian.length - 1) {
    // Untuk sesi 1 dan 2
    tombolSelesaikan.innerHTML = '<i class="fas fa-arrow-right"></i> Lanjutkan Sesi';
    tombolSelesaikan.style.background = "linear-gradient(45deg, #003366, #002244)";
  } else {
    // Untuk sesi terakhir (sesi 3)
    tombolSelesaikan.innerHTML = '<i class="fas fa-check-circle"></i> Selesaikan Ujian';
    tombolSelesaikan.style.background = "linear-gradient(45deg, #28a745, #218838)";
  }
}

// Fungsi untuk memulai sesi ujian
function mulaiSesi(sesiIndex) {
  sesiAktif = sesiIndex;
  const soalUjianSekarang = sesiUjian[sesiAktif].soal;
  
  // Reset variabel untuk sesi baru
  soalAktif = 1;
  jawabanPengguna = {};
  
  // Update tampilan daftar nomor soal
  daftarNomorSoal.innerHTML = '';
  soalUjianSekarang.forEach((soal) => {
    const li = document.createElement("li");
    li.textContent = soal.nomor;
    li.addEventListener("click", () => tampilkanSoal(soal.nomor));
    daftarNomorSoal.appendChild(li);
  });
  
  // Update info sesi
  infoSesiAktifElement.textContent = `${sesiAktif + 1}`;
  sesiHasilElement.textContent = `${sesiAktif + 1}`;
  
  // Update teks tombol selesaikan berdasarkan sesi
  updateTombolSelesaikan();
  
  // Reset timer
  waktuUjian = 0.5 * 60;
  timerElement.textContent = formatTime(waktuUjian);
  
  // Tampilkan halaman ujian
  sebelumUjian.style.display = "none";
  saatUjian.style.display = "block";
  kolomNomorSoal.style.display = "block";
  hasilUjian.style.display = "none";
  tungguSesiElement.style.display = "none";
  
  // Mulai timer
  clearInterval(timerInterval);
  startTimer();
  
  // Tampilkan soal pertama
  tampilkanSoal(1);
}

// Fungsi untuk menampilkan soal berdasarkan nomor
function tampilkanSoal(nomor) {
  soalAktif = nomor;
  const soalUjianSekarang = sesiUjian[sesiAktif].soal;

  // Update informasi "Soal ke.../Jumlah Soal"
  nomorSoalAktifElement.textContent = nomor;
  totalSoalElement.textContent = soalUjianSekarang.length;

  // Hapus kelas aktif dari semua nomor soal
  const semuaNomor = document.querySelectorAll("#daftar-nomor-soal li");
  semuaNomor.forEach((nomorSoal) => nomorSoal.classList.remove("active"));

  // Tambahkan kelas aktif ke nomor soal yang dipilih
  const nomorAktif = document.querySelector(`#daftar-nomor-soal li:nth-child(${nomor})`);
  if (nomorAktif) {
    nomorAktif.classList.add("active");
  }

  // Tampilkan soal yang dipilih
  const soal = soalUjianSekarang.find((s) => s.nomor === nomor);
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
      jawabanSemuaSesi[`sesi${sesiAktif+1}_soal${soal.nomor}`] = pilihan.value; // Simpan untuk semua sesi
      updateNomorSoalDijawab(soal.nomor); // Update tampilan nomor soal
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
  const soalUjianSekarang = sesiUjian[sesiAktif].soal;
  tombolSebelumnya.disabled = soalAktif === 1; // Nonaktifkan tombol "Sebelumnya" jika soal pertama
  tombolSelanjutnya.disabled = soalAktif === soalUjianSekarang.length; // Nonaktifkan tombol "Selanjutnya" jika soal terakhir
}

// Tombol "Sebelumnya"
tombolSebelumnya.addEventListener("click", () => {
  if (soalAktif > 1) {
    tampilkanSoal(soalAktif - 1);
  }
});

// Tombol "Selanjutnya"
tombolSelanjutnya.addEventListener("click", () => {
  const soalUjianSekarang = sesiUjian[sesiAktif].soal;
  if (soalAktif < soalUjianSekarang.length) {
    tampilkanSoal(soalAktif + 1);
  }
});

// Tombol "Mulai Ujian"
mulaiUjianButton.addEventListener("click", () => {
  mulaiSesi(0); // Mulai dari sesi pertama
  backsound.pause();
  isMusicPlaying = false;
  toggleMusicButton.innerHTML = '<i class="fas fa-volume-mute"></i>';
});

// Fungsi untuk memulai timer
function startTimer() {
  timerInterval = setInterval(() => {
    waktuUjian--; // Kurangi waktu ujian
    timerElement.textContent = formatTime(waktuUjian); // Update tampilan timer

    // Jika waktu habis, hentikan timer dan tampilkan hasil
    if (waktuUjian <= 0) {
      clearInterval(timerInterval);
      hitungHasilUjian();
      
      if (sesiAktif < sesiUjian.length - 1) {
        mulaiTungguSesi();
      } else {
        tampilkanHasilUjian();
      }
    }
  }, 1000); // Update setiap 1 detik
}

// Fungsi untuk memformat waktu (MM:SS)
function formatTime(detik) {
  const menit = Math.floor(detik / 60);
  const sisaDetik = detik % 60;
  return `${menit.toString().padStart(2, "0")}:${sisaDetik.toString().padStart(2, "0")}`;
}

// Tombol "Selesaikan Ujian" / "Lanjutkan Sesi"
tombolSelesaikan.addEventListener("click", () => {
  clearInterval(timerInterval); // Hentikan timer
  hitungHasilUjian(); // Hitung hasil ujian
  
  if (sesiAktif < sesiUjian.length - 1) {
    // Untuk sesi 1 dan 2: tampilkan halaman tunggu sesi
    mulaiTungguSesi();
  } else {
    // Untuk sesi terakhir: tampilkan hasil ujian
    tampilkanHasilUjian();
  }
});

// Fungsi untuk menghitung hasil ujian
function hitungHasilUjian() {
  let benar = 0;
  let salah = 0;
  const soalUjianSekarang = sesiUjian[sesiAktif].soal;

  soalUjianSekarang.forEach((soal) => {
    const jawabanPenggunaSoal = jawabanPengguna[soal.nomor];
    if (jawabanPenggunaSoal === soal.jawaban) {
      benar++;
    } else if (jawabanPenggunaSoal) { // Hanya dihitung salah jika ada jawaban
      salah++;
    }
  });

  // Update nilai di halaman hasil
  totalBenar.textContent = benar;
  totalSalah.textContent = salah;
  nilai.textContent = ((benar / soalUjianSekarang.length) * 100).toFixed(2); // Hitung nilai dalam persentase
  sesiHasilElement.textContent = `${sesiAktif + 1}`;

  // Tampilkan kata motivasi acak
  motivasi.textContent = kataMotivasi[Math.floor(Math.random() * kataMotivasi.length)];
}

// Fungsi untuk menampilkan halaman hasil ujian
function tampilkanHasilUjian() {
  saatUjian.style.display = "none";
  hasilUjian.style.display = "block";
  kolomNomorSoal.style.display = "none";
}

// Fungsi untuk menampilkan halaman tunggu sesi
function mulaiTungguSesi() {
  hasilUjian.style.display = "none";
  tungguSesiElement.style.display = "flex";
  
  let countdown = 3;
  countdownElement.textContent = countdown;
  
  const countdownInterval = setInterval(() => {
    countdown--;
    countdownElement.textContent = countdown;
    
    if (countdown <= 0) {
      clearInterval(countdownInterval);
      mulaiSesi(sesiAktif + 1); // Mulai sesi berikutnya
    }
  }, 1000);
}

// Tombol "Ulangi Ujian"
ulangiUjianButton.addEventListener("click", () => {
  // Reset semua jawaban
  jawabanPengguna = {};
  jawabanSemuaSesi = {};
  
  // Kembali ke halaman awal
  hasilUjian.style.display = "none";
  sebelumUjian.style.display = "block";
  kolomNomorSoal.style.display = "none";
  tungguSesiElement.style.display = "none";
  
  // Reset tampilan soal
  soalAktif = 1;
  
  // Reset musik ke awal dan putar ulang
  backsound.currentTime = 0;
  backsound.play();
  isMusicPlaying = true;
  toggleMusicButton.innerHTML = '<i class="fas fa-volume-up"></i>';
  
  // Reset timer
  waktuUjian = 0.5 * 60;
  timerElement.textContent = formatTime(waktuUjian);
  clearInterval(timerInterval);
});