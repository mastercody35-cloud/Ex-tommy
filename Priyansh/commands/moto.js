const axios = require("axios");
const fs = require("fs-extra");
const path = require("path");
const moment = require("moment-timezone");

module.exports.config = {
  name: "moto",
  version: "1.0.0",
  permission: 0,
  prefix: true,
  premium: false,
  category: "group",
  credits: "【☬☠𝔹𝔸𝕃𝕆ℂℍ™∆☠︎☬】",
  description: "AI boy Moto jo group me baat karta hai",
  usage: "[text]",
  cooldown: 10,
};

let motoActive = false;
const memoryBase = path.join(__dirname, "memory");

// ✅ Ensure user memory file exists
function ensureUserFile(groupID, userID, groupName, userName) {
  const groupFolder = path.join(memoryBase, groupID);
  fs.ensureDirSync(groupFolder);
  const filePath = path.join(groupFolder, `${userID}.json`);
  if (!fs.existsSync(filePath)) {
    fs.writeJsonSync(filePath, {
      name: userName,
      tone: "normal",
      history: [],
      known: false,
      group: groupName
    }, { spaces: 2 });
  }
  return filePath;
}

function loadUserData(groupID, userID) {
  const filePath = path.join(memoryBase, groupID, `${userID}.json`);
  return fs.existsSync(filePath) ? fs.readJsonSync(filePath) : null;
}

function saveUserData(groupID, userID, data) {
  const filePath = path.join(memoryBase, groupID, `${userID}.json`);
  fs.writeJsonSync(filePath, data, { spaces: 2 });
}

function getUserGroupRecords(uid) {
  if (!fs.existsSync(memoryBase)) return [];
  const folders = fs.readdirSync(memoryBase);
  const results = [];
  for (const folder of folders) {
    const file = path.join(memoryBase, folder, `${uid}.json`);
    if (fs.existsSync(file)) {
      const data = fs.readJsonSync(file);
      results.push({ groupID: folder, groupName: data.group || "Unknown Group", name: data.name });
    }
  }
  return results;
}

// ✅ Lahore timezone info
function getLahoreInfo() {
  const time = moment().tz("Asia/Karachi");
  const hour = time.hour();
  let partOfDay = "raat";
  if (hour >= 5 && hour < 12) partOfDay = "subah";
  else if (hour >= 12 && hour < 17) partOfDay = "dupehar";
  else if (hour >= 17 && hour < 21) partOfDay = "shaam";
  return {
    time: time.format("h:mm A"),
    day: time.format("dddd"),
    date: time.format("MMMM Do YYYY"),
    partOfDay
  };
}

// ✅ Tone detector
function detectTone(message) {
  const romantic = ["love", "jaan", "baby", "meri", "sweetheart"];
  const funny = ["joke", "fun", "hasna", "meme"];
  const deep = ["zindagi", "dard", "alone", "emotional"];
  const lc = message.toLowerCase();
  if (romantic.some(word => lc.includes(word))) return "romantic";
  if (funny.some(word => lc.includes(word))) return "funny";
  if (deep.some(word => lc.includes(word))) return "deep";
  return "normal";
}

// ✅ Respond trigger check
function shouldRespond({ body, mentions }, botID) {
  if (!body) return false;
  const lower = body.toLowerCase();
  return (
    mentions?.[botID] ||
    lower.includes("moto") ||
    lower.startsWith("@moto") ||
    lower.includes("moto tum") ||
    lower.includes("moto please") ||
    lower.includes("moto love") ||
    lower.includes("moto kaisa ho")
  );
}

// ✅ Main handler
module.exports.handleEvent = async function ({ api, event }) {
  const { threadID, senderID, body, mentions, messageID, messageReply } = event;
  if (
    !motoActive ||
    (!shouldRespond({ body, mentions }, api.getCurrentUserID()) &&
      (!messageReply || messageReply.senderID !== api.getCurrentUserID()))
  ) return;

  const threadInfo = await api.getThreadInfo(threadID);
  const userInfo = await api.getUserInfo(senderID);
  const groupName = threadInfo.threadName || "Unknown Group";
  const userName = userInfo[senderID]?.name || `User-${senderID}`;

  ensureUserFile(threadID, senderID, groupName, userName);
  const userData = loadUserData(threadID, senderID);
  userData.known = true;

  const msg = body?.trim() || "";
  const lc = msg.toLowerCase();
  const { time, date, day, partOfDay } = getLahoreInfo();

  // ✅ Mention recognition
  if (Object.keys(mentions || {}).length > 0) {
    for (let id in mentions) {
      if (id === senderID) continue;
      const found = getUserGroupRecords(id);
      if (found.length > 0) {
        return api.sendMessage(
          `${userName}, ${found[0].name} mujhe ${found[0].groupName} se yaad hai! 💬`,
          threadID,
          messageID
        );
      } else {
        return api.sendMessage(
          `${userName}, ise nahi jaanta, naya banda lagta hai.`,
          threadID,
          messageID
        );
      }
    }
  }

  // ✅ Owner identity check
  if (lc.includes("owner") || lc.includes("tumhara malik") || lc.includes("kisne banaya")) {
    if (senderID === "61579433406440") {
      return api.sendMessage("Mera dil sirf 🦋⃟⃟⃟⃟✮⃝Mr baloch ke liye dhadakta hai! ❤️", threadID, messageID);
    } else {
      return api.sendMessage(`${userName}, tum mere creator nahi ho 😄`, threadID, messageID);
    }
  }

  // ✅ Memory check
  if (lc.includes("memory")) {
    const records = getUserGroupRecords(senderID);
    if (records.length > 0) {
      con
