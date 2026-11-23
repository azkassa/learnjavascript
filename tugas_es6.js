// const {nama,merk,narga} = aaftarbarang;
const daftarBarang = [
  { nama: "Iphone", merk: "Apple", harga: 15000000 },
  { nama: "Album", merk: "goodnight electric", harga: 250000 },
  { nama: "Drum", merk: "Yamaha", harga: 75000 } ]

const hasilBarang = daftarBarang.map(({ nama, merk, harga }) => {

  if (harga > 100000) {
    return `Harga ${nama} (${merk}) adalah Rp${harga.toLocaleString('id-ID')} - Kategori: Di atas 100.000 (Barang Mewah)`;
  } else {
    return `Harga ${nama} (${merk}) adalah Rp${harga.toLocaleString('id-ID')} - Kategori: Standar`;
  }
});

console.log(hasilBarang);