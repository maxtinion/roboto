const Discord = require("discord.js");
const client = new Discord.Client();
module.exports.func = function (bot, msg, args) {
msg.channel.sendMessage("Pong!")
}
