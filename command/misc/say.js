const { Permissions, Message, Client, MessageEmbed } = require("discord.js");

module.exports = {
    name: "say",
    aliases: ['s'],
    description: "repeat the message", 
    run: async (client, message, args) => {
        let mtosay = args.join("")
      if(!message.guild.me.permissions.has(Permissions.FLAGS.EMBED_LINKS)){
        return message.channel.send("I DON'T HAVE THE FOLLOWING PERMS :- `EMBED_LINKS`\n```js\nASK ANY ADMIN OF THE GUILD TO PROVIDE ME THOSE PERMS```");
      };
 if(!mtosay){
   return message.channel.send("PLEASE GIVE ME A BIN SO THAT I CAN PROVIDE YOU DETAILS ABOUT IT\nEXAMPLE. -> `!bin 421542`")
 }
var e = new MessageEmbed()
  .setTitle("MESSAGE REPEAT COMMAND")
  .addField(`\u299b\n${args.join(" ")}\n\u200b`) 
  .setFooter("Venom OP | Sub To Venom ExE")
  .setColor("GOLD");
  message.channel.send({ content: "Here's The Message Repeated In Embed :", embeds: [e] }).catch(console.error)
    }
};
