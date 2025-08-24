const mineflayer = require("mineflayer");
const fetch = require("node-fetch");

function createBot() {
  const bot = mineflayer.createBot({
    host: "server_ko-long.aternos.me",
    port: 35760, 
    username: "kkktuanbot2k12", 
  });

  
  bot.on("spawn", () => {
    console.log("✅ Bot đã vào server!");
  });

 
  bot.on("end", () => {
    console.log("❌ Bot out, thử login lại sau 10s...");
    setTimeout(createBot, 10000);
  });

  
  setInterval(() => {
    const actions = [
      () => bot.setControlState("jump", true),
      () => bot.setControlState("jump", false),
      () => bot.look(Math.random() * Math.PI * 2, 0) 
    ];
    const randomAction = actions[Math.floor(Math.random() * actions.length)];
    randomAction();
  }, 60 * 1000);

  
  const chatMessages = [
    "hi bro!",
    "tao bi dien ay",
    "tao la bot ma",
    "Chill thôi!",
    "tận hưởng server đi",
    "kkk..."
  ];

  
  setInterval(() => {
    const msg = chatMessages[Math.floor(Math.random() * chatMessages.length)];
    bot.chat(msg);
  }, 120000);
}

createBot();


setInterval(() => {
  fetch("https://TEN-APP-RENDER.onrender.com")
    .then(() => console.log("Pinged self để không sleep"))
    .catch(err => console.error("Ping lỗi:", err));
}, 2 * 60 * 1000);
