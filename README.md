# ASHCORD.JS
haha funny lib

# Kullanım
```js
const Discord = require("discord.js")
const client = new Discord.Client();
const ashcord = require("ashcord.js")

ashcord.run(client,"tokenin")

//mesaj örneği

client.on("message", async function(message) {
    if(message.author.bot) return
  ashcord.send(message,"selam")
});

```

# Ping örneği
```js
const Discord = require("discord.js")
const client = new Discord.Client();
const ashcord = require("ashcord.js")

ashcord.run(client,"tokenin")
const prefix = "!"

client.on("message", async function(message) {
	let command = message.content.split(' ')[0].slice(prefix.length);
  if(message.author.bot) return
  if(command === "ping") {
   return ashcord.send(message,`pingim:${ashcord.ping(client)}`)
  }
  });

```

# Embed örneği[YENİ!]
```js
const Discord = require("discord.js")
const client = new Discord.Client();
const ashcord = require("ashcord.js")

ashcord.run(client,"tokenin")
const prefix = "!"

client.on("message", async function(message) {
	let command = message.content.split(' ')[0].slice(prefix.length);
  if(message.author.bot) return
  if(command === "ping") {
   return ashcord.sendEmbed(message, {
title: "Pingim",
description: `${ashcord.ping(client)}ms`,
thumbnail: client.user.displayAvatarURL()
})
  }
  });
```
