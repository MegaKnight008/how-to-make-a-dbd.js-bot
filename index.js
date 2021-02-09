var dbd = require("dbd.js")
var bot = new dbd.Bot({
  token: `Nzc1NjcyOTA5NzEyNDU3NzY5.X6pvsA.TXYcrU01O00WaodXedS0AU68VrU`,
  prefix: ['$getServerVar[prefix]', '<@775672909712457769>', '<@!775672909712457769>'] 
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
})

bot.command({
    name: 'help',
    code: `
    $title[Commands]
    $description[**Fun commands**
    \`c!8ball\`, \`c!meme\`, \`c!howgay\`, \`c!say\`, \`c!crow\`, \`c!eject\`, \`c!poll\`
  
  **Music commands**
  \`c!play\`, \`c!leave\`, \`c!queue\`
  PS: \`c!play command take time to respond as it has high ping\`

  **Moderation commands**
  \`c!automodoff\`, \`c!automodon\`

  **Economy commands**
  \`c!balance\`, \`c!work\`, \`c!beg\`, \`c!pay\`
  \`c!hourly\`, \`c!weekly\`, \`c!daily\`, \`c!yearly\`, \`c!rich\`

  **Utility commands**
  \`c!servericon\`, \`c!announcement\`

  **About me**
  \`c!help\`, \`c!botinfo\`, \`c!ping\`, \`c!invite\`, \`c!devteam\`

  **Configuration commands**
  \`c!chatbox on\`, \`c!chatbox off\`, \`c!setprefix\`

  **Brawl stars commands**
  \`c!playsolo\`, \`c!playduo\`, \`c!play3v3\`, \`c!trophies\`, \`c!trophielb\`]
  $color[RANDOM]
  $footer[Current server prefix: $getServerVar[prefix]]`
})

bot.command({
    name: 'eval',
    code: "$eval[$message] $onlyForIDs[728222970887274528;Owner only] $argsCheck[>1;What to eval?]"
})

bot.command({
    name: 'meme',
    code: "$color[RANDOM] $title[MEME] $image[https://ctk-api.herokuapp.com/meme/$random[1;500]]"
})

bot.command({
    name: 'say',
    code: "$deletecommand $message $argsCheck[>1;What to say?]"
})

bot.command({
  name: 'invite',
  code: "$title[Thank You for using the bot] $description[Use the [Invite link\\](https://discord.com/oauth2/authorize?client_id=775672909712457769&scope=bot&permissions=8) to invite the bot to your server] $footer[Requested by $username] $color[RANDOM]"
})

bot.command({
  name: 'balance',
  aliases: 'bal',
  code: "$title[Balance] $description[$username[$mentioned[1;yes]] has **$getGlobalUserVar[Money;$mentioned[1;yes]]** gems.] $color[RANDOM] $footer[$randomText[Requested by $username;So rich OwO]] $addTimestamp"
})

bot.command({
  name: "setprefix",
  aliases: 'sprefix',
  code: "$title[Setting prefix for your server] $description[Successfully set your server prefix to **$message**] $setServerVar[prefix;$message] $color[RANDOM] $footer[Nice prefix] $argsCheck[>1;Usage - `$getServerVar[prefix]setprefix <new prefix>`] $onlyPerms[manageserver;Only staff with manage server perms can use this command]"
})

bot.command({
  name: "work",
  code: "$color[RANDOM] $setGlobalUserVar[Money;$sum[$random[1;25000];$getGlobalUserVar[Money]];$authorID] $title[Work] $description[$username you worked $random[1;5] hours, you earned $random[1;25000] gems.] $footer[Hard Work UwU] $globalCooldown[4h;you have to wait %time% before you can work again!]"
})

bot.command({
  name: "beg",
  code: "$color[RANDOM] $setGlobalUserVar[Money;$sum[$random[1;1000];$getGlobalUserVar[Money]];$authorID] $title[Begging] $description[$username you begged to $randomText[Doctor;Rich human;Mega Knight;Darkie;Nurse;Crow] and you got $random[1;1000] gems.] $globalCooldown[60s;you have to wait %time% before you can beg again!]"
})

bot.command({
  name: "daily",
  code: "$color[RANDOM] $setGlobalUserVar[Money;$sum[$randomText[2500;2500];$getGlobalUserVar[Money]];$authorID] $title[Daily reward] $description[$username you claimed your daily reward and you got $randomText[2500;2500] gems.] $globalCooldown[1d;you have to wait %time% before you can use again!]"
})

bot.command({
  name: "weekly",
  code: "$color[RANDOM] $setGlobalUserVar[Money;$sum[$randomText[25000;25000];$getGlobalUserVar[Money]];$authorID] $title[Weekly reward] $description[$username you claimed your weekly reward and you got $randomText[25000;25000] gems.] $globalCooldown[1w;you have to wait %time% before you can use again!]"
})

