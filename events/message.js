const kick = require("../commands/kick")
const play = require("../commands/play")
const soundList = require("../commands/showSoundList")
const cu = require("../commands/cu")
const calca = require("../commands/calca")
const gege = require("../commands/gege")

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

  if(message.content.startsWith("!cu")) {
    return cu(message);
  }

  if(message.content.startsWith("!calça")) {
    return calca(message);
  }

  if(message.content.startsWith("!gege")) {
    return gege(message);
  }
}
