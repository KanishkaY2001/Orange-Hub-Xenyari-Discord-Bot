const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '$'

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


client.once('ready', () => {
    console.log('Xenyari Activated!');
});

client.on('message', message => {
    if(!message.content.startsWith(prefix) && !message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    
    if(command === 'help'){
        client.commands.get('help').execute(message, args);
    } else if (command == 'howtouse'){
        client.commands.get('howtouse').execute(message, args);
    } else if (command == 'features'){
        client.commands.get('features').execute(message, args);
    } else if (command == 'activate'){
        client.commands.get('activate').execute(message, args, client);
    }

    if(message.author.bot && message.author.id == 747446348454035579){
        for (let embed of message.embeds) {
            for (let field of embed.fields) {
                if(embed.author.name != '- Gacha Bot Activated -' && embed.author.name != 'Failed Authentication!' && embed.author.name != 'Successful Authentication!') {
                    client.users.fetch(embed.title).then((user) => {
                        user.send({embed: {
                            color: 3447003,
                            author: {
                                name: embed.author.name,
                                icon_url: client.user.avatarURL
                            },
                            fields: [{
                                name: field.name,
                                value: field.value
                            }
                            ],
                            timestamp: new Date(),
                            footer: {
                                icon_url: client.user.avatarURL,
                                text: embed.footer.text
                            }
                        }
                        });
                    });
                }
            }
        }
    }
    //747448669405708289 (obtain-hwid)
    //747446348454035579 (successful-whitelist)
});

client.login('TOKEN HERE...');