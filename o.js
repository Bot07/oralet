

const embed = require('discord.js'); 

const Discord = require('discord.js'); 

const client = new Discord.Client(); 
const weather = require('weather-js');


var prefix = 'o!' 



client.on("ready", () => {client.user.setGame('o!yardım | Kivi mi? Portakal mı? | Sunucu Sayısı: ' + client.guilds.size , 'https://twitch.tv/GardropFuat') 

}); 

client.on('ready', () => { 

   console.log(`Bot${client.user.tag} adı ile giriş yaptı!`); 

 }); 

 client.on('message', msg => {

   if (msg.content.startsWith(prefix + "konuştur")) {

    if (msg.channel.type !== "dm"){

    let söz = msg.content.substring(2 + 9);

	msg.channel.bulkDelete(2);

   let embed = new Discord.RichEmbed()

    .setColor(3447003)

	.setDescription(söz)

return msg.channel.send({embed})}

   }



});

client.on('message', msg => { 

if (msg.content === prefix + 'yardım') { 

let embed = new Discord.RichEmbed() 

.setColor(Math.floor(Math.random() * (0xFFFFFF + 5))) 

.addField("KOMUTLAR", 

"tüm komutlar burada ->") 

.addField("Ana Komutlar", 

"o!bilgi = Botun bilgilerini gösterir. \n o!istatistik = Botun istatistiklerini gösterir. \n o!davet = Botun ekleme linkini gösterir. \n o!sunucular = Haraca bağlanan sunucular. \n o!tavsiye = Tavsiyenizi iletir. ") 

.addField(":cry: Mod Komutları :hammer: ",  

"\n o!temizçek = Kanalı tamamen temizler. \n o!temizle <sayı> = Belirtilen sayı kadar mesaj siler.") 

.addField(":joy: Eğlence Komutları :stuck_out_tongue: ", 

"*\n o!yazıtura = Yazı tura atar şansına ne gelirse.\n o!havalıyürü = Havalı yürür. \n o!havalıyumruk = Havalı bir şekilde yumruk atar.\n o!selamla = Politakacı gibi selamlar. \n o!tokatla = Birini tokatlar. \n o!topuğunasık = Birinin topuğuna sıkar. \n o!avatar = Profil fotoğrafını gösterir. \n o!sunucubilgi = Sunuc bilgilerini gösterir.")

.setFooter(`Bot yapımcısı: Emir | AgentSLayer#5218'dir`) 

msg.member.send({embed: embed}) 

}

});

client.on('message', msg => { 

if(msg.content === prefix + 'yardım') { 

let embed = new Discord.RichEmbed()  

.setColor(Math.floor(Math.random() * (0xFFFFFF + 5)))  

.addField("Özel mesaj olarak gönderdim", 

"Özel mesajlarını kontrol et! :postbox:") 

msg.channel.send({embed: embed})  

} 

});



