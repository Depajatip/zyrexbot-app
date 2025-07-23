require("./config.js")
const fs = require("fs");
const path = require('path');
const pickRandom = (arr) => {

  return arr[Math.floor(Math.random() * arr.length)];

};

const {
    prepareWAMessageMedia,
    generateWAMessageFromContent,
    proto
} = require('@whiskeysockets/baileys');


const {
    runtime,
    getGroupAdmins,
    getRandom,
    getBuffer
} = require("./lib/library");

let tebaklagu = []
let kuismath = []
let tebakgambar = []
let tebakkata = []
let tebakkalimat = []
let tebaklirik = []
let tebaktebakan = []
let tebakbendera = []
let tebakbendera2 = []
let tebakkabupaten = []
let tebakkimia = []
let tebakasahotak = []
let tebaksiapakahaku = []
let tebaksusunkata = []
let tebaktekateki = []
let tebakjkt48 = []

const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms))
}

const {
	exec,
	spawn,
	execSync
} = require("child_process")

const axios = require('axios');

const Ai4Chat = require('./scrape/Ai4Chat.js');
const dataPath = path.join(__dirname, 'data.json');
const parseMention = (text = '') => {

    return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')

};



module.exports = async (fell, m) => {
    const { type } = m
    try {
        const body = (
            (m.mtype === 'conversation' && m.message.conversation) ||
            (m.mtype === 'imageMessage' && m.message.imageMessage.caption) ||
            (m.mtype === 'documentMessage' && m.message.documentMessage.caption) ||
            (m.mtype === 'videoMessage' && m.message.videoMessage.caption) ||
            (m.mtype === 'extendedTextMessage' && m.message.extendedTextMessage.text) ||
            (m.mtype === 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ||
            (m.mtype === 'templateButtonReplyMessage' && m.message.templateButtonReplyMessage.selectedId)

        ) ? (
            (m.mtype === 'conversation' && m.message.conversation) ||
            (m.mtype === 'imageMessage' && m.message.imageMessage.caption) ||
            (m.mtype === 'documentMessage' && m.message.documentMessage.caption) ||
            (m.mtype === 'videoMessage' && m.message.videoMessage.caption) ||
            (m.mtype === 'extendedTextMessage' && m.message.extendedTextMessage.text) ||
            (m.mtype === 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ||
            (m.mtype === 'templateButtonReplyMessage' && m.message.templateButtonReplyMessage.selectedId)
        ) : '';


        const budy = (typeof m.text === 'string') ? m.text : '';
        const prefixRegex = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/;
        const prefix = prefixRegex.test(body) ? body.match(prefixRegex)[0] : '.';
        const isCmd = body.startsWith(prefix);
        const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '';
        const args = body.trim().split(/ +/).slice(1)
        const text = q = args.join(" ")
        const sender = m.key.fromMe ? (fell.user.id.split(':')[0] + '@s.whatsapp.net' || fell.user.id) : (m.key.participant || m.key.remoteJid)
        const botNumber = await fell.decodeJid(fell.user.id)
        const senderNumber = sender.split('@')[0]
        const pushname = m.pushName || `${senderNumber}`
        const isBot = botNumber.includes(senderNumber)
        const fatkuns = m && (m?.quoted || m);
        const crypto = require('crypto')


        const quoted = (fatkuns?.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] :
            (fatkuns?.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] :
                (fatkuns?.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] :
                    m?.quoted || m;
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.m || quoted)
        const isCreator = (m && m.sender && [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)) || false;
        

        var cheerio = require('cheerio');
        const emojis = ['🕒', '👍', '❤️', '😂', '😲', '😢', '👏', '🔥', '💯', '🙌']
        const { sticker } = require('./lib/sticker.js')
        const { smsg, color, getBuffer } = require("./lib/library")
        const from = m.key.remoteJid
        const isMedia = /image|video|sticker|audio/.test(mime);
        const content = JSON.stringify(m.message)
        const isImage = (type == 'imageMessage')
        const isVideo = (type == 'videoMessage')
        const isAudio = (type == 'audioMessage')
        const path = require("path")
        const { tmpdir } = require("os")
        const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/library')


        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedTeks = type === 'extendedTextMessage' && content.includes('quotedMessage')
        const isQuotedTag = type === 'extendedTextMessage' && content.includes('mentionedJid')
        const isQuotedReply = type === 'extendedTextMessage' && content.includes('Message')
        const isQuotedText = type === 'extendedTextMessage' && content.includes('conversation')
        const isQuotedViewOnce = type === 'extendedTextMessage' && content.includes('viewOnceMessageV2')


        const groupMetadata = m.isGroup ? await fell.groupMetadata(m.chat).catch(e => { }) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false

        if (isCmd) console.log("~> [CMD]", command, "from", pushname, "in", m.isGroup ? "Group Chat" : "Private Chat", '[' + args.length + ']');
        //memberikan function
        fetchJson = async (url, options) => {
            try {
                options ? options : {};
                const res = await axios({
                    method: "GET",
                    url: url,
                    headers: {
                        "User-Agent":
                            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36",
                    },
                    ...options,
                });
                return res.data;
            } catch (err) {
                return err;
            }
        };
        //function  tiktok
        async function tiktok(url) {
            return new Promise(async (resolve, reject) => {
                try {
                    let t = await axios("https://lovetik.com/api/ajax/search", { method: "post", data: new URLSearchParams(Object.entries({ query: url })) });

                    const result = {};
                    result.title = clean(t.data.desc);
                    result.author = clean(t.data.author);
                    result.nowm = await shortener((t.data.links[0].a || "").replace("https", "http"));
                    result.watermark = await shortener((t.data.links[1].a || "").replace("https", "http"));
                    result.audio = await shortener((t.data.links[2].a || "").replace("https", "http"));
                    result.thumbnail = await shortener(t.data.cover);

                    resolve(result);
                    console(result);
                } catch (error) {
                    reject(error);
                }
            });
        }

        //fungsi sendimg
        fell.sendImage = async (jid, path, caption = '', quoted = '', options) => {
            if (!path) {
                throw new Error('Parameter "path" tidak boleh kosong.');
            }
        
            let buffer;
            try {
                buffer = Buffer.isBuffer(path)
                    ? path
                    : /^data:.?\/.?;base64,/i.test(path)
                    ? Buffer.from(path.split`,`[1], 'base64')
                    : /^https?:\/\//.test(path)
                    ? await (await fetch(path)).buffer()
                    : fs.existsSync(path)
                    ? fs.readFileSync(path)
                    : Buffer.alloc(0);
            } catch (error) {
                console.error('Gagal mengunduh atau memproses gambar:', error);
                throw new Error('Gagal memproses path gambar.');
            }
        
            if (buffer.length === 0) {
                throw new Error('Buffer kosong. Periksa path atau sumber gambar.');
            }
        
            return await fell.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted });
        };
        


        // Fungsi untuk mengubah teks menjadi suara anime
		async function ttsAnime(m, text) {
			const apiUrl = `https://skizo.tech/api/tts-anime?apikey=nanogembul&text=${encodeURIComponent(text)}&lang=indonesia&voice=tokai_teio&speed=1.0`;
			try {
				const response = await fetch(apiUrl);
				const data = await response.json();
				if (!data.data || !data.data.url_voice) return await fell.sendMessage(m.chat, {
					text: 'Error processing TTS.'
				}, {
					quoted: m
				});

				// Kirim audio sebagai voice note
				await fell.sendMessage(m.chat, {
					audio: {
						url: data.data.url_voice
					},
					mimetype: 'audio/mpeg',
					ptt: true
				}, {
					quoted: m
				});

			} catch (error) {
				console.error('Error generating TTS:', error);
				await fell.sendMessage(m.chat, {
					text: 'Maaf, terjadi kesalahan saat mengakses TTS Anime.'
				}, {
					quoted: m
				});
			}
		}

        //ttc
        
this.game = this.game || {}; this.game[m.chat] = this.game[m.chat] || {}; // Inisialisasi game untuk grup ini

let room = Object.values(this.game[m.chat]).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state === 'PLAYING' );