bot.command({
  name: "yearly",
  code: "$color[RANDOM] $setGlobalUserVar[Money;$sum[$randomText[100000;100000];$getGlobalUserVar[Money]];$authorID] $title[Yearly reward] $description[$username you claimed your yearly reward and you got $randomText[100000;100000] gems.] $globalCooldown[365d;you have to wait %time% before you can use again!]"
})

bot.command({
  name: "hourly",
  code: "$color[RANDOM] $setGlobalUserVar[Money;$sum[$randomText[500;500];$getGlobalUserVar[Money]];$authorID] $title[Hourly reward] $description[$username you claimed your hourly reward and you got $randomText[500;500] gems.] $globalCooldown[1h;you have to wait %time% before you can use again!]"
})

bot.command({
  name: "pay",
  code: "$color[RANDOM] $argsCheck[>2;Usage - `$getServerCar[prefix]pay <user> <amount>`] $onlyIf[$mentioned[1;no]!=$authorID;You can’t pay yourself, please mention someone else!] $onlyIf[$checkContains[$message;-]==false;You can’t pay someone negative money!] $onlyIf[$getGlobalUserVar[Money]>=$noMentionMessage;You don’t have enough to give, dummy.] $setGlobalUserVar[Money;$sum[$getGlobalUserVar[Money;$mentioned[1]];$noMentionMessage];$mentioned[1]] $setGlobalUserVar[Money;$sub[$getGlobalUserVar[Money];$noMentionMessage];$authorID] $description[<@$authorID> gave **$noMentionMessage** gems to <@$mentioned[1]>] $author[PAYMENT] $addTimestamp"
})

bot.command({
  name: "servericon",
  code: `
  $title[Icon of $serverName[$guildID]]
   $image[$serverIcon] $color[RANDOM]`
})

bot.command({
  name: "announcement",
  aliases: "announce",
  code: "$color[RANDOM] $title[New announcement] $description[$message] $footer[By $username] $addTimestamp $deletecommand $argsCheck[>1;what to announce]"
})

bot.command({
  name: "play",
  aliases: "p",
  code: "$description[Now playing/In queue **$playSong[$message]**] $color[RANDOM] $footer[Requested by $username] $argsCheck[>1;Usage - `$getServerVar[prefix]play <songname>`] $onlyIf[$voiceID!=;You need to be in a voice channel to use this command]"
})

bot.command({
  name: "howgay",
  code: `
  $cooldown[30s;**🕓 | You need to wait for %time%**]
  $author[HowGay]
  $description[$username[$mentioned[1;yes]] is **$random[0;100]**% gay]
  $color[RANDOM]
  $argsCheck[>1;Mention someone]
  $addTimestamp `
})

bot.command({
  name: "8ball",
  code: `
  $argsCheck[>1;Mention a Message!]
  $randomText[It is certain;It is decidedly so;No Doubt;Yes Definitely;You may rely on it;As i see it, Yes;Most likely;Outlook good;Yes;Signs point to Yes;Reply Hazy;Try Again;Ask again later;Better not tell you now;Cannot predict now;Concentrate and ask again;Don't count on it;My reply is No;My sources say no;Outlook not so good;Very doubtful;No;Yes;Maybe;Probably;Totally;Negative;Positive;Never;I'm not akinator;The statistics say that there's a high probability;There's not much chance for that;I don't think] `  
})

bot.command({
  name: "$alwaysExecute",
  code: `
  $reply[$messageID;$jsonRequest[https://pepee.ga/chat?message=$message;response];no]
  $botTyping
  $onlyIf[$checkContains[$message;c!]==false;]
  $onlyIf[$channelID==$getServerVar[chatChannel];]
  $onlyIf[$getServerVar[chatbot]!=off;] `
})

bot.command({
  name: "chatbox",
  code: `
  $setServerVar[chatbot;off]
  $color[RANDOM]
  $description[Chatbot is now off, to turn it back on use $getServerVar[prefix]chatbox on or $getServerVar[prefix]chatbox on #channel mention]
  $footer[Requested by $username]
  $onlyPerms[managechannels;Only staff with manage channels permissions can use this]
  $onlyIf[$checkContains[$message;off]==true;]`
})

bot.command({
  name: "chatbox",
  code: " $setServerVar[chatChannel;$mentionedChannels[1;yes]] $setServerVar[chatbot;on] $color[RANDOM] $description[Chatbot is now on, to make it work in a specific channel use $getServerVar[prefix]chatbox on #channel mention and to stop the chatbot use $getServerVar[prefix]chatbox off!] $footer[Requested by $username] $onlyPerms[managechannels;Only staff with manage channels permissions can use this] $onlyIf[$checkContains[$message;on]==true;]"
})

