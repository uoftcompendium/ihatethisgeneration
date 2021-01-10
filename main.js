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

 if (message.content.toLowerCase().includes(`married`)) {
     message.channel.send("why paige always tryna rub shit in our faces smh \"i took a shit on kailey\'s bed before the rest of you HA\" WE DO NOT CARE!!!!!!!!!!!!!!!!!!");
   }

 if (message.content.toLowerCase().includes(`huz`)) {
     message.channel.send("hey bestie :kissing_smiling_eyes:");
   }

 if (message.content.toLowerCase().includes(`$top`)) {
     message.channel.send("mfs see kailey's top chart and be like omg bae who hacked you :scream: :scream: :scream: :scream: :scream: :scream:");
   }

 if (message.content.toLowerCase().includes(`yves`)) {
     message.channel.send("goon one is now activated, targets locked on kailey");
   }

 if (message.content.toLowerCase().includes(`gecs`)) {
     message.channel.send("whatever you do bangbang don't man_gesturing_no tell the hospital staff you listen headphones notes to 100 gecs robot those mfs will throw away the key sobsob key");
   }

 if (message.content.toLowerCase().includes(`recs`)) {
     message.channel.send("kailey cant even rec songs anymore without someone pulling up her top artists and going \"u know what? on second thought, im good\"");
   }

 if (message.content.toLowerCase().includes(`paigey`)) {
     message.channel.send("shut up");
   }


 if (message.content.toLowerCase().includes(`chanel`)) {
     message.channel.send("its called a double entendre");
   }

 if (message.content.toLowerCase().includes(`chuu died`)) {
     message.channel.send("we blowin chuu back out");
   }


 if (message.content.toLowerCase().includes(`period`)) {
     message.channel.send("can we menofastforward out of this conversation");
   }

 if (message.content.toLowerCase().includes(`josh`)) {
     message.channel.send("one more trumpie on the streets");
   }

 if (message.content.toLowerCase().includes(`harambe`)) {
     message.channel.send("they dont call me gorilla grip for nothing");
   }

 if (message.content.toLowerCase().includes(`kaischmoney`)) {
     message.channel.send(":speaking_head:kaifuckinschmoney we need you to shut the fuck up immediately :speaking_head: kaifuckinschmoney shut the fuck up immediately :speaking_head:");
   }

 if (message.content.toLowerCase().includes(`imports`)) {
     message.channel.send("yes i saw your import files yes im ignoring them busy drawing clairo");
   }

 if (message.content.toLowerCase().includes(`baby pictures`)) {
     message.channel.send("omg did someone say baby pics :pleading_face: do you guys wanna see me as a zygote");
   }
  
 if (message.content.toLowerCase().includes(`ass`)) {
     message.channel.send("picturing paige throwing ass behind the dsw register in a rhombus");
   }
  
 if (message.content.toLowerCase().includes(`headache`)) {
     message.channel.send("why you tweeting about it");
   }

 if (message.content.toLowerCase().includes(`type`)) {
     message.channel.send("this hoe casting spells");
   }

 if (message.content.toLowerCase().includes(`bussy`)) {
     message.channel.send("silence hoes im bussy popping");
   }

 if (message.content.toLowerCase().includes(`input`)) {
     message.channel.send("input");
   }

 if (message.content.toLowerCase().includes(`input`)) {
     message.channel.send("input");
   }

 if (message.content.toLowerCase().includes(`input`)) {
     message.channel.send("input");
   }
  
  
  
  }

);

  client.login(process.env.ID);
