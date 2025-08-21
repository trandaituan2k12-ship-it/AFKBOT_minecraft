const mineflayer = require('mineflayer')

function createBot() {
  const bot = mineflayer.createBot({
    host: "tên_server_của_bạn", 
    port: 25565,
    username: "TênBot" 
  })

  // Khi vào server
  bot.on('spawn', () => {
    console.log("✅ Bot đã vào server và đang AFK 😴")

    // Anti-AFK: mỗi 60 giây nhảy 1 lần
    setInterval(() => {
      if (bot.entity && bot.entity.position) {
        bot.setControlState('jump', true)
        setTimeout(() => bot.setControlState('jump', false), 500) 
        console.log("🤸 Bot nhảy chống AFK")
      }
    }, 60000) 

    
    const messages = ["Tôi đang on 😎", "AFK tí", "Bot đây 😴"]
    setInterval(() => {
      const msg = messages[Math.floor(Math.random() * messages.length)]
      bot.chat(msg)
      console.log("💬 Bot chat:", msg)
    }, 120000) 

    // Anti-AFK: xoay đầu random mỗi 30 giây
    setInterval(() => {
      const yaw = Math.random() * Math.PI * 2
      const pitch = (Math.random() - 0.5) * Math.PI / 2
      bot.look(yaw, pitch, true)
      console.log("👀 Bot xoay đầu chống AFK")
    }, 30000) // 30s
  })

  // Nếu bị kick
  bot.on('kicked', (reason) => {
    console.log("⛔ Bị kick:", reason)
    reconnect()
  })

  // Nếu out
  bot.on('end', () => {
    console.log("❌ Bot out, đang thử vào lại...")
    reconnect()
  })

  // Nếu lỗi
  bot.on('error', (err) => {
    console.log("⚠️ Lỗi:", err)
  })
}

function reconnect() {
  setTimeout(() => {
    console.log("🔄 Đang vào lại server...")
    createBot()
  }, 5000) // đợi 5s rồi vào lại
}

createBot()

