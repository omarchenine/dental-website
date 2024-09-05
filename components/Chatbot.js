import React, { useState } from 'react';

function Chatbot() {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);

  const handleSend = () => {
    setChat([...chat, { user: 'User', text: message }]);
    // Mock chatbot response
    setChat([...chat, { user: 'User', text: message }, { user: 'Bot', text: 'How can I help you?' }]);
    setMessage('');
  };

  return (
    <div className="chatbot">
      <h3>Chatbot</h3>
      <div className="chat-window">
        {chat.map((msg, index) => (
          <div key={index} className={msg.user === 'Bot' ? 'bot' : 'user'}>
            {msg.text}
          </div>
        ))}
      </div>
      <input value={message} onChange={(e) => setMessage(e.target.value)} />
      <button onClick={handleSend}>Send</button>
    </div>
  );
}

export default Chatbot;
