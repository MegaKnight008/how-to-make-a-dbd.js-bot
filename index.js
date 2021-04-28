var dbd = require("dbd.js")
var bot = new dbd.Bot({
  token: `BOT TOKEN`,
  prefix: ['$getServerVar[prefix]', '<@BotID>', '<@BotID>'] //make sure to make a variable named "prefix" and value at your bot prefix or see line 44 and second 2 make your bot respnd to ping as prefix
})

bot.onMessage()

bot.loadCommands("./commands/");

bot.variables({
  variable1: 0,
  variable2: 0,
  prefix: "your prefix of bot" //this one is compulsory
}) //You can add unlimited variables
 
bot.status({
    text: "Your custom status",
    type: "WATCHING", //4 types WATCHING , PLAYING , LISTENING , STREAMING
    status: "online", //2 types online , dnd
    time: 12
}) //After this make a folder named commands and to make a command make a new file and code in there
