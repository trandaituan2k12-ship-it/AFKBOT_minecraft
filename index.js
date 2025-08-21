const mineflayer = require('mineflayer')

// Tạo bot AFK
const bot = mineflayer.createBot({
  host: "tên_server_của_bạn", // ví dụ: play.example.net
  port: 25565,                // cổng mặc định là 25565
  username: "TênBot"          // nick bot (có thể để email nếu acc premium)
})

// Khi bot login
bot.on('spawn', () => {
  console.log("Bot đã vào server và đang AFK 😴")
})

// Nếu bị kick
bot.on('kicked', (reason) => console.log("Bị kick:", reason))

// Nếu có lỗi
bot.on('error', (err) => console.log("Lỗi:", err))