bot.command({
  name: "botinfo",
  aliases: "stats",
  code: `
  $title[My info] 
  $color[RANDOM]
  $description[
  **Name**: Crow#2824
  **Owner**: [MegaKnight007#1185\\](https://discord.com/users/728222970887274528)  
  **Bot ID**: 775672909712457769
  **Server count**: $serverCount
  **Member count**: $allMembersCount
  **Main command**: $getServerVar[prefix]help
  **Ping**: $ping ms
  **Uptime**: $uptime
  **Default prefix**: c!
  **Current server prefix**: $getServerVar[prefix]

  **Some useful links**
  Join my [Main + support server\\](https://discord.gg/EDjT383aeP) Astro - Brawl stars
  Join my [Support server\\](https://discord.gg/QXmQQ8MQ8G) NovaTechOrg
  Use the [Invite link\\](https://discord.com/oauth2/authorize?client_id=775672909712457769&scope=bot&permissions=8) to invite bot to your server]
  $footer[A NovaTech™ Project;https://cdn.discordapp.com/icons/791713097462972457/a_f24fdbc2f9178bfa77dc0c3c45b3387e.gif]
  $image[https://cdn.discordapp.com/attachments/776014701137494016/802884028101165066/IMG_20210124_182423.jpg]`
})

bot.command({
  name: "playsolo",
  code: `
$color[RANDOM]
$setGlobalUserVar[trophie;$sum[$random[0;10];$getGlobalUserVar[trophie]];$authorID]
$title[SOLO SHOWDOWN]
$description[$username you played a match of solo showdown and got $random[0;10] trophies <:Crow_Trophies:791187108525244416> .]
$globalCooldown[20s;Wait for %time% before you can play a match]`
})

bot.command({
  name: "trophies",
  code: `
  $title[Total Trophies]
$description[$username[$mentioned[1;yes]] has **$numberSeparator[$getGlobalUserVar[trophie;$mentioned[1;yes]];,]** trophies <:Crow_Trophies:791187108525244416> .]
$footer[Requested by $username;$authorAvatar]
$addTimestamp
$color[RANDOM]`
})

bot.command({
  name: "rich",
  code: `
$author[Crow gems Global Leaderboard]
$addTimestamp
$description[$globalUserLeaderboard[Money;asc]]
$color[RANDOM]
$footer[$randomText[Rich guys appear here;can you get a spot here?]]`
})

bot.command({
  name: "playduo",
  code: `
  $color[RANDOM]
$setGlobalUserVar[trophie;$sum[$randomText[1;3;5;7;9];$getGlobalUserVar[trophie]];$authorID]
$title[DUO SHOWDOWN]
$description[$username you played a match of duo showdown and got $randomText[1;3;5;7;9] trophies <:Crow_Trophies:791187108525244416> .]
$globalCooldown[20s;Wait for %time% before you can play a match]`
})

bot.command({
  name: "play3v3",
  code: `
  $color[RANDOM]
$setGlobalUserVar[trophie;$sum[$randomText[2;8];$getGlobalUserVar[trophie]];$authorID]
$title[3v3 MATCH]
$description[$username you played a match of $randomText[Brawl ball;Gem grab;heist;bounty;hot zone;seige] and got $randomText[2;8] trophies <:Crow_Trophies:791187108525244416> .]
$globalCooldown[20s;Wait for %time% before you can play a match]`
})

bot.command({
  name: "trophielb",
  code: `
  $title[Global Trophies Leaderboard]
$description[$globalUserLeaderboard[trophie;asc]]
$color[RANDOM]
$footer[Play for a long time and come here.]`
})

bot.command({
  name: "crow",
  code: `
  $nomention
  $title[Crow's info]
  $color[$random[000000;999999]]
  $description[__**Basic Information**__
  Rarity: **Legendary**
  Total Health: **3360**
  Attack: **Switch Blade**
  Damage Per attack: **3*448**
  Reload Speed: **Fast**
  Range: **Long**
  Movement speed: **Very fast**
  
  __**Super Information**__
  Super name: **Swoop**
  Damage Per super: **14*448**
  Range of super: **Long**
  
  __**Gadget Information**__
  Number of gadgets: **2**
  1st Gadget: **Defense Booster: He Gets Shield for 40% incoming damage for 3 seconds, Number of uses - 3**
  2nd Gadget: **Slowing toxin: All currently poisoned enemies will be slowing for 5 seconds, Number of uses - 3**
  
  __**Star Power Information**__
  Number of star powers: **2**
  1st Star power: **Extra Toxic: While being poisoned enemies will deal 20% less damage**
  2nd Star power: **Carrion crow: Crow deals 120 extra damage to enemies with 50% or less health**]
  $footer[$randomText[As per January 27, 2021]]
  $thumbnail[https://cdn.discordapp.com/avatars/775672909712457769/e30e54fc92a8a2176837f1e21de3f459.png?size=2048]`
})

