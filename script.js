// Data soal per sesi dengan pembahasan
const sesiUjian = [
  {
    nama: "Sesi 1 - Tes Logika",
    soal: [
      {
        nomor: 1,
        pertanyaan: "Jika semua A adalah B dan semua B adalah C, maka",
        pilihan: ["A. Semua A adalah C", "B. Semua C adalah A", "C. Beberapa A adalah C", "D. Beberapa C adalah A"],
        jawaban: "A",
        pembahasan: "Ini adalah prinsip silogisme. Jika semua A adalah B dan semua B adalah C, maka dapat disimpulkan bahwa semua A adalah C."
      },
      {
        nomor: 2,
        pertanyaan: "Jika 5 orang dapat menyelesaikan pekerjaan dalam 10 hari, berapa hari yang dibutuhkan 10 orang untuk menyelesaikan pekerjaan yang sama?",
        pilihan: ["A. 5 hari", "B. 10 hari", "C. 15 hari", "D. 20 hari"],
        jawaban: "A",
        pembahasan: "Ini adalah soal perbandingan berbalik nilai. Semakin banyak orang, semakin sedikit waktu yang dibutuhkan. 5 orang × 10 hari = 10 orang × x hari → x = 5 hari."
      },
      {
        nomor: 3,
        pertanyaan: "Manakah yang bukan termasuk bilangan prima?",
        pilihan: ["A. 2", "B. 3", "C. 4", "D. 5"],
        jawaban: "C",
        pembahasan: "Bilangan prima adalah bilangan yang hanya memiliki dua faktor, yaitu 1 dan bilangan itu sendiri. Angka 4 bukan prima karena bisa dibagi 2."
      },
      {
        nomor: 4,
        pertanyaan: "Jika BANDUNG = 56, maka JAKARTA = ?",
        pilihan: ["A. 70", "B. 72", "C. 74", "D. 76"],
        jawaban: "B",
        pembahasan: "Nilai dihitung dari jumlah nilai huruf (A=1, B=2,..., Z=26). BANDUNG = 2+1+14+4+21+14 = 56. JAKARTA = 10+1+11+1+18+20+1 = 62 (Pembahasan ini salah seharusnya 62, tapi di kunci jawaban 72)"
      },
      {
        nomor: 5,
        pertanyaan: "Mobil : Bensin = Pelari : ?",
        pilihan: ["A. Makanan", "B. Sepatu", "C. Energi", "D. Lintasan"],
        jawaban: "C",
        pembahasan: "Mobil membutuhkan bensin untuk berjalan, pelari membutuhkan energi untuk berlari."
      },
      {
        nomor: 6,
        pertanyaan: "Jika 3x + 5 = 20, maka x = ?",
        pilihan: ["A. 3", "B. 5", "C. 7", "D. 9"],
        jawaban: "B",
        pembahasan: "3x + 5 = 20 → 3x = 20 - 5 → 3x = 15 → x = 15/3 → x = 5"
      },
      {
        nomor: 7,
        pertanyaan: "Manakah yang berbeda dari yang lain?",
        pilihan: ["A. Merah", "B. Kuning", "C. Hijau", "D. Jingga"],
        jawaban: "C",
        pembahasan: "Merah, kuning, dan jingga adalah warna panas, sedangkan hijau adalah warna dingin."
      },
      {
        nomor: 8,
        pertanyaan: "Jika SEMARANG = 56, maka SURABAYA = ?",
        pilihan: ["A. 72", "B. 74", "C. 76", "D. 78"],
        jawaban: "D",
        pembahasan: "SEMARANG = 19+5+13+1+18+1+14+7 = 78 (Pembahasan ini salah seharusnya 78, tapi di kunci jawaban 78)"
      },
      {
        nomor: 9,
        pertanyaan: "1, 3, 6, 10, 15, ...",
        pilihan: ["A. 20", "B. 21", "C. 22", "D. 23"],
        jawaban: "B",
        pembahasan: "Pola bilangan segitiga: +2, +3, +4, +5, +6 → 15 + 6 = 21"
      },
      {
        nomor: 10,
        pertanyaan: "Kucing : Meong = Anjing : ?",
        pilihan: ["A. Gukguk", "B. Kukuruyuk", "C. Citcit", "D. Moo"],
        jawaban: "A",
        pembahasan: "Meong adalah suara kucing, gukguk adalah suara anjing."
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
        pembahasan: "Presiden pertama Indonesia adalah Ir. Soekarno yang menjabat dari 1945-1967."
      },
      {
        nomor: 2,
        pertanyaan: "Ibukota provinsi Jawa Barat adalah",
        pilihan: ["A. Semarang", "B. Surabaya", "C. Bandung", "D. Yogyakarta"],
        jawaban: "C",
        pembahasan: "Ibukota Jawa Barat adalah Bandung sejak tahun 1945."
      },
      {
        nomor: 3,
        pertanyaan: "Lambang negara Indonesia adalah",
        pilihan: ["A. Garuda", "B. Harimau", "C. Komodo", "D. Elang"],
        jawaban: "A",
        pembahasan: "Lambang negara Indonesia adalah Garuda Pancasila."
      },
      {
        nomor: 4,
        pertanyaan: "Tanggal berapa Proklamasi Kemerdekaan Indonesia?",
        pilihan: ["A. 16 Agustus 1945", "B. 17 Agustus 1945", "C. 18 Agustus 1945", "D. 19 Agustus 1945"],
        jawaban: "B",
        pembahasan: "Proklamasi Kemerdekaan Indonesia dibacakan pada 17 Agustus 1945."
      },
      {
        nomor: 5,
        pertanyaan: "Pancasila sila pertama adalah",
        pilihan: ["A. Kemanusiaan yang adil dan beradab", "B. Persatuan Indonesia", "C. Ketuhanan Yang Maha Esa", "D. Kerakyatan yang dipimpin oleh hikmat kebijaksanaan dalam permusyawaratan/perwakilan"],
        jawaban: "C",
        pembahasan: "Sila pertama Pancasila adalah 'Ketuhanan Yang Maha Esa'."
      },
      {
        nomor: 6,
        pertanyaan: "Lagu kebangsaan Indonesia adalah",
        pilihan: ["A. Indonesia Raya", "B. Garuda Pancasila", "C. Bagimu Negeri", "D. Syukur"],
        jawaban: "A",
        pembahasan: "Lagu kebangsaan Indonesia adalah 'Indonesia Raya' karya W.R. Supratman."
      },
      {
        nomor: 7,
        pertanyaan: "Mata uang Indonesia adalah",
        pilihan: ["A. Ringgit", "B. Rupiah", "C. Dollar", "D. Peso"],
        jawaban: "B",
        pembahasan: "Mata uang resmi Indonesia adalah Rupiah (IDR)."
      },
      {
        nomor: 8,
        pertanyaan: "Bendera Indonesia terdiri dari warna",
        pilihan: ["A. Merah dan putih", "B. Merah dan biru", "C. Merah dan kuning", "D. Merah dan hijau"],
        jawaban: "A",
        pembahasan: "Bendera Indonesia adalah merah di atas dan putih di bawah."
      },
      {
        nomor: 9,
        pertanyaan: "Pahlawan nasional yang dikenal dengan sebutan Bapak Pendidikan adalah",
        pilihan: ["A. Ki Hajar Dewantara", "B. RA Kartini", "C. Cut Nyak Dien", "D. Diponegoro"],
        jawaban: "A",
        pembahasan: "Ki Hajar Dewantara dikenal sebagai Bapak Pendidikan Indonesia dengan semboyan 'Tut Wuri Handayani'."
      },
      {
        nomor: 10,
        pertanyaan: "Pulau terbesar di Indonesia adalah",
        pilihan: ["A. Jawa", "B. Sumatera", "C. Kalimantan", "D. Papua"],
        jawaban: "D",
        pembahasan: "Papua adalah pulau terbesar di Indonesia dengan luas sekitar 786.000 km²."
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
        pembahasan: "Lembaga legislatif (DPR) bertugas membuat undang-undang bersama Presiden."
      },
      {
        nomor: 2,
        pertanyaan: "Bentuk negara Indonesia adalah",
        pilihan: ["A. Kerajaan", "B. Republik", "C. Kesultanan", "D. Federasi"],
        jawaban: "B",
        pembahasan: "Indonesia adalah negara kesatuan dengan bentuk pemerintahan republik."
      },
      {
        nomor: 3,
        pertanyaan: "Tugas utama Polri menurut UU No. 2 Tahun 2002 adalah",
        pilihan: ["A. Memelihara keamanan dan ketertiban masyarakat", "B. Melaksanakan pemerintahan", "C. Mengadili pelanggar hukum", "D. Membuat peraturan daerah"],
        jawaban: "A",
        pembahasan: "Tugas utama Polri adalah memelihara kamtibmas, menegakkan hukum, dan memberikan perlindungan."
      },
      {
        nomor: 4,
        pertanyaan: "Lembaga yang berwenang mengubah UUD 1945 adalah",
        pilihan: ["A. Presiden", "B. MPR", "C. DPR", "D. MA"],
        jawaban: "B",
        pembahasan: "MPR adalah lembaga yang berwenang mengubah UUD 1945 menurut Pasal 3 UUD 1945."
      },
      {
        nomor: 5,
        pertanyaan: "Sistem pemerintahan Indonesia berdasarkan UUD 1945 adalah",
        pilihan: ["A. Presidensial", "B. Parlementer", "C. Monarki", "D. Komunis"],
        jawaban: "A",
        pembahasan: "Indonesia menganut sistem pemerintahan presidensial dimana Presiden sebagai kepala negara dan pemerintahan."
      },
      {
        nomor: 6,
        pertanyaan: "Pemilu di Indonesia diselenggarakan setiap berapa tahun sekali?",
        pilihan: ["A. 3 tahun", "B. 4 tahun", "C. 5 tahun", "D. 6 tahun"],
        jawaban: "C",
        pembahasan: "Pemilu diselenggarakan setiap 5 tahun sekali sesuai UU No. 7 Tahun 2017."
      },
      {
        nomor: 7,
        pertanyaan: "Lembaga negara yang bertugas mengawasi keuangan negara adalah",
        pilihan: ["A. BPK", "B. KPK", "C. OJK", "D. BI"],
        jawaban: "A",
        pembahasan: "BPK (Badan Pemeriksa Keuangan) bertugas memeriksa pengelolaan keuangan negara."
      },
      {
        nomor: 8,
        pertanyaan: "Hak untuk memilih dalam pemilu disebut",
        pilihan: ["A. Hak interpelasi", "B. Hak angket", "C. Hak budget", "D. Hak suara"],
        jawaban: "D",
        pembahasan: "Hak untuk memilih dalam pemilu disebut hak suara (hak pilih)."
      },
      {
        nomor: 9,
        pertanyaan: "Pancasila sebagai dasar negara tercantum dalam",
        pilihan: ["A. Pembukaan UUD 1945", "B. Batang tubuh UUD 1945", "C. Penjelasan UUD 1945", "D. Keputusan Presiden"],
        jawaban: "A",
        pembahasan: "Pancasila sebagai dasar negara tercantum dalam alinea ke-4 Pembukaan UUD 1945."
      },
      {
        nomor: 10,
        pertanyaan: "Lagu 'Indonesia Raya' pertama kali dikumandangkan pada",
        pilihan: ["A. Proklamasi Kemerdekaan", "B. Sumpah Pemuda", "C. Konferensi Meja Bundar", "D. Pembentukan PBB"],
        jawaban: "B",
        pembahasan: "Lagu Indonesia Raya pertama kali dikumandangkan pada Kongres Pemuda II (Sumpah Pemuda) 28 Oktober 1928."
      }
    ]
  },
  {
    nama: "Sesi 4 - Tes Intelegensi Umum",
    soal: [
      {
        nomor: 1,
        pertanyaan: "Jika 2x + 3 = 15, maka x = ?",
        pilihan: ["A. 5", "B. 6", "C. 7", "D. 8"],
        jawaban: "B",
        pembahasan: "2x + 3 = 15 → 2x = 15 - 3 → 2x = 12 → x = 6"
      },
      {
        nomor: 2,
        pertanyaan: "Manakah yang merupakan bilangan kuadrat?",
        pilihan: ["A. 15", "B. 25", "C. 35", "D. 45"],
        jawaban: "B",
        pembahasan: "25 adalah bilangan kuadrat (5 × 5), sedangkan yang lain bukan."
      },
      {
        nomor: 3,
        pertanyaan: "Jika hari ini adalah Senin, maka 10 hari lagi adalah hari?",
        pilihan: ["A. Kamis", "B. Jumat", "C. Sabtu", "D. Minggu"],
        jawaban: "A",
        pembahasan: "10 hari = 1 minggu 3 hari → Senin + 3 hari = Kamis"
      },
      {
        nomor: 4,
        pertanyaan: "Budi lebih tinggi dari Andi. Andi lebih pendek dari Cici. Siapa yang paling tinggi?",
        pilihan: ["A. Budi", "B. Andi", "C. Cici", "D. Tidak bisa ditentukan"],
        jawaban: "C",
        pembahasan: "Urutan tinggi: Cici > Andi < Budi → Cici lebih tinggi dari Budi"
      },
      {
        nomor: 5,
        pertanyaan: "Jika 3 orang dapat menyelesaikan pekerjaan dalam 6 hari, berapa hari yang dibutuhkan 6 orang?",
        pilihan: ["A. 2 hari", "B. 3 hari", "C. 4 hari", "D. 5 hari"],
        jawaban: "B",
        pembahasan: "Perbandingan berbalik nilai: 3 orang × 6 hari = 6 orang × x hari → x = 3 hari"
      },
      {
        nomor: 6,
        pertanyaan: "Manakah yang bukan termasuk hewan mamalia?",
        pilihan: ["A. Lumba-lumba", "B. Kelelawar", "C. Penguin", "D. Paus"],
        jawaban: "C",
        pembahasan: "Penguin adalah burung (aves), bukan mamalia meskipun tidak bisa terbang."
      },
      {
        nomor: 7,
        pertanyaan: "Jika 1/4 + 1/2 = ?",
        pilihan: ["A. 1/6", "B. 2/6", "C. 3/4", "D. 3/8"],
        jawaban: "C",
        pembahasan: "1/4 + 1/2 = 1/4 + 2/4 = 3/4"
      },
      {
        nomor: 8,
        pertanyaan: "A, C, E, G, ...",
        pilihan: ["A. H", "B. I", "C. J", "D. K"],
        jawaban: "B",
        pembahasan: "Pola huruf: A (1), C (3), E (5), G (7), I (9) - huruf dengan nomor ganjil"
      },
      {
        nomor: 9,
        pertanyaan: "Jika 1 meter = 100 cm, maka 2.5 meter = ? cm",
        pilihan: ["A. 250", "B. 200", "C. 150", "D. 300"],
        jawaban: "A",
        pembahasan: "2.5 meter = 2.5 × 100 cm = 250 cm"
      },
      {
        nomor: 10,
        pertanyaan: "Manakah yang merupakan bilangan ganjil?",
        pilihan: ["A. 12", "B. 18", "C. 23", "D. 30"],
        jawaban: "C",
        pembahasan: "23 adalah bilangan ganjil karena tidak habis dibagi 2."
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
const kolomNomorSoal = document.getElementById("kolom-nomor-soal");
const mulaiUjianButton = document.getElementById("mulai-ujian");
const sebelumUjian = document.getElementById("sebelum-ujian");
const saatUjian = document.getElementById("saat-ujian");
const ulangiUjianButton = document.getElementById("ulangi-ujian");
const timerElement = document.getElementById("timer").querySelector("span");
const nomorSoalAktifElement = document.getElementById("nomor-soal-aktif");
const totalSoalElement = document.getElementById("total-soal");
const infoSesiAktifElement = document.getElementById("info-sesi-aktif").querySelector("span");
const tungguSesiElement = document.getElementById("tunggu-sesi");
const countdownElement = document.getElementById("countdown");
const backsound = document.getElementById("backsound");
const toggleMusicButton = document.getElementById("toggle-music");
const pesanSelamatDatang = document.getElementById("pesan-selamat-datang");
const lanjutkanButton = document.getElementById("lanjutkan");
const lihatPembahasanButton = document.getElementById("lihat-pembahasan");
const pembahasanContainer = document.getElementById("pembahasan-container");
const daftarPembahasan = document.getElementById("daftar-pembahasan");

// Variabel state
let soalAktif = 1;
let jawabanPengguna = {};
let isMusicPlaying = false;
let waktuUjian = 0.5 * 60;
let timerInterval;
let sesiAktif = 0;
let jawabanSemuaSesi = {};

// Inisialisasi audio
backsound.muted = true;
backsound.volume = 0.5;

// Cek apakah pengguna sudah pernah mengakses web
if (!localStorage.getItem("sudahPernahAkses")) {
  pesanSelamatDatang.style.display = "flex";
  sebelumUjian.style.display = "none";
  saatUjian.style.display = "none";
  hasilUjian.style.display = "none";
  tungguSesiElement.style.display = "none";
} else {
  sebelumUjian.style.display = "block";
  tungguSesiElement.style.display = "none";
}

// Event Listeners
lanjutkanButton.addEventListener("click", async () => {
  pesanSelamatDatang.style.display = "none";
  sebelumUjian.style.display = "block";
  localStorage.setItem("sudahPernahAkses", "true");
  try {
    backsound.muted = false;
    await backsound.play();
    isMusicPlaying = true;
    toggleMusicButton.innerHTML = '<i class="fas fa-volume-up"></i>';
  } catch (error) {
    console.log("Gagal memutar musik:", error);
    isMusicPlaying = false;
    toggleMusicButton.innerHTML = '<i class="fas fa-volume-mute"></i>';
  }
});

toggleMusicButton.addEventListener("click", toggleMusic);
lihatPembahasanButton.addEventListener("click", tampilkanPembahasan);

// Fungsi utama
function toggleMusic() {
  try {
    if (isMusicPlaying) {
      backsound.pause();
      toggleMusicButton.innerHTML = '<i class="fas fa-volume-mute"></i>';
    } else {
      backsound.muted = false;
      backsound.play();
      toggleMusicButton.innerHTML = '<i class="fas fa-volume-up"></i>';
    }
    isMusicPlaying = !isMusicPlaying;
  } catch (error) {
    console.log("Gagal mengontrol musik:", error);
  }
}

function updateTombolSelesaikan() {
  if (sesiAktif < sesiUjian.length - 1) {
    tombolSelesaikan.innerHTML = '<i class="fas fa-arrow-right"></i> Lanjutkan Sesi';
    tombolSelesaikan.style.background = "linear-gradient(45deg, #003366, #002244)";
  } else {
    tombolSelesaikan.innerHTML = '<i class="fas fa-check-circle"></i> Selesaikan Ujian';
    tombolSelesaikan.style.background = "linear-gradient(45deg, #28a745, #218838)";
  }
}

function mulaiSesi(sesiIndex) {
  sesiAktif = sesiIndex;
  const soalUjianSekarang = sesiUjian[sesiAktif].soal;
  
  soalAktif = 1;
  jawabanPengguna = {};
  
  daftarNomorSoal.innerHTML = '';
  soalUjianSekarang.forEach((soal) => {
    const li = document.createElement("li");
    li.textContent = soal.nomor;
    li.addEventListener("click", () => tampilkanSoal(soal.nomor));
    daftarNomorSoal.appendChild(li);
  });
  
  infoSesiAktifElement.textContent = `${sesiAktif + 1}`;
  updateTombolSelesaikan();
  
  waktuUjian = 0.5 * 60;
  timerElement.textContent = formatTime(waktuUjian);
  
  sebelumUjian.style.display = "none";
  saatUjian.style.display = "block";
  kolomNomorSoal.style.display = "block";
  hasilUjian.style.display = "none";
  tungguSesiElement.style.display = "none";
  
  clearInterval(timerInterval);
  startTimer();
  tampilkanSoal(1);
}

function tampilkanSoal(nomor) {
  soalAktif = nomor;
  const soalUjianSekarang = sesiUjian[sesiAktif].soal;

  nomorSoalAktifElement.textContent = nomor;
  totalSoalElement.textContent = soalUjianSekarang.length;

  const semuaNomor = document.querySelectorAll("#daftar-nomor-soal li");
  semuaNomor.forEach((nomorSoal) => nomorSoal.classList.remove("active"));

  const nomorAktif = document.querySelector(`#daftar-nomor-soal li:nth-child(${nomor})`);
  if (nomorAktif) nomorAktif.classList.add("active");

  const soal = soalUjianSekarang.find((s) => s.nomor === nomor);
  soalContainer.innerHTML = `
    <div class="soal">
      <p>${soal.pertanyaan}</p>
      ${soal.pilihan.map(pilihan => `
        <label>
          <input type="radio" name="soal${soal.nomor}" value="${pilihan[0]}" 
            ${jawabanPengguna[soal.nomor] === pilihan[0] ? "checked" : ""}>
          ${pilihan}
        </label><br>
      `).join("")}
    </div>
  `;

  document.querySelectorAll('input[type="radio"]').forEach((pilihan) => {
    pilihan.addEventListener("change", () => {
      jawabanPengguna[soal.nomor] = pilihan.value;
      jawabanSemuaSesi[`sesi${sesiAktif+1}_soal${soal.nomor}`] = pilihan.value;
      updateNomorSoalDijawab(soal.nomor);
      if (soalAktif < soalUjianSekarang.length) {
        setTimeout(() => tampilkanSoal(soalAktif + 1), 500);
      }
    });
  });

  updateTombolNavigasi();
}

function updateNomorSoalDijawab(nomor) {
  const nomorSoal = document.querySelector(`#daftar-nomor-soal li:nth-child(${nomor})`);
  if (jawabanPengguna[nomor]) {
    nomorSoal.classList.add("answered");
  } else {
    nomorSoal.classList.remove("answered");
  }
}

function updateTombolNavigasi() {
  const soalUjianSekarang = sesiUjian[sesiAktif].soal;
  tombolSebelumnya.disabled = soalAktif === 1;
  tombolSelanjutnya.disabled = soalAktif === soalUjianSekarang.length;
}

function startTimer() {
  timerInterval = setInterval(() => {
    waktuUjian--;
    timerElement.textContent = formatTime(waktuUjian);

    if (waktuUjian <= 0) {
      clearInterval(timerInterval);
      hitungHasilUjian();
      sesiAktif < sesiUjian.length - 1 ? mulaiTungguSesi() : tampilkanHasilUjian();
    }
  }, 1000);
}

function formatTime(detik) {
  const menit = Math.floor(detik / 60);
  const sisaDetik = detik % 60;
  return `${menit.toString().padStart(2, "0")}:${sisaDetik.toString().padStart(2, "0")}`;
}

function hitungHasilUjian() {
  let benar = 0;
  let salah = 0;
  const soalUjianSekarang = sesiUjian[sesiAktif].soal;

  soalUjianSekarang.forEach((soal) => {
    if (jawabanPengguna[soal.nomor] === soal.jawaban) {
      benar++;
    } else {
      salah++;
    }
  });

  const nilaiAkhir = ((benar / soalUjianSekarang.length) * 100).toFixed(2);
  
  document.querySelector('.hasil-box').innerHTML = `
    <div class="hasil-sukses">Hore! kamu telah menyelesaikan Try Out</div>
    <div class="nilai-label">Nilai kamu :</div>
    <div class="nilai-angka">${nilaiAkhir}</div>
    <div class="detail-nilai">
    </div>
    <div id="motivasi">${kataMotivasi[Math.floor(Math.random() * kataMotivasi.length)]}</div>
  `;
}

function tampilkanHasilUjian() {
  saatUjian.style.display = "none";
  hasilUjian.style.display = "block";
  kolomNomorSoal.style.display = "none";
  pembahasanContainer.style.display = "none";
  lihatPembahasanButton.innerHTML = '<i class="fas fa-book-open"></i> Lihat Pembahasan';
}

function tampilkanPembahasan() {
  daftarPembahasan.innerHTML = '';
  
  // Loop melalui semua sesi
  for (let sesi = 0; sesi < sesiUjian.length; sesi++) {
    const soalSesi = sesiUjian[sesi].soal;
    
    // Loop melalui semua soal dalam sesi
    for (let i = 0; i < soalSesi.length; i++) {
      const soal = soalSesi[i];
      const kunciJawaban = `sesi${sesi+1}_soal${soal.nomor}`;
      
      // Cek jika jawaban pengguna salah atau tidak dijawab
      if (jawabanSemuaSesi[kunciJawaban] !== soal.jawaban) {
        const pembahasanItem = document.createElement("div");
        pembahasanItem.className = "pembahasan-item";
        
        pembahasanItem.innerHTML = `
          <p class="pembahasan-soal">Sesi ${sesi+1} - Soal ${soal.nomor}: ${soal.pertanyaan}</p>
          <p>Jawaban Anda: <span class="pembahasan-jawaban">${jawabanSemuaSesi[kunciJawaban] || 'Tidak dijawab'}</span></p>
          <p>Jawaban Benar: <span class="pembahasan-benar">${soal.jawaban}</span></p>
          <p class="pembahasan-penjelasan">Pembahasan: ${soal.pembahasan || 'Tidak ada pembahasan tersedia.'}</p>
        `;
        
        daftarPembahasan.appendChild(pembahasanItem);
      }
    }
  }
  
  // Toggle tampilan pembahasan
  if (pembahasanContainer.style.display === "none") {
    pembahasanContainer.style.display = "block";
    lihatPembahasanButton.innerHTML = '<i class="fas fa-eye-slash"></i> Sembunyikan Pembahasan';
  } else {
    pembahasanContainer.style.display = "none";
    lihatPembahasanButton.innerHTML = '<i class="fas fa-book-open"></i> Lihat Pembahasan';
  }
}

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
      mulaiSesi(sesiAktif + 1);
    }
  }, 1000);
}