client.on('message', msg => {

if (msg.content === prefix + "avatar") { 

let embed = new Discord.RichEmbed() 

.setAuthor(msg.author.username, msg.author.avatarURL)

.setColor(3447003) 

.setImage(msg.author.avatarURL) 

return msg.channel.send({embed})} 

});

 





 client.on('message', msg => {

if (msg.content === prefix + 'ekip') { 

let embed = new Discord.RichEmbed() 

.setColor(Math.floor(Math.random() * (0xFFFFFF + 5))) 

.addField("Çaycılar", 

"https://fliegeryapim.weebly.com/") 

msg.channel.send({embed: embed}) 

} 

});





 client.on('message', msg => {

if(msg.content === prefix + 'sunucular'){ 

msg.channel.send(client.guilds.map(g => g.name)) 

} 

});





 client.on('message', msg => {

if(msg.content === prefix + 'bilgi'){ 

if(msg.author.id != 414353271474487298){ 

let embed = new Discord.RichEmbed() 

.setColor(Math.floor(Math.random() * (0xFFFFFF + 5))) 

.addField('**Sunucu Sayım:**', 

'\n'+ client.guilds.size);  

msg.channel.send({embed: embed})	 

}} 

});







 client.on('message', msg => {

if (msg.content === prefix + 'havalıyürü') { 

var cevaplar = ['http://3.bp.blogspot.com/-MYS6Lif816s/VdCqGSEUXqI/AAAAAAAAEsM/S1Ci5YHLEmc/s1600/KEMAL_SUNAL_KABADAYI.Gif','http://3.bp.blogspot.com/-MYS6Lif816s/VdCqGSEUXqI/AAAAAAAAEsM/S1Ci5YHLEmc/s1600/KEMAL_SUNAL_KABADAYI.Gif' ]; 

var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)]; 

msg.channel.sendEmbed(new Discord.RichEmbed().setImage(`${cevap}`).setColor("RANDOM")) 

} 

});





 client.on('message', msg => {

if (msg.content === prefix + 'havalıyumruk') { 

var cevaplar = ['http://1.bp.blogspot.com/-WBjck4B7dAY/VdCr6HctTlI/AAAAAAAAEuk/9RU1S4L_Ah0/s1600/KEMAL_SUNAL_YUMRUGA_CARPAN_ADAM.gif','http://1.bp.blogspot.com/-WBjck4B7dAY/VdCr6HctTlI/AAAAAAAAEuk/9RU1S4L_Ah0/s1600/KEMAL_SUNAL_YUMRUGA_CARPAN_ADAM.gif' ]; 

var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)]; 

msg.channel.sendEmbed(new Discord.RichEmbed().setImage(`${cevap}`).setColor("RANDOM")) 

} 

});





 client.on('message', msg => {

if (msg.content === prefix + 'selamla') { 

var cevaplar = ['http://1.bp.blogspot.com/-vSMTAD2stxw/VdCrgr7N5XI/AAAAAAAAEt8/-tP1VMqC1UA/s1600/KEMAL_SUNAL_POLITIKACI.Gif','http://1.bp.blogspot.com/-vSMTAD2stxw/VdCrgr7N5XI/AAAAAAAAEt8/-tP1VMqC1UA/s1600/KEMAL_SUNAL_POLITIKACI.Gif' ]; 

var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)]; 

msg.channel.sendEmbed(new Discord.RichEmbed().setImage(`${cevap}`).setColor("RANDOM")) 

} 

});





 client.on('message', msg => {

if (msg.content === prefix + 'tokatla') { 

var cevaplar = ['http://4.bp.blogspot.com/-Cdrk6ce21MM/VdCr1HRNkWI/AAAAAAAAEuc/txEqvYl-A_8/s1600/KEMAL_SUNAL_PATRONUN_KARISINA_TOKAT.gif','http://4.bp.blogspot.com/-Cdrk6ce21MM/VdCr1HRNkWI/AAAAAAAAEuc/txEqvYl-A_8/s1600/KEMAL_SUNAL_PATRONUN_KARISINA_TOKAT.gif' ]; 

var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)]; 

msg.channel.sendEmbed(new Discord.RichEmbed().setImage(`${cevap}`).setColor("RANDOM")) } 

});





 client.on('message', msg => {

if (msg.content === prefix + 'topuğunasık') { 

var cevaplar = ['https://i.hizliresim.com/6Jy1k3.jpg','https://i.hizliresim.com/8YNr1r.jpg' ]; 

var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)]; 

msg.channel.sendEmbed(new Discord.RichEmbed().setImage(`${cevap}`).setColor("RANDOM")) 

}

});



client.on('message', msg => {

if (msg.content === prefix + 'davet') { 

let embed = new Discord.RichEmbed() 

.setColor(Math.floor(Math.random() * (0xFFFFFF + 5))) 

.addField("Beni Eklemek İçin Tıkla",  

"https://bit.ly/2tZDTj9") 

.addField("Çayocağıma Gelmek İçin Tıkla",  

"https://discord.gg/89j8fNX")   

msg.channel.send({embed: embed}) 

} 

});



client.on('message', msg => {

if (msg.content.toLowerCase() === prefix + `yazıtura`) { 

var sans = ["YAZI", "TURA"]; 

var sonuc = sans[Math.floor((Math.random() * sans.length))]; 

msg.channel.send(`**Sonuç: ${sonuc}**`); 

} 

});









