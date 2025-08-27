// npm install mineflayer

const mineflayer = require('mineflayer')


function createBot() {
  const bot = mineflayer.createBot({
    host: 'server_ko-long.aternos.me',   
    port: 35760,         
    username: 'tuanbottretrau2k12',  
    version: false
  })

  bot.on('login', () => {
    console.log('✅ Bot đã vào server!')
    bot.chat('Bot đã online 🗿')
  })

  bot.on('chat', (username, message) => {
    if (username === bot.username) return
    console.log(`[${username}]: ${message}`)

    if (message === 'hi') {
      bot.chat('Hello ' + username + '!')
    }
  })

  // Anti-AFK: mỗi 10 giây nhảy 1 lần
  bot.on('spawn', () => {
    setInterval(() => {
      bot.setControlState('jump', true)
      setTimeout(() => bot.setControlState('jump', false), 500)
    }, 10000)
  })

  bot.on('error', err => {
    console.log('❌ Lỗi:', err)
  })

  bot.on('end', () => {
    console.log('⚠️ Bot bị disconnect, thử join lại sau 5 giây...')
    setTimeout(createBot, 5000) // join lại sau 5 giây
  })
}

// Khởi động bot lần đầu
createBot()
