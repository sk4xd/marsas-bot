module.exports = (message) => {
  const member = message.mentions.members.first()

  if (!member) {
    return message.reply(`Quem você está tentando kickar? Você precisa mencionar um usuário.`)
  }

  if (!member.kickable) {
    return message.reply(`Não posso kickar esse usuário. Desculpe!`)
  }

  return member
    .kick()
    .then(() => message.reply(`${member.user.tag} foi kickado.`))
    .catch((error) => message.reply(`Desculpe, ocorreu um erro.`))
}
