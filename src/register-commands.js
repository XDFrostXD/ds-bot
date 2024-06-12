require('dotenv').config();
const { REST, Routes, ApplicationCommandOptionType } = require('discord.js');

const commands = [
    {
        name: 'add',
        description: 'Складывает два числа.',
        options: [
        {
            name: 'first-number',
            description: 'Первое число.',
            type: ApplicationCommandOptionType.Number,
            choises: [
                {
                    name: 'один',
                    value: 1,
                },
                {
                    name: 'два',
                    value: 2,
                },
                {
                    name: 'три',
                    value: 3,
                },
            ],
            required: true,
        },
        {
            name: 'second-number',
            description: 'Второе число.',
            type: ApplicationCommandOptionType.Number,
            required: true,
        }
    ]
    },
];

const rest = new REST({version: '10'}).setToken(process.env.TOKEN);

(async () => {
    try {
        console.log('Регаем глобальные слеш команды...');

        await rest.put(
            Routes.applicationCommands(process.env.CLIENT_ID),
            { body: commands }
        );

        console.log('Глобальные слеш команды зареганы.');
    } catch (error) {
        console.log(`Ты проебался лох бляяя хывазывщахывзащ, на, чекни где: ${error}`);
    }
})();