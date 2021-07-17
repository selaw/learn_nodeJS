const fs = require('fs');

//console.log(fs);

// Menuliskan string ke file

// try {
//     fs.writeFileSync('data/TestFile_Sync.txt', 'Hello, This file synchonous!');
// } catch (e) {
//     console.log(e);
// }

// fs.writeFile('data/TestFile_Async.txt', 'Hello, This file Asynchonous!', (e) => {
//     console.log(e);
// });

//membaca String 
// const readdata = fs.readFileSync('data/TestFile_Sync.txt', 'utf-8');
// console.log(readdata);

// fs.readFile('data/TestFile_Async.txt','utf-8', (err, data) =>{
//     if (err) throw err;
//     console.log(data)
// })

// Readline
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Membuat diretori jika belum ada
const dirPath = './database';
if(!fs.existsSync(dirPath)){
    fs.mkdirSync(dirPath);
}

// Membuat diretori jika belum ada
const dataPath = './database/file_contacts.json';
if(!fs.existsSync(dataPath)){
    fs.writeFileSync(dataPath, '[]', 'utf-8');
}

const tulisPertanyaan = (pertanyaan) => {
    return new Promise((resolve, reject) => {
        rl.question(pertanyaan, (simpan_jawaban) =>{
            resolve(simpan_jawaban);
        });
    });
};

const simpanContact = (nama, email, noHP) => {
    const contact = {nama, email, noHP};
    const fileB = fs.readFileSync('database/file_contacts.json','utf-8');
    const contacts = JSON.parse(fileB);
    
    contacts.push(contact);

    fs.writeFileSync('database/file_contacts.json', JSON.stringify(contacts));

    console.log(`Terimakasih ${nama} sudah memasukan data.`);
    rl.close();
};

module.exports ={tulisPertanyaan , simpanContact };