const embed = require('discord.js'); 
const Discord = require('discord.js'); 
const client = new Discord.Client(); 
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
"*\n o!yazıtura = Yazı tura atar şansına ne gelirse.\n o!havalıyürü = Havalı yürür. \n o!havalıyumruk = Havalı bir şekilde yumruk atar.\n o!selamla = Politakacı gibi selamlar. \n o!tokatla = Birini tokatlar. \n o!topuğunasık = Birinin topuğuna sıkar. \n o!avatar = Profil fotoğrafını gösterir. \n o!sunucubilgi = Sunucu bilgisini gösterir.") 
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
.addField("MAFYA EKİBİM", 
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

  if (msg.content.toLowerCase() === prefix + 'sunucubilgi') {

    if  (msg.channel.type === 'dm') {

      const ozelmesajuyarii = new Discord.RichEmbed()

    .setColor(0x00AE86)

    .setTimestamp()

    .setAuthor(msg.author.username, msg.author.avatarURL);

    msg.author.sendEmbed(ozelmesajuyarii); }

    if (msg.channel.type !== 'dm') {

      const sunucubilgi = new Discord.RichEmbed()

    .setColor(0x00AE86)

    .setTimestamp()

    .setAuthor(msg.guild.name, msg.guild.iconURL)

    .addField('Ad:', msg.guild.name)

    .addField('ID', msg.guild.id)

    .addField('Ana kanal:', msg.guild.defaultChannel)

    .addField('Bölge', msg.guild.region)

    .addField('Üye sayısı:', msg.guild.memberCount)

    .addField('Sahibi:', msg.guild.owner)

    .addField('Kanal sayısı:', msg.guild.channels.size)

    .addField('Oluşturulma tarihi:', msg.guild.createdAt);

    return  msg.channel.sendEmbed(sunucubilgi);

    }
if (message.content === prefix + 'oraletiç') {
    message.channel.send(`Kivi mi? Portakal mı? (Kivi ise: kivi Portakal ise: portakal yaz)`).then(() => {
            message.channel.awaitMessages(response => response.content === `kivi` || response.content === `portakal`,  {
                max: 1, // number of responses to collect
                time: 10000, //time that bot waits for answer in ms
                errors: ['time'],
            })
                if (response.content === kivi) {
					msg.channel.send('a')
				}
				if (response.content === portakal) {
					msg.channel.send('b')
				}
	});
});
 client.on('message', msg => {
if (msg.content === prefix + 'tokatla') { 
var cevaplar = ['http://4.bp.blogspot.com/-Cdrk6ce21MM/VdCr1HRNkWI/AAAAAAAAEuc/txEqvYl-A_8/s1600/KEMAL_SUNAL_PATRONUN_KARISINA_TOKAT.gif','http://4.bp.blogspot.com/-Cdrk6ce21MM/VdCr1HRNkWI/AAAAAAAAEuc/txEqvYl-A_8/s1600/KEMAL_SUNAL_PATRONUN_KARISINA_TOKAT.gif' ]; 
var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)]; 
msg.channel.sendEmbed(new Discord.RichEmbed().setImage(`${cevap}`).setColor("RANDOM")) 
} 
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
"https://bit.ly/2tQCiLz") 
.addField("Sunucuma Gelmek İçin Tıkla",  
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

//msg.channel.delete() kanalı siliyor
client.login(process.env.BOT_TOKEN);
