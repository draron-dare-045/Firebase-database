// src/components/ChatRoom.jsx
import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { ref, onValue, push } from 'firebase/database';
import MessageForm from './MessageForm';

const ChatRoom = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const messagesRef = ref(db, 'messages');
    onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      const loadedMessages = [];
      for (let id in data) {
        loadedMessages.push({ id, ...data[id] });
      }
      setMessages(loadedMessages);
    });
  }, []);

  const sendMessage = (text) => {
    const messagesRef = ref(db, 'messages');
    push(messagesRef, {
      text,
      timestamp: Date.now()
    });
  };

  return (
    <div style={{ maxWidth: "600px", margin: "2rem auto" }}>
      <h2>💬 Chat Room</h2>
      <div style={{ border: "1px solid #ddd", padding: "1rem", height: "300px", overflowY: "scroll" }}>
        {messages.map((msg) => (
          <div key={msg.id} style={{ marginBottom: "0.5rem" }}>{msg.text}</div>
        ))}
      </div>
      <MessageForm onSend={sendMessage} />
    </div>
  );
};

export default ChatRoom;
