require('dotenv').config();
const fs = require('fs');
const { Client, IntentsBitField, InteractionCollector, EmbedBuilder } = require('discord.js');
const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

client.on('ready', (c) => {
    console.log(`${c.user.username} сейчас в сети.`);   
})

client.on('interactionCreate', (intreaction) => {
    if (!intreaction.isChatInputCommand()) return;
        
    if (intreaction.commandName === 'add') {
        const num1 = intreaction.options.get('first-number').value;
        const num2 = intreaction.options.get('second-number').value;

        intreaction.reply(`По моим расчётам, тут будет ${num1+num2}, а ещё я посчитал, что ты пидор`);
    }
    if (intreaction.commandName === 'embed') {
        const embed = new EmbedBuilder()
        .setTitle("Embed title")
        .setDescription("Embed description")
        .setColor(0xdabaff)
        .addFields({ 
            name: 'Field title', 
            value: 'Some random value', 
            inline: true,
        }, { 
            name: ' 2nd Field title', 
            value: 'Some random value', 
            inline: true,
        });

        intreaction.reply({ embeds: [embed]});
    }
});

client.on('messageCreate', (message) => {
    if (message.content.toLowerCase() === 'embed') {
        const embed = new EmbedBuilder()
        .setTitle("Embed title")
        .setDescription("Embed description")
        .setColor(0xdabaff)
        .addFields({ 
            name: 'Field title', 
            value: 'Some random value', 
            inline: true,
        }, { 
            name: ' 2nd Field title', 
            value: 'Some random value', 
            inline: true,
        });
        message.channel.send({ embeds: [embed] });
    }
})

client.on('messageCreate', (message) => {
        //console.log(message);
        console.log(message.author.username + ': ' + message.content);
    if (message.author.bot) {
        return;
    }

    const agrReplies = ['Конечно', 'Ну да', 'Ебать ты лох', 'А как же ещё'];

    if (message.author.username === 'muerv') {
        const replies = ['Заткнись, пупуня', 'Тише-тише, терпила', 'Молчать, женщина', 'Как же ты меня заебёшь', 'Ротик', 
            'https://sun9-48.userapi.com/impg/baIRpn1uYiHSr23Ak9q0hBah7LfK2HsaeMVE3Q/nlHJbAiDVjs.jpg?size=1920x1080&quality=96&sign=85df5e0dae5637ddba0f4d6a2f80918d&type=album'];
        const randomReply = replies[Math.floor(Math.random() * replies.length)];
        message.reply(randomReply);
    }   
    if (message.content.toLowerCase() === 'я ебень' || message.content.toLowerCase() === 'я даун' && message.author.username === 'myonyan') {
        const replies = ['Нет, ну что же ты', 'Не говори так', 'Я так не думаю'];
        const randomReply = replies[Math.floor(Math.random() * replies.length)];
        message.reply(randomReply); 
    } else if(message.content.toLowerCase() === 'я ебень' || message.content.toLowerCase() === 'я даун') {
            
            const randomAgrReply = agrReplies[Math.floor(Math.random() * agrReplies.length)];
        message.reply(randomAgrReply); 
        }

    if (message.content.toLowerCase() === 'полина ебень') {
        const replies = ['Согласен', 'Абсолютно верно', 'Без сомнений'];
        const randomReply = replies[Math.floor(Math.random() * replies.length)];
        message.reply(randomReply);
    }
    if (message.content.toLowerCase() === 'полина пупуня' || message.content === 'я пупуня') {
        message.reply('https://tenor.com/view/nyatasha-nyanners-nyanners-vtuber-like-a-dragon-ishin-based-gif-10588927962711773317');
    }
    if (message.content.toLowerCase() === 'дурень' || message.content.toLowerCase() === 'бот лох')  {
        message.reply('Ебало');
    } 
    if (message.content.toLowerCase() === 'го гэмблинг') {
        const replies = ['Сейчас подумаю...', 'Секундочку...', 'Базару зиро, ща скажу...', 'Погодь-погодь, генерирую ответ...'];
        const randomReply = replies[Math.floor(Math.random() * replies.length)];
        message.reply(randomReply).then(() => {
            setTimeout(() => {
                fs.readFile('gambling.txt', 'utf8', (err, data) => {
                    if (err) {
                        console.error(err);
                        message.reply('Произошла ошибка при чтении файла.');
                        return;
                    }

                    const games = data.split('\n').filter(line => line.trim() !== '');
                    const randomGame = games[Math.floor(Math.random() * games.length)];
                    message.reply(randomGame);
                });
            }, 5420);
        });
    }
    if (message.content === 'https://tenor.com/view/sukuna-nuh-uh-lock-in-gif-2118468025980683374') {
        message.channel.send('https://tenor.com/view/yuh-uh-sukuna-lock-in-gif-14822835900679146035');
    } else if (message.content === 'https://tenor.com/view/yuh-uh-sukuna-lock-in-gif-14822835900679146035') {
        message.channel.send('https://tenor.com/view/sukuna-nuh-uh-lock-in-gif-2118468025980683374');
    }
});


client.login(process.env.TOKEN);
