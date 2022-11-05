import React from "react";
import Picker from "emoji-picker-react";
import "./chatInput.css";
import { useState } from "react";

function ChatInput({ handleSendMsg }) {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [msg, setMsg] = useState("");

  const handleEmojiPicker = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  const handleEmojiClick = (event, emoji) => {
    setMsg(msg + emoji.emoji);
  };

  const sendChat = (event) => {
    event.preventDefault();
    if (msg.length > 0) {
      handleSendMsg(msg);
      setMsg("");
    }
  };
  return (
    <div className="chat-input-container">
      <div className="chat-input-button-container">
        <div className="emoji">
          <h4 onClick={handleEmojiPicker}>emoji</h4>
          {showEmojiPicker && (
            <Picker height={300} width={300} onEmojiClick={handleEmojiClick} />
          )}
        </div>
      </div>
      <form className="chat-input-form" onSubmit={(e) => sendChat(e)}>
        <input
          type="text"
          placeholder="type message here"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ChatInput;
