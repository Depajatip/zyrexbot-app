require("./config.js")
const fs = require("fs")

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
        async function getRandom(ext) {
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

        //batas untuk case
        switch (command) {
            case 'tes':
                m.reply('aktif nyok')
                break;

            case 'runtime': {
                m.reply(`Aktif Selama *${runtime(process.uptime())}*`)
            }
                break

            case 'suasu':
                m.reply('marak ke ngiglik')
                break;

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
                m.reply('napa kopet petkopet kopet kopet kopet memekki')
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
            case 'sendcsht': {
                if (!isAdmins && !isCreator && !isAdmins) return reply(mess.admin)
                if (!m.isGroup) return reply(mess.group)
                let [text1, text2] = text.split`|`

                fell.sendMessage(text1, { text: text2 ? text2 : '', mentions: participants.map(a => a.id) })
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
                fell.sendMessage(m.chat, { text: q ? q : '', mentions: participants.map(a => a.id) }, { quoted: m })
            }
                break

            //send ht 
            case 'sendht': {
                if (!isAdmins && !isCreator && !isAdmins) return reply(mess.admin)
                if (!m.isGroup) return reply(mess.group)

                idgc = '120363167918526488@g.us'
                fell.sendMessage(idgc, { text: q ? q : '', mentions: participants.map(a => a.id) })
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

                    for (let i = 0; i < pepekk; i++) {
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
                    const response = await fetch(`https://api.yanzbotz.live/api/downloader/spotify?url=${text}&apiKey=yanzdev`);
                    if (!response.ok) {
                        console.log('Error searching for song:', response.statusText)
                        return reply('Error searching for song')
                    }
                    const data = await response.json()
                    if (!data.status) {
                        return reply('Error fetching song data')
                    }

                    const coverimage = data.result.cover
                    const name = data.result.title
                    const audioUrl = data.result.music

                    let doc = {
                        audio: {
                            url: audioUrl
                        },
                        mimetype: 'audio/mpeg',
                        waveform: [100, 0, 100, 0, 100, 0, 100],
                        fileName: "Spotify Downloader",
                        contextInfo: {
                            mentionedJid: [m.sender],
                            externalAdReply: {
                                title: `Playing To ${name}`,
                                body: 'click dsini untuk download cover',
                                thumbnailUrl: coverimage,
                                sourceUrl: coverimage,
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
                *Saves*: _${data.stats.saveCount ?? ''}_>
                
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
            //ig stalker
            case 'igstalker': {
                if (!text) return m.reply('mana usernamenya?')
                fell.sendMessage(m.chat, { react: { text: '🕒', key: m.key } });

                try {



                    const response = await fetch(`https://api.yanzbotz.live/api/stalker/instagram?username=${text}`)
                    const data = await response.json()

                    if (data.status !== 200) {
                        return m.reply('Gagal mengambil data, coba lagi nanti.')
                    }

                    const username = data.result.username
                    const nama = data.result.displayName
                    const polower = data.result.stats.Followers
                    const polowing = data.result.stats.Following


                    reply(`
                Username: ${username}
                Nama: ${nama}
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
            case "jarak": {
                var [fromo, to] = text.split`|`
                if (!(fromo && to)) return reply(`Ex: ${prefix + command} jakarta|bandung`)
                var data = await jarak(fromo, to)
                if (data.img) return fell.sendMessage(m?.chat, {
                    image: data.img,
                    caption: data.desc
                }, {
                    quoted: m
                })
                else reply(data.desc)
            }
                break
            //sampesini
            //stalk id ep ep
            case 'ffstalker': {
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
                    fell.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nSoal : ${result.soal}\nWaktu : 60s\n\n*CARA JAWAB:* Reply pesan ini untuk menjawab`, m).then(() => {
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
                if (budy.startsWith('=>')) {
                    if (!isCreator) return
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = require('util').format(sat)
                        if (sat == undefined) {
                            bang = require('util').format(sul)
                        }
                        return m.reply(bang)
                    }
                    try {
                        m.reply(require('util').format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return
                    let kode = budy.trim().split(/ +/)[1]
                    let teks
                    try {
                        teks = /await/i.test(kode) ? eval("(async() => { " + kode + " })()") : eval(kode)
                    } catch (e) {
                        teks = e
                    } finally {
                        await m.reply(require('util').format(teks))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return m.reply(`${err}`)
                        if (stdout) return m.reply(stdout)
                    })
                }
                break;
                break;
        }
    } catch (err) {
        console.log(require('util').format(err));
    }
};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(`Update ${__filename}`);
    delete require.cache[file];
    require(file);
});
