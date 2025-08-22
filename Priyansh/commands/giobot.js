const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Mod by John Lester",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix", 
  cooldowns: 5,
};

module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Karachi").format("hh:mm:ss");
  const hours = moment.tz("Asia/Karachi").format("hh");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);
  
  var tl = [
    "kali kali zulfon k phandy na dalo Heer burka smbhalo, bhai stand utha lo🙂🚶",
    "Lips kissing is not Romance It's sharing Bacteria>>>🙂",
    "💸💚🖇️Tm Propose kr k to dekho qabul krny ki zimedari merii - 🙂🫣",
    "~ Piyawr Hameshw Aalsii InsaN sw kwr0 mUjhei aby neend ary hai baki Kl Bta0 gw 🙂🔪",
    "𝙀𝙠 𝙗𝙖𝙖𝙧 𝙨𝙝𝙖𝙙𝙞 𝙝𝙤𝙟𝙖𝙚 𝙥𝙝𝙞𝙧 𝙬𝙞𝙛𝙚 𝙠𝙞 𝙜𝙝𝙪𝙡𝙖𝙢𝙞 🧸🙂",
    "Ghr məıın - عـــزت noi werna Admii thy hum bhi kam kə'w -' ♡🖇️😞😒",
    "🦋🍒__🙂🎀پتہ لگا تینوں شوق لتراں دا🤝🏻🔐🫰🏻",
    "Suno Jawn DiL کرتا ha ہر Waqt تمہاری Chumiya لیتا Raho😌🙈",
    "Khud ko single keh kr Apne khufiya janu ka janaza na nikala kro.😀🤞😓",
    "چــــــــلا جـــــــا بھــــــــوســـــــــڑی کــــــــے )) 🙂✨♥️",
    "Hi mujY M Talha ne baNaYa hY 🙂",
    "Kᴀʜᴀɴɪ Sᴜɴᴏ !😔 Zᴜʙᴀɴɪ sᴜɴᴏ !😔Mᴜᴊʜʏ Bᴜᴋʜᴀʀ Hᴏᴡᴀ Tʜᴀ'ᴡ 😔 )Eᴋ sᴏ Cʜᴀᴀʀ Hᴏᴡᴀ Tʜᴀ'ᴡ 🥺💔:)",
    "- 𝙩𝙪𝙢 𝙢𝙚𝙧𝙖 𝙙𝙞𝙡 𝙩𝙤 𝘾𝙝𝙪𝙧𝙖 𝙣𝙝𝙞 𝙥𝙖𝙮 𝙠𝙞𝙖 𝙛𝙖𝙞𝙙𝙖 𝙩𝙢𝙝𝙖𝙧𝙞 𝘾𝙝𝙤𝙤𝙧 𝙟𝙚𝙨𝙞 𝙨𝙝𝙠𝙖𝙡 𝙠𝙖!! 🙂",
    "𝐄𝐤 𝐛𝐚𝐚𝐫 𝐈 𝐋𝐨𝐯𝐞 𝐘𝐎𝐲 𝐁𝐨𝐥 𝐃𝐨 𝐍𝐚 𝐌𝐚𝐫 𝐓𝐡𝐨𝐫𝐢 𝐉𝐚𝐮𝐠𝐢 🙄😕)( 👑🍒",
    "SharaM kr0'w LarKiy0' mujhe aaj AnTii ne propose Kar Diiy4'w ___/////😞🍁☠️🌸",
    "Imagine I am your Ex 🥲say whatever you want to say",
    "-😁🎗_ZeHer banaNa sikH raHiii hUn😂👀 BuS iskO trY karnY waLa cHaHiye _💔🙄😹",
    "I love You Madiha♥️ ,fatima,Ayesha, Maryam,and 299 others 🙂",
    "Hye ye Cute Cute DpiYa Unke peeche'w Chhupii MoTii Kalii AnTiiYa 🙂🍁",
    "°Mein واقعی Piyaara Hun Ya Log چونا Lagaty hain-🙂💔",
    "Ittuu🤏 si shram ker Lya kro bot bot krty wqt 🙂 💔✨⚠️†",
    "Ary Yahin Hon Jan😗",
    "jiee Shona 😍",
    "میری جان چپیڑیں کھاؤ گے - 🥹♥️🙂",
    "Miss YoU NaW Inna sara👌🏻👌🏻",
    "To mera putar chutti kr",
    "المشہور بچی باز انسائیڈ - 👀♥️⚠️",
    "😁Smile I am Taking Selfy✌️🤳",
    "🥺Jan nahi kehna to men naraz ho jana he",
    "Jesay Yaad Karne Se Hi Mood Kharab Hojaye Ek Aisa Fazool Khayal Ho Tum",
    "Main ap ki ami ko btaou ga ap Facebook use kerty ho 😂",
    "#__LaLa__LaLa__Lori #__Koi___Chori__Set__Ni__HoRRI",
    "Bhai Wese Ldki Patane Ka Trick Btao Na Bada Din Ho Gya Single Hu ;🙂",
    "Ufff aap Ki اداٸیں😗 Chaly Shabas Apna'w munh Dho kY aye'w..]] . 🙂✨//. 🦋🍒)",
    "Mera bosss M Talha Hai😂",
    "Suno Jawn DiL کرتا ha ہر Waqt تمہاری Chumiya لیتا Raho😌🙈",
    "𝐄𝐤 𝐛𝐚𝐚𝐫 𝐈 𝐋𝐨𝐯𝐞 𝐘𝐎𝐲 𝐁𝐨𝐥 𝐃𝐨 𝐍𝐚 𝐌𝐚𝐫 𝐓𝐡𝐨𝐫𝐢 𝐉𝐚𝐮𝐠𝐢 🙄😕)( 👑🍒",
    "Jab tk mein single hun yeh bh meri hai wo bhi meri ha Tum kia parh rahi tum bh meri ho😒❤🙂",
    "𝗜𝘁𝗡𝗮 𝗦𝗶𝗻𝗴𝗟𝗲 𝗛𝘂 𝗞 𝗝𝗮𝗻 𝗕𝗵𝗶 𝗹𝗶𝗸𝗛o to 𝗔𝘂𝘁𝗼 𝗖𝗼𝗿𝗿𝗲𝗰𝘁 𝐣𝐚𝐩𝐚𝐧 𝐤𝐫 𝐝𝐞𝐭𝐚 𝐡𝐚",
    "kxh LoGon Ki TyPing.. Ase LiKha Aa Rha HoTa Hai Jse WasiHat LiKh Rhy H0on 😒0or RePly ATa Hai Hmmmm 😂",
    "Baz DaFa JaWab DeNy Ke LiYe alFaz Nhi 👉😒 Ase SaQal He KaFi H0oTi Hai 😹",
    "YaKeen KRren Kxh L0og Bread Ke 1 Slice Ke TarHan H0oTy Hain j0o Kisi K0o Axhy Nhi LagTy Tum W0o Slice H0o 🫢🫣😂",
    "JeSe Aap Ki ZuBan ChalTi Hai Wse KhuD ChLo T0o MoTaPay Ka RoNa Na DalNa Pre 😂",
    "MeRi PosT PRr aYa KRro Main Kbhi Kbhi MehB0ob K0o MuThi Me kRrNy Ke Tawiz Be BTaTa Hun 😜",
    "KTny WaHaYaT H0o 🥺 Phr Be HaYaT H0o 🤭😹😹😹",
    "SaNnu ilam aa Tu BaRi VaDDi Film aa 😅",
    "ApNy DiMag Ka PaSsWord DeNa 😝 Aqal Install kRrNi Hai 😂",
    "Phr Aaj KaL KiSs Ke SaTh ChaKar Hai Uh Ka 😂😂😂",
    "➝𝗚𝗶𝗿𝗹𝘀 𝗶𝗻 𝗠𝗮𝗿𝗸𝗲𝘁: ➝𝗪𝗼 𝗕𝗹𝗮𝗰𝗸𝗗𝗿𝗲𝘀𝐬𝗗𝗲𝗸𝗵𝗮𝗡𝗮➝𝗕𝐨𝐲 𝗶𝗻 𝗠𝗮𝗿𝗸𝗲𝗧:➝𝗪𝗼 𝗕𝗹𝗮𝗰𝗞 𝗗𝗿𝗲𝘀𝘀 𝗪𝗮𝗹𝗶 𝗗𝗲𝗸𝗛🙂🤝",
    "➝𝗧𝘂𝗺 𝗪𝗼𝗛𝗶 𝗵𝗢 𝗡𝗮➝𝗝𝗶𝘀 𝗞𝗶 𝗩𝗼𝗶𝗰𝗲 𝗕𝗲𝗲𝗵𝗸𝗮𝗥𝗶𝗼 𝗝𝗮𝘀𝗶 𝗛𝗮𝗶-^☘️🙂",
    "Ek pyare s Bandi ko Mention karo 🙂🤝Set may khudh karlonga🌚🙈🌸",
    "➝𝗞𝘂𝗰𝗛 𝗱𝗶𝗻 𝗕𝗮𝗱 𝗠𝗲𝗿𝗮 𝗡𝗶𝗸𝗸𝗮𝗛 𝗛𝗮𝗶➝𝗝𝗶𝘀 𝗻𝗬 𝗞𝗿𝗻𝗮 𝗛𝗮𝗶 𝗔 𝗷𝗮𝗬🙂🤝",
    "تـیـری بیـوفـائـی نـے مجھـے ٹھـرکـی بنـا دیـا😞",
    "تم تو شکـل سے ہی میـری لگتـی ہو🥺",
    "➝𝗗𝘂𝗻𝗶𝗬𝗮 𝗸 𝗦𝗮𝗥𝘆 𝗠𝘇𝗮𝗞 𝗘𝗸 𝗧𝗮𝗿𝗮𝗳 𝗢𝗿➝𝗜𝗗 𝗖𝗮𝗿𝗱 𝗽𝗬 𝗔𝗽𝗻𝗶 𝗣𝗵𝗼𝘁𝗼 𝗘𝗸 𝗧𝗮𝗿𝗮𝗳🥹💔",
    "Dil De Diya Hen Gurda Nahi Dengy, Jo Karna Hai Karlo Sanam 👀😌",
    "Main chAhta hun ky Woh jab B Dhoka kHae nOtificationS mujhe Ayee🙂💔",
    "اپنے پتیلے جیسے منہ سے میرا نام مت لیا کرو🙂",
    "Tum wahi ho naww jessy apna blood group bhi nahi pata ^^..🙂",
    "All Girls Are My Sisters Osko Chor k jo ye Parh RaHi Hai😒👍",
    "Boys Sana, Laiba, Aliza, Sadia, Maham Zoya ishu ayzal or Ayesha py Mar ky bhi Trust na krna🌚",
    "➝𝗥𝗲𝗹𝗮𝘁𝗶𝗼𝗻𝘀𝗛𝗶𝗽 𝗔𝗿𝗲 𝗟𝗶𝗸𝗲 𝗖𝗮𝗸𝗲➝𝗝𝗶𝘁𝗻𝗮 𝗕𝗵𝗶 𝗖𝘂𝘁𝗲 𝗛𝗼 𝗞𝗮𝘁𝗬 𝗚𝗮 𝗭𝗿𝗼𝗿🙂🤝",
    "Koi Ladki Mera Name hath pw likh dy🤝🙂 Me phr uski dp lga k Cool lgo ga",
    "️Man Toh Accha H Nhi. Kam Se Kam Shakal Toh Accha Karlo Meri Jaan",
    "karlo Meri Jaan",
    "kbi sun to zra jo me keh na ska meri dunya tmi o tmi ashraa",
    "kahni sno zubani suno mjy payar howa tha iqrar howa tha",
    "kash ap humry hoty ye lafz tumry hoty",
    "𝐚𝐠𝐫 𝐛𝐧𝐝 𝐡𝐨 𝐣𝐚𝐲𝐞 𝐠𝐢 𝐦𝐞𝐫𝐢 𝐬𝐚𝐧𝐬𝐲 𝐭𝐦𝐲 𝐭𝐞𝐫𝐢 𝐤𝐮𝐬𝐡𝐛𝐨 𝐬𝐚 𝐩𝐞𝐜𝐡𝐚𝐧 𝐥𝐨 𝐠𝐚",
    "lahor da pawa akhter lawa",
    "AK br biwi mil jaye Run mureedi k sary record Tor deny hn....🙂💔😐",
    "➝𝗭𝗶𝗻𝗱𝗮𝗴𝗶 𝗺𝗮𝗶𝗻 𝗔𝗴𝗥 𝗸𝘂𝗖𝗵 𝗧𝗵𝗘𝗲𝗸 𝗖𝗵𝗮𝗟 𝗥𝗮𝗛𝗮 𝘁𝘂\n\n➝𝗪𝗼 𝗠𝗲𝗿𝗮 𝗠𝗼𝗯𝗶𝗟𝗲 𝗛𝗮𝗶🙂🍒",
    "➝𝗠𝗮𝗺𝗮 𝗢𝗿 𝗦𝗻𝗮𝗽𝗰𝗵𝗮𝘁\n\n➝𝗕𝘀 𝗬𝗲𝗛𝗶 𝗺𝗨𝗷𝗵𝘆 𝗣𝗶𝗬𝗮𝗿𝗶 𝗦𝗺𝗷𝗵𝘁𝘆 𝗛𝗻🙂🥺",
    "ہسیا کر تے ہسایا کر ، چوسنی ورگا منہ نا بنایا کر",
    "-Kitna مــــــــنہوس ha YaAr online ate he Nazar a jata ha 😒⚠️†",
    "+92 _____________HasEen LrkiyA KhaLi JGa Pur kArEin🌚🙂",
    "Aeh, Bi, Chi, Di, Ee, Ef, Ji, Eich, Ai, Lub, You, So, Much 🙂🥺",
    "𝙎𝙝𝙖𝙙𝙞 𝙠𝙖 𝙨𝙝𝙤𝙦 𝙣𝙝𝙞 𝙝𝙖 𝙢𝙪𝙟𝙮 𝙗𝙖𝙨 𝙙𝙪𝙡𝙝𝙖 𝙗𝙖𝙣'𝙣𝙮 𝙠𝙖 𝙨𝙝𝙤𝙦 𝙝𝙖(🥺",
    "پیار محبّت سب فضول تو چلی گئے تو تیری سہیلی قبول ہ",
    "Logo ki bestie hoti he Meri bezzati hoti he 🙂💔",
    "People who daily react to my posts I'll invite you to my marriage! 🤍🫶",
    "-Block Your ‘’ gf ‘’ And Purpose me.❤️🙂🖤🥀🔪",
    "- 𝘼𝙪𝙧 𝙗𝙖𝙩𝙖𝙤 𝙩𝙬𝙢 𝙬𝙤𝙝𝙞 𝙝𝙬 𝙣𝙖𝙬 𝙟𝙞𝙨𝙚𝙮 𝙠𝙤𝙞 𝙢𝙪𝙣 𝙣𝙤𝙞 𝙡𝙖𝙜𝙖𝙩𝙖𝙬 🥹;",
    "𝘗𝘩𝘢𝘴 𝘨𝘢𝘺𝘢 𝘮𝘯 𝘣𝘩𝘪 𝘵𝘦𝘳𝘺 𝘉𝘦𝘢𝘶𝘵𝘺 𝘛𝘳𝘢𝘱 𝘮𝘯 🥺💝",
    "Kash siNGLe HONY k paisy MILTY to mn sab sY ameer HOTA😓",
    "غلامــــی صـٓــــرف بیگـــَــم دی 🚶-",
    "Jawn❤️I'm waiting for your text..🙂🙉",
    "Ek bestie to ma b deserve karta Hun ❤😁🙉",
    "بات عزت کی تھی ورنہ آج سڑک پہ پڑا دس کا نوٹ بلکل اصلی تھا🥺🌿",
    "فاصلہ رکھیں👀\n\nپیار تو ہونا نہیں خوامخواہ لڑائی ہو جائے گی😒😬",
    "محبت کرو تو انباکس میں اکیلے اکیلے🙄\n\nاور رونا دھونا پورے Facebook میں۔۔۔واہ رے پلاسٹک کے عاشقو🙁",
    "•سنو لڑکیو🙋\n\nسفید ڈریس پر لال لپ اسٹک لگاتی ہو💄 قسم سے ایمبولینس لگتی ہو😂",
    "اگر یہ❤️ ہے\n\nتو پھر یہ 🫀 کیا ہے.",
    "وہ روز کہتی تھی ہم بھاگ جائیں گے🙈\n\nاور پھر وہ بھاگ گئ مجھے لے جانا بھول گئ😥",
    " غیر کی دِل میں اگر اُترنا تھا تو میرے دِل سے اُتر گئے ہوتے ۔ 💔🙂",
    "makeup kya hai mard hi k paiso se mard hi ko bewakoof banane ki sazish🤝🙂",
    "𝘚𝘜𝘕𝘖 𝘒𝘕 𝘚𝘈 𝘔𝘖𝘋𝘌𝘓 𝘏𝘖 \n𝘔𝘌 :2002🦋🥴🖤",
    "عورت بڑا سا بڑا دُکھ بھول سکتی ہے\n\nلیکِن پڑوس میں گیا برتن نہیں 💯😁",
    "💫✨💙Tazab Piyo Zindagi Jiyo✍️🙂",
    "لفظوں میں اتنا زہر کہا سے لاتے ہو لگتا ہے سانپ کا زہر پی کے آتے ہو",
    "وہ ہمیں بے شرم کہتے ہے تو کہتے رہے فراز امی کہتی ہی جو کہتا ہے وہ ہی ہوتا ہے🤣",
    "دل کرتا ہے تمھے دعا میں مانگو پر ڈر لگتا ہے کہیں سچی میں نہ پلے پر جاؤ🤣",
    "Pyar Karne Se Pehlay Pyar Ka Anjaam Dekh Lo Agar Phir Bhi Samjh Na Aaye TouFilm Tere Naam Dekh Lo",
    "Kabhi Roti Ke Tukron Mein Kabhi Salan Ke Payale Mein Teri Zulfon Ka Dedaar Begum Har Nawale Mein",
    "Jis Nay Jald Baazi Mein Ki Shadi Unse Apni Jawani Barbaad Ki Aur Jisne Soch Samjh Karki Unse Konsa Teer Maar lia ha",
    "🔨 جسgirl boy نے منہ پے ڈمپل بنوانا ہے رابطہ کرے",
    "جن کو بہت برا لگتا ہوں نا میں 🥺وہ بھی مجھے کوئی چینی والا پراٹھا نہیں لگتے 🙄😏🙃",
    "کاش بلاک کی جگہ ہلاک کا آپشن ہوتا😂میں ہر روز دو، چار پھڑکا دیتی 🤧🤣😒",
    "اگر دل ٹوٹے 💔 تو میرے پاس چلے آ نا🚶 مجھے میرے جیسے لوگوں سے محبت ہے💯",
    "مجھے بدتمیز کہتے ہیں 😏یہ ڈیٹول سے دھلے لوگ😒",
    "باپ چاہتا ہے بیٹا پائلٹ بنے ماں چاہتی ہے بیٹا انجنیئر بنے اور بیٹا فیسبک پر شُمائلہ بنا ہوا ہے 😂🤣😂",
    "جلدی آن لائن ہو جایا کرو😛😛😉😉آدھی بیٹری تو تمہارا انتظار کرتے کرتے ختم ہو جا تی ہے",
    "تم بدلو تو مجبوری ہم بدلیں تو بے وفائ مطلب۔ ہماری خارش کُھرک اور تمہاری خارش اسکن انفیکشن🤣🤣🤭🤣🤭",
    "دل کرتا ہے سب کو چوڑیاں لادوں🙊پر فیر تسی ٹھرکی سمجھ لینا اے 🤣😔😜",
    "اُستاد: وہ کون سا باز ہے جو اڑ نہیں سکتا ..؟میں : لونڈے باز 🙂",
    "بھینس🐂 سےانڈے🥚 کی امید رکھ لو لیکن کراچی کی لڑکی سے Wafa کی امید نا رکھنا😏☹️💔",
    "‎وہ لڑکی اور آنٹی میسج کرے جس نے آج تک فائزہ بیوٹی کریم استعمال نہ کی ہو دیکھنا اب کوئی نہیں آئے گی‎",
    "‏تمہاری چمی شمی لیلوں کوئی مسئلہ تو نہیں۔۔۔؟🤭",
    " Teacher: any questions? Me: Kyun kisi ko wafa ke badly wafa nahi milti😕😂",
    "سنگل رہنےکا فاہدہ نہ رونا،نہ دھونانہ شونا،نہ مونانہ آدھا،نہ پونابس کھانا اور سونا",
    "گرمی گواہ اے چٹا رنگ تباہ اے خیر سانوں کی اے ساڈا کہڑا عیدوں بعد ویا ہ اے🤣🤣",
    "تھوڑی سی منگنی ہو جاتی تو عید کا جگاڑ لگ جاتا😂🙈،،🤟",
    "مجھے روزانہ یہ الفاظ ہمت دیتے ہیں لَا تَحْزَنْ اِنَّ اللّٰهَ مَعَنَا۔🍂غم نہ کرو، بیشک اللّٰہ ہمارے ساتھ ہے🇵🇰🇵🇰❤️❤",
    "‏دودھ میں شَکر نہیں، 😶میرا کسی کے ساتھ چکر نہیں دودھ میں شکر پاؤ 😒مینوں وی کوئی پھساوُ",
    "لوگوں کی تعریف کرو تو وہ شرما جاتے ہیں میری کوئی تعریف کرے تو مجھے یقین ہی نہیں ہوتا!🙄👻🙆‍♀️ہاۓےےے رےےےے میری معصومیت☺️🙈🥰",
    "جس لڑکی کو تمام مردوں سے بات کرنے کا چسکا پڑجاے وہ کسی ایک مرد کی نہیں ہوتی😌🤷‍♂️💔",
    "میری پوشٹ تے وی آ جایا کڑو 😒میں کیہڑا پھڑ کر ویاہ کر لینا🙂",
    "کہتے ہیں جب ہاتھ مے خارش ہو پیسے آتےہیں اب میرے دل مے خارش ہورہی اسکا کیا مطلب ہے 🤣",
    "اچھے دوست تکیہ کی طرح ہوتے ہیں مصیبت میں سینے سے لگا لوتنہائی میں سر رکھ لواور غصہ میں لات مار دو 😂❤️",
    "Daulat shohrat nahi chahiye Eidi chahiye sirf🙂🤝🏻",
    "زندگی ایک ہی بار ملتی ہے اسے کزنوں کے ساتھ شادی کر کے برباد مت کرنا🤭🤣",
    "Waldain se barh k is duniya main kuch nahi hai,so,Jaldi se shadi waldain ban jayen..Rishta wohi soch nayi 😅😅😅😅",
    "سوچ رہا ہوں تھوڑا وزن بڑھا لوں. 🧸بہت ہلکے میں لے رہا ہے یہ گروپ والے مجھے 🤨😓",
    "کچھ لوگوں کے کرتوت دیکھ کر لگتاہے شیطان ہوم ورک دے کے گیا ہوا ہے😀😀",
    "دیکھنا ھے تو پیار سے دیکھو😍😍😉🙈🙈غصے سے تو مجھے ، گھر والے بھی دیکھتے ہیں😔🙈😁🤣🙈🙈🙈🙈",
    "100 میں سے 90 نمبر لینے پر امی سے ڈانٹ پڑی ، اُن کا ماننا تھا کہ 0 میں نے خود سے لکھا ہے 😕👉جبکہ میں نے صرف 9 خود سے لکھا تھا 🥹👉",
    "نکاح میں آؤ گے تو عشق بھی کر لیں گے..😍یوں حرام محبت ہم سے نہیں ہوتی..😊",
    "💞حاصل ہو جائے تو عزت کرنا ✨💞✨نہ ملے تو بنت حوا کو بدنام نہ کرنا 😑",
    "کل امی اورخالہ کےساتھ بازارگیا۔3گھنٹے 20دکانیں گھومنے کےبعد1سوٹ لیااور آج ہم نےوہ سوٹ واپس کرنےجاناہے. ",
    "تیرے چاہنے والے بڑھ گئے 💓اب ہمارا خاموش رہنا ہی بہتر ہے ۔",
    "حضرات جس جس کو میری شادی میں آنا ہے وہ ہرنماز کے بعد میری شادی کی دعاکرے.......😂😂😂🙊🙊 شکریہ...🤭😜🙈🙈😛😛🙈",
    "لڑکوں کی دعاوں سے فرشتے بھی حیران ہوتے ہونگےکہ یہ پچھلےرمضان عائشہ کو مانگ رہا تھا اورر اس سال فائزہ کو🤯😜🤣😂🤣🌚",
    "وہ لوگ جن سے درجن کیلے منگوا کر گھر والے گن رہے ہوتے ہیں کہیں راستے میں کھا تو نہیں گیا وہ بھی لڑکیوں کو انباکس میں کہہ رہے ہوتے ہیں 🤣جانو ٹرسٹ می🙄",
    "تم میری ہو جاو🙈😉تمھارے نخرے ایسے اٹھاوں گا جیسےبلی چوزہ اٹھاتی🙈😍🙈",
    "✨❤ ؒ خو د کو کھو نے کا پتہ ہی نہیں چلا کسی کو پا نےکیلئے یو ں انتہا کر دی ہم نے۔.....",
    "دل مل کر بچھر گیا🤕تشریح ۔شاعر انبکس جاتے ہی بلاک ہو گیا😜 😁",
    "مجھے کھانا کھانے کے بعد بھوک نہیں لگتی 🙊کہیں مجھے پیار تو نہیں ہو گیا ہے، 😳😱🤔🙈",
    "کسی کُڑی کی ہینڈ رائٹنگ اچھی ہےتو میرا نام ہی ہاتھ پہ لکھ دےمجھے ڈی پی لگانی ہے 😍🙈😂",
    "‏کوئ کشی کا نہیں ہوتا مڑششششد شاڑے کوڑ مارتے ہیں کوڑ 😕😬🙉",
    "دهيرے دهيرے سے ميرى زندگى ميں آنا آتے هوئے کچھ کھانے کو بھى ليتے آنا",
    "اُٹھو سارے🥺گروپ میں چوری ہو گئی ہے ہائے میرا Eid ke shopping 🛍️ آلا شاپر کوٸی لے گیا جے😫☹️😂😂",
    "مہمانوں کے جو بچے تنگ کرتے ہیں😒کھبی سائیڈ پے لے جا کے ان کی سروس کی ہے😂😂😂😂😂😂😂😂",
    "اے میری پوسٹ پہ دوڑ کے آنے والے😍😍جا تیری اسی سال شادی ہو جائے😁😂🤪🥱🥺 ♥️🤣😜🤫🙈😂",
    "‏میری مچھروں سے نہایت مودبانہ گزارش ہے🤔 ‏کاٹنا ہے تو کاٹو..🙄.. یہ کانوں میں بھیں بھیں کرنے والی کیا بغیرتی ہے😂🤣🙈🙊",
    "سلام کے بہانے جا کر مہمانوں کی گنتی کرنا بھی پاکستانی لڑکیوں کا ٹیلنٹ ہے",
    "اب ہم خاموش نہیں رہے گےچیخ چیخ کر کہے گےعید آگئ میرا یار نی آیا😂...😍...😂",
    "پاکستانیوں کپڑے شپڑے تیار رکھنا پھر نہ کہنا 12وجے کیہڑا چن چڑھ گیا اے😁",
    "شُنو!😍میلی post😜اگنور نہ تیا تروشوٹا شا دل ہے میلاتوت جاتا ہے🥹🥹🤭",
    "پلیز جلدی جلدی بتاؤ کہ لسی کو انگلش میں کیا کہتے ہیں ایک گوری کہ معدے میں گرمی ہو گئی اس کو بتانا ہے کہ یہ پیو",
    "وہ کُن فرمائے گا✨❤️ اور تم گرتے گرتے سنبھل جاؤ گے 😊°اِنَّ رَبِّیِ یَفْعَلُ مَا یَشَاَءُ°بیشک میرا رب جو چاہے کر سکتا ہے❤💫",
    ".میری پوسٹ پر آجایا کرو ورنہ😇😯میں نے group پہ پانی ڈال کر بجلی کی تاریں گرا دینی ہیں.🙈😂 😁",
    "ایک وقت تھا ⌚جب مجھے یہاں کوئی نہیں جانتا تھا 😏اللہ کا کرم ہے دیکھیں ❤🙃آج بھی مجھے کوئی نہیں جانتا",
    "میرے پاس سے گزر گئ میرا حال تک نہ پوچھا 😢😢آپ پریشان مت ہوں وہ مجھے جانتی ہی نہ تھی 😜😜",
    "ہاتھ سے گرتا موبائل پکڑ لو 🤭😂🤭تو ایسا لگتا ہے آدھی دنیا بچا لی ہے😂🤭😂",
    "ہمیں دوسری محبت ان لوگوں سے ہو جاتی ہے جنہیں ہم پہلی محبت کا قصہ سنا رہے ہوتے ہیں 🖤😒🙆‍♀️🙏",
    "یہ جو دو چار لڑکیاں ہیں میری پوسٹ پر آتی ہیں اگر ان میں سے کوئی ایک میری زندگی میں آجاتی تو میرا گھر بھی بس جاتا😛🙈",
    "روزے ختم ہونے والے ہیں ☹جس نے مجھے دعاؤں میں مانگنا ہے 🤲مانگ لے 😋🙈❤😁پھر نہ روتے پھرنا 😂😂🙈",
    "کھوتے جِنّا قد اے تیرا تے عقل گِٹّیاں وِچ🙂😹",
    "میری روح کا پرندہ پھڑپھڑاے جب میرا موبائل گھر والوں کے ہاتھ میں نظر آے😁😁",
    "‎🌏♥️🌸🌙 ایسے ضروری ہو مُجھ کو تم جیسے ہائیں سانسوں کو۔😚❤️ 🥺🦋‎",
    "*ہم ناراض سمجھتے رہے، آپ تنگ تھے ہم سے *•🥀🕊️✨*",
    "‏وہ ایک شخص حمایت اگر کرے میری🍁 میں دو جہاں کو بتاؤں کہ عشق ایسے ہوتا ہے🍂",
    "حالات دیکھ کر ایسے لگ رہا ہے 😕کہ عید رمضان کے بعد ہی ہوگی 🤪",
    "اس کی کلائی کپڑے دھونے کے قابل نہیں ہے🙅یہ سوچ کر دو ہفتے ایک ہی سوٹ پہنا کرونگا میں🙆",
    "تمھارے والے کا میسج نہیں آ رہا تو میں کر دوں 🥺🥺 😝😝",
    "دعا ہے😉ہر محبت کی منزل Breakup💔 ہو آمین 😂 ساڈا نہیں تے کسی ہور دا وی نہیں 💔😂😂😎",
    "شُنو!😍میلی post😜اگنور نہ تیا ترو شوٹا شا دل ہے میلا توت جاتا ہے🥹🥹🤭",
    "بیوفائی تک تو ٹھیک تھا..😒 لیکن جاتے جاتے اپنی سہیلیوں سے بھی بلاک کروا گئی😣🙄🤒 ",
    "حکومتی مسئلوں سے زیادہ مُشکل ہے...!! تُمہارے بال سنوارنا..",
    "😂چھوڑ دیا مرشد لڑکیوں پہ لائن😂😂 مارنا 😒😒جس کو نیک شوہر کی ضرورت 🙈🙈🙈ہوگی😎🤦‍♂️_خود ہی انباکس آ جائیگی😜😁🙈😁۔",
    "‏ہم وہ محروم تمنا ہيں کہ بھری دنيا ميں ، اپنے حصے کی محبت بھی نہيں کر پائے🌚🥀",
    "کاش مُجھے بھی کوئی کہتا تُم گروپ میں آیا کرو تمہارے یاد میں میرے گُردے سکڑ جاتے ہیں 😒😒",
    "مجھے ایسا کیوں لگتا ہے کہ میں تم سے پٹ جاؤں گا😑😑",
    "سنا ہے شادی کے بعد بچے بھی ہوتے ہیں ",
    "فاصلہ رکھیں-بد بو آتی آپ سے 🙈👻👻",
    "سوشل میڈیا کا عشق اور پڑوسیوں کی بریانی دنوں ایک جیسی ہیں ۔۔۔۔ ملتا کچھ بھی نہیں سوائے مزے مزے والی خوشبو کے",
    "آنکھوں میں صابن ڈال لینا لیکن کسی سے روز بات کرنے کی عادت نہ ڈالنا🤣🤭🙈🙄🙊",
    "میں آلو والےپراٹھے بھی بنا لیتا ہوں چاے بھی بنا لیتا ہوں ہانڈی بھی بنا لیتا ہوں سن ری ہو نہ تم",
    "وے مولیا ۔۔۔۔اینا نو دس میں سنگل آں 🙂",
    "والدین: ہماری بیٹی ڈاکٹر بنے گی لے بیٹی : Ummmmmah اب سر درد کیسا ہے جانو 🙂😛🤣",
    "تم مجھے سمنبھال کر رکھا کرو۔۔۔۔🥺😌🥰🫣🫣❤️❤️میری پھو پھو مجھے تم سے چرانے پر تلی ہیں۔۔۔🥺🤭😤😐",
    "جتنا میں گروپ میں ایکٹیو ہوتا ہوں✌🏻کاش اتنا اگر محلے میں ہوا ہوتا 😁😁تو آج سنگل نہ ہوتا 🤭🤣😜🙈🙈",
    "میرا مقصد کسی کو ہرٹ کرنا نہیں ہوتا😢😔 میرا مقصد صرف جینا حرام کرنا ہوتا ہے 😂😂",
    "⸙ میرا واٹس ایپ نمبر ⸙😂😂زیرو تین سو پندرہ 😂،پانچ سو تیرا،پانچ سو اسکاm😂😂پانچ سو میرا 😂😕😐",
    "Meri gf hoti to mai v usse bt krta aaj puri rt time hi time hai 🤭🤭", 
    "Aao tmhare sath relationship post laga ke tmhe Femous kr du😊",
    "EK QUESTION HAI SABHI SE BTAO MAI ACHA LGTA HU YA MERI MEMES 🙈😾🤤",
    "Chakar arhy hein apki Ib ma aa k gir jaun>>🥺🚶🏻‍♀️",
    "Mout ka farishta ya Mera rishta?🙂❤️🙊•",
    "Wife k sath date pe gya tha \nJis ki thi usne dhek lya",
    " Sab ko loyal bnda chahiye tw hum dhokebaz kidhar jayen? 🥺💔",
    "WhatsApp k last seen k elwa mera koi or scene nai hai🙂",
    "Hai Tamna TumhY ChaHt sy Girayn🙂",
    "Finally es group kee do teen larkiya mujH pasanD agai Hai🚶‍♂😪🌚",
    "میرا دل یہ پکارے آجا پیچھے والے مقام میں 🤝🙂🤞",
    "Suno👀\n\nKya tum mery leye surf kha kar muu sy bulbly nikal skti ho🙂🫴",
    "- GhUlabii آنــکھیں jh0 terii dekhii Harami Yevw Dill h0 Gya 3; 🙂 😆",
    "- مجھــــــے کیـــــا مــــیں تــــو سنــــگل ہــــوں 😒",
    "Dil ko krar Aya khud pa Pyr aya😒🙈😂",
    "Ehsaas kryn Bakwas nahi, Janam 🥺Shukria😊🙆‍♂️",
    "Bs yar daily 3 4 crore ki zarorat mahsos Hoti hai 😂",
    "Begum walaw مــــــوســـــم ho rahaw haii aj to 🙂",
    "Shkl insani, soch ibleesi\n\nHnji apki hee ",
    "تـــــم میــــری بیگـــــم بنو گی کیا -🥺🖤",
    "LARKIO KAY BHI MAZAY HAY🥴 \nNO BRAIN NO TNSN⛑🔪⚡",
    "تمہارے حصے کی چُمیاں مچھر لے رہے ہیں.🙂💔",
    "Sirf Maggie noodles bna'ny sy Ghar nahi chalta SHABANA..🙂💔",
    "Wp pa add hona chahty ha apky sath ☺️💔",
    "- کھاؤ قسم تمہارے پاؤں کالے نہیں۔۔!!👣🙄",
    "Meny fail hokr bhi dekha hai Ye log shadi nh kraty 🙂💔",
    "Or batao kb ayga tumahara dill mujhe py😌🥺",
    "bht bura hu na mai? bhiin dedo apnii🙂",
    "Pyari Pyari ladkiyan Hazir Ho jay😁",
    "Kisi k pss لاش wali dp h tw send krein janu replY nahi de rhy..!",
    "MerKo abhi tk pink clr ki gf nh meli 😒🥺🙂💔:⁠-⁠)",
    "میرے مولا ایک thrkii بچــی yess کروا دے..🙂",
    "ایک kiss ادهار دے دو 💋\nکل واپس کردوں گا پکّا 😝",
    "Ajeeb ghr wale hain yr, mera phone 28% pr nikal kr apne 90% ko charge karte 𝐡𝐚𝐢𝐧-🌚",
    "Lagta hai mery sabar k phal ka koi juice bna k pee gya..😐",
    "Dil Dany ki Umar ma Exam's Dy raha hoo 🙂🤝",
    "Behes karne se Rishty kmzor hojaate hn isiliye Direct mun pe thapr marein😊",
    "Bestie ki chummi halal hai ya Haram ? 🙂",
    "2001 \nJahan dalda wahan Mamta😊\n\n2023 \nJahan larki wahan tharki😒",
    "Koi Pyari c Bachi a kr sar daba dy, Dard sa sar phat rha💔🥲",
    "Breakup k waqT kE dUa \n\n( KHUSH RAHEIN ) 🙂",
    "Thora sa Whatsapp number dy do naw🥺♥️",
    "لوٹ آؤ اور کہدو کہ \nمیں لسی پی کے سو گئی تھی😫",
    "Kuch Log achy ki Talaash Mein Mery Jaisy Masoom ko kho dety Hain☺️",
    "Tum wohi ho na jiska mood bilawaja khrab hojata h...!!!🙂",
    "Pyari pyari larkio ki talash ma berozgar larky add krliye hain 🥲💔",
    "Jab mera Message aye toh sare kaam chor kar sirf Mujhe reply kia karo😾😒",
    "Or Btao Real Life Ma bh itnyy Achy ho jitny social media per Bntyy ho>>🙂",
    "Pakistani Relationship:\nTum Feel Kro Meh Tumary uper hun 😒💔",
    "Us k jany k bd uski Pasnd ki Nail Polish lgaa k khana khata hu aesw lgta ha jesy wo khela rhee ha😒",
    "Be a Good Human.Delete GB Whatsapp💔🙂",
    "2 Din Pyar sy Baat kr loo tou Ammiyan bn jatii hain🙂😒",
    "Girls after One Mint of Relationship...\nBegam hu mn apki🙂🤦",
    "Larkiyon ko achy sy pta hai kahan -Bhai- Bolna kaha -Ap- or kaha -Tum- 🙂",
    "Aaj mein ny Khud ko TV py dheka \n\nJab Tv Band Tha 🙂",
    "Qadar krlo Meri...\nKya pta Main b Panadol ki trha aik dam shaat hojun😒",
    "Naraz bandy ko manany ka sab sy acha tareka Ap khud us sy naraz hojaoo🙂🐣",
    "Jaisi meri shakal hai kunwara he marunga🙂👀",
    "میں نے جس دن سکول میں پہلی پوزیشن حاصل کی میں اسی دن سمجھ گیا تھا کے یہ ملک کبھی ترقی نہیں کر سکتا😐😐",
    "یقین کریں میٹرک کے پیپر بہت آسان ہیں.میں نے خود سات دفعہ دیئے ہیں😐",
    "Itni memories mere khud dimagh mai nahi hai jitni Snapchat ny bna rkhi hai",
    "Chakki Chakki Meko Is Mulk Sy Bahir Nikal 🥹"
  ];
  
  var rand = tl[Math.floor(Math.random() * tl.length)];
  
  if ((event.body.toLowerCase() == "by") || (event.body.toLowerCase() == "bye")) {
    return api.sendMessage("ChaL NiKaL 🙄", threadID); 
  };
  
  if ((event.body.toLowerCase() == "inbox") || (event.body.toLowerCase() == "ib")) {
    return api.sendMessage("️ KYa IB IB 👿 Idher BOL MeRe SaMny ", threadID);
  };
  
  if ((event.body.toLowerCase() == "baby") || (event.body.toLowerCase() == "babu")) {
    return api.sendMessage("️🙈🙉🙊", threadID);
  };
  
  if ((event.body.toLowerCase() == "owner") || (event.body.toLowerCase() == "admin")) {
    return api.sendMessage("My Owner AestHetic 【☬☠𝔹𝔸𝕃𝕆ℂℍ™∆☠︎☬】🖤", threadID);
  };
  
  if ((event.body.toLowerCase() == "sim") || (event.body.toLowerCase() == "simi")) {
    return api.sendMessage("Sim Sim Na KRr IjjaT Sy MeRa Prefix LaGa 0or Bt kRr ITna Free Nhi kRta Me 😎🤞", threadID);
  };
  
  if ((event.body.toLowerCase() == "amy") || (event.body.toLowerCase() == "amyy")) {
    return api.sendMessage("Amy Amy Na KRr IjjaT Sy MeRa Prefix LaGa 0or Bt kRr ITna Free Nhi kRta Me 😎🤞", threadID);
  };
  
  if ((event.body.toLowerCase() == "tharki bot") || (event.body.toLowerCase() == "Bot tharki")) {
    return api.sendMessage("Tu TharKi Tra Bap TharKi TeRa DaDa TharKi 🤬🤗", threadID);
  };
  
  if ((event.body.toLowerCase() == "lanti bot") || (event.body.toLowerCase() == "lanti hai")) {
    return api.sendMessage("Aby Chuuu Tu LanTi Le KaB0ol kRr 🖐️🐾👣", threadID);
  };
  
  if ((event.body.toLowerCase() == "bc") || (event.body.toLowerCase() == "bhenchod")) {
    return api.sendMessage("𝑻𝒖 𝑯𝒂𝒊 𝑩𝒄🙂 𝑴𝒂𝒊𝒏 𝑻𝟎𝒐 𝑩𝒐𝑻 𝑯𝒖𝒏😂😂😂 ", threadID);
  };
  
  if ((event.body.toLowerCase() == "ja rha") || (event.body.toLowerCase() == "ja rhi")) {
    return api.sendMessage("𝑨𝒓𝒚 𝑻𝒖 𝑱𝒂 𝑵𝒂𝒂 𝑹𝒆𝒆 ", threadID);
  };
  
  if ((event.body.toLowerCase() == "nikal") || (event.body.toLowerCase() == "nikl")) {
    return api.sendMessage("𝑪𝒉𝒂𝒍 𝑪𝒉𝒂𝒍𝒍 𝑻𝒖 𝑵𝒆𝒌𝒂𝒍𝒍 𝑵𝒊𝑲𝒂𝒍𝒍🙄😂👊", threadID);
  };
  
  if ((event.body.toLowerCase() == "jan") || (event.body.toLowerCase() == "janu")) {
    return api.sendMessage("𝑨𝒘𝒘 𝒀𝒆𝒔𝒉𝒉 𝑴𝒆𝒓𝒊𝒊 𝑱𝒂𝒏😍👊", threadID);
  };
  
  if ((event.body.toLowerCase() == "😀") || (event.body.toLowerCase() == "😀😀")) {
    return api.sendMessage("𝑺𝒉𝒂𝒓𝒇𝒂𝒕 𝑺𝒚 𝑴𝒖𝒔𝒌𝒂𝒓𝒂 𝑹𝒂𝒉𝒂 𝒉𝒂𝒊𝒊👊😁😂", threadID);
  };
  
  if ((event.body.toLowerCase() == "😃") || (event.body.toLowerCase() == "😃😃")) {
    return api.sendMessage("𝑪𝒉𝒖𝑯𝒚𝒚 𝑱𝒂𝑺𝒂 𝑴𝒖𝑯 𝑵𝒂𝒂 𝑫𝒆𝒌𝑯𝒂😝😆", threadID);
  };
  
  if ((event.body.toLowerCase() == "😂") || (event.body.toLowerCase() == "😂😂")) {
    return api.sendMessage("✿°•┈┈••ৡ✵‏❤️✵ৡ•┈┈•°✿ 𝑨𝒑𝑵𝒂𝒚 𝑫𝒉𝒐𝒏𝑮𝒚 𝑱𝒂𝒔𝒂 𝑴𝒖𝒖 𝑲𝒉𝒐𝒍 𝑲 𝑮𝒓𝒐𝒖𝒑 𝑴𝒂 𝑽𝒊𝒓𝑼𝒔 𝑵𝒂 𝑷𝒉𝒆𝒍𝒂𝑶😆😅😂✿°•┈┈••ৡ✵‏❤️✵ৡ•┈┈•°✿", threadID);
  };
  
  if ((event.body.toLowerCase() == "😁") || (event.body.toLowerCase() == "😁😁")) {
    return api.sendMessage("✿°•┈┈••ৡ✵‏❤️✵ৡ•┈┈•°✿ 𝑻𝒂𝒓𝒚 𝑺𝒉𝒌𝒂𝒍 𝑺𝒚 𝒁𝒂𝒅𝒊𝒚𝒂 𝑻𝒂𝒓𝒚 𝑫𝒂𝒏𝒕 𝑪𝒉𝑴𝒂𝑲 𝑹𝒂𝒉𝒚😁🤭😂 ✿°•┈┈••ৡ✵‏❤️✵ৡ•┈┈•°✿", threadID);
  };
  
  if ((event.body.toLowerCase() == "😆") || (event.body.toLowerCase() == "😆😆")) {
    return api.sendMessage("✿°•┈┈••ৡ✵‏❤️✵ৡ•┈┈•°✿ 𝑴𝒖𝑯 𝑶𝒑𝑬𝒏 𝑨𝒏𝑲𝒉𝒀 𝑩𝒂𝑵𝒅 𝒀𝒂𝒊 𝑲𝒐𝒏𝑺𝒊𝒊 𝑴𝒂𝑮𝒊𝒄 𝑯𝒂𝒊 𝑻𝒉𝒂𝑹𝒌𝒊𝒊😀🙈🤝✿°•┈┈••ৡ✵❤️✵ৡ•┈┈•°✿", threadID);
  };
  
  if ((event.body.toLowerCase() == "😅") || (event.body.toLowerCase() == "😅😅")) {
    return api.sendMessage("✿°•┈┈••ৡ✵‏❤️✵ৡ•┈┈•°✿ 𝐓𝐚𝐫𝐲 𝐓𝐢𝐧𝐝 𝐒𝐲 𝐏𝐚𝐧𝐢𝐢𝐢 𝐊𝐲𝐔𝐧 𝐓𝐚𝐏𝐚𝐤 𝐑𝐚𝐇𝐚𝐚🥲😂👊 ✿°•┈┈••ৡ✵‏❤️✵ৡ•┈┈•°✿", threadID);
  };
  
  if ((event.body.toLowerCase() == "🤣") || (event.body.toLowerCase() == "🤣🤣")) {
    return api.sendMessage("✿°•┈┈••ৡ✵‏❤️✵ৡ•┈┈•°✿ 𝑯𝒂𝒔𝒏𝒚 𝒌𝒊 𝑩𝒉𝒊 𝑻𝒂𝒎𝒊𝒛𝒁𝒛 𝑯𝒐𝒕𝒊 𝒃𝒆𝒔𝒉𝑹𝒂𝒎 𝒊𝒏𝒔𝒂𝒏 𝑴𝒖 𝒃𝒏𝑫 𝑲𝒓😝🤪✿°•┈┈••ৡ✵‏❤️✵ৡ•┈┈•°✿", threadID);
  };
  
  if ((event.body.toLowerCase() == "😭") || (event.body.toLowerCase() == "😭😭")) {
    return api.sendMessage("✿°•┈┈••ৡ✵‏❤️✵ৡ•┈┈•°✿ 𝐘𝐚𝐫 𝐌𝐚 𝐓𝐮𝐌𝐡𝐲 𝐇𝐚𝐒𝐚 𝐑𝐡𝐚 𝐇𝐮𝐍 𝐎𝐫 𝐭𝐔𝐦 𝐁𝐚𝐂𝐡𝐨𝐧 𝐊𝐢 𝐓𝐚𝐫𝐚𝐡 𝐑𝐨𝐨 𝐑𝐡𝐲😒😆😂👊 ✿°•┈┈••ৡ✵‏❤️✵ৡ•┈┈•°✿", threadID);
  };
  
  if ((event.body.toLowerCase() == "😉") || (event.body.toLowerCase() == "😉😉")) {
    return api.sendMessage("✿°•┈┈••ৡ✵‏🩷✵ৡ•┈┈•°✿ 𝑨𝒏𝑲𝒉 𝑵𝒂 𝑴𝒂𝑹𝒐 𝑴𝒂 𝑩𝒉𝑶𝒕 𝑺𝒉𝒂𝑹𝒆𝒆𝑭 𝑯𝒖𝑵🤨🥵😁✿°•┈┈••ৡ✵‏🩵✵ৡ•┈┈•°✿", threadID);
  };
  
  if ((event.body.toLowerCase() == "😗") || (event.body.toLowerCase() == "😗😗")) {
    return api.sendMessage("😚😚😚", threadID);
  };
  
  if ((event.body.toLowerCase() == "😙") || (event.body.toLowerCase() == "😙😙")) {
    return api.sendMessage("😗😗😗", threadID);
  };
  
  if ((event.body.toLowerCase() == "😚") || (event.body.toLowerCase() == "😚😚")) {
    return api.sendMessage("😗😙😚", threadID);
  };
  
  if ((event.body.toLowerCase() == "😘") || (event.body.toLowerCase() == "😘😘")) {
    return api.sendMessage("✿°•┈┈••ৡ✵‏🩷✵ৡ•┈┈•✿ 𝒂𝑾𝒘 𝑴𝒆𝑲𝒐 𝑩𝒉𝒊𝒊 𝑷𝒂𝑷𝒊 𝑲𝒆𝑶😂😙✿°•┈┈••ৡ✵‏❤️✵ৡ•┈┈•°✿", threadID);
  };
  
  if ((event.body.toLowerCase() == "🥰") || (event.body.toLowerCase() == "🥰🥰")) {
    return api.sendMessage("✿°•┈┈••ৡ✵‏🩷✵ৡ•┈┈•°✿ 𝒂𝑾𝒘 𝑪𝒉𝒂𝒂𝒍 𝑯𝒂𝑻 𝑻𝒉𝒂𝑹𝒌𝒊 𝒊𝒏𝑺𝒂𝑵🙈✿°•┈┈••ৡ✵‏🩵✵ৡ•┈┈•°✿", threadID);
  };
  
  if ((event.body.toLowerCase() == "😍") || (event.body.toLowerCase() == "😍😍")) {
    return api.sendMessage("✿°•┈┈••ৡ✵‏❤️✵ৡ•┈┈•°✿ 𝑨𝑾𝒘 𝑻𝒂𝒓𝒚 𝑰𝒏 𝑫𝒊𝒍 𝑾𝒂𝒍𝒊 𝑨𝒏𝒌𝒉𝒐𝒏 𝑴𝒂 𝑫𝒐𝒃𝒏𝒂 𝑪𝒉𝒂𝒉𝒕𝒂 𝑯𝒖𝒏𝒏😆🙈💋 ✿°•┈┈••ৡ✵‏❤️✵ৡ•┈┈•°✿", threadID);
  };
  
  if ((event.body.toLowerCase() == "🤩") || (event.body.toLowerCase() == "🤩🤩")) {
    return api.sendMessage("▃▃▃▃▃▃▃▃▃▃▃▃\n✧˚· 𝐋𝐨𝐥 𝐒𝐨 𝐌𝐮𝐜𝐡! ·˚✧\n▃▃▃▃▃▃▃▃▃▃▃▃", threadID);
  };
  
  if ((event.body.toLowerCase() == "🥳") || (event.body.toLowerCase() == "🥳🥳")) {
    return api.sendMessage("𝐎𝐨𝐨𝐎𝐨𝐨𝐎𝐨𝐨 𝐓𝐚𝐑𝐚 𝐡𝐚𝐩𝐩𝐲 𝐁𝐢𝐫𝐭𝐡𝐝𝐚𝐲😀🎉🎊", threadID);
  };
  
  if ((event.body.toLowerCase() == "🙃") || (event.body.toLowerCase() == "🙃🙃")) {
    return api.sendMessage("✿°•┈┈••ৡ✵‏🩷✵ৡ•┈┈•✿ 𝐌𝐞𝐫𝐲 𝐒𝐚𝐦𝐍𝐲 𝐀𝐧𝐤𝐡𝐲 𝐍𝐞𝐗𝐡𝐲 𝐑𝐚𝐊𝐡𝐚 𝐊𝐫𝐨 𝐒𝐡𝐚𝐛𝐒𝐡😃😚 ✿°•┈┈••ৡ✵‏🩷✵ৡ•┈┈•°✿", threadID);
  };
  
  if ((event.body.toLowerCase() == "🙂") || (event.body.toLowerCase() == "🙂🙂")) {
    return api.sendMessage("✿°•┈┈••ৡ✵‏💙✵ৡ•┈┈•✿ 𝐀𝐰𝐰 𝐅𝐚𝐊𝐞 𝐒𝐦𝐢𝐥𝐞 𝐍𝐚 𝐃𝐨 𝐌𝐚 𝐇𝐮𝐧 𝐍𝐚 𝐁𝐚𝐛𝐲 🙂🥺🤭 ✿°•┈┈••ৡ✵‏💙✵ৡ•┈┈•°✿", threadID);
  };
  
  if ((event.body.toLowerCase() == "🥲") || (event.body.toLowerCase() == "🥲🥲")) {
    return api.sendMessage("✿°•┈┈••ৡ✵‏💜✵ৡ•┈┈•✿ 𝐀𝐬𝐲 𝐌𝐮 𝐁𝐧𝐍𝐚 𝐊 𝐌𝐚𝐭 𝐑𝐨𝐨 𝐉𝐚𝐖𝐧🙂😂🥲👊 ✿°•┈┈••ৡ✵‏💜✵ৡ•┈┈•°✿", threadID);
  };
  
  if ((event.body.toLowerCase() == "😊") || (event.body.toLowerCase() == "😊😊")) {
    return api.sendMessage("𝐉𝐧𝐛 𝐘𝐢 𝐅𝐤𝐞 𝐒𝐦𝐢𝐥𝐞 𝐇𝐚𝐢🙂🙁🫡", threadID);
  };
  
  if ((event.body.toLowerCase() == "☺️") || (event.body.toLowerCase() == "☺️☺️")) {
    return api.sendMessage("𝐘𝐢 𝐒𝐦𝐢𝐥𝐞 𝐍𝐚 Do🙂💫🌟", threadID);
  };
  
  if ((event.body.toLowerCase() == "😌") || (event.body.toLowerCase() == "😌😌")) {
    return api.sendMessage("𝐌𝐮 𝐁𝐚𝐍𝐝 𝐊𝐫 𝐌𝐚𝐤𝐇𝐢 𝐆𝐡𝐮𝐬 𝐆𝐲𝐞 𝐆𝐰👀🙊😂", threadID);
  };
  
  if ((event.body.toLowerCase() == "😏") || (event.body.toLowerCase() == "😏😏")) {
    return api.sendMessage("✿°•┈┈••ৡ✵‏🖤✵ৡ•┈┈•✿ 𝐉𝐚𝐒𝐲 𝐓𝐚𝐫𝐚 𝐌𝐮 𝐇𝐚𝐢 𝐖𝐬𝐲 𝐓𝐚𝐫𝐚 𝐀𝐭𝐭𝐢𝐭𝐮𝐝𝐞 𝐇𝐚𝐢 𝐁𝐡𝐨𝐃𝐬𝐤 😹😏 ✿°•┈┈••ৡ✵‏🖤✵ৡ•┈┈•°✿", threadID);
  };
  
  if ((event.body.toLowerCase() == "😴") || (event.body.toLowerCase() == "😴😴")) {
    return api.sendMessage("𝐂𝐡𝐚𝐥 𝐉𝐚𝐚 𝐍𝐚𝐡𝐚 𝐊𝐫𝐫 𝐀𝐚😏👊🙂 ", threadID);
  };
  
  if ((event.body.toLowerCase() == "😪") || (event.body.toLowerCase() == "😪😪")) {
    return api.sendMessage("𝐂𝐡𝐞𝐞 𝐂𝐡𝐞𝐞 𝐓𝐚𝐫 𝐍𝐚𝐤 𝐒𝐲 𝐁𝐮𝐥𝐁𝐮𝐥𝐲🙄😂😒👊💖", threadID);
  };
  
  if ((event.body.toLowerCase() == "🤤") || (event.body.toLowerCase() == "🤤🤤")) {
    return api.sendMessage("𝐌𝐞𝐫𝐲 𝐌𝐮 𝐁𝐡𝐢 𝐏𝐚𝐧𝐢𝐢 𝐀𝐚𝐑𝐀𝐡𝐚𝐚 𝐇𝐚𝐢𝐢😂😏", threadID);
  };
  
  if ((event.body.toLowerCase() == "😋") || (event.body.toLowerCase() == "😋😋")) {
    return api.sendMessage("✿°•┈┈••ৡ✵🧡‏✵ৡ•┈┈•✿ 𝐙𝐮𝐁𝐚𝐧 𝐀𝐧𝐝𝐫 𝐊𝐫 𝐖𝐚𝐫𝐧𝐚 𝐊𝐚𝐭 𝐊 𝐓𝐚𝐫𝐲 𝐇𝐚𝐭 𝐌𝐚 𝐑𝐚𝐤𝐡 𝐃𝐧 𝐆𝐰 ✿°•┈┈••ৡ✵🧡‏✵ৡ•┈┈•°✿", threadID);
  };
  
  if ((event.body.toLowerCase() == "😛") || (event.body.toLowerCase() == "😛😛")) {
    return api.sendMessage("𝐀𝐰𝐰 𝐚𝐠𝐚𝐧𝐝𝐚 𝐂𝐡𝐞𝐞 𝐂𝐡𝐞𝐞😂😃", threadID);
  };
  
  if ((event.body.toLowerCase() == "😝") || (event.body.toLowerCase() == "😝😝")) {
    return api.sendMessage("✿°•┈┈••ৡ✵💜‏✵ৡ•┈┈•✿ 𝐀𝐛𝐲 𝐀𝐧𝐤𝐡𝐲 𝐊𝐡𝐨𝐥 𝐎𝐫 𝐙𝐮𝐛𝐚𝐧 𝐀𝐧𝐝𝐫 𝐊𝐫 𝐖𝐚𝐫𝐍𝐚 𝐊𝐚𝐭 𝐃𝐮𝐧 𝐠𝐰 ✿°•┈┈••ৡ✵💜‏✵ৡ•┈┈•°✿✿", threadID);
  };
  
  if ((event.body.toLowerCase() == "😜") || (event.body.toLowerCase() == "😜😜")) {
    return api.sendMessage("BaRi MasTi ChaRi Chai TeRy Ko 1 Ankh Band KRrke ZuBan Bhir Aagyi 😂😂😂", threadID);
  };
  
  if ((event.body.toLowerCase() == "🤪") || (event.body.toLowerCase() == "🤪🤪")) {
    return api.sendMessage("Ye Ajeeb_0_GaReeb Muu Na BaNa 😂 CarT0on 🤣", threadID);
  };
  
  if ((event.body.toLowerCase() == "🥴") || (event.body.toLowerCase() == "🥴🥴")) {
    return api.sendMessage("💖─────❖💞❖─────💖 SasTa Nasha KRr LiYa LagTa Hai 😂 💖─────❖💞❖─────💖", threadID);
  };
  
  if ((event.body.toLowerCase() == "😔") || (event.body.toLowerCase() == "😔😔")) {
    return api.sendMessage("𝑱𝒂𝑵𝒖 𝑪𝒉𝒐𝑹 𝑮𝒂𝒚𝒂 𝒌𝒊𝒚𝒂😒😂", threadID);
  };
  
  if ((event.body.toLowerCase() == "🥺") || (event.body.toLowerCase() == "🥺🥺")) {
    return api.sendMessage("𝑯𝒂𝒀𝒆𝒆𝒆 𝑩𝒂𝒃𝒀 𝑳𝒐𝒐𝒕𝒚 𝑵𝒊 𝑵𝒂𝒘 𝒀𝒆𝒆 𝑳𝒐𝒐 𝑷𝒊𝒊𝒐𝒐 🍼🥺", threadID);
  };
  
  if ((event.body.toLowerCase() == "😬") || (event.body.toLowerCase() == "😬😬")) {
    return api.sendMessage("𝑲𝒊𝒔𝒔 𝒌𝒊 𝑩𝒂𝒋𝒂𝒂 𝑫𝒊𝒊𝒘😁🤨🧐", threadID);
  };
  
  if ((event.body.toLowerCase() == "😑") || (event.body.toLowerCase() == "😑😑")) {
    return api.sendMessage("𝑾𝒂𝒉 𝑴𝒖𝒖 𝑲𝒚 𝑺𝒂𝑻𝒉 𝑨𝒏𝒌𝒉𝒆 𝑩𝒆 𝑩𝒂𝒏𝒅 𝑯𝟎𝒐 𝑮𝒀𝒊 😁😂", threadID);
  };
  
  if ((event.body.toLowerCase() == "😐") || (event.body.toLowerCase() == "😐😐")) {
    return api.sendMessage("𝑻𝒆𝒓𝒀𝒚 𝑴𝒖𝒉𝒉 𝑷𝒚 𝑬𝒍𝒇𝒊𝒊𝒊 𝑳𝒈𝒂𝒘 𝑫𝒊 𝒌𝒀𝒂 𝒌𝒔𝒊 𝒏𝒚 😹", threadID);
  };
  
  if ((event.body.toLowerCase() == "😶") || (event.body.toLowerCase() == "😶😶")) {
    return api.sendMessage("𝑵𝒂𝒌 𝑻𝟎𝒐 𝑻𝒉𝒊 𝑵𝒉𝒊 𝑴𝒖𝒖 𝑩𝒆 𝑮𝒚𝒃 𝑯𝟎𝒐 𝑮𝒀𝒂 𝑻𝒆𝑹𝒂😂😂😂", threadID);
  };
  
  if ((event.body.toLowerCase() == "🤐") || (event.body.toLowerCase() == "🤐🤐")) {
    return api.sendMessage("𝑨𝒃 𝑻𝒓𝒊𝒊 𝑨𝒘𝒂𝒛𝒛 𝑨𝒊 𝑵𝒂 𝑻𝟎𝒐 𝑴𝒆 𝑨𝒍𝒇𝒊 𝑺𝒚 𝑩𝒂𝑵𝒅 𝑲𝒓𝒖𝑵𝒈𝒂😁😒", threadID);
  };
  
  if ((event.body.toLowerCase() == "🤔") || (event.body.toLowerCase() == "🤔🤔")) {
    return api.sendMessage("✿°•┈┈••ৡ✵🤍‏✵ৡ•┈┈•✿ 𝐊𝐚𝐬𝐡 𝐃𝐞𝐦𝐠𝐡 𝐁𝐡𝐢 𝐙𝐮𝐛𝐚𝐧 𝐊𝐢 𝐓𝐚𝐫𝐚𝐡 𝐂𝐡𝐚𝐥𝐭𝐚 🙂😾😂 ✿°•┈┈••ৡ✵🤍‏✵ৡ•┈┈•°✿", threadID);
  };
  
  if ((event.body.toLowerCase() == "🤫") || (event.body.toLowerCase() == "🤫🤫")) {
    return api.sendMessage("𝐓𝐚𝐫𝐢 𝐘𝐢 𝐔𝐧𝐆𝐥𝐢 𝐌𝐚𝐧𝐲 𝐓𝐚𝐫𝐲 𝐇𝐞 𝐍𝐚𝐤 𝐌𝐚 𝐃𝐲 𝐃𝐞𝐍𝐢𝐢😒😂", threadID);
  };
  
  if ((event.body.toLowerCase() == "🤭") || (event.body.toLowerCase() == "🤭🤭")) {
    return api.sendMessage("😂😂😂", threadID);
  };
  
  if ((event.body.toLowerCase() == "🥱") || (event.body.toLowerCase() == "🥱")) {
    return api.sendMessage(" 𝐀𝐣𝐚𝐚 𝐁𝐚𝐛𝐲 𝐌𝐞𝐫𝐲 𝐏𝐚𝐬 𝐒𝐨𝐣𝐚𝐚😃😂😜", threadID);
  };
  
  if ((event.body.toLowerCase() == "🤗") || (event.body.toLowerCase() == "🤗🤗")) {
    return api.sendMessage("𝐏𝐡𝐨𝐲 𝐍𝐚𝐡𝐚 𝐊𝐫𝐫 𝐀𝐚 𝐏𝐡𝐢𝐫 𝐇𝐮𝐠 𝐃𝐧 𝐆𝐰😂", threadID);
  };
  
  if ((event.body.toLowerCase() == "😱") || (event.body.toLowerCase() == "😱😱")) {
    return api.sendMessage("𝐊𝐲𝐚 𝐇𝐮𝐚 𝐒𝐡𝐞𝐡𝐢𝐚 𝐃𝐞𝐤𝐡 𝐋𝐢𝐲𝐚 𝐥𝐢𝐲𝐚 😳", threadID);
  };
  
  if ((event.body.toLowerCase() == "🤨") || (event.body.toLowerCase() == "🤨🤨")) {
    return api.sendMessage("𝐓𝐮 𝐇𝐮𝐬𝐡𝐲𝐚𝐫 𝐁𝐚𝐧 𝐤𝐑𝐫 𝐍𝐚 𝐃𝐞𝐤𝐡 𝐌𝐚𝐢𝐧 𝐇𝐮𝐧 𝐍𝐚𝐰👊😂", threadID);
  };
  
  if ((event.body.toLowerCase() == "🧐") || (event.body.toLowerCase() == "🧐🧐")) {
    return api.sendMessage("𝐓𝐮 𝐇𝐚𝐓 𝐌𝐚𝐢𝐧 𝐃𝐞𝐤𝐡𝐓𝐚 𝐇𝐮𝐧 🙃👀😂", threadID);
  };
  
  if ((event.body.toLowerCase() == "😒") || (event.body.toLowerCase() == "😒😒")) {
    return api.sendMessage("𝐀𝐬𝐲 𝐊𝐢𝐲𝐚 𝐃𝐞𝐤𝐡 𝐑𝐡𝐲 𝐇𝐨 𝐌𝐚𝐒𝐨𝐨𝐦 𝐊𝐢 𝐉𝐚𝐧 𝐋𝐨 𝐆𝐲 𝐊𝐢𝐲𝐚 🤧", threadID);
  };
  
  if ((event.body.toLowerCase() == "🙄") || (event.body.toLowerCase() == "🙄🙄")) {
    return api.sendMessage("𝐎𝐩𝐞𝐫 𝐓𝐚𝐫𝐢 𝐍𝐚𝐧𝐢 𝐍𝐚𝐬𝐫𝐞𝐞𝐧 𝐡𝐚𝐢𝐢 𝐤𝐢𝐲𝐚𝐚 - 😕😂", threadID);
  };
  
  if ((event.body.toLowerCase() == "😤") || (event.body.toLowerCase() == "😤😤")) {
    return api.sendMessage("𝐒𝐦𝐨𝐨𝐤𝐢𝐧𝐠 𝐊𝐫𝐍𝐚 𝐒𝐞𝐞𝐡𝐚𝐭 𝐤 𝐥𝐢𝐲𝐞 𝐭𝐡𝐤 𝐍𝐢 𝐤𝐫 𝐧𝐚𝐤 𝐬𝐲 𝐝𝐮𝐡𝐚𝐧 𝐍𝐞𝐤𝐚𝐥𝐧𝐚 𝐓𝐨 𝐨𝐫 𝐛𝐡𝐢 𝐊𝐚𝐭𝐚𝐫 𝐍𝐚𝐤 𝐇𝐚𝐢🤣😂", threadID);
  };
  
  if ((event.body.toLowerCase() == "😠") || (event.body.toLowerCase() == "😠😠")) {
    return api.sendMessage("𝐌𝐚𝐧𝐲 𝐓𝐲𝐚𝐚 𝐓𝐢𝐘𝐚 𝐇𝐚𝐢 𝐉𝐨 𝐆𝐡𝐮𝐒𝐬𝐚 𝐊𝐑𝐫 𝐑𝐚𝐡𝐘🥺😢", threadID);
  };
  
  if ((event.body.toLowerCase() == "😡") || (event.body.toLowerCase() == "😡😡")) {
    return api.sendMessage("𝐓𝐚𝐥𝐇𝐚 𝐍𝐲 𝐑𝐨𝐊𝐚 𝐇𝐚𝐢 𝐰𝐚𝐑𝐧𝐚 𝐓𝐚𝐫𝐢 𝐈𝐬 𝐆𝐮𝐒𝐬𝐲 𝐤𝐢 𝐁𝐡𝐢.........𝐬𝐦𝐚𝐣 𝐉𝐚 😁😝😂👊", threadID);
  };
  
  if ((event.body.toLowerCase() == "🤬") || (event.body.toLowerCase() == "🤬🤬")) {
    return api.sendMessage("𝐀𝐰𝐰 𝐉𝐚𝐰𝐧 𝐆𝐮𝐬𝐬𝐚 𝐧𝐢𝐢 𝐊𝐫𝐭𝐲😂😐", threadID);
  };
  
  if ((event.body.toLowerCase() == "😞") || (event.body.toLowerCase() == "😞😞")) {
    return api.sendMessage("𝐀𝐰𝐰 𝐌𝐲𝐲 𝐥𝐎𝐯𝐞 𝐔𝐩𝐑 𝐔𝐭𝐇𝐚𝐨 𝐌𝐮𝐡😂👊", threadID);
  };
  
  if ((event.body.toLowerCase() == "😓") || (event.body.toLowerCase() == "😓😓")) {
    return api.sendMessage("☹️", threadID);
  };
  
  if ((event.body.toLowerCase() == "😢") || (event.body.toLowerCase() == "😢😢")) {
    return api.sendMessage("𝐋𝐨𝐨𝐎𝐨 𝐍𝐢 𝐌𝐞𝐥𝐢𝐢 𝐉𝐚̀𝐰n😂👊", threadID);
  };
  
  if ((event.body.toLowerCase() == "☹️") || (event.body.toLowerCase() == "☹️☹️")) {
    return api.sendMessage("𝐀𝐰𝐰 𝐁𝐚𝐛𝐲𝐲 𝐒𝐚𝐝 𝐍𝐚 𝐇𝐨 𝐌𝐚 𝐇𝐮𝐧 𝐍𝐚𝐰😙😒🥺", threadID);
  };
  
  if ((event.body.toLowerCase() == "🙁") || (event.body.toLowerCase() == "🙁🙁")) {
    return api.sendMessage("𝐀𝐰𝐰 𝐁𝐚𝐁𝐲 𝐭𝐢𝐘𝐚 𝐇𝐮𝐚 😒😙☹️", threadID);
  };
  
  if ((event.body.toLowerCase() == "😕") || (event.body.toLowerCase() == "😕😕")) {
    return api.sendMessage("🙁🙁🙁", threadID);
  };
  
  if ((event.body.toLowerCase() == "😰") || (event.body.toLowerCase() == "😰😰")) {
    return api.sendMessage("Aww 😨", threadID);
  };
  
  if ((event.body.toLowerCase() == "😨") || (event.body.toLowerCase() == "😨😨")) {
    return api.sendMessage("😰😰😰", threadID);
  };
  
  if ((event.body.toLowerCase() == "😧") || (event.body.toLowerCase() == "😧😧")) {
    return api.sendMessage("😳", threadID);
  };
  
  if ((event.body.toLowerCase() == "😦") || (event.body.toLowerCase() == "😦😦")) {
    return api.sendMessage("😧", threadID);
  };
  
  if ((event.body.toLowerCase() == "😮") || (event.body.toLowerCase() == "😮😮")) {
    return api.sendMessage("𝐎𝐲𝐞𝐞 𝐎𝐲𝐞𝐞 𝐌𝐮𝐇𝐡 𝐁𝐚𝐧𝐝 𝐊𝐑𝐫 𝐖𝐫𝐧𝐚 𝐌𝐚𝐤𝐇𝐢 𝐂𝐡𝐚𝐥𝐢 𝐉𝐚𝐍𝐢 𝐇𝐚𝐢𝐢𝐢😂😂😂", threadID);
  };
  
  if ((event.body.toLowerCase() == "😯") || (event.body.toLowerCase() == "😯😯")) {
    return api.sendMessage("😲", threadID);
  };
  
  if ((event.body.toLowerCase() == "😲") || (event.body.toLowerCase() == "😲😲")) {
    return api.sendMessage("😯", threadID);
  };
  
  if ((event.body.toLowerCase() == "😳") || (event.body.toLowerCase() == "😳😳")) {
    return api.sendMessage("𝐊𝐲𝐚 𝐡𝐎𝐠𝐘𝐚 𝐈𝐧𝐧𝐚 𝐀𝐧𝐤𝐡𝐲 𝐏𝐡𝐚𝐑 𝐩𝐇𝐚𝐫 𝐊 𝐌𝐮𝐣𝐡𝐘 𝐤𝐮 𝐃𝐞𝐤𝐡 𝐑𝐚𝐡𝐲 𝐇𝐨😳😳😳", threadID);
  };
  
  if ((event.body.toLowerCase() == "🤯") || (event.body.toLowerCase() == "🤯🤯")) {
    return api.sendMessage("𝐓𝐞𝐫𝐘 𝐒𝐚𝐫 𝐌𝐞 𝐁𝐮𝐦𝐁 𝐊𝐢𝐬 𝐍𝐲 𝐏𝐡𝐨𝐑𝐚😒😂", threadID);
  };
  
  if ((event.body.toLowerCase() == "😖") || (event.body.toLowerCase() == "😖😖")) {
    return api.sendMessage("𝐒𝐡𝐚𝐘𝐞𝐞𝐝 𝐒𝐚𝐝 𝐇𝐨𝐨 𝐤𝐀𝐚𝐚 𝐁𝐚𝐛𝐘😂", threadID);
  };
  
  if ((event.body.toLowerCase() == "😣") || (event.body.toLowerCase() == "😣😣")) {
    return api.sendMessage("😣😣😣", threadID);
  };
  
  if ((event.body.toLowerCase() == "😩") || (event.body.toLowerCase() == "😫")) {
    return api.sendMessage("𝐂𝐡𝐀𝐥 𝐇𝐚𝐓 𝐍𝐨𝐓𝐚𝐧𝐊𝐢𝐢😫😂😂", threadID);
  };
  
  if ((event.body.toLowerCase() == "😵") || (event.body.toLowerCase() == "😵😵")) {
    return api.sendMessage("𝐀𝐱𝐡𝐚 𝐇𝐚𝐢𝐢 𝐊 𝐌𝐚 𝐀𝐧𝐝𝐇𝐚 𝐇𝐮𝐧😂😟", threadID);
  };
  
  if ((event.body.toLowerCase() == "🥶") || (event.body.toLowerCase() == "sardi")) {
    return api.sendMessage("𝐀𝐰𝐰 𝐁𝐚𝐁𝐞 𝐒𝐚𝐫𝐃𝐢 𝐋𝐚𝐠 𝐑𝐡𝐢 𝐓𝟎𝐨 𝐌𝐞𝐑𝐞 𝐏𝐚𝐒𝐬 𝐀𝐣𝐚𝐨🙈😜", threadID);
  };
  
  if ((event.body.toLowerCase() == "🥵") || (event.body.toLowerCase() == "🥵🥵")) {
    return api.sendMessage("𝐍𝐚𝐇𝐚 𝐋𝐲 😂🥶", threadID);
  };
  
  if ((event.body.toLowerCase() == "🤢") || (event.body.toLowerCase() == "🤮")) {
    return api.sendMessage("𝐀𝐚𝐚𝐚𝐚 𝐓𝐡𝐨𝟎𝐨𝐨", threadID);
  };
  
  if ((event.body.toLowerCase() == "🤧") || (event.body.toLowerCase() == "😷")) {
    return api.sendMessage("Aryy BhaG Ja0o MeKo bHi BeemaR kR0o gaY 🥺", threadID);
  };
  
  if ((event.body.toLowerCase() == "🤒") || (event.body.toLowerCase() == "🤕")) {
    return api.sendMessage("Aww BaBe K0o Ta HuWa Idher Aow ThoRa Pyal L0o 😜💉💉💉", threadID);
  };
  
  if ((event.body.toLowerCase() == "😎") || (event.body.toLowerCase() == "😎😎")) {
    return api.sendMessage("ChaSHma BHi New Lelo ab 🙂", threadID);
  };
  
  if ((event.body.toLowerCase() == "😇") || (event.body.toLowerCase() == "😇😇")) {
    return api.sendMessage("😇😇😇", threadID);
  };
  
  if ((event.body.toLowerCase() == "🥸") || (event.body.toLowerCase() == "🤓")) {
    return api.sendMessage("AiNeK WaLa JiN😂", threadID);
  };
  
  if ((event.body.toLowerCase() == "🤡") || (event.body.toLowerCase() == "🤡🤡")) {
    return api.sendMessage("Aww S0o SweeT 😂 CarT0on", threadID);
  };
  
  if ((event.body.toLowerCase() == "😈") || (event.body.toLowerCase() == "👿")) {
    return api.sendMessage("👽👽👽", threadID);
  };
  
  if ((event.body.toLowerCase() == "😹") || (event.body.toLowerCase() == "😹😹")) {
    return api.sendMessage("AbbY BiLli 😂", threadID);
  };
  
  if ((event.body.toLowerCase() == "😺") || (event.body.toLowerCase() == "😸")) {
    return api.sendMessage("😼😼😼", threadID);
  };
  
  if ((event.body.toLowerCase() == "😼") || (event.body.toLowerCase() == "😼😼")) {
    return api.sendMessage("Ye SaSTa AttiTuDe EdR MtT DekHa😂", threadID);
  };
  
  if ((event.body.toLowerCase() == "💋") || (event.body.toLowerCase() == "💋💋💋")) {
    return api.sendMessage("Yah PapPiYa Nhi kRr Kxh Kxh Nhi Bht KxH HoTa Hai 😂😂😂", threadID);
  };
  
  if ((event.body.toLowerCase() == "❤️") || (event.body.toLowerCase() == "💚")) {
    return api.sendMessage("🖤🧡💜💙🤎🤍", threadID);
  };
  
  if ((event.body.toLowerCase() == "🧡") || (event.body.toLowerCase() == "🤎")) {
    return api.sendMessage("❤️🖤🤍🤎💚💜", threadID);
  };
  
  if ((event.body.toLowerCase() == "💜") || (event.body.toLowerCase() == "💙")) {
    return api.sendMessage("💚🤎🤍🖤❤️🧡", threadID);
  };
  
  if ((event.body.toLowerCase() == "Fatma") || (event.body.toLowerCase() == "fatma")) {
    return api.sendMessage("بھاڑ میں جاؤ ڈارلنــــگـــٓــ 💔👉", threadID);
  };
  
  if ((event.body.toLowerCase() == "👻") || (event.body.toLowerCase() == "👻👻")) {
    return api.sendMessage("Bh0oT Hi H0o", threadID);
  };
  
  if ((event.body.toLowerCase() == "🖕") || (event.body.toLowerCase() == "🖕🖕")) {
    return api.sendMessage("Bund Me LeLe ApNi Bhens Chor 😂😂😂", threadID);
  };
  
  if ((event.body.toLowerCase() == "💉") || (event.body.toLowerCase() == "💊")) {
    return api.sendMessage("TumHy isKi ZaiDa Zarurat Hai 🤣", threadID);
  };
  
  if ((event.body.toLowerCase() == "🙈") || (event.body.toLowerCase() == "🙊")) {
    return api.sendMessage("Sch Me Bander He Hai 😂", threadID);
  };
  
  if ((event.body.toLowerCase() == "Chutia") || (event.body.toLowerCase() == "chutiya")) {
    return api.sendMessage("Tu Hai ChuTiya 🙂 Main T0o BoT Hun Naw🥺😂", threadID);
  };
  
  if ((event.body.toLowerCase() == "oye") || (event.body.toLowerCase() == "oyee")) {
    return api.sendMessage("0ye HoYe 😈", threadID);
  };
  
  if ((event.body.toLowerCase() == "Kkkkkk") || (event.body.toLowerCase() == "jjj")) {
    return api.sendMessage("KYa ", threadID);
  };
  
  if ((event.body.toLowerCase() == "Kkkkk") || (event.body.toLowerCase() == "Buraaa")) {
    return api.sendMessage(" H I J K L M N O P Q R S T U V W X Y Z 🙄", threadID);
  };
  
  if ((event.body.toLowerCase() == "huh") || (event.body.toLowerCase() == "hmm")) {
    return api.sendMessage("Kya Hmm 🙄ThaRki", threadID);
  };
  
  if ((event.body.toLowerCase() == "acha") || (event.body.toLowerCase() == "acha g")) {
    return api.sendMessage("𝐇𝐚𝐧 𝐠😂👊", threadID);
  };
  
  if ((event.body.toLowerCase() == "Shona") || (event.body.toLowerCase() == "shona")) {
    return api.sendMessage("Bolo Naw MeRi JaN🥰💙", threadID);
  };
  
  if ((event.body.toLowerCase() == "bot goes to sleep") || (event.body.toLowerCase() == "bot goes to sleep")) {
    return api.sendMessage("I'm a bot, you're the one who should go to sleep <3", threadID);
  };
  
  if ((event.body.toLowerCase() == "has the bot eaten yet") || (event.body.toLowerCase() == "bot an comrade")) {
    return api.sendMessage("I'm full when I see you eat <3", threadID);
  };
  
  if ((event.body.toLowerCase() == "does the bot love me") || (event.body.toLowerCase() == "does the bot love me")) {
    return api.sendMessage("Yes <3", threadID);
  };
  
  if ((event.body.toLowerCase() == "Asalam o alikum") || (event.body.toLowerCase() == "does the bot fall")) {
    return api.sendMessage("walīīkum as Salam ❤️ <3", threadID);
  };
  
  mess = "{name}"
  if (event.body.indexOf("Bot") == 0 || (event.body.indexOf("bot") == 0)) {
    var msg = { 
     body:`╭─❍❍❍❍❍❍❍❍❍❍❍❍─╮  
     💖 :  
     ✦ ${name} ✦  
╰─❍❍❍❍❍❍❍❍❍❍❍❍─╯

╔═════════ஓ๑♡๑ஓ═════════╗
 💌:  
 ❝ ${rand} ❞  
╚═════════ஓ๑♡๑ஓ═════════╝

🌷 ʏᴏᴜ'ʀᴇ ᴍʏ ʜᴇᴀʀᴛʙᴇᴀᴛ, ʙᴀʙʏ~ 💞  
❣️ ꜱᴛᴀʏ ᴄᴜᴛᴇ, ꜱᴛᴀʏ ᴍɪɴᴇ 💘

༄༚┋𝑴𝒂𝒅𝒆 𝒘𝒊𝒕𝒉 𝑳𝒐𝒗𝒆 𝒃𝒚 tØxīīÇ bØīī ┋༚༄`,

    };
    return api.sendMessage(msg, threadID, messageID);
  };
}

module.exports.run = function({ api, event, client, __GLOBAL }) {
}
