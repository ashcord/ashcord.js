/*
ASHCORD.JS
kodlar çok basit ve direk djsden return yaptım
çnk whynut
*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const Discord = require("discord.js")
const replyd = require("discord-reply-tr")
var paket=require("./package.json")
 function sendEmbed(a, options = {}) {
    if (!a) throw new Error("message bulunamadı")
    if (!options) throw new Error("Lütfen embed seçeneklerini belirtin.")
    const embed = new Discord.MessageEmbed()
    if(options.color){
    embed.setColor(options.color)
    }
    if (options.title) {
      embed.setTitle(options.title)
    }
    if (options.description) {
      embed.setDescription(options.description)
    }
    if (options.footer) {
      if (options.footer.url) {
      embed.setFooter(options.footer.content, options.footer.url)
      } else { 
      embed.setFooter(options.footer)
      }
    }
    if (options.thumbnail) {
      embed.setThumbnail(options.thumbnail)
    }
    if (options.image) {
      embed.setImage(options.image)
    }
    if (options.timestamp) {
      embed.setTimestamp(options.timestamp)
    }
    return a.channel.send(embed)
  }


function options(client){
   if(!client) return "client koyun za"
return client
}
function send(msg,mesaj) {
 if(!msg) return("boş mesaj gönderilmez")
    if(!mesaj) return ("boş mesaj gönderilmez")
   return msg.channel.send(mesaj)
}
  function login(client,token){
  if(!token) return("token koyun")
  if (token) return client.login(token)
}
function run(client,token){
  return login(client,token)
}
  function reply(tre,msg,content) {
    if(!tre) return("true yada false yazın za")
    if(!msg) return("mesaj yazın lol")
    if(!content) return("bi içerik yazınız")
    if(tre === true) {
      return replyd.true(msg,content)
    }
    if(tre === false) {
      return replyd.false(msg,content)
    }
  }
function ping(client) {
      return client.ws.ping
    }
function reboot(numer) {
      const moment = require('moment');
    console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Bot yeniden başlatılıyor...`)
      if(numer) return process.exit(numer);
      if(!numer) return process.exit(1);
    }
 function guild(msg) {
    if(!msg) return "msg gir za"
    return msg.guild
  }
  function ws(client){
    if(!client) return
    return client.ws
  }
  function react(msg,reaction){
  if(!msg) return "message koyun za"
    if(!reaction) "reaction koy za"
    	return msg.react(reaction)
  }
 function guildsize(client){
    if(!client) return "client koy"
    return client.guilds.cache.size.toLocaleString()
  }
  function usersize(client){
        if(!client) return "client koy"
        return client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()
  }
  






module.exports = {
	options,
	send,
  sendEmbed,
  login,
  reply,
  ping,
  reboot,
  guild,
  ws,
  react,
  guildsize,
  usersize,
  run,
};/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
module.exports.version = paket.version
