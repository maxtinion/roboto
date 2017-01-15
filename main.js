
const Discord = require("discord.js");
const client = new Discord.Client();
const request = require("superagent") //Require Superagent
const config = require("./config.json");
//const fml = require("random_fml")
const fs = require("fs")
client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}!`);
  client.channels.get('261923806996594688').sendMessage(`I have started up again, I am in ${client.guilds.size} guilds, ${client.channels.size} channels, and I can see ${client.users.size} people`);
  client.user.setGame(`In development`);
});
let prefix = '^' //or any prefix
client.on('guildMemberAdd', member => {
    let guild = member.guild;
    guild.defaultChannel.sendMessage(`Welcome ${member.user.username}.`);
});

client.on('guildMemberRemove', member => {
    let guild = member.guild;
    guild.defaultChannel.sendMessage(`Farewell ${member.user.username}.`);
});

client.on('message', msg => {
  var commands = fs.readdirSync("./galimax_commands/");
     if (msg.content.startsWith(prefix)) {
         var command = msg.content.split(" ")[0].replace("^", "");
         if (commands.indexOf(command + ".js") > -1) {
             var cmd = require("./roboto_commands/" + command + ".js");
             var args = msg.content.split(" ");
             args.splice(0, 1);
             args = args.join(" ");
             try {
                 cmd.func(client, msg, args);
             } catch (err) {
                 console.log('error', 'Command ' + command + ' error! ' + err.stack);
                 msg.channel.sendMessage(":warning: Error in the `COMMAND_LOAD` event! This has been reported! :sparkles:")
                     client.channels.get(config.errorid).sendMessage("", {
                       embed: {
                           title: ":warning: Error :warning:",
                           description: "Error during the `COMMAND_LOAD` event. Stack trace in console. **Shortened Error:**\n```js\n" + err + "```",
                           timestamp: new Date(),
                           color: 0xFF0000
                       }
                     })
             }
         }
     }
})

client.login(config.token);
