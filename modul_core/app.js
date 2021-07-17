const contacts = require('./contacts');

const main = async () => {
    const nama = await contacts.tulisPertanyaan('Masukkan Nama anda : ');
    const email = await contacts.tulisPertanyaan('Masukkan Email anda : ');
    const noHP = await contacts.tulisPertanyaan('Masukkan No HP anda : ');
    
    contacts.simpanContact(nama, email, noHP);

};

main();
