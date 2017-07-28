const config = require('config')
const request = require('request')
const send = require('./send')

const { token, botId, roomId, baseUrl } = config.gitter

module.exports = class {
  constructor (bot) {
    this.handler = (msg) => {
      if (!msg || !msg.model) return
      const { text, fromUser } = msg.model
      if (!text || !fromUser.id) return
      // dont pass the bots replys back into the bot
      if (fromUser.id === botId) return

      bot.reply(fromUser.id, text, (err, reply) => {
        if (err) throw new Error(err)

        send(reply)
      })
    }
  }
}
