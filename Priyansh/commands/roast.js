const roastLines = [
    "1. Teri shakal dekh ke **camera auto-off** ho jata hai! 📵",  
    "2. Tere **bio** mein 'King' likha hai, lekin teri acting **jester** ki hai! 🤡",  
    "3. Tere **followers** bots hain ya tere hi **14 alt accounts**? 🤖",  
    "4. Tere **jokes** sun kar **emoji** bhi **cringe** ho gaye! 🥴",  
    "5. Tere **gym selfies** dekh ke **dumbbells** bhi ro dete hain! 🏋️‍♂️😭",  
    "6. Tere **status** pe 'Busy' likha hai, lekin tu **24/7 online** rehta hai! 📱",  
    "7. Tere **memes** ko **roast** samajh ke log **upvote** kar dete hain! 🗑️🔥",  
    "8. Tere **piche emojis** zyada cool hain, **tu nahi**! 😎🚬",  
    "9. Tere liye **'L'** ka matlab **'Legend'** nahi, **'Loser'** hai! 🏆",  
    "10. Tere **DM ki opening line**: *'Hi'*... creativity mar gayi? ✉️",  
    // ... (90+ more savage lines)
    "99. Tere **roast** sun kar **Talha Pathan** bhi **shook** ho gaya! 😱",  
    "100. Ab jaake **apni maa ki duaon** mein ro! 🤲😂"  
];

function roastCommand(user) {
    const pfp = user.displayAvatarURL({ dynamic: true });
    const stylishName = "【☬☠𝔹𝔸𝕃𝕆ℂℍ™∆☠︎☬】"; // Stylish font
    
    const roastMsg = [
        `🔥 **${user.username}** ko **${stylishName}** ka **ULTIMATE ROAST** mila! 🔥`,
        `📸 **Profile Pic:** [Click Here](${pfp}) (Bhai **filter** hatao, **confidence** nahi aayega!)`,
        ...roastLines,
        `\n**${stylishName}** se **panga mat lo!** 😈🔥`
    ].join("\n");

    return roastMsg;
}

// Example Usage (Discord.js)
client.on("message", message => {
    if (message.content.startsWith("!roast")) {
        const targetUser = message.mentions.users.first();
        if (!targetUser) return message.reply("**Bhai kisi ko tag karo!** 🎯");
        
        const roast = roastCommand(targetUser);
        message.channel.send(roast);
    }
});
