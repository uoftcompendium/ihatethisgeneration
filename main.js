// don't touch the next 3 lines

const Discord = require('discord.js');
const { token, prefix } = require('./config.json');
const client = new Discord.Client();
//
client.on("message", async message => {
  
 if(message.author.bot) return;
  
  
// this is where the fun begins
// replace the `template00000` with the text u want the bot to catch
// and then the "output" will be what the bot says

 if (message.content.toLowerCase().includes(`$gwkt`)) {
     message.channel.send("more kaileycore");
   }
  
  }

);

  client.login(process.env.ID);
