// Syntax Dasar
/*
class NamaClass {
    constructor(parameter1, parameter2){
        this.properti1 = parameter1;
        this.properti2 = parameter2;
    }

    namaMethode(){
        // kode
    }
}
const object = new NamaClass(nilai1, nilai2);
*/

// Contoh
class Mahasiswa {
    constructor(nama, umur, jurusan){
        this.nama = nama;
        this.umur = umur;
        this.jurusan = jurusan;
    }

    perkenalan() {
        return `Hallo, saya ${this.nama}, jurusan ${this.jurusan}`;
    }

    ulangTahun() {
        this.umur++;
        return `${this.nama} sekarang berumur ${this.umur}`;
    }
}

const mhs1 = new Mahasiswa("Ahmad", 20, "Informatika");
const mhs2 = new Mahasiswa("Maliki", 22, "Sistem Informasi");

console.log(mhs1.perkenalan());
console.log(mhs2.ulangTahun()); 

/**
 * class: Mendeklarasikan blueprint
 * constructor: Method khusus yang otomatis dipanggil saat [new] dipakai untuk inisialisasi properti
 * this: Merujuk ke instance (object) yang sedang dibuat atau dipakai
 * new: Membuat instance baru dari class
 * Method: Fungsi di dalam class (tanpa keyword [function])
 */