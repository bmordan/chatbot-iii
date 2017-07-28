const Faye = require('faye')

class ClientAuthExt {
  constructor (token, roomId) {
    this.token = token
    this.roomId = roomId
  }

  outgoing (message, callback) {
    if (message.channel == '/meta/handshake') {
      if (!message.ext) { message.ext = {} }
      message.ext.token = this.token
    }

    callback(message)
  }

  incoming (message, callback) {
    if(message.channel == '/meta/handshake') {
      if(message.successful) {
        console.log('Successfuly subscribed to room: ', this.roomId)
      } else {
        console.error('Something went wrong: ', message.error)
      }
    }

    callback(message)
  }
}

module.exports = function (token, roomId, handler) {
  const client = new Faye.Client('https://ws.gitter.im/faye', {timeout: 60, retry: 5, interval: 1})

  client.addExtension(new ClientAuthExt(token, roomId))

  return [
    `/api/v1/rooms/${roomId}`,
    `/api/v1/rooms/${roomId}/chatMessages`,
    `/api/v1/rooms/${roomId}/users`,
    `/api/v1/rooms/${roomId}/events`
  ].map(sub => client.subscribe(sub, handler, {}))
}