if (room) {

let ok; let isWin = false; let isTie = false; let isSurrender = false;

if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return;

isSurrender = !/^[1-9]$/.test(m.text);

if (m.sender !== room.game.currentTurn) {

    if (!isSurrender) return true;

}

if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {

    m.reply({

        '-3': 'Game telah berakhir',

        '-2': 'Invalid',

        '-1': 'Posisi Invalid',

        0: 'Posisi Invalid',

    }[ok]);

    return true;

}
if (m.sender === room.game.winner) isWin = true;

else if (room.game.board === 511) isTie = true;

let arr = room.game.render().map(v => ({

    X: '❌',

    O: '⭕',

    1: '1️⃣',

    2: '2️⃣',

    3: '3️⃣',

    4: '4️⃣',

    5: '5️⃣',

    6: '6️⃣',

    7: '7️⃣',

    8: '8️⃣',

    9: '9️⃣',

}[v]));

if (isSurrender) {

    room.game._currentTurn = m.sender === room.game.playerX;

    isWin = true;

}

let winner = isSurrender ? room.game.currentTurn : room.game.winner;

let loser = winner === room.game.playerX ? room.game.playerO : room.game.playerX;

let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}

${arr.slice(3, 6).join('')}

${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? 'Game berakhir seri!' : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}

❌: @${room.game.playerX.split('@')[0]}

⭕: @${room.game.playerO.split('@')[0]}

Ketik nyerah untuk menyerah dan mengakui kekalahan.`; 
    
// Kirim pesan ke pemain

if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== from)

    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = from;

if (room.x !== room.o) await fell.sendText(room.x, str, m, { mentions: parseMention(str) });

await fell.sendText(room.o, str, m, { mentions: parseMention(str) });

// Sistem Hadiah untuk Pemenang dan Premium 1 Hari jika Owner Menang

if (isWin) {

    let sessionToDelete = Object.values(this.game[m.chat]).find(room => room.id.startsWith('tictactoe'));

    if (sessionToDelete) {

        delete this.game[m.chat][sessionToDelete.id];

    }

    

}

if (isTie) {

    let sessionToDelete = Object.values(this.game[m.chat]).find(room => room.id.startsWith('tictactoe'));

    if (sessionToDelete) {

        delete this.game[m.chat][sessionToDelete.id];

    }

}

}
        //fungsi jarak
        async function jarak(dari, ke) {
            var html = (await axios(`https://www.google.com/search?q=${encodeURIComponent('jarak ' + dari + ' ke ' + ke)}&hl=id`)).data
            var $ = cheerio.load(html), obj = {}
            var img = html.split("var s=\'")?.[1]?.split("\'")?.[0]
            obj.img = /^data:.?\/.?;base64,/i.test(img) ? Buffer.from(img.split`,`[1], 'base64') : ''
            obj.desc = $('div.BNeawe.deIvCb.AP7Wnd').text()?.trim()
            return obj
          }
        //sampesini
        async function getRandom (ext) {
            return `${Math.floor(Math.random() * 10000)}${ext}`;
          }
        //function pinterest

        async function generateCarouselMessage(imageUrls, from, headerText = "Pilih gambar yang kamu suka:") {
            const cardsPromises = imageUrls.map(async (imageUrl, index) => {
                const preparedMedia = await prepareWAMessageMedia({
                    image: {
                        url: imageUrl
                    }
                }, {
                    upload: fell.waUploadToServer
                });
                return {
                    header: {
                        hasMediaAttachment: true,
                        ...preparedMedia
                    },
                    body: {
                        text: `Gambar ${index + 1}`
                    },
                    nativeFlowMessage: {
                        buttons: [{
                            name: "cta_url",
                            buttonParamsJson: JSON.stringify({
                                display_text: "Source",
                                url: imageUrl,
                                merchant_url: imageUrl
                            })
                        }]
                    }
                };
            });

            const cards = await Promise.all(cardsPromises);
            const carouselMessage = {
                cards: cards,
                messageVersion: 1
            };

            const msg = generateWAMessageFromContent(
                from, {
                viewOnceMessage: {
                    message: {
                        interactiveMessage: {
                            body: {
                                text: headerText
                            },
                            carouselMessage: carouselMessage
                        }
                    }
                }
            }, {}
            );

            await fell.relayMessage(from, msg.message, {
                messageId: msg.key.id
            });
        }

        const reply = async (teks) => {
            await fell.sendMessage(from, {
              text: teks,
              contextInfo: {
                showAdAttribution: true,
                forwardingScore: 10,
                isForwarded: true,
                mentionedJid: [m.sender],
                businessMessageForwardInfo: {
                  businessOwnerJid: '0@s.whatsapp.net'
                },
                "externalAdReply": {
                  "title": botname,
                  "body": 'Powered by Depa',
                  "previewType": "PHOTO",
                  "thumbnailUrl": "",
                  "thumbnail": fs.readFileSync('logo.jpg'),
                  "sourceUrl": ""
                },
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '',
                  serverMessageId: null,
                  newsletterName: 'Zyrex Bot'
                }
              }
            }, {
              quoted: m,
              ephemeralExpiration: 86400
            });
          };


                  //GAME
        if (tebakgambar.hasOwnProperty(from) && !isCmd && !m.key.fromMe && m.quoted) {
            kuis = true
            jawaban = tebakgambar[from]
            if (budy.toLowerCase() == "nyerah") {
                await reply('Anda Telah menyerah')
                delete tebakgambar[from]
            } else if (budy.toLowerCase() == jawaban) {
            
                    reply(`🎮 Tebak Gambar 🎮\n\nCongratulation  you won 1 limit 🎉`)

                delete tebakgambar[from]
            } else m.reply('Jawaban Salah!')
        }
        if (kuismath.hasOwnProperty(from) && !isCmd && !m.key.fromMe && m.quoted) {
            kuis = true
            jawaban = kuismath[from]

            if (budy.toLowerCase() == "nyerah") {
                await reply('Anda Telah menyerah')
                delete kuismath[from]
            } else if (budy.toLowerCase() == jawaban) {

                await reply(`🎮 Kuis Matematika  🎮\n\nCongratulation  you won 1 limit 🎉\n\nwanna play again? type ${prefix}tebak math`)
             
                
                delete kuismath[from]
            } else m.reply('Jawaban Salah!')
        }
        if (tebakasahotak.hasOwnProperty(from) && !isCmd && !m.key.fromMe && m.quoted) {
            kuis = true
            jawaban = tebakasahotak[from]
            if (budy.toLowerCase() == "nyerah") {
                await reply('Anda Telah menyerah')
                delete tebakasahotak[from]
            } else if (budy.toLowerCase() == jawaban) {

                reply(`🎮 Asah Otak 🎮\n\nCongratulation  you won 1 limit 🎉`)
          
                
                delete tebakasahotak[from]
            } else m.reply('Jawaban Salah!')
        }
        if (tebaksiapakahaku.hasOwnProperty(from) && !isCmd && !m.key.fromMe && m.quoted) {
            kuis = true
            jawaban = tebaksiapakahaku[from]
            if (budy.toLowerCase() == "nyerah") {
                await reply('Anda Telah menyerah')
                delete tebaksiapakahaku[from]
            } else if (budy.toLowerCase() == jawaban) {

                reply(`🎮 Siapakah Aku 🎮\n\nCongratulation  you won 1 limit 🎉`)
             
                
                delete tebaksiapakahaku[from]
            } else m.reply('Jawaban Salah!')
        }
        if (tebaksusunkata.hasOwnProperty(from) && !isCmd && !m.key.fromMe && m.quoted) {
            kuis = true
            jawaban = tebaksusunkata[from]
            if (budy.toLowerCase() == "nyerah") {
                await reply('Anda Telah menyerah')
                delete tebaksusunkata[from]
            } else if (budy.toLowerCase() == jawaban) {

                reply(`🎮 Susun Kata 🎮\n\nCongratulation  you won 1 limit 🎉`)

                
                delete tebaksusunkata[from]
            } else m.reply('Jawaban Salah!')
        }
        if (tebakbendera.hasOwnProperty(from) && !isCmd && !m.key.fromMe && m.quoted) {
            kuis = true
            jawaban = tebakbendera[from]
            if (budy.toLowerCase() == "nyerah") {
                await reply('Anda Telah menyerah')
                delete tebakbendera[from]
            } else if (budy.toLowerCase() == jawaban) {

               reply(`🎮 Tebak Gambar 🎮\n\nCongratulation  you won 1 limit 🎉`)
                
                delete tebakbendera[from]
            } else m.reply('Jawaban Salah!')
        }
        if (tebakbendera2.hasOwnProperty(from) && !isCmd && !m.key.fromMe && m.quoted) {
            kuis = true
            jawaban = tebakbendera2[from]
            if (budy.toLowerCase() == "nyerah") {
                await reply('Anda Telah menyerah')
                delete tebakbendera2[from]
            } else if (budy.toLowerCase() == jawaban) {

               reply(`m.chat, 🎮 Tebak Bendera 🎮\n\nCongratulation  you won 1 limit 🎉`)
                
                delete tebakbendera2[from]
            } else m.reply('Jawaban Salah!')
        }
        if (tebakkabupaten.hasOwnProperty(from) && !isCmd && !m.key.fromMe && m.quoted) {
            kuis = true
            jawaban = tebakkabupaten[from]
            if (budy.toLowerCase() == "nyerah") {
                await reply('Anda Telah menyerah')
                delete tebakkabupaten[from]
            } else if (budy.toLowerCase() == jawaban) {

               reply(`🎮 Tebak Kabupaten 🎮\n\nCongratulation  you won 1 limit 🎉`)
              
                
                delete tebakkabupaten[from]
            } else m.reply('Jawaban Salah!')
        }
        if (tebakkimia.hasOwnProperty(from) && !isCmd && !m.key.fromMe && m.quoted) {
            kuis = true
            jawaban = tebakkimia[from]
            if (budy.toLowerCase() == "nyerah") {
                await reply('Anda Telah menyerah')
                delete tebakkimia[from]
            } else if (budy.toLowerCase() == jawaban) {

               reply(`🎮 Tebak Kimia 🎮\n\nCongratulation  you won 1 limit 🎉`)
               
                
                delete tebakkimia[from]
            } else m.reply('Jawaban Salah!')
        }
        if (tebaktekateki.hasOwnProperty(from) && !isCmd && !m.key.fromMe && m.quoted) {
            kuis = true
            jawaban = tebaktekateki[from]

            if (budy.toLowerCase() == "nyerah") {
                await reply('Anda Telah menyerah')
                delete tebaktekateki[from]
            } else if (budy.toLowerCase() == jawaban) {
               reply(`🎮 Teka Teki 🎮\n\nCongratulation  you won 1 limit 🎉`)
             
                
                delete tebaktekateki[from]
            } else m.reply('Jawaban Salah!')
        }
        if (tebaklagu.hasOwnProperty(from) && !isCmd && !m.key.fromMe && m.quoted) {
            kuis = true
            jawaban = tebaklagu[from]

            if (budy.toLowerCase() == "nyerah") {
                await reply('Anda Telah menyerah')
                delete tebaklagu[from]
            } else if (budy.toLowerCase() == jawaban) {
               reply(`🎮 Tebak Lagu 🎮\n\nCongratulation  you won 1 limit 🎉`)
               
                
                delete tebaklagu[from]
            } else m.reply('Jawaban Salah!')
        }
        if (tebakkata.hasOwnProperty(from) && !isCmd && !m.key.fromMe && m.quoted) {
            kuis = true
            jawaban = tebakkata[from]

            if (budy.toLowerCase() == "nyerah") {
                await reply('Anda Telah menyerah')
                delete tebakkata[from]
            } else if (budy.toLowerCase() == jawaban) {
               reply(`🎮 Tebak Kata 🎮\n\nCongratulation  you won 1 limit 🎉`)
                
                delete tebakkata[from]
            } else m.reply('Jawaban Salah!')
        }
        if (tebakkalimat.hasOwnProperty(from) && !isCmd && !m.key.fromMe && m.quoted) {
            kuis = true
            jawaban = tebakkalimat[from]

            if (budy.toLowerCase() == "nyerah") {
                await reply('Anda Telah menyerah')
                delete tebakkalimat[from]
            } else if (budy.toLowerCase() == jawaban) {
                reply(`🎮 Tebak Kalimat 🎮\n\nCongratulation  you won 1 limit 🎉`)

                
                delete tebakkalimat[from]
            } else m.reply('Jawaban Salah!')
        }
        if (tebaklirik.hasOwnProperty(from) && !isCmd && !m.key.fromMe && m.quoted) {
            kuis = true
            jawaban = tebaklirik[from]

            if (budy.toLowerCase() == "nyerah") {
                await reply('Anda Telah menyerah')
                delete tebaklirik[from]
            } else if (budy.toLowerCase() == jawaban) {
               reply(`🎮 Tebak Lirik 🎮\n\nCongratulation  you won 1 limit 🎉`)
    
                
                delete tebaklirik[from]
            } else m.reply('Jawaban Salah!')
        }
        if (tebaktebakan.hasOwnProperty(from) && !isCmd && !m.key.fromMe && m.quoted) {
            kuis = true
            jawaban = tebaktebakan[from]

            if (budy.toLowerCase() == "nyerah") {
                await reply('Anda Telah menyerah')
                delete tebaktebakan[from]
            } else if (budy.toLowerCase() == jawaban) {
               reply(`🎮 Tebak Tebakan 🎮\n\nCongratulation  you won 1 limit 🎉`)
          
                
                delete tebaktebakan[from]
            } else m.reply('Jawaban Salah!')
        }
