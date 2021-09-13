const { glob } = require("glob");
const { promisify } = require("util");
const { Client } = require("discord.js");

const globPromise = promisify(glob);

module.exports = async (client) => {
    //Commands
    const commandFiles = await globPromise(`${process.cwd()}/command/**/*.js`);
    commandFiles.map((value) => {
        const file = require(value);
        const splitted = value.split("/");
        const directory = splitted[splitted.length - 2];

        if (file.name) {
            const properties = { directory, ...file };
            client.commands.set(file.name, properties);
        }
    });

    //Events
    const eventFiles = await globPromise(`${process.cwd()}/event/*.js`);
    eventFiles.map((value) => require(value));

    //Slash Commands
    const slashCommands = await globPromise(
        `${process.cwd()}/SlashCommand/*/*.js`
    );

    const arrayOfSlashCommands = [];
    slashCommands.map((value) => {
        const file = require(value);
        if (!file?.name) return;
        client.slashCommands.set(file.name, file);

        if (["MESSAGE", "USER"].includes(file.type)) delete file.description;
        arrayOfSlashCommands.push(file);
    });
    client.on("ready", async () => {
        //Register cmds for a single guild
       /* await client.guilds.cache
            .get("replace this with your guild id")
            .commands.set(arrayOfSlashCommands);*/

        //Register for all the guilds the bot is added in
        await client.application.commands.set(arrayOfSlashCommands);
        client.user.setActivity("Venom OP :) | Sub To Me")
    });
};