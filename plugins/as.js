const Siri = require('../events');
const {MessageType} = require('@adiwajshing/baileys');

Siri.addCommand({pattern: 'as', fromMe: true}, (async (message, match) => {

    await message.sendMessage('*oooooo*');
    await message.sendMessage('*Kimleri Görüyorum*');
  
    await new Promise(r => setTimeout(r, 1000));
   
    await message.sendMessage('*Aleyküm Selam*');

}));

Siri.addCommand({pattern: 'infoas', fromMe: true}, (async (message, match) => {

    await message.sendMessage("*Codded by Erdem Bey*\n*WhatsApptada Selamlara Karşılık Verelim dimi.*\n💻Usage: *.as*")

}));
