const mahasiswa = {
    nama: "Ahmad",
    umur: 20,
    jurusan: "Informatika",
    perkenalan(){
        return `Hallo, saya ${this.nama}, umur saya ${this.umur} tahun jurusan ${this.jurusan}`;
    }
}

console.log(`Nama: ${mahasiswa.nama}`);
console.log(`Umur: ${mahasiswa["umur"]}`);
console.log(mahasiswa.perkenalan()) 
/**
 * `{ key: value }` untuk properti
 * `namaMethod() { ... }` untuk method
 * `this` merujuk ke object yang memanggil method
 * Akses dengan [dot notation] (`obj.key`) atau [bracket notation] (`obj["key"]`)
 * 
 */