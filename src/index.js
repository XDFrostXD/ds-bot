require('dotenv').config();
const { Client, IntentsBitField } = require('discord.js');

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
        
    if (intreaction.commandName === 'dad' && intreaction.user.username === 'myonyan') {
        intreaction.reply('ты мой папа');
    } else intreaction.reply('Иди нахуй, ты не мой батя');
});

client.on('messageCreate', (message) => {
        //console.log(message);
        console.log(message.author.username + ': ' + message.content);
    if (message.author.bot) {
        return;
    }
    if (message.author.username === 'muerv') {
        const replies = ['Молчать, женщина', 'Тише-тише, терпила', 'Заткнись, пупуня', 'Как же ты меня заебёшь', 'Ротик'];
        const randomReply = replies[Math.floor(Math.random() * replies.length)];
        message.reply(randomReply);
    }   
    if (message.content === 'Полина ебень' || message.content === 'полина ебень' || message.content === 'я ебень') {
        const replies = ['Согласен', 'Абсолютно верно', 'Без сомнений'];
        const randomReply = replies[Math.floor(Math.random() * replies.length)];
        message.reply(randomReply);
    }
    if (message.content === 'Полина пупуня'　|| message.content === 'полина пупуня' || message.content === 'я пупуня') {
        message.reply('https://tenor.com/view/nyatasha-nyanners-nyanners-vtuber-like-a-dragon-ishin-based-gif-10588927962711773317');
    }
    if (message.content === 'Дурень' || message.content === 'дурень' || message.content === 'бот лох' || message.content === 'Бот лох')  {
        message.reply('Ебало');
    }    
});

client.login(process.env.TOKEN);
