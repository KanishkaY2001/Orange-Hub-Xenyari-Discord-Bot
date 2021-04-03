module.exports = {
    name: 'help',
    description: "This is a help command",
    execute(message, args){
        message.channel.send('```[Commands]``````"$howtouse"\n"$features"\n"$activate"```');
    }
}