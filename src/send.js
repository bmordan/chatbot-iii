const config = require('config')
const request = require('request')

const { token, botId, roomId, baseUrl } = config.gitter

module.exports = function (reply) {
  request.post({
    url: `${baseUrl}/rooms/${roomId}/chatMessages`,
    headers: {
      ['Content-Type']: 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: {
      "text": reply.string
    },
    json: true
  })
}
