/* 
REPLY MANAGER BY POKETALE 
2.0.0 (c) 2020-2021 Poketale bot
ÇALINMASI KESİNLİKLE YASAKTIR
LİSANS:MİT
*/


class ReplyManeger {
  
  

  
  
  static yanıtla(tru,msg,d) {
            var e = tru
    if(!msg) throw new TypeError (`.reply(message,"mesajın") şeklinde yazmayı unutma`)

  var msge = ({data:{
    içerik:d,
   replied_user:e,
    message_id:msg.id,
    kanal:msg.channel,
    mesaj:msg
  }});
      
if(!d) throw new TypeError ("Bir mesaj gir")
    msg.client.api.channels(msg.channel.id).messages.post({ 
    data: {
        content: d,   message_reference: { message_id: msg.id },
        allowed_mentions: { replied_user: e }
}
 }).then(x => x.referenced_message);
      return msge
      console.log(`[REPLY UTİL] mesaj:${d}`)
    
}
  

  
  
static istrue(d){
  var e = d
  if (e = true) {
  var b = e
  return b
}
  if (e = false) {
  var b = e
  return b
}
}
     /* static reply(msg, d,error){ 
    console.error("[REPLY UTİL] DEPRECATED:.reply yerine lütfen .reply.true yada .reply.false kullanın")
         throw new TypeError  ("[REPLY UTİL] DEPRECATED:.reply yerine lütfen .reply.true yada .reply.false kullanın")
    }
    */
    static true(msg, d){ 
 ReplyManeger.yanıtla(true,msg,d)
      var msge = ({data:{
    içerik:d,
   replied_user:true,
    message_id:msg.id,
    kanal:msg.channel,
    mesaj:msg
  }});
      return msge
}
static false(msg, d) {
  var msge = ({data:{
    içerik:d,
   replied_user:false,
    message_id:msg.id,
    kanal:msg.channel,
    mesaj:msg
  }});
 ReplyManeger.yanıtla(false,msg,d)
  return msge
}
}
 var msge = {
true:ReplyManeger.true,
false:ReplyManeger.false
  }
 
module.exports = ReplyManeger

 

/*
2.0.0 YENİLİKLER - REPLY MANAGER BY POKETALE BOT
-Tüm return hataları throw new TypeError ile değiştirildi
-reply.<true/false>.data eklendi
*/
