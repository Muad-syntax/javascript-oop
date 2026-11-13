class RekeningBank {
    #saldo = 0; // private filed, tidak bisa diakses dari luar

    constructor(pemilik, saldoAwal){
        this.pemilik = pemilik;
        this.#saldo = saldoAwal;
    }

    setor(jumlah){
        if (jumlah <= 0) throw new Error("Jumlah harus lebih dari 0");
        this.#saldo += jumlah;
    }

    tarik(jumlah){
        if (jumlah > this.#saldo) throw new Error("Saldo tidak cukup");
        this.#saldo -= jumlah;
    }

    get saldo(){
        return this.#saldo;
    }
}

const rek = new RekeningBank("Ahmad", 1000000);
rek.tarik(50000);
console.log(rek.saldo)