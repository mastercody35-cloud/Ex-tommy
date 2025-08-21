// ai.js - Advanced AI Command for Messenger Bot

const axios = require("axios");

module.exports = {
  config: {
    name: "ai",
    aliases: ["gpt", "chat"],
    version: "1.0.0",
    author: "【☬☠𝔹𝔸𝕃𝕆ℂℍ™∆☠︎☬】",
    role: 0, // sab use kar sakte hain
    description: "Ask anything from AI 🤖",
    category: "ai",
    cooldown: 5
  },

  onStart: async function ({ api, event, args }) {
    const question = args.join(" ");
    if (!question) {
      return api.sendMessage("❓ Kuch poochne ke liye likho: /ai <sawal>", event.threadID, event.messageID);
    }

    try {
      // Example: API call to a free AI service (replace with your key/server if needed)
      const response = await axios.get(
        `https://api.affiliateplus.xyz/api/chatbot?message=${encodeURIComponent(question)}&botname=AIMOTO&ownername=Admin`
      );

      const reply = response.data.reply || "😅 Mujhe samajh nahi aaya.";

      return api.sendMessage(`🤖 AI: ${reply}`, event.threadID, event.messageID);
    } catch (e) {
      return api.sendMessage("⚠️ AI service abhi down hai, baad me try karo.", event.threadID, event.messageID);
    }
  }
};
