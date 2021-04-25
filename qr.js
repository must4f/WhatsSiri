/* BU BOT İSTEK ÜZERİNE YAPILMIŞ BİR BOTTUR
OLASI DURUMLARDAN BİZ SORUMLULUK KABUL ETMİYORUZ

TELEGRAM: @sirisupport
*/

const chalk = require('chalk');
const {WAConnection} = require('@adiwajshing/baileys');
const {StringSession} = require('./whatssiri/');
const fs = require('fs');

async function WhatsSiri () {
    const conn = new WAConnection();
    const Session = new StringSession();  
    conn.logger.level = 'warn';
    conn.regenerateQRIntervalMs = 50000;
    
    conn.on('connecting', async () => {
        console.log(`${chalk.green.bold('Whats')}${chalk.blue.bold('Siri')}
${chalk.white.italic('Siri String Kodu Alıcı')}

${chalk.blue.italic('ℹ️  Connecting to Whatsapp... Please Wait.')}`);
    });
    

    conn.on('open', () => {
        var st = Session.createStringSession(conn.base64EncodedAuthInfo());
        console.log(
            chalk.green.bold('Siri String Kodunuz : '), Session.createStringSession(conn.base64EncodedAuthInfo())
        );
        
        if (!fs.existsSync('config.env')) {
            fs.writeFileSync('config.env', `SIRI_SESSION="${st}"`);
        }

        console.log(
            chalk.blue.bold('Lütfen üstteki kodun hepsini kopyalayın. Locale kuruyorsanız node bot.js ile botu başlatabilirsiniz. ')
        );
        process.exit(0);
    });

    await conn.connect();
}

WhatsSiri()
