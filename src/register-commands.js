require('dotenv').config();
const { REST, Routes } = require('discord.js');

const commands = [
    {
        name: 'dad',
        description: 'Говорит кто батя, т.е. говорит ты ли создал бота',
    },
];

const rest = new REST({version: '10'}).setToken(process.env.TOKEN);

(async () => {
    try {
        console.log('Регаем слеш комманды...');

        await rest.put(
            Routes.applicationGuildCommands(
                process.env.CLIENT_ID,
                process.env.GUILD_ID),
            {body: commands}
        );

        console.log('Слеш команды зареганы.');
    } catch (error) {
        console.log(`Ты проебался лох бляяя хывазывщахывзащ, на, чекни где: ${error}`);
    }
})();