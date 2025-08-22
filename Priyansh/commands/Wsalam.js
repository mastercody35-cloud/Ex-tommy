const request = require('request');
const fs = require('fs');
const path = require('path');

module.exports.config = {
  name: "walikumsalam",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Modified by 🦋⃟⃟⃟⃟✮⃝Mr baloch",
  description: "Auto reply on salam with gif",
  usePrefix: false,
  commandCategory: "No command marks needed",
  usages: "Auto salam reply",
  cooldowns: 5,
};


const gifUrl = "https://i.ibb.co/93vv44Wp/400b762010dcc974556bbb5a7118d719-1.gif";

// random islamic replies
const replies = [
  "🌸 Wa Alaikum Assalam Wa Rahmatullahi Wa Barakatuh 🤲❤️",
  "✨ Wa Alaikum Salam 🌙 Allah apko khush rakhe 🤍",
  "🤍 Wa Alaikum Assalam ✨ JazakAllah Khair 🌸",
  "🌙 Wa Alaikum Assalam wa rehmatullahi wa barakatuhu 🤲",
  "💚 Wa Alaikum Salam 🤍 Duaon mein yaad rakhna 🌸"
];

module.exports.handleEvent = async function({ api, event }) {
  const { threadID, messageID, body } = event;
  if (!body) return;

  const text = body.toLowerCase();

  // check if message contains salam
  if (
    text.includes("salam") || 
    text.includes("assalamualaikum") || 
    text.includes("asalam o alaikum") || 
    text.includes("assalamu alaikum") ||
    text.includes("slam")
  ) {
    const randomMessage = replies[Math.floor(Math.random() * replies.length)];
    const downloadPath = path.join(__dirname, 'walikumsalam.gif');

    // gif download
    request(gifUrl).pipe(fs.createWriteStream(downloadPath)).on('close', () => {
      const msg = {
        body: randomMessage,
        attachment: fs.createReadStream(downloadPath)
      };
      api.sendMessage(msg, threadID, messageID);
      api.setMessageReaction("🤲", messageID, () => {}, true);
    });
  }
};

module.exports.run = function () {};
