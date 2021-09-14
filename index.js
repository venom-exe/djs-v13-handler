const { Client, Collection } = require("discord.js");
require('dotenv').config()
const client = new Client({
    intents: 32767,
});
module.exports = client;

//Variables
client.commands = new Collection();
client.slashCommands = new Collection();

require("./handler")(client);

client.login(process.env.token);
