const soundList = require('../soundslist/sound-list')

module.exports = (message) => {
  const list = [];
  soundList.forEach(sound => {
    list.push(sound.name);
  })
  return message.reply(list);
}
