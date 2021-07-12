function cetakNama(nama){
    return `Hey, nama saya ${nama}`;
}

const IPK = 3.49;

const mahasiswa = {
    nama : 'Nanda Saputra Pradana',
    umur : 22,
    Method_cetakMHs(){
        return `Saya Mahasiswa, Nama saya ${this.nama} saya berumur ${this.umur} Tahun.`;
    },
};

class Hewan{
    constructor(){
        console.log(' Class Hewan telah dibuat!!');
    }
}

// module.exports ={
//     cetakNama: cetakNama,
//     IPK: IPK,
//     mahasiswa: mahasiswa,
//     Hewan: Hewan,
// };

module.exports = {cetakNama,  IPK, mahasiswa, Hewan };