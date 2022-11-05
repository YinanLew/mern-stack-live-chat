import React from "react";
import "./messages.css";
import { v4 as uuidv4 } from "uuid";

function Messages({ messages, scrollRef }) {
  return (
    <>
      {messages.map((message) => {
        return (
          <div ref={scrollRef} key={uuidv4()}>
            <div
              className={`message ${message.fromSelf ? "sended" : "received"}`}
            >
              <div className="message-content">
                <p>{message.message}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Messages;
