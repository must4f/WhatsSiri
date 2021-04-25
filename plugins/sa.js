const Siri = require('../events');
const {MessageType} = require('@adiwajshing/baileys');

Siri.addCommand({pattern: 'sa', fromMe: true}, (async (message, match) => {

    await message.sendMessage('*şşşşt*');
    await message.sendMessage('*Aloooo Ben Geldim*');
    await message.sendMessage('*Açılın Bakim*');
  
    await new Promise(r => setTimeout(r, 1000));
   
    await message.sendMessage('*Selamın Aleyküm*');

}));

Siri.addCommand({pattern: 'infosa', fromMe: true}, (async (message, match) => {

    await message.sendMessage("*Codded by Erdem Bey*\n*WhatsApptada Selam Verelim dimi.*\n💻Usage: *.sa*")

}));