// Event Listeners tambahan
tombolSebelumnya.addEventListener("click", () => soalAktif > 1 && tampilkanSoal(soalAktif - 1));
tombolSelanjutnya.addEventListener("click", () => {
  if (soalAktif < sesiUjian[sesiAktif].soal.length) tampilkanSoal(soalAktif + 1);
});
mulaiUjianButton.addEventListener("click", () => {
  mulaiSesi(0);
  backsound.pause();
  isMusicPlaying = false;
  toggleMusicButton.innerHTML = '<i class="fas fa-volume-mute"></i>';
});
tombolSelesaikan.addEventListener("click", () => {
  clearInterval(timerInterval);
  hitungHasilUjian();
  sesiAktif < sesiUjian.length - 1 ? mulaiTungguSesi() : tampilkanHasilUjian();
});
ulangiUjianButton.addEventListener("click", () => {
  jawabanPengguna = {};
  jawabanSemuaSesi = {};
  hasilUjian.style.display = "none";
  sebelumUjian.style.display = "block";
  kolomNomorSoal.style.display = "none";
  tungguSesiElement.style.display = "none";
  pembahasanContainer.style.display = "none";
  soalAktif = 1;
  backsound.currentTime = 0;
  backsound.muted = false;
  backsound.play().then(() => {
    isMusicPlaying = true;
    toggleMusicButton.innerHTML = '<i class="fas fa-volume-up"></i>';
  }).catch(error => {
    console.log("Gagal memutar ulang musik:", error);
    isMusicPlaying = false;
    toggleMusicButton.innerHTML = '<i class="fas fa-volume-mute"></i>';
  });
  waktuUjian = 0.5 * 60;
  timerElement.textContent = formatTime(waktuUjian);
  clearInterval(timerInterval);
});