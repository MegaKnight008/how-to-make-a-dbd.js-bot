var dbd = require("dbd.js")
var bot = new dbd.Bot({
  token: `BOT TOKEN`,
  prefix: ['$getServerVar[prefix]', '<@BotID>', '<@BotID>'] //make sure to make a variable named "prefix" and value at your bot prefix or see line 44 and second 2 make your bot respnd to ping
})

bot.onMessage()

const fs = require('fs')

const folders = fs.readdirSync("./commands/")

for (const files of folders) {

const folder = fs.readdirSync(`./commands/${files}/`).filter(file => file.endsWith(".js"))

for (const commands of folder) {

const command = require(`./commands/${files}/${commands}`) 

bot.command({
name: command.name,
aliases: command.aliases,
code: command.code,
nonPrefixed: command.nonPrefixed,
})

} 

}
                                      
bot.command({
  name: "ping",
  aliases: "pong",
  code: `$title[PONG!]
    $description[Ping = **$ping** ms :ping_pong:]
    $footer[Less ping = OP]
    $color[RANDOM]`
})  //this command is an example how to make a command in index.js

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
}) //After this make a folder commands but dont make new files and code. please code only in index.js
