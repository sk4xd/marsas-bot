const kick = require("../commands/kick")
const play = require("../commands/play")
const soundList = require("../commands/showSoundList")

module.exports = (client, message) => {
  if (message.content.startsWith("!kick")) {
    return kick(message)
  }

  if (message.content.startsWith(".")) {
    return play(message)
  }

  if(message.content.startsWith("!marsashelp")) {
    return soundList(message);
  }
}
