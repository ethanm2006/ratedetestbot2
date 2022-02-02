const { Client, Intents, MessageEmbed } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on("message", msg => {
  if (msg.content === "ping") {
    msg.reply("pong");
  }
})

client.login('OTM4NDE3NDc5MjU5MTYwNjA2.Yfp_Yg.mh3wCCsrChtFCMeLiUiPH8R-gVk')