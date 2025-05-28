const mineflayer = require('mineflayer');

function createBot() {
  const bot = mineflayer.createBot({
    host: 'hasnat123.aternos.me', // replace this with your server address
    port: 45024,
    username: 'AternosBhai', // replace with your bot username
  });

  bot.on('chat', (username, message) => {
    if (username === bot.username) return;
    if (message.toLowerCase() === 'hi') {
      bot.chat('Hello!');
    }
  });

  bot.on('end', () => {
    console.log('Disconnected! Reconnecting...');
    setTimeout(createBot, 5000);
  });

  bot.on('error', err => {
    console.log('Error:', err);
  });
}

createBot();