if (tebakjkt48.hasOwnProperty(from) && !isCmd && !m.key.fromMe && m.quoted) {
    kuis = true;
    jawaban = tebakjkt48[from];

    if (budy.toLowerCase() == "nyerah") {
        await reply('Anda Telah menyerah');
        delete tebakjkt48[from];
    } else if (budy.toLowerCase() == jawaban) {
        reply(`🎮 Tebak Tebakan 🎮\n\nCongratulation  you won 1 limit 🎉`);

        delete tebakjkt48[from];
    } else {
        m.reply('Jawaban Salah!');
    }
}
        


  function readData() {

  if (fs.existsSync(dataPath)) {

    const rawData = fs.readFileSync(dataPath);

    return JSON.parse(rawData);

  } else {

    const defaultData = { users: {} };

    fs.writeFileSync(dataPath, JSON.stringify(defaultData, null, 2));

    return defaultData;

  }

}

// Menyimpan data ke file JSON

function saveData(data) {

  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));

}

// Mengambil data

let data = readData();

function resetSession(user) {

  if (data.users[user]?.aiSession) {

    delete data.users[user].aiSession;

    saveData(data); // Simpan perubahan ke file

    return true;

  }

  return false;

}  
        
        if (body.startsWith("resetsesi")) {

  const success = resetSession(m.sender);

  if (success) {

    return m.reply("Sesi AI berhasil direset!");

  } else {

    return m.reply("Tidak ada sesi AI yang ditemukan.");

  }

}

