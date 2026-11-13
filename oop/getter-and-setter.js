class Lingkaran {
    #jariJari;

    constructor(jariJari){
        this.jariJari = jariJari; // memanggil setter
    }

    get jariJari() {
        return this.#jariJari;
    }

    set jariJari(nilai){
        if (nilai <= 0) throw new Error("jari-jari harus positif");
        this.#jariJari = nilai;
    }

    get luas(){
        return Math.PI * this.#jariJari ** 2;
    }
}

const satu = new Lingkaran(70);
console.log(satu.luas.toFixed(2)) // 153.94 (dipanggil tanpa tanda kurung)
satu.jariJari = 11;               // memanggil setter