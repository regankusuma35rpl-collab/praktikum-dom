// 1. Memilih elemen
const judul = document.getElementById("judul");
const kelas = document.getElementById("kelas");
kelas.style.fontSize = "30px";
 
// 2. Melihat elemen di Console
console.log(judul);
console.log(kelas);
 
// 3. Mengubah isi teks
judul.textContent = "Judul Sudah Diubah!";
 
// 4. Mengubah warna
judul.style.color = "crimson";
 
// 5. Mengubah isi dengan tag HTML
sapaan.innerHTML = "Halo, saya sedang <b>belajar DOM</b>!";
 
// 6. Mencoba id yang tidak ada
const hantu = document.getElementById("tidakada");
console.log(hantu);
hantu.textContent = "Hallo";

