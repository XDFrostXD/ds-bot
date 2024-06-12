require('dotenv').config();
const fs = require('fs');
const { Client, IntentsBitField, InteractionCollector } = require('discord.js');
const internal = require('stream');
const badReplies = ['Конечно', 'Ну да', 'Ебать ты лох', 'А как же ещё'];
const randomBadReply = badReplies[Math.floor(Math.random() * badReplies.length)];
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
});

client.on('messageCreate', (message) => {
        //console.log(message);
        console.log(message.author.username + ': ' + message.content);
    if (message.author.bot) {
        return;
    }
    if (message.author.username === 'muerv') {
        const replies = ['Заткнись, пупуня', 'Тише-тише, терпила', 'Молчать, женщина', 'Как же ты меня заебёшь', 'Ротик'];
        const randomReply = replies[Math.floor(Math.random() * replies.length)];
        message.reply(randomReply);
    }   
    if (message.content === 'я ебень' || message.content === 'я даун' || message.content === 'Я даун' || message.content === 'Я ебень' && message.author.username === 'myonyan') {
        const replies = ['Нет, ну что же ты', 'Не говори так', 'Я так не думаю'];
        const randomReply = replies[Math.floor(Math.random() * replies.length)];
        message.reply(randomReply); 
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
});

client.login(process.env.TOKEN);
