let namabarang = document.getElementById("nama-barang");
let jumlah = document.getElementById("jumlah");
let keterangan = document.getElementById("keterangan");

function simpan() {
    console.log(namabarang.value);
    console.log(jumlah.value);
    console.log(keterangan.value);

    if (localStorage.getItem("barang") === null) {
        
        localStorage.setItem("barang", "[]");
    }

    let data = JSON.parse(localStorage.getItem("barang"))
    console.log(data)

    data.push({
        namabarang: namabarang.value,
        jumlah: jumlah.value,
        keterangan: keterangan.value
    })
    console.log(data)

   
    localStorage.setItem("barang", JSON.stringify(data));
    
    namabarang.value = "";
    jumlah.value = "";
    keterangan.value = "";

    
    tampil()
}

function tampil() {

    let hasil = JSON.parse(localStorage.getItem("barang"))
   
    document.getElementById("list-barang").innerHTML = ""
    hasil.forEach(element => {
        //console.log(element)
        document.getElementById("list-barang").innerHTML += 
        `<div class="col-lg-4 col-md-6 col-sm-12">
        <h4 class="text-primary text-center">${element.namabarang}</h4>
        <h6 class="text-success text-center">${element.jumlah}</h6>
        <p class="text-muted text-center">${element.keterangan}</p>
        </div>`
    });
}

//jalankan fungsi tampil()
tampil()