const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on('ready', () => {
    console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
    bot.user.setActivity(`Rusteria 2x Dev`, {type: "PLAYING"});
  });

bot.on("guildMemberAdd", function(member)
{
    member.send("```Welcome to the server!\nPlease read #info for the rules and server info```")
    let memberRole = member.guild.roles.find("name", "Member");
    member.addRole(memberRole);
});

bot.on('message', message =>{
    if(message.content === '!info')
    {
      var embed = new Discord.RichEmbed()
      .setTitle("***Rusteria INFO***")
      .setColor("RANDOM")
      .addField("• Server Website •", "https://therusteria.com/")
      .addField("• In Games Rules •", "- NO playing in a group any bigger than 3 (1 on SOLO Only server). If you are caught doing so you will be BANNED!\n- Any cheating, using scripts or any other 3rd party software to gain advantage will result in a ban.\n- Spamming chat or being racist will result in either a mute or ban.\n- Any self promoting or advertising will result in a mute or ban depending on what you do.\n- Abusing game exploits will result in ban, depending on how bad.\n- Please respect all staff, they are here to help.\n- DDoSing is strictly prohibited, you will banned under the Admin's decision.\n- Use your common sense, if there are obvious rules that are not displayed here just use common sense and don't do it.")
      .addField("• Discord Rules •", "- Please dont spam any chat, this will result in a mute or possible ban from the discord.\n- NO advertising in the discord at all! This will result in a mute or possible ban from the discord.\n- No racism, racial slurs or racist comments, this will result in a mute, and then a ban if it keeps going after your mute.")
      .addField("• Apply for ADMIN! •", "https://goo.gl/forms/SWPPLaVyF8VoAKUo1")
      .addField("• VIP/Donator •", "https://sdonate.com/stores/rusteriarust/index.php")
      message.channel.sendEmbed(embed);
    }
  })

bot.on('message', message =>{
    if(message.content === '!server')
    {
      var embed = new Discord.RichEmbed()
      .setTitle("***Rusteria SERVER INFO***")
      .setColor("RANDOM")
      .addField("• Wipe schedule •", "**Solo/Duo/Trio Servers**\n- Map will wipe WEEKLY\n- BP'S will wipe MONTHLY\n**SOLO Only Servers**\n- Map will wipe FORTNIGHTLY\n- BP'S will wipe MONTHLY")
      .addField("• Our Servers! •", "- [AU/NZ] Rusteria 2x | Solo/Duo/Trio\n```client.connect 45.121.211.41:49425```\n- [AU/NZ] Rusteria 2x | Solo ONLY!\n```client.connect 40.127.67.55:28015```\n- [NA] Rusteria 2x | Solo ONLY!\n```client.connect 23.96.24.156:28015```\n")
      .addField("• Crafting •", "- On the server you will get HALF craft times then vanilla!")
      .addField("• Loot Tables •", "- Regarding loot tables, you will be getting double what you would get on vanilla (Istead of getting 2 scrap per barrel you would get 4).")
      .addField("• Day/Night Cycle •", "- Day is 45 minutes and Night is 10 minutes.")
      .addField("• Upkeep/Decay •", "- Upkeep and Decay is as per normal (Like vanilla).")
      .addField("• Max Group Size •", "- Max group size is 3 and the Team UI is set to 3. (It is set to 1 on SOLO only server)")
      message.channel.sendEmbed(embed);
    }
  })

  bot.on('message', message =>{
    var prefix = '!'
    var args = message.content.slice(prefix.length).trim().split(' ');;
      var command = args.shift().toLowerCase();
    if(message.content.startsWith('!bug')){
      let reason = args.join(" ").slice(22);

      var reportEmbed = new Discord.RichEmbed()
      .setDescription("Bugs")
      .addField("Channel", message.channel)
      .addField("Time", message.createdAt)
      .addField("Bug", reason);

      let reportschannel = message.guild.channels.find(`name`, "bug-reports");
      if(!reportschannel) return message.channel.send("Couldn't find Bugs channel");

      message.delete().catch(O_o=>{});
      reportschannel.send.send({ reportEmbed })
      return message.channel.send("Thanks for reporting the bug!");
    }
  })
  

bot.login(process.env.TOKEN);
