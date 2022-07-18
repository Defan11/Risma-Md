let handler  = async (m, { conn, usedPrefix }) => { 
conn.reply(m.chat, `
╭─˗ˏˋ *INFORMASI OWNER* ´ˎ˗
│ ✎ _Nama_ : Defan
│ ✎ _Sekolah_ : smp
│ ✎ _Umur_ : 15
│ ✎ _Asal_ : Jawa tengah
│ ✎ _Status_ : Turu deck
│ ✎ _Instagram_ : 
│    https://www.instagram.com/defan_sugiarto
│ ✎ _WhatsApp_ :
│    wa.me/6282135905896
╰───────────────────
`.trim(), m)
}

handler.help = ['infojarot']
handler.tags = ['main', 'utama']
handler.command = /^(infojarot)$/i

handler.exp = 150

module.exports = handler
