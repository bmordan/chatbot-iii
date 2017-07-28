const config = require('config')
const token = config.gitter.token
const roomId = config.gitter.roomId
const fayeClient = require('./src/faye-client')
const superscript = require('superscript').default
const path = require('path')
const MessageHandler = require('./src/message-handler')

const options = {
  importFile: path.join(__dirname, 'data', 'data.json')
}

superscript.setup(options, (err, bot) => {
  const message =  new MessageHandler(bot)
  fayeClient(token, roomId, message.handler)
})