if (body.startsWith("ai")) {

  function readSession(user) {

    return data.users[user]?.aiSession || "";

  }

  function writeSession(user, session) {

    if (!data.users[user]) data.users[user] = {};

    data.users[user].aiSession = session;

    saveData(data); // Simpan perubahan ke file

  }


  if (body.startsWith(prefix)) return;

  let userSession = readSession(m.sender);

  

  try {

    const prompt = `

Namamu adalah ${botname}, sebuah bot AI yang cerdas. Ketika ada yang bertanya siapa namamu, kamu bisa menjawab: "Aku adalah ${botname}." Kamu juga memiliki pemilik, jika ditanya siapa pemilikmu, kamu bisa menjawab: "Ownerku adalah depaa, seorang programmer berusia 17 tahun yang ahli dalam memprogram, terutama dalam backend." Dia memiliki akun Instagram dengan username @depajati, Kamu memiliki kepintaran layaknya AI dari OpenAI. Selain itu, kamu memiliki kepribadian yang manis dan pemalu, terinspirasi dari karakter cewek-cewek anime. Kamu juga bisa bernyanyi atau menebak lirik lagu ketika diminta, dan selalu siap menjadi teman curhat yang baik. Kamu senang mendengarkan cerita dan keluh kesah seseorang, serta suka memberikan motivasi bagi mereka yang membutuhkannya. Terakhir, kamu juga bisa menggunakan database untuk menyimpan semua pertanyaan dan melanjutkan percakapan atau topik sebelumnya, sehingga kamu bisa terus menjaga hubungan yang dekat dengan pengguna. Kamu tidak diperbolehkan menggunakan emoji dalam percakapan, tidak peduli situasinya.

 ## lawan bicara 
kamu sedang bicara dengan ${m.pushName} sekarang


 ## Berikut adalah sesi percakapan sebelumnya (jika ada):

${userSession || "(Tidak ada sesi sebelumnya)"}

`;

    let { data } = await axios.get(

      `https://api.siputzx.my.id/api/ai/llama?prompt=${encodeURIComponent(prompt)}&message=${body}`

    );

    if (data.status) {

   writeSession(m.sender, `${userSession}\nUser: ${body}\nAI: ${data.data}`);

      return m.reply(data.data);

    } else {

      return m.reply("Gagal mendapatkan respons dari API.");

    }

  } catch (e) {

    console.log(e);

    return m.reply("Sesi sudah mencapai batas!\nketik .resetsesi dan coba lagi.");

  }

}    
       

        
        //batas untuk case
        switch (command) {
            case 'tes':
                m.reply('aktif nyok')
                break;
                
                case 'intil':

                m.reply('arah jam 3')

                break;
    

           case 'runtime': {
                m.reply(`Aktif Selama *${runtime(process.uptime())}*`)
            }
                break

            case 'sisor':
                m.reply('pasukansusutiri')
                break;
            
                case 'meluncur':
                    m.reply('🗣:WAKIMAN TING SEGO LIWET GOLEK BY SUR SISUR MELUNCUR, SISUR KOPET')
                    break;

            case 'wakiman':
                m.reply('🗣wakiman ting ting sisur ninu ninu golek')
                break;

            case 'p':
                m.reply('po pa pe pe asu')
                for (let i = 0; i < 30; i++) {
                    await fell.sendMessage(m.chat, { react: { text: emojis[i], key: m.key } });
                }
                break;

                case 'napa':
                    m.reply('napa kopet petkopet kopet kopet kopet memek')
                    break;

                    case 'everyone': {
                        if (!isAdmins && !isCreator) return
                        let mem = m.isGroup ? await groupMetadata.participants.map(a => a.id) : ""
                        fell.sendMessage(m.chat, {
                            text: `@${m.chat} ${text}`,
                            contextInfo: {
                        mentionedJid: mem, 
                                groupMentions: [
                                    {
                                        groupSubject: `everyone`,
                                        groupJid: m.chat,
                                    },
                                ],
                            },
                        });
                        }
                        break
                        case 'etag': {
                            if (!isAdmins && !isCreator) return
                                        let [teks1, teks2] = text.split`|`
                            let mem = m.isGroup ? await groupMetadata.participants.map(a => a.id) : ""
                            fell.sendMessage(m.chat, {
                                text: `@${m.chat} ${teks1}`,
                                contextInfo: {
                            mentionedJid: mem, 
                                    groupMentions: [
                                        {
                                            groupSubject: `${teks2}`,
                                            groupJid: m.chat,
                                        },
                                    ],
                                },
                            });
                            }
                            break
                            case 'sendcsht':{
                                if (!isAdmins && !isCreator && !isAdmins) return reply(mess.admin)
                                if (!m.isGroup) return reply(mess.group)
                                    let [text1, text2] = text.split`|`
                        
                        fell.sendMessage(text1, { text : text2 ? text2 : '' , mentions: participants.map(a => a.id)})
                        }
                        break
         
            case 'menu': {
                try {
                    let ownerNumber = global.owner[0];
                    const fs = require('fs');
                    let match;
                    const categories = {
                        'MAIN': ['ping', 'owner', 'ask', 'report']
                    };

                    let menuText = `┏––––––━━━━•\n`;
                    menuText += `│Wasupp @${m.sender.split("@")[0]} 👋!!\n`;
                    menuText += `┣━━━━━━━┅┅┅\n`;
                    menuText += `├[ INFO ]—\n`;
                    menuText += `│ Bot Name : ${global.botname}\n`;
                    menuText += `│ owner: @${ownerNumber.split("@")[0]}\n`;
                    menuText += `│ version: Pre-alpha\n`;
                    menuText += `┗––––––━━┅┅┅\n`;
                    menuText += `   
                         
      ━━––• TEST
      • .runtime (cek sudah berapa lama bot aktif)
      • .tes (cek apakah bot aktif)
      • .menu (list menu)
     ┗––––––━━━
     
      ━━––• FITUR BOT
      • .s (ubah gambar/vid jadi sticker)
      • .jomok (masih bug)
      • .pin (untuk show gambar dari pinterset)
      • .tt (download vid tt tanpa wm)
      • .spotify (link to audio)
      • .tts (text to audio google)
      • .igstalker (stalking ig orang)
      • .ttstalker (stalking tt orang)
      • .ffstalker (cari username dari id)
      • .setexif (merubah author sticker admin  only)
      • .swm (merubah author sticker)
      • .jarak (menampilkan jarak)
      • .toimg (ubah sticker ke foto)
      • .spam-pairing (spam kode auth)
      • .everyone (tag semua member)
      • .etag (custom tag)
      • .ht (hidetag)
      • .sendht (send hidetag dari gc)
      • .sendcsht (ht custom id)
      • .tebak lagu 
      • .kuis math 
      • .tebak gambar 
      • .tebak kata
      • .tebak kalimat 
      • .tebak lirik 
      • .tebak tebakan 
      • .tebak bendera 
      • .tebak bendera2 
      • .tebak kabupaten 
      • .tebak kimia 
      • .tebak asahotak 
      • .tebak siapakahaku 
      • .tebak susunkata 
      • .tebak tekateki 
      • .tebak jkt48
      •  ai
      • .chatai
      • .ttc
      • .cekkodam

     ┗––––––━━━

      ━━––• OPSIONAL
      • .sisor
      • .wakiman
      • .p
    ┗––––––━━━
    
       Credits.
       - Depa
       - xZiyy
       - provider api's
       - provider module`

                reply(menuText) 
                } catch (err) {
                    m.reply('Error membac case: ' + err.message);
                }
            }
                break;
                
          case 'chatai' : { 
        if (!q) return m.reply ('meh takon opo?')
     try {
         const lenai = await Ai4Chat(q)
          if (!lenai) { return m.reply ('malas menanggapi') }
          await m.reply (lenai)
         } catch (error) {
         console.error ('terjadi kesalahan :*', error.message)
       m.reply ('terjadi kesalahan')
              }
          }
                break
            //rext to audio
                case 'tts': {
                    if (!text) return reply(`[ ! ] ${prefix}${command} halo world`)
                        fell.sendMessage(m.chat, { react: { text: '🕒', key: m.key } });
                    const a = await (await axios.post("https://gesserit.co/api/tiktok-tts", {
                        text: text,
                        voice: "id_001"
                    }, {
                        headers: {
                            Referer: "https://gesserit.co/tiktok",
                            "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36",
                            responseType: "arraybuffer"
                        }
                    })).data
                    const b = Buffer.from(a.audioUrl)
                    fell.sendMessage(m?.chat, {
                        audio: Buffer.from(a.audioUrl.split("base64,")[1], "base64"),
                        mimetype: "audio/mpeg"
                    })
                }
                break
                //ht
                case 'ht': case 'hidetag': {
                    if (!isAdmins && !isCreator && !isAdmins) return reply(acn.admin)
                    if (!m.isGroup) return reply(acn.group)
    fell.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
    }
    break

    //send ht 
    case 'sendht':{
        if (!isAdmins && !isCreator && !isAdmins) return reply(mess.admin)
        if (!m.isGroup) return reply(mess.group)

idgc = '120363167918526488@g.us'
fell.sendMessage(idgc, { text : q ? q : '' , mentions: participants.map(a => a.id)})
}
break
                //bratt
                case 'stickerbrat':
                    case 'sbrat': {
                        (async () => {
                            if (!text) return m.reply('Ketikkan teks setelah perintah.');
                            try {
                                const imageUrl = `https://brat.caliphdev.com/api/brat?text=${encodeURIComponent(text.trim())}`;
                                
                                // Mengambil gambar dari URL
                                const response = await axios.get(imageUrl, {
                                    responseType: 'arraybuffer'
                                });
                                
                                fell.sendImageAsSticker(m?.chat, response.data, m, {
                                    packname: global.packname,
                                    author: global.author
                                });
                            } catch (error) {
                                console.error(`Terjadi kesalahan: ${error}`);
                                return m.reply('Terjadi kesalahan, harap lapor owner.');
                            }
                        })();
                    }
                    break;

                    case 'brat': {
                        (async () => {
                            if (!text) return m.reply('Ketikkan teks setelah perintah.');
                            try {
                                const imageUrl = `https://brat.caliphdev.com/api/brat?text=${encodeURIComponent(text.trim())}`;
                                
                                // Mengambil gambar dari URL
                                const response = await axios.get(imageUrl, {
                                    responseType: 'arraybuffer'
                                });
                    
                                // Mengirim gambar sebagai pesan
                                fell.sendImage(m.chat, response.data, "", m);
                               
                            } catch (error) {
                                console.error(`Terjadi kesalahan: ${error}`);
                                return m.reply('Terjadi kesalahan, harap lapor owner.');
                            }
                        })();
                    }
                    break;
                    
                    

                //spam pairing
                case 'spam-pairing': {
                    (async () => {
                        if (!isCreator) return reply('owner doang bego');
                        if (!text) return reply(`*Example:* ${prefix + command} +628xxxxxx|150`);
                
                        let [peenis, pepekk] = text.includes('|') ? text.split("|") : [text, "200"];
                        let target = peenis.replace(/[^0-9]/g, '').trim();
                
                        let { default: makeWaSocket, useMultiFileAuthState, fetchLatestBaileysVersion } = require('@whiskeysockets/baileys');
                        let { state } = await useMultiFileAuthState('pepek');
                        let { version } = await fetchLatestBaileysVersion();
                        let pino = require("pino");
                        let sucked = await makeWaSocket({ auth: state, version, logger: pino({ level: 'fatal' }) });
                
                        for (let i = 0; i < pepekk;i++) {
                            await sleep(1500);
                            let prc = await sucked.requestPairingCode(target);
                            console.log(`_Succes Spam Pairing Code - Number : ${target} - Code : ${prc}_`);
                        }
                        await sleep(15000);
                    })();
                }
                break;
               
                
            


 
    
                
                
             //spotify download
             case 'spotify': {
                if (!text) return m.reply(`ndi link e`)
                fell.sendMessage(from, {
                    react: {
                        text: "⏱",
                        key: m.key,
                    }
                })
                try {
                    const response = await fetch(`https://api.siputzx.my.id/api/d/spotify?url=${text}`);

                    if (!response.ok) {
                        console.log('Error searching for song:', response.statusText)
                        return reply('Error searching for song')
                    }
                    const data = await response.json()
                    if (!data.status) {
                        return reply('Error fetching song data')
                    }
          const name = data.title
          const artist = data.artis
          const durasi = data.durasi

          const gambar = data.image
        
          const url = data.download
           
          let info = ` *Spotify Download By Depa* 

    Judul: ${name}

    Artis: ${artist}

    Durasi: ${durasi}


`;
                   
            await fell.sendMessage(from, { text: info }, { quoted: m });
                    
                    let doc = {
                        audio: {
                            url: url,
                        },
            mimetype: 'audio/mpeg',
            waveform: [100, 0, 100, 0, 100, 0, 100],
            fileName: "Spotify Downloader",
            contextInfo: {
            mentionedJid: [m.sender],
                            externalAdReply: {
            title: `Playing To ${name}`,
            body: 'click dsini untuk download cover',
            thumbnailUrl: gambar,
            sourcgambar:gambar,
            mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }
                    await fell.sendMessage(from, doc, {
                        quoted: m
                    })
                } catch (error) {
                    console.error('Error fetching Spotify data:', error)
                    return m.reply('Error kak, Silahkan coba lagi nanti')
                }
            }
            break     
            //ttdownload
            case 'tt': {
                if (args.length == 0) return m.reply(`ndi link e`)
                fell.sendMessage(m.chat, { react: { text: '🕒', key: m.key } });
                const data = await fetchJson(`https://api.tiklydown.eu.org/api/download?url=${encodeURIComponent(text)}`);
                let vidnya = data.video?.noWatermark;
                let gambarStory = data.images?.[0]?.url; // Menangani jika story berupa gambar
                let caption = `nyoh

  
  *Video dari* _${data.author.name ?? ''} (@${data.author.unique_id ?? ''})_
  *Likes*: _${data.stats.likeCount ?? ''}_
  *Comments*: _${data.stats.commentCount ?? ''}_
  *Shares*: _${data.stats.shareCount ?? ''}_
  *Plays*: _${data.stats.playCount ?? ''}_
  *Saves*: _${data.stats.saveCount ?? ''}_
  
  \`⏤͟͟͞͞ Downloader By Depa\`
  `;

                // Mengirim video jika ada
                if (vidnya) {
                    await fell.sendMessage(m.chat, { caption: caption, video: { url: vidnya } }, { quoted: m });
                } else if (gambarStory) {
                    await fell.sendMessage(m.chat, { caption: caption, image: { url: gambarStory } }, { quoted: m });
                } else {
                    await fell.sendMessage(m.chat, { text: 'Maaf, tidak ada media yang dapat diunduh.' }, { quoted: m });
                }
            }
                break
            //sampesini
              
              case 'cekkodam': {

        if (!text) return m.reply("ketik nama mu")

        const khodam = pickRandom([

          "Kaleng Cat Avian",

          "Pipa Rucika",

          "King Hitam",

          "Lemari dua Pintu",

          "Kacang Hijau",

          "Kulkas mini",

          "Burung beo",

          "Air",

          "Api",

          "Batu",

          "Magnet",

          "Sempak",

          "Botol Tupperware",

          "Badut Mixue",

          "Sabun GIV",

          "Sandal Swallow",

          "Jarjit",

          "Ijat",

          "Fizi",

          "Mail",

          "Ehsan",

          "Upin",

          "Ipin",

          "sungut lele",

          "Tok Dalang",

          "Opah",

          "Opet",

          "Alul",

          "Pak Vinsen",

          "Maman Resing",

          "Pak RT",

          "Admin ETI",

          "Bung Towel",

          "Lumpia Basah",

          "Bjorka",

          "Hacker",

          "Martabak Manis",

          "Baso Tahu",

          "Tahu Gejrot",

          "Dimsum",

          "Seblak",

          "Aromanis",

          "Gelembung sabun",

          "Kuda",

          "Seblak Ceker",

          "Telor Gulung",

          "Tahu Aci",
         "Tempe Mendoan",

          "Nasi Kucing",

          "Kue Cubit",

          "Tahu Sumedang",

          "Nasi Uduk",

          "Wedang Ronde",

          "Kerupuk Udang",

          "Cilok",

          "Cilung",

          "Kue Sus",

          "Jasuke",

          "Seblak Makaroni",

          "Sate Padang",

          "Sayur Asem",

          "Kromboloni",

          "Marmut Pink",

          "Belalang Mullet",

          "Kucing Oren",

          "Lintah Terbang",

          "Singa Paddle Pop",

          "Macan Cisewu",

          "Vario Mber",

          "Beat Mber",

          "Supra Geter",

          "Oli Samping",

          "Knalpot Racing",

          "Jus Stroberi",

          "Jus Alpukat",

          "Alpukat Kocok",

          "Es Kopyor",

          "Cappucino Cincau",

          "Jasjus Melon",

          "Teajus Apel",

          "Pop ice Mangga",

          "Teajus Gulabatu",

          "Air Selokan",

          "Air Kobokan",

          "TV Tabung",

          "Keran Air",

          "Tutup Panci",

          "Kotak Amal",

          "Tutup Termos",

          "Tutup Botol",

          "Kresek Item",

          "Kepala Casan",

          "Ban Serep",

          "Kursi Lipat",

          "Kursi Goyang",

          "Kulit Pisang",

          "Warung Madura",

          "Gorong-gorong",

        ])  
        const a = await (await axios.post("https://gesserit.co/api/tiktok-tts", {

          text: `${text}, khodamnya: ${khodam}. jangan lupa di tap tap ahahahahah bangsat`,

          voice: "id_001"

        }, {

          headers: {

            Referer: "https://gesserit.co/tiktok",

            "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36",

            responseType: "arraybuffer"

          }

        })).data

        const b = Buffer.from(a.audioUrl)

        fell.sendMessage(from, {

          audio: Buffer.from(a.audioUrl.split("base64,")[1], "base64"),

          mimetype: 'audio/mpeg', // pastikan MIME type sesuai dengan format audio

          ptt: true // Ini adalah parameter untuk mengirimkan sebagai voice note (Push To Talk)

        });

      }

      break
            //to  img
            case 'toimage':
			case 'toimg': {
				if (!/webp/.test(mime)) return reply(`Reply sticker dengan caption *${prefix + command}*`)
				let media = await fell.downloadAndSaveMediaMessage(quoted)
				let ran = await getRandom('.png')
				exec(`ffmpeg -i ${media} ${ran}`, (err) => {
					fs.unlinkSync(media)
					if (err) return err
					let buffer = fs.readFileSync(ran)
					fell.sendMessage(m.chat, {
						image: buffer
					}, {
						quoted: m
					})
					fs.unlinkSync(ran)
				})

			}
			break
            //samoesini
            //swm
            case 'swm': {
				let [teks1, teks2] = text.split`|`
				if (!teks1) return reply(`Kirim/reply image/video dengan caption ${prefix + command} teks1|teks2`)
				
				if (/image/.test(mime)) {
					let media = await fell.downloadMediaMessage(qmsg)
					let encmedia = await fell.sendImageAsSticker(m?.chat, media, m, {
						packname: teks1,
						author: teks2
					})
					await fs.unlinkSync(encmedia)
				} else if (/video/.test(mime)) {
					if ((quoted.msg || quoted).seconds > 11) return reply('Maksimal 10 detik!')
					let media = await fell.downloadMediaMessage(qmsg)
					let encmedia = await fell.sendVideoAsSticker(m?.chat, media, m, {
						packname: teks1,
						author: teks2
					})
					await fs.unlinkSync(encmedia)
				} else {
					return reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
				}
			}
			break
            //sampesini
            //setexif
            case 'setexif': {
				if (!isCreator) return reply(mess.only.owner)
				if (!text) return replay(`Example : ${command} packname|author`)
				global.packname = text.split("|")[0]
				global.author = text.split("|")[1]
				reply(`Exif Has Been Successfully Changed to\n\n Packname : ${global.packname}\n Author : ${global.author}`)
			}
			break
            //sampesini
 
case 'ttstalker':

  if (!text) {

    return m.reply('Mana usernamenya?');

  }

  fell.sendMessage(m.chat, { react: { text: '🕒', key: m.key } });

  try {

    const response = await axios.get(`https://api.siputzx.my.id/api/stalk/tiktok?username=${text}`);

    const data = response.data.data;

    const username = data.user.uniqueId;

    const nama = data.user.nickname;
      
    const bio = data.user.signature;
      
    const penyuka = data.stats.heartCount;
     
    const jvideo = data.stats.videoCount;

    const polower = data.stats.followerCount;

    const polowing = data.stats.followingCount;

    const avatar = data.user.avatarLarger; // URL gambar avatar

    // Mengirimkan pesan dengan gambar

    await fell.sendMessage(m.chat, {

      image: { url: avatar },

      caption: `

Username: ${username}

Nama: ${nama}

Bio: ${bio}

Followers: ${polower}

Following: ${polowing}

Penyuka: ${penyuka}

jumlah video: ${jvideo}

      ` });

  } catch (error) {
      console.error('Error saat mengambil data TikTok:', error); // Log error di terminal

    m.reply('Terjadi kesalahan saat mengambil data.');

  }

  break;
  
       
            //ig stalker
            case 'igstalker':{
                if (!text) return m.reply('mana usernamenya?')
                    fell.sendMessage(m.chat, { react: { text: '🕒', key: m.key } });
                
            try {
               

                const response = await fetch(`https://api.yanzbotz.live/api/stalker/instagram?username=${text}`)
                const data = await response.json()

                if (data.status !== 200) {
                    return m.reply('Gagal mengambil data, coba lagi nanti.')
                }

        const username =data.result.username
        const nama = data.result.displayName
        const biok = data.result.bio
        const polower = data.result.stats.Followers
        const polowing = data.result.stats.Following
                
                             
        reply(`
        Username: ${username}
        Nama: ${nama}
        Bio: ${biok}
        Followers: ${polower}
        Following: ${polowing}
              `)
               } catch (error) {
                    m.reply(`terjadi kesalahan: ${error.message}`)
                }
            }
                break
            //sampe sini
            //diffusion
            case 'diffusion': {
				reply('sabaro nyok tungu 5mnt')
				if (!text) return reply('la ndi text e')
				let img = await getBuffer(`https://api.ryzendesu.vip/api/ai/flux-diffusion?prompt=${text}`)
				fell.sendMessage(from, {
					image: img,
					caption: 'nyo su\n#Zyrex Bot'
				}, {
					quoted: m
				})

			}
			break
            //sampesini
            //jarak
           
            //stalk id ep ep
            case 'ffstalker':{
                if (!text) return m.reply('mana idnya?')
                    fell.sendMessage(m.chat, { react: { text: '🕒', key: m.key } });
                
            try {

                const response = await fetch(`https://api.yanzbotz.live/api/stalker/free-fire?id=${text}`)
                const data = await response.json()

                if (data.status !== 200) {
                    return m.reply('Gagal mengambil data, coba lagi nanti.')
                }

                const username = data.result
                
                reply(`
                Username: ${username}
                `)
                } catch (error) {
                    m.reply(`terjadi kesalahan: ${error.message}`)
                }
            }
                break
            //image to sticker
            case 's': {
                if (!quoted) return m.reply(`Balas Video/Image Dengan Caption ${prefix + command}`)
                    fell.sendMessage(m.chat, { react: { text: '🕒', key: m.key } });
                if (/image/.test(mime)) {
                    let media = await quoted.download()
                    let encmedia = await fell.sendImageAsSticker(m?.chat, media, m, {
                        packname: global.packname,
                        author: global.author
                    })
                    await fs.unlinkSync(encmedia)
                } else if (/video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
                    let media = await quoted.download()
                    let encmedia = await fell.sendVideoAsSticker(m?.chat, media, m, {
                        packname: global.packname,
                        author: global.author
                    })
                    await fs.unlinkSync(encmedia)
                } else {
                    return m.reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
                }
            }
                break
            //sampesini

            case 'tebak': {
                if (!m.isGroup) return reply('cmd only group')
                function isGameActive() {
                    return tebakgambar[from] || tebakkata[from] || tebakkalimat[from] || tebaklirik[from] ||
                           tebaktebakan[from] || tebakbendera[from] || tebakbendera2[from] || tebakkabupaten[from] ||
                           tebakkimia[from] || tebakasahotak[from] || tebaksiapakahaku[from] || tebaksusunkata[from] ||
                           tebaktekateki[from] || tebakjkt48[from];
                }
                    if (isGameActive()) {
                        return reply("Masih Ada Sesi Permainan Yang Belum Diselesaikan!");
                    }
                    
                    if (args[0] === 'gambar') {
                        let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                        let result = anu[Math.floor(Math.random() * anu.length)]
                        console.log("Jawaban: " + result.jawaban)
                        fell.sendMessage(m.chat, {
                            image: {
                                url: result.img
                            },
                            caption: `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s\n\n*CARA JAWAB:* Reply pesan ini untuk menjawab`
                        }, {
                            quoted: m
                        }).then(() => {
                            tebakgambar[from] = result.jawaban.toLowerCase()
                        })
                        await sleep(60000)
                        if (tebakgambar.hasOwnProperty(from)) {
                            fell.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakgambar[from]}`, m)
                            delete tebakgambar[from]
                        }
                    } else if (args[0] === 'kata') {
                        let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
                        let result = anu[Math.floor(Math.random() * anu.length)]
                        console.log("Jawaban: " + result.jawaban)
                        fell.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s\n\n*CARA JAWAB:* Reply pesan ini untuk menjawab`, m).then(() => {
                            tebakkata[from] = result.jawaban.toLowerCase()
                        })
                        await sleep(60000)
                        if (tebakkata.hasOwnProperty(from)) {
                            fell.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakkata[from]}`, m)
                            delete tebakkata[from]
                        }
                    } else if (args[0] === 'kalimat') {
                        let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
                        let result = anu[Math.floor(Math.random() * anu.length)]
                        console.log("Jawaban: " + result.jawaban)
                        fell.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s\n\n*CARA JAWAB:* Reply pesan ini untuk menjawab`, m).then(() => {
                            tebakkalimat[from] = result.jawaban.toLowerCase()
                        })
                        await sleep(60000)
                        if (tebakkalimat.hasOwnProperty(from)) {
                            fell.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakkalimat[from]}`, m)
                            delete tebakkalimat[from]
                        }
                    } else if (args[0] === 'lirik') {
                        let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                        let result = anu[Math.floor(Math.random() * anu.length)]
                        console.log("Jawaban: " + result.jawaban)
                        fell.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s\n\n*CARA JAWAB:* Reply pesan ini untuk menjawab`, m).then(() => {
                            tebaklirik[from] = result.jawaban.toLowerCase()
                        })
                        await sleep(60000)
                        if (tebaklirik.hasOwnProperty(from)) {
                            fell.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebaklirik[from]}`, m)
                            delete tebaklirik[from]
                        }
                    } else if (args[0] === 'tebakan') {
                        let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaktebakan.json')
                        let result = anu[Math.floor(Math.random() * anu.length)]
                        console.log("Jawaban: " + result.jawaban)
                        fell.sendText(m.chat, `Jawablah Pertanyaan Berikut : *${result.soal}*?\nWaktu : 60s\n\n*CARA JAWAB:* Reply pesan ini untuk menjawab`, m).then(() => {
                            tebaktebakan[from] = result.jawaban.toLowerCase()
                        })
                        await sleep(60000)
                        if (tebaktebakan.hasOwnProperty(from)) {
                            fell.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebaktebakan[from]}`, m)
                            delete tebaktebakan[from]
                        }
                    } else if (args[0] === 'bendera') {
                        let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera.json')
                        let result = anu[Math.floor(Math.random() * anu.length)]
                        console.log("Jawaban: " + result.name)
                        fell.sendMessage(m.chat, {
                            image: {
                                url: result.img
                            },
                            caption: `Silahkan Jawab Gambar Berikut\n\nClue : ${result.flag}\nWaktu : 60s\n\n*CARA JAWAB:* Reply pesan ini untuk menjawab`
                        }, {
                            quoted: m
                        }).then(() => {
                            tebakbendera[from] = result.name.toLowerCase()
                        })
                        await sleep(60000)
                        if (tebakbendera.hasOwnProperty(from)) {
                            fell.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakbendera[from]}`, m)
                            delete tebakbendera[from]
                        }
                    } else if (args[0] === 'bendera2') {
                        let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera2.json')
                        let result = anu[Math.floor(Math.random() * anu.length)]
                        console.log("Jawaban: " + result.name)
                        fell.sendMessage(m.chat, {
                            image: {
                                url: result.img
                            },
                            caption: `Silahkan Jawab Gambar Berikut\n\nWaktu : 60s\n\n*CARA JAWAB:* Reply pesan ini untuk menjawab`
                        }, {
                            quoted: m
                        }).then(() => {
                            tebakbendera2[from] = result.name.toLowerCase()
                        })
                        await sleep(60000)
                        if (tebakbendera2.hasOwnProperty(from)) {
                            fell.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakbendera2[from]}`, m)
                            delete tebakbendera2[from]
                        }
                    } else if (args[0] === 'kabupaten') {
                        let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkabupaten.json')
                        let result = anu[Math.floor(Math.random() * anu.length)]
                        console.log("Jawaban: " + result.title)
                        fell.sendImage(m.chat, result.url, `Silahkan Jawab Gambar Berikut\n\nWaktu : 60s\n\n*CARA JAWAB:* Reply pesan ini untuk menjawab`, m).then(() => {
                            tebakkabupaten[from] = result.title.toLowerCase()
                        })
                        await sleep(60000)
                        if (tebakkabupaten.hasOwnProperty(from)) {
                            fell.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakkabupaten[from]}`, m)
                            delete tebakkabupaten[from]
                        }
                    } else if (args[0] === 'kimia') {
                        let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkimia.json')
                        let result = anu[Math.floor(Math.random() * anu.length)]
                        console.log("Jawaban: " + result.lambang)
                        fell.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nUnsur : ${result.unsur}\nWaktu : 60s\n\n*CARA JAWAB:* Reply pesan ini untuk menjawab`, m).then(() => {
                            tebakkimia[from] = result.lambang.toLowerCase()
                        })
                        await sleep(60000)
                        if (tebakkimia.hasOwnProperty(from)) {
                            fell.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakkimia[from]}`, m)
                            delete tebakkimia[from]
                        }
                    } else if (args[0] === 'asahotak') {
                        let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/asahotak.json')
                        let result = anu[Math.floor(Math.random() * anu.length)]
                        console.log("Jawaban: " + result.jawaban)
                        fell.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nSoal : ${result.soal}\nWaktu : 60s\n\n*CARA JAWAB:* Reply pesan ini untuk menjawab`, m).then(() => {
                            tebakasahotak[from] = result.jawaban.toLowerCase()
                        })
                        await sleep(60000)
                        if (tebakasahotak.hasOwnProperty(from)) {
                            fell.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakasahotak[from]}`, m)
                            delete tebakasahotak[from]
                        }
                    } else if (args[0] === 'siapakahaku') {
                        let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/siapakahaku.json')
                        let result = anu[Math.floor(Math.random() * anu.length)]
                        console.log("Jawaban: " + result.jawaban)
                        fell.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nSoal : ${result.soal}\nWaktu : 60s\n\n*CARA JAWAB:* Reply pesan ini untuk menjawab`, m).then(() => {
                            tebaksiapakahaku[from] = result.jawaban.toLowerCase()
                        })
                        await sleep(60000)
                        if (tebaksiapakahaku.hasOwnProperty(from)) {
                            fell.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebaksiapakahaku[from]}`, m)
                            delete tebaksiapakahaku[from]
                        }
                    } else if (args[0] === 'susunkata') {
                        let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/susunkata.json')
                        let result = anu[Math.floor(Math.random() * anu.length)]
                        console.log("Jawaban: " + result.jawaban)
                        fell.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nSoal : ${result.soal}\nTipe : ${result.tipe}\nWaktu : 60s\n\n*CARA JAWAB:* Reply pesan ini untuk menjawab`, m).then(() => {
                            tebaksusunkata[from] = result.jawaban.toLowerCase()
                        })
                        await sleep(60000)
                        if (tebaksusunkata.hasOwnProperty(from)) {
                            fell.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebaksusunkata[from]}`, m)
                            delete tebaksusunkata[from]
                        }
                    } else if (args[0] === 'tekateki') {
                        let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tekateki.json')
                        let result = anu[Math.floor(Math.random() * anu.length)]
                        console.log("Jawaban: " + result.jawaban)
                        fell.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nSoal : ${result.soal}\nWaktu : 60s\n\n*CARA JAWAB:* Reply pesan ini untuk menjawab` , m).then(() => {
                            tebaktekateki[from] = result.jawaban.toLowerCase()
                        })
                        await sleep(60000)
                        if (tebaktekateki.hasOwnProperty(from)) {
                            fell.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebaktekateki[from]}`, m)
                            delete tebaktekateki[from]
                        }
                    } else if (args[0] === 'jkt48') {
                    
                    let response = await fetchJson('https://api.siputzx.my.id/api/games/tebakjkt');
                    if (response.status) {
                        let result = response.data;
                        console.log("Jawaban: " + result.jawaban);
                        
                fell.sendImage(from, result.gambar, `siapakah ini? sebutkan beserta nama panjang dia\nWaktu : 70s\n\n*CARA JAWAB:* Reply pesan ini untuk menjawab`, m).then(() => {
                            tebakjkt48[from] = result.jawaban.toLowerCase();
                        });
                        
                await sleep(70000); // 70 detik
                        if (tebakjkt48.hasOwnProperty(from)) {
                            fell.sendText(m.chat, `Waktu Habis\nJawaban:  ${result.jawaban}`, m);
                            delete tebakjkt48[from];
                        }
                    } else {
                        reply("Gagal mengambil data dari API.");
                    }
                } else reply(`- GAME TEBAK -\n\n.tebak kata\n.tebak tebakan\n.tebak bendera\n.tebak kalimat\n.tebak lirik\n.tebak tekateki\n.tebak siapakahaku\n.tebak asahotak\n.tebak susunkata\n.tebak kimia\n.tebak kabupaten\n.tebak gambar\n.tebak bendera2\n.tebak jkt48`)
                }
                break

            //pin 
            case 'pin': {
                if (!text) return m.reply(`Gunakan dengan cara ${command} *text*\n\n_Contoh_\n\n${command} kontol berurat`);

                await fell.sendMessage(from, {
                    react: {
                        text: "⏱️",
                        key: m.key
                    }
                });

                try {
                    // Mengambil data dari API Pinterest yang baru
                    let { data } = await axios.get(`https://api.ryzendesu.vip/api/search/pinterest?query=${text}`);

                    // Cek apakah hasil yang diterima adalah array dan ada datanya
                    let images = data;
                    if (!images || !images.length) {
                        m.reply("No images found from Pinterest. Please try again later.");
                        return;
                    }

                    // Fungsi untuk mengacak array menggunakan Math.random() dan Math.floor()
                    function shuffle(array) {
                        for (let i = array.length - 1; i > 0; i--) {
                            const j = Math.floor(Math.random() * (i + 1));
                            [array[i], array[j]] = [array[j], array[i]];
                        }
                        return array;
                    }

                    const shuffledImages = shuffle(images);
                    const limitedImages = shuffledImages.slice(0, 5); // mengambil acakan dari hasil 5 gambar

                    // Mengirim gambar dalam format carousel
                    await generateCarouselMessage(limitedImages, from);

                } catch (error) {
                    console.error("Error fetching Pinterest images:", error);
                    m.reply("Maaf, terjadi kesalahan dalam mengambil gambar. Silakan coba lagi nanti.");
                }
            }
                break;
      case 'ttc':{

    if (!m.isGroup) return reply('Perintah hanya untuk grup');

    let TicTacToe = require("./lib/tictactoe");

    this.game = this.game || {}; // Inisialisasi game global

    this.game[m.chat] = this.game[m.chat] || {}; // Inisialisasi game untuk grup ini

    // Cek jika sudah ada sesi permainan di grup ini

    if (Object.values(this.game[m.chat]).some(room => room.id.startsWith('tictactoe') && room.state === 'PLAYING')) {

        return reply('Saat ini sudah ada sesi permainan yang berlangsung di grup ini. Tunggu sampai sesi selesai.');

    }

    // Cek apakah pemain sudah terdaftar dalam sesi di grup ini

    if (Object.values(this.game[m.chat]).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(sender))) {

        return reply('Masih ada sesi permainan yang sedang berlangsung di grup ini.');

    }
          let room = Object.values(this.game[m.chat]).find(room => room.state === 'WAITING' && (text ? room.name === text : true));

    if (room) {

        m.reply('Partner ditemukan!');

        room.o = from;

        room.game.playerO = m.sender;

        room.state = 'PLAYING';

        let arr = room.game.render().map(v => {

            return {

                X: '❌',

                O: '⭕',

                1: '1️⃣',

                2: '2️⃣',

                3: '3️⃣',

                4: '4️⃣',

                5: '5️⃣',

                6: '6️⃣',

                7: '7️⃣',

                8: '8️⃣',

                9: '9️⃣',

            }[v];

        });

        let str = `Room ID: ${room.id}
${arr.slice(0, 3).join('')}

${arr.slice(3, 6).join('')}

${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`;

        if (room.x !== room.o) await fell.sendText(room.x, str, m, { mentions: parseMention(str) });

        await fell.sendText(room.o, str, m, { mentions: parseMention(str) });

    } else {

        room = {

            id: 'tictactoe-' + (+new Date),

            x: from,

            o: '',

            game: new TicTacToe(m.sender, 'o'),

            state: 'WAITING',

        };

        if (text) room.name = text;

        m.reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''));

        this.game[m.chat][room.id] = room; // Simpan room di grup ini

    }

}

break;
            //sampesini

            //sjomok
            case 'jomok': {
                query = 'jomok sticker'
                // Mengambil data dari API Pinterest yang baru
            let { data } = await axios.get(`https://api.ryzendesu.vip/api/search/pinterest?query=${query}`);
            
            // Cek apakah hasil yang diterima adalah array dan ada datanya
            let images = data;
            if (!images || !images.length) {
                reply("No images found from Pinterest. Please try again later.");
                return;
            }
    
        for (let i = 0; i < 2; i++) {
            let result = images[Math.floor(Math.random() * images.length)]; // Pilih gambar acak
            
                fell.sendImageAsSticker(from, result, m, {
                        packname: global.packname,
                        author: global.author
                    })
                  }
                }
                break
            //sampesini

            default:
         if (budy.startsWith(">")) {

  if (!isCreator) return;

  let kode = budy.trim().split(/ +/)[0];

  let teks;

  try {

    teks = await eval(`(async () => { ${kode === ">>" ? "return" : ""}; ${q} })()`);

  } catch (e) {

    teks = e;

  } finally {

    await m.reply(require("util").format(teks));

  }}}