// don't touch the next 3 lines

const Discord = require('discord.js');
const { token, prefix } = require('./config.json');
const client = new Discord.Client();
//
client.on("message", async message => {
  // ATTENTION !!!!!!! THIS IS WHERE YOU CAN CHANGE THE STATUS LOOK RIGHT BELOW
  // you can change the online thingy to 'online', 'idle', or 'dnd'
  // you can also change 'WATCHING' to 'PLAYING' or 'LISTENING'
  //client.user.setPresence({ activity: { name: 'happy thoughts😁', type: 'PLAYING'}, status: 'idle' })
  
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
