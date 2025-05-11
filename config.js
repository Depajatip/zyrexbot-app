const fs = require("fs")

global.owner = ["6282139776112"]
global.botname = ["Zyrex Bot"]

//watermark 
global.packname = 'Di Buat Oleh depa'
global.author = 'Zyrex bot'
global.idcennel = '<id_saluran>@newsletter'
global.thumb = 'Linknya' // Your Thumbnail


global.mess = {
    success: 'Dona Abangku 🔥',
    admin: '_*❗Perintah Ini Hanya Bisa Digunakan Oleh Admin Group !*_',
    botAdmin: '_*❗Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !*_',
    owner: '_*❗Perintah Ini Hanya Bisa Digunakan Oleh Owner !*_',
    group: '_*❗Perintah Ini Hanya Bisa Digunakan Di Group Chat !*_',
    private: '_(❗Perintah Ini Hanya Bisa Digunakan Di Private Chat !*_',
    wait: '_*⏳ Sedang Di Proses !*_',
}

let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(`Update ${__filename}`);
    delete require.cache[file];
    require(file);
});
