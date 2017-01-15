const Discord = require("discord.js");
const client = new Discord.Client();
module.exports.func = function (bot, msg, args) {
  msg.channel.sendMessage("", {
    embed: {
        title: "help",
        description: "my current commands are: @support, @help, and @ping",
        timestamp: new Date(),
        color: 0x0049FF
    }
