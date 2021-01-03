const Discord = require("discord.js");

const Client = new Discord.Client;

const prefix = "!" ;


Client.on("ready", () => {
    console.log("bot operationnel")
});

Client.on("message", message => {
    if(message.author.bot) return ;
    if(message.channel.type == "dm") return ;

    //!qi
    if(message.content == prefix + "qi"){
        var result = Math.floor((Math.random() * 200) + 2)
        message.reply("ton QI est de " + result) ;
    }

    //!bisou
    if(message.content.startsWith(prefix + "bisou")){
        let mention = message.mentions.members.first() ;
        let replies = ["<@" + message.member.id + "> est parti à l'hotel avec la daronne de ", "<@" + message.member.id + "> à envoyé ses pieds à " , "<@" + message.member.id + "> c'est glissé dans les DM de ", "<@" + message.member.id + "> veut date ", "<@" + message.member.id + "> à envie de boire un verre avec ", "<@" + message.member.id + "> à fais un bisou sur la joue de ", "<@" + message.member.id + "> veut aller au resto avec ", "<@" + message.member.id + "> a roulé une pelle à ", "<@" + message.member.id + "> a mis du gel hydroalcoolique puis sert la main de " ] ; 
        let random = Math.floor(Math.random() * replies.length) ;

        if (mention == undefined){
            message.reply("T'as oublié de ping quelqu'un connard") ;
        }
            else {
            message.channel.send(replies[random] + "<@" + mention + ">") ;
        
    } }

    //!boss
    if(message.content == prefix + "boss"){
        message.channel.send("BOSS :muscle:") ;
    }

        //!cheh
        if(message.content == prefix + "cheh"){
            message.channel.send("CHEH CHEH CHEH") ;
        }

    //!farouk
    if(message.content.startsWith(prefix + "farouk")){
        let replies = ["Cette homme est un escroc", "envoie kama please", "2003 KEKW", "EHH la moula", "dimanche 18h34 j'suis pas la" ] ; 
        let random = Math.floor(Math.random() * replies.length) ;
        message.channel.send(replies[random]) ;
    }

    //!hamza
    if(message.content.startsWith(prefix + "hamza")){
        let hamza = ["1m95 et 10 cm de détente", "NARUTOOOOOOOOOO", "SASUKEEEEEEEEEEE", "go channel gacha, c'est fais pour toi", "c'est homme n'a aucun sens"] ;
        let random = Math.floor(Math.random() * hamza.length) ;
        message.channel.send(hamza[random]) ;
    }

    //!guillaume
    if(message.content.startsWith(prefix + "guillaume")){
        let guillaume = ["lol > genshin", "Envoie devoir chien", "il est tard, faut dormir monsieur", "Enlève ton pull"] ;
        let random = Math.floor(Math.random() * guillaume.length) ;
        message.channel.send(guillaume[random]) ;
    }

    //!matthieu
    if(message.content.startsWith(prefix + "matthieu")){
        let matthieu = ["5head", "OMG les chevilles", "cette homme a toujours raison (non)", "nik le groupe 2", "quelle ancephale colossale"] ;
        let random = Math.floor(Math.random() * matthieu.length) ;
        message.channel.send(matthieu[random]) ;
    }

    //!christophe
    if(message.content.startsWith(prefix + "christophe")){
        let matthieu = ["24h non stop Badlion client", "trop beau kog maw (non)", "la souplesse de cette homme OMG", "Desolé d'avoir remplacer ton serveur frérot", "nik le groupe 2"] ;
        let random = Math.floor(Math.random() * matthieu.length) ;
        message.channel.send(matthieu[random]) ;
    }

    //!nico
    if(message.content.startsWith(prefix + "nico")){
        let matthieu = ["Il est coincé dans les bouchon", "guillaume suo genshin ?", "redoublant KEKW", "nik le groupe 2", "chien"] ;
        let random = Math.floor(Math.random() * matthieu.length) ;
        message.channel.send(matthieu[random]) ;
    }

    //!pauline
    if(message.content.startsWith(prefix + "pauline")){
       let matthieu = ["Respectez la daronne", "OMG une femme", "salut la fleur", "!play golden wing poour ecouter du jojo", "fuck Dio"] ;
       let random = Math.floor(Math.random() * matthieu.length) ;
       message.channel.send(matthieu[random]) ;
        }

    //!chien
    if(message.content == prefix + "chien"){
        message.channel.send("Chien chien") ;
    }

    //!fight
    if(message.content == prefix + "fight"){
        message.channel.send("coming soon...") ;
    }

})

Client.login(process.env.TOKEN) ;