bot.command({
  name: "poll",
  code: `
$title[Poll Time!]
$onlyPerms[managechannels;Only staff with manage channels permissions can use this]
$addReactions[👍;👎]
$description[$message]
$footer[👍 You like it - 👎 You don't like it]
$color[$random[000000;999999]]
$argsCheck[>1;What to poll?]`
})

bot.command({
  name: "eject",
  code: `
  $argsCheck[>1;Mention someone!]
  $color[RANDOM]
  $image[https://vacefron.nl/api/ejected?name=$replaceText[$username[$mentioned[1;yes]]; ;+;-1]&impostor=$randomText[true;false]&crewmate=$randomText[black;blue;brown;cyan;darkgreen;lime;orange;pink;purple;red;white;yellow]] `
})

bot.command({
  name: "devteam",
  code: 
  `$description[
    **__BOT OWNER__**
    <@728222970887274528> [MegaKnight007#1185\\](https://discord.com/users/728222970887274528)
    
    **__OTHER DEVS/CODE EDITORS__**
    <@661501985517862972> [_๖ۣۜℜⱥjͥƤuͣtͫ_#8461\\](https://discord.com/users/661501985517862972)
    <@701292425624420362> [3STEB4N28#8799\\](https://discord.com/users/701292425624420362)
    
    **__WEBSITE DEVELOPER__**
    <@742273937395679326> [Agent BH1204.2#8618\\](https://discord.com/users/742273937395679326)
    
    **__HELPER__**
    <@725463533814284419> [BitShelf#2259\\](https://discord.com/users/725463533814284419)
    
    **__MANAGER__**
    <@693800625842028545> [SSundee#4414\\](https://discord.com/users/693800625842028545)]
    
    $color[RANDOM]
    $author[MY DEV TEAM]
    $footer[These guys are legends]`
})

bot.command({
  name: "leave",
  aliases: ["disconnect", "dc"],
  code: `
  Successfully Left the voice channel
 $djsEval[message.member.voice.channel.leave();]
 $onlyIf[$voiceID!=;You need to be in a voice channel to use this command]`
})

bot.command({
  name: "queue",
  aliases: "q",
  code: `
  $author[$queueLength songs!] $title[Queue!] $description[Currently playing $songInfo[title], duration of current song: $songInfo[duration] 
  ** **
** **
**The queue:**
**$queue**
\`$songInfo[duration_left]\` left until the current playing song ends.
** **
** **
Thumbnail of current playing song:]
$image[$songInfo[thumbnail]]
$footer[Requested by $username] $color[RANDOM]
$onlyIf[$voiceID!=;You need to be in a voice channel to use this command!] `
})

bot.command({
  name: "$alwaysExecute",
  code: `
  $deletecommand
  $title[Bad word used]
  $description[$username has used a bad word in their sentence]
  $onlyIf[$checkContains[$message;fuck;nigga;bitch;penis;dick;ass;gay;lesbian;madarchod;behenchod;gaand;sex;shit]==true;]
  $onlyIf[$getServerVar[automod]!=off;]
  $color[RANDOM]
  $footer[to off automod pls do $getServerVar[prefix]automodoff]`
})

bot.command({
  name: "automodoff",
  code: `
  $setServerVar[automod;off]
  $color[RANDOM]
  $description[automod is now off, to turn it back on use $getServerVar[prefix]automodon]
  $footer[Requested by $username]
  $onlyPerms[managechannels;Only staff with manage channels permissions can use this]`
})

bot.command({
  name: "automodon",
  code: `
  $setServerVar[automod;on] 
  $color[RANDOM] 
  $description[automod is now on and to off the automod use $getServerVar[prefix]automodoff!] 
  $footer[Requested by $username] 
  $onlyPerms[managechannels;Only staff with manage channels permissions can use this] `
})

bot.variables({
  prefix: "c!",
  Money: 0,
  chatbox: 0,
  chatChannel: 0,
  chatbot: 0,
  trophie: 0,
  automod: "off"
})

bot.status({
  text: "c!help | c!botinfo | c!setprefix",
  type: "WATCHING",
  status: "online",
  time: 12
})

bot.status({
    text: "$serverCount servers | $allMembersCount members",
    type: "WATCHING",
    status: "online",
    time: 12
})

bot.status({
    text: "This is fine",
    type: "PLAYING",
    status: "online",
    time: 12
})

bot.status({
  text: "Under development as bot library has changed",
  type: "PLAYING",
  status: "online",
  time: 12
})