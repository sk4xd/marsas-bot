module.exports = (message) => {
  const min = 0;
  const max = 100;

  return message.channel.send(`Gegê tem ${getRandomInt(min, max)}% de perder as calças.`)

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
