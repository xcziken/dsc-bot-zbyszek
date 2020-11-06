const Discord = require('discord.js');
const client = new Discord.Client();

const botToken = ''; // Token aplikacji bota

let botNames = "Zbyszek"; // Imię

const $botQuestion = [ // Lista pytań
    "co robisz",
    "siema",
    "kim jest zbyszek"
]

const $botAnswer = [ // Lista odpowiedzi
    ["Zabawiam sie z Twoja mamuśką.", "Podziwiam spawn mc by Zbyszku"],
    ["Nara kiepie", "O co Ci chodzi?"],
    ["Zbyszek jest legendą gpp", "Zbyszek to budowniczy minecraft", "Zbyszek to przyszły prezydent."]
]

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

function random_item(items) {
    return items[Math.floor(Math.random()*items.length)];   
}

client.on('message', msg => {
    let command = msg.content.toLowerCase();

    if(msg.author.bot) return;

    if( command.includes(botNames.toLocaleLowerCase()) ) {
        for( let i = 0; i < $botQuestion.length; i++ ) {
            if( command.includes($botQuestion[i]) ) {
                msg.channel.send(random_item($botAnswer[i]));
                break;
            }
        }
    }
});

client.login(botToken);
