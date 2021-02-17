module.exports = (message) => {
  const min = 0;
  const max = 100;

  const name = message.content.substring(4);
  return message.reply(`tem ${getRandomInt(min, max)}% de perder as calças.`)

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
