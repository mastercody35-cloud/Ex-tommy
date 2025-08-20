const fs = require("fs-extra");
const axios = require("axios");
const { loadImage, createCanvas } = require("canvas");

module.exports.config = {
    name: "rankup",
    version: "7.3.2",
    hasPermssion: 1,
    credits: "Priyansh Rajput + Fixed by Talha",
    description: "Announce rankup for each group, user",
    commandCategory: "Edit-IMG",
    dependencies: {
        "fs-extra": "",
        "axios": "",
        "canvas": ""
    },
    cooldowns: 2,
};

module.exports.handleEvent = async function ({ api, event, Currencies, Users, getText }) {
    let { threadID, senderID } = event;

    const rankupFolder = __dirname + "/noprefix/rankup/";
    const cacheFolder = __dirname + "/cache/";

    // Ensure folders exist
    if (!fs.existsSync(rankupFolder)) fs.mkdirSync(rankupFolder, { recursive: true });
    if (!fs.existsSync(cacheFolder)) fs.mkdirSync(cacheFolder, { recursive: true });

    const pathImg = rankupFolder + "rankup.png";
    const pathAvt1 = cacheFolder + "avtmot.png";

    senderID = String(senderID);
    threadID = String(threadID);

    const thread = global.data.threadData.get(threadID) || {};

    // Get EXP safely
    let userData = await Currencies.getData(senderID);
    let exp = (userData && typeof userData.exp === "number") ? userData.exp : 0;
    exp++;

    if (isNaN(exp)) return;

    // If rankup is disabled in thread
    if (thread.rankup === false) {
        await Currencies.setData(senderID, { exp });
        return;
    }

    // Level calculation (XP → Level)
    const curLevel = Math.floor(Math.sqrt(exp / 3));
    const nextLevel = Math.floor(Math.sqrt((exp + 1) / 3));

    if (nextLevel > curLevel && nextLevel !== 1) {
        const name = global.data.userName.get(senderID) || await Users.getNameUser(senderID);

        let message = (typeof thread.customRankup === "string" && thread.customRankup.trim() !== "")
            ? thread.customRankup
            : getText("levelup");

        message = message
            .replace(/\{name}/g, name)
            .replace(/\{level}/g, nextLevel);

        // Backgrounds
        const backgrounds = [
            "https://i.imgur.com/tVCXB0q.jpeg",
            "https://i.imgur.com/JBYox72.jpeg",
            "https://i.imgur.com/SRRuSRk.jpeg",
            "https://i.imgur.com/qhx5HLz.jpeg",
            "https://i.imgur.com/kbB4AfZ.jpeg",
            "https://i.imgur.com/9oxlszW.jpeg",
            "https://i.imgur.com/cJj8LTu.jpeg",
            "https://i.imgur.com/LHb5eJt.jpeg",
        ];
        const bgUrl = backgrounds[Math.floor(Math.random() * backgrounds.length)];

        // Fetch avatar
        const getAvt = (await axios.get(
            `https://graph.facebook.com/${senderID}/picture?width=720&height=720`,
            { responseType: "arraybuffer" }
        )).data;
        fs.writeFileSync(pathAvt1, Buffer.from(getAvt, "utf-8"));

        // Fetch background
        const getBg = (await axios.get(bgUrl, { responseType: "arraybuffer" })).data;
        fs.writeFileSync(pathImg, Buffer.from(getBg, "utf-8"));

        // Draw
        const baseImage = await loadImage(pathImg);
        const avatar = await loadImage(pathAvt1);
        const canvas = createCanvas(baseImage.width, baseImage.height);
        const ctx = canvas.getContext("2d");

        ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);

        ctx.save();
        ctx.rotate(-25 * Math.PI / 180);
        ctx.drawImage(avatar, 40, 710, 630, 700);
        ctx.restore();

        fs.writeFileSync(pathImg, canvas.toBuffer());
        fs.removeSync(pathAvt1);

        // Send message
        api.sendMessage({
            body: message,
            mentions: [{ tag: name, id: senderID }],
            attachment: fs.createReadStream(pathImg)
        }, threadID, () => fs.unlinkSync(pathImg));
    }

    await Currencies.setData(senderID, { exp });
    return;
};

module.exports.languages = {
    "vi": {
        "off": "𝗧𝗮̆́𝘁",
        "on": "𝗕𝗮̣̂𝘁",
        "successText": "𝐭𝐡𝐚̀𝐧𝐡 𝐜𝐨̂𝐧𝐠 𝐭𝐡𝐨̂𝐧𝐠 𝐛𝐚́𝐨 𝐫𝐚𝐧𝐤𝐮𝐩 ✨",
        "levelup": "🌸 𝗞𝗶̃ 𝗻𝗮̆𝗻𝗴 𝘅𝗮̣𝗼 𝗹𝗼̂̀𝗻𝗻 𝗼̛̉ 𝗺𝗼̂𝗻 𝗽𝗵𝗮́𝗽 𝗵𝗮̂́𝗽 𝗱𝗶𝗲̂𝗺 𝗰𝘂̉𝗮 {name} 𝘃𝘂̛̀𝗮 𝗹𝗲̂𝗻 𝘁𝗼̛́𝗶 𝗹𝗲𝘃𝗲𝗹 {level} 🌸"
    },
    "en": {
        "on": "on",
        "off": "off",
        "successText": "success notification rankup!",
        "levelup": "💝🥀══𝐂𝐨𝐍𝐠𝐑𝐚𝐓𝐮𝐋𝐚𝐓𝐢𝐎𝐧══🥀🍀\n\n ⃟══•{name}══⃟❣\n\n𝐘𝐨𝐔𝐫 𝐋𝐞𝐕𝐞𝐋 𝐈𝐬 ➾ 🍫 {level}\n\n🩷🩵🩶🩷🩵🩶🩷🩵🩶🩷🩵🩶",
    }
};

module.exports.run = async function ({ api, event, Threads, getText }) {
    const { threadID, messageID } = event;
    let data = (await Threads.getData(threadID)).data;

    if (typeof data.rankup === "undefined" || data.rankup === false) data.rankup = true;
    else data.rankup = false;

    await Threads.setData(threadID, { data });
    global.data.threadData.set(threadID, data);

    return api.sendMessage(`${(data.rankup === true) ? getText("on") : getText("off")} ${getText("successText")}`, threadID, messageID);
};
