const { Client, CommandInteraction, MessageEmbed } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
module.exports = {
    ...new SlashCommandBuilder()
  .setName("say")
  .setDescription("REPEAT\'S THE MESSAGE")
  .addStringOption((o) => 
      o
       .setName("message")
       .setDescription("MESSAGE TO REPEAT")
       .setRequired(true)
                  ), 
  
    run: async (client, interaction, message, args) => {
      
      const mtosay = interaction.options.getString("message")
      if(!mtosay){interaction.followUp({content: "MESSAGE IS REQUIRED!!"})}
var e = new MessageEmbed()
  .setTitle("MESSAGE REPEAT COMMAND") 
  .setDescription(`\u200b\n${mtosay}\n\u200b`)
  .setFooter("VENOM OP | SUB TO VenomExE")
  .setColor("GOLD")
  interaction.followUp({ content: "Here's The Message Repeated In Embed :", embeds: [e]});
    },
};