const Discord = require("discord.js");
const client = new Discord.Client();
module.exports.func = function (bot, msg, args) {
msg.channel.sendMessage("", {
  embed: {
      title: "support",
      description: "my name is roboto, my support server is at https://discord.gg/yrRhvQ2",
      timestamp: new Date(),
      color: 0x0049FF
  }