client.on('message', msg => {

if(msg.content.startsWith(prefix + 'tavsiye')){ 

if(msg.author.id != 413346140768043018){ 

client.users.get('368450660036771850').send(msg.author.username + ' adlı kişinin tavsiyesi: ' + msg.content); 

let embed = new Discord.RichEmbed() 

.setColor(Math.floor(Math.random() * (0xFFFFFF + 5))) 

.addField('**Bot Sahibine şunu tavsiye ettiniz: **' + msg.content + '\n**Tavsiyeniz BOT SAHİBİNE iletildi.**', 

'***En yakın zamanda dönüş alacaksınız.***'); 

client.channels.get("401633988726226956").send(msg.author.username + '** şunu tavsiye etti: **' + msg.content );   

msg.channel.send({embed: embed}) 

}} 

});



 client.on('message', msg => {

if (msg.content ===  prefix + 'oraletiç') { 

let embed = new Discord.RichEmbed() 

.setColor(Math.floor(Math.random() * (0xFFFFFF + 5))) 

.addField("Abim buyur oraletin",

"İstediğinden değilse söyle (Kivi, portakal? Hangisiyse yaz)")

msg.channel.send({embed: embed})

var cevaplar = ['https://pbs.twimg.com/profile_images/419921182574788608/euNCj0cl_400x400.jpeg','https://pbs.twimg.com/profile_images/541931317257318400/2xBJjgen_400x400.jpeg' ]; 

var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)]; 

msg.channel.sendEmbed(new Discord.RichEmbed().setImage(`${cevap}`).setColor("RANDOM")) 

}

});

avatarDegis();
function avatarDegis() {


  setTimeout(() => {
   client.user.setAvatar('https://bit.ly/2KJ744b');
  }, 600000
   );


   setTimeout(() => {
      client.user.setAvatar('https://bit.ly/2ui5hbk');
  }, 600000
   );



    setTimeout(() => {
    client.user.setAvatar('https://bit.ly/2KJ744b');
  }, 600000
   );



    setTimeout(() => {
    client.user.setAvatar('https://bit.ly/2ui5hbk');
  }, 600000
   );
   

   setTimeout(() => {
     client.user.setAvatar('https://bit.ly/2KJ744b');
  }, 600000
   );
 }



    if (msg.startsWith(prefix + 'WEATHER')) { // This checks to see if the beginning of the message is calling the weather command.
        // You can find some of the code used here on the weather-js npm page in the description.

        weather.find({search: args.join(" "), degreeType: 'F'}, function(err, result) { // Make sure you get that args.join part, since it adds everything after weather.
            if (err) message.channel.send(err);

            // We also want them to know if a place they enter is invalid.
            if (result.length === 0) {
                message.channel.send('**Please enter a valid location.**') // This tells them in chat that the place they entered is invalid.
                return; // This exits the code so the rest doesn't run.
            }

            // Variables
            var current = result[0].current; // This is a variable for the current part of the JSON output
            var location = result[0].location; // This is a variable for the location part of the JSON output

            // Let's use an embed for this.
            const embed = new Discord.RichEmbed()
                .setDescription(`**${current.skytext}**`) // This is the text of what the sky looks like, remember you can find all of this on the weather-js npm page.
                .setAuthor(`Weather for ${current.observationpoint}`) // This shows the current location of the weather.
                .setThumbnail(current.imageUrl) // This sets the thumbnail of the embed
                .setColor(0x00AE86) // This sets the color of the embed, you can set this to anything if you look put a hex color picker, just make sure you put 0x infront of the hex
                .addField('Timezone',`UTC${location.timezone}`, true) // This is the first field, it shows the timezone, and the true means `inline`, you can read more about this on the official discord.js documentation
                .addField('Degree Type',location.degreetype, true)// This is the field that shows the degree type, and is inline
                .addField('Temperature',`${current.temperature} Degrees`, true)
                .addField('Feels Like', `${current.feelslike} Degrees`, true)
                .addField('Winds',current.winddisplay, true)
                .addField('Humidity', `${current.humidity}%`, true)

                // Now, let's display it when called
                message.channel.send({embed});
        });
    }

});

//msg.channel.delete() kanalı siliyor

client.login(process.env.BOT_TOKEN)
