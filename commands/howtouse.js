module.exports = {
    name: 'howtouse',
    description: "This is a help command on bot usage",
    execute(message, args){
        message.author.send('Refer to __**#gacha-instructions**__ channel for script & instructions on usage.\n\nYour Gacha rolls will be notified here.\n__**DM Orange for any questions**__');
    }
}