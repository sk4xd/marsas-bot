const ytdl = require('ytdl-core');
const soundList = require('../soundslist/sound-list')

module.exports = async (message) => {
  if (!message.guild) return;
  // Only try to join the sender's voice channel if they are in one themselves
  if (message.member.voice.channel) {
    let voiceChannel =  message.member.voice.channel;
    voiceChannel.join().then(connection => {
      const soundFound = soundList.find(sound => sound.name === message.content);
      if(soundFound) {
        const dispatcher = connection.play(soundFound.path);
        dispatcher.on("speaking", (speaking) => {
            if (speaking) {
              return;
            } else {
              voiceChannel.leave() 
            }
        });
        dispatcher.on("finish", end => voiceChannel.leave());
      } else {
        message.reply("Esse meme não existe, por favor digite !marsashelp para verificar a lista.")
        voiceChannel.leave()
      }
    }, {
      volume: 0.5,
    }).catch(err => {
      console.log(err)
      voiceChannel.leave();
    })
  } else {
    message.reply('Você precisa estar em um canal!');
  }
}
