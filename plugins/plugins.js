const request = require('request')
const isPlural = require('is-plural')
const send = require('../src/send')

const timezone = 'GMT'

exports.whatIsInThisFood = function (query, cb) {
  request.post({
    url: 'https://trackapi.nutritionix.com/v2/natural/nutrients',
    headers: {
      'x-app-id': '7a8d4678',
      'x-app-key': 'ba736127e4d4e482a9b54760a66f598b',
      'x-remote-user-id': 0
    },
    body: { query, timezone },
    json: true
  }, (err, res, body) => {
    if (err) return cb(err)
    if (!body.foods) return (null, 'No idea. Sorry. Try another food.')
    const result = body.foods.reduce((res, foodItem) => {
      const { food_name: foodName, nf_sugars: sugars, nf_total_fat: fat, nf_calories: calories } = foodItem
      res += `${foodName} ${isPlural(foodName) ? 'have' : 'has'} ${sugars}g sugars, ${fat}g of fats, so thats ${calories} calories`
      return res.replace(/nullg/g, 'no').replace(/0g/g, 'no')
    }, '')
    send(result)
    cb(null, result)
  })
}
