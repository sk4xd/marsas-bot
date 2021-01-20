module.exports = (message) => {
  const member = message.mentions.members.first()
  const min = 0;
  const max = 100;

  if (!member) {
    const name = message.content.substring(5);
    return message.reply(`tem ${getRandomInt(min, max)}% de comer o cu de ${name}.`)
  }

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return  message.reply(`tem ${getRandomInt(min, max)}% de comer o cu de ${member.user.tag}.`);
}
