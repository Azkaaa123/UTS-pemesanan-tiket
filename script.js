function hitungHarga(kategori, hari) {
    let harga = 0;
    if (kategori === "Dewasa") {
        harga = 50000;
    } else {
        harga = 30000;
    }
    if (hari === "Akhir Pekan") {
        harga = harga + 10000;
    }
    return harga;
}

function hitungDiskon(jumlah) {
    if (jumlah < 5) {
        return 0;
    } else if (jumlah >= 5 && jumlah <= 9) {
        return 10;
    } else {
        return 15;
    }
}

function hitungTiket() {
    let nama = document.getElementById("nama").value;
    let jumlah = Number(document.getElementById("jumlah").value);
    let kategori = document.getElementById("kategori").value;
    let hari = document.getElementById("hari").value;

    if (nama === "" || jumlah <= 0) {
        document.getElementById("hasil").innerHTML = "Lengkapi data dengan benar!";
        document.getElementById("simulasi").innerHTML = "";
        return;
    }

    let hargaPerTiket = hitungHarga(kategori, hari);
    let subtotal = hargaPerTiket * jumlah;
    let persenDiskon = hitungDiskon(jumlah);
    let nominalDiskon = subtotal * persenDiskon / 100;
    let totalBayar = subtotal - nominalDiskon;

    document.getElementById("hasil").innerHTML =
        "Harga per tiket Rp" + hargaPerTiket +
        ", subtotal Rp" + subtotal +
        ", diskon " + persenDiskon + "% (Rp" + nominalDiskon + ")" +
        ", total bayar Rp" + totalBayar;

    let teksSimulasi = "Simulasi untuk harga per tiket Rp" + hargaPerTiket + ": ";
    for (let i = 1; i <= 5; i++) {
        teksSimulasi += i + " tiket = Rp" + (hargaPerTiket * i);
        if (i < 5) teksSimulasi += ", ";
    }
    document.getElementById("simulasi").innerHTML = teksSimulasi;
}