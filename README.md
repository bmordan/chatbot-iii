# chatbot-III

[![Join the chat at https://gitter.im/chatbot-iii/Lobby](https://badges.gitter.im/chatbot-iii/Lobby.svg)](https://gitter.im/chatbot-iii/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Here is a superscript chat bot intergrated into a gitter room.

What you'll need to get started is a Github account for you and your bot.
Sign into [Gitter](https://developer.gitter.im/docs/welcome) as your bot and create a **Personal Access Token**.

With this you can access the Gitter API. You'll need to create a room in Gitter, and add your bot to it.

To set up a config file to run the app you'll need the roomId you want your bot to be active in.

You can hit the Gitter API with the line below replacing `{{token}}` with your **Personal Access Token**

**Get the roomId**

```sh
curl -i -H "Accept: application/json" -H "Authorization: Bearer {{token}}" "https://api.gitter.im/v1/rooms"
```

**Get the botId**

```sh
curl -i -H "Accept: application/json" -H "Authorization: Bearer {{token}}" "https://api.gitter.im/v1/user"
```

Have a mongodb running. Then start the bot service with

```
npm start
```

![](https://user-images.githubusercontent.com/4499581/28634518-5a18623c-722f-11e7-9952-a49f6575e2b3.png)

Get chatting
