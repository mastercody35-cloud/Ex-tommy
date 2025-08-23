const request = require("request");

module.exports.config = {
  name: "funnyauto",
  version: "3.0.0",
  hasPermssion: 0,
  credits: "Modified by tØxīīÇ",
  description: "Auto funny message with GIF every 2 minutes (with ON/OFF)",
  usePrefix: true, // ab prefix ke sath chalega e.g. "funnyauto on"
  commandCategory: "Auto",
  usages: "funnyauto on/off",
  cooldowns: 5,
};

const funnyMessages = [
  "👻 Kaha mar gaye sare group wale? Yaadgaar ban gaya group...",
  "🌵 Group weraan pada hai, koi to bol do kuch!",
  "😂 Admin khud se baat kar raha hai lagta hai!",
  "🐍 Shapron ka dera lagta hai yahan...",
  "☠️ RIP Group Chat – silence everywhere!",
  "🍵 Chai ready hai, ab koi to reply kare!",
  "🤣 Lagta hai sab ne data off kar diya!",
  "📢 Hello hello… mic check group mai!",
  "🤡 Group ka naam badal do 'Ghost Town'!",
  "🙄 Cricket ki awaaz bhi band ho gayi yahan...",
  "🥱 Sab so gaye hain lagta hai...",
  "🎭 Group ka drama bhi khatam ho gaya!",
  "🚶 Sab ek ek karke bhaag gaye...",
  "🐒 Bandar bhi chale gaye, sirf admin bacha hai!",
  "🎤 'Hello hello'... mic testing 1, 2, 3!",
  "🤣 Group ne Guinness record bana liya – sabse zyada chup!",
  "📞 Call karun kya? Shayed tab reply aaye...",
  "🕸️ Chat par jala bhi lag gaya hai...",
  "⚰️ Group RIP mode me chala gaya!",
  "🎬 The End – ab credits hi chalenge!"
];

const gifUrl = "https://i.ibb.co/mF9jqC7L/f5e4a86b66810d37b7c77f2a212ba416.gif";

// Jitne groups ON karenge unka ID yaha save hoga
let enabledThreads = new Set();
let intervalStarted = false;

module.exports.handleEvent = function ({ api }) {
  // Ek hi interval global chalana hai
  if (intervalStarted) return;
  intervalStarted = true;

  let index = 0;
  setInterval(() => {
    const msg = funnyMessages[index % funnyMessages.length];

    // Sirf un groups me bhejna jo enabled hai
    enabledThreads.forEach(threadID => {
      api.sendMessage(
        {
          body: `${msg}\n\n[Credit: M Talha Bot 🤖]`,
          attachment: request(gifUrl)
        },
        threadID
      );
    });

    index++;
  }, 5 * 60 * 1000); // 5 minutes
};

module.exports.run = async function ({ api, event, args }) {
  const threadID = event.threadID;

  if (!args[0]) {
    return api.sendMessage(
      "❌ Please use: funnyauto on / funnyauto off",
      threadID
    );
  }

  if (args[0].toLowerCase() === "on") {
    enabledThreads.add(threadID);
    return api.sendMessage("✅ FunnyAuto ON ho gaya is group me.", threadID);
  }

  if (args[0].toLowerCase() === "off") {
    enabledThreads.delete(threadID);
    return api.sendMessage("❌ FunnyAuto OFF ho gaya is group me.", threadID);
  }
};
