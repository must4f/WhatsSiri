/* BU BOT İSTEK ÜZERİNE YAPILMIŞ BİR BOTTUR

OLASI DURUMLARDAN SİRİ SORUMLULUK KABUL ETMEZ

Telegram / @orgutsahibi

GitHub / ErdemBey1

WhatsSiri SİRİ-ERDEM/BEY

OWNER|ErdemBey

*/

const Siri = require('../events');



const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');

const {spawnSync} = require('child_process');

const Config = require('../config');

const chalk = require('chalk');

const fs = require('fs');

const Language = require('../language');

const Lang = Language.getString('system_stats');

if (Config.WORKTYPE == 'private') {

    Siri.addCommand({pattern: 'alive', fromMe: true, desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {

            await message.client.sendMessage(

            message.jid, 

            fs.readFileSync("/root/WhatsSiri/Media/gif/photo.jpg"),

            MessageType.image, 

            { mimetype: Mimetype.image, caption: "*●▬▬▬ Siri A Userbot ▬▬▬●*\n*Merhaba Ben Siri.*\n```Sahibimin Emirlerini Yerine Getirmek İçin Buradayım```\n*Siri Sahibi İçin Çalışıyor*\n```Yer Şey Yolunda Ve Çalışmaktayım```\n*Grade:* ```Developer```\n*Branch:* ```Master```\n*En Sevdiğim İş:*```Hizmet```\n\n*Developed by 𓆩Erdem Bey𓆪 *" }

        )

    }

        else {

            await message.client.sendMessage(message.jid,Config.ALIVEMSG + '\n*Powered by WhatsSiri*', MessageType.text);

        }

    }));

    Siri.addCommand({pattern: 'sysd', fromMe: true, desc: Lang.SYSD_DESC}, (async (message, match) => {

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')

        await message.sendMessage(

            '```' + child + '```', MessageType.text

        );

    }));

}

else if (Config.WORKTYPE == 'public') {

    Siri.addCommand({pattern: 'alive', fromMe: false, desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {

            await message.client.sendMessage(message.jid,'```Siri Her Yerde Siri Şuan Sahibin Hizmetinde!```\n\n*Version:* ```'+Config.VERSION+'```\n*Branch:* ```'+Config.BRANCH+'```\n*Telegram Group:* https://t.me/SiriSupport\n*Telegram Channel:* https://t.me/WhatsSiri' , MessageType.text);

        }

        else {

            await message.client.sendMessage(message.jid,Config.ALIVEMSG + '\n*Powered by WhatsSiri*', MessageType.text);

        }

    }));

    Siri.addCommand({pattern: 'sysd', fromMe: false, desc: Lang.SYSD_DESC}, (async (message, match) => {

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')

        await message.sendMessage(

            '```' + child + '```', MessageType.text

        );

    }));

}
