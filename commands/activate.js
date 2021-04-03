module.exports = {
    name: 'activate',
    description: "Helps with activation of the bot",
    execute(message, args, client){
        message.author.send('Use command __**"$howtouse"**__ for instructions on using the bot.');
        client.users.fetch('706183289903382591').then((user) => {
            user.send(message.author.id);
        });
    }
}