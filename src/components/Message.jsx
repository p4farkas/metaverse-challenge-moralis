import React from "react";
import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
import TimeAgo from "timeago-react";

function Message({ message }) {
  const { user } = useMoralis();
  const isUserMessage = message.get("ethAddress") === user.get("ethAddress");

  return (
    <div
      className={`flex items-end space-x-2 relative ${
        isUserMessage && "justify-end"
      }`}
    >
      <div
        className={`relative h-8 w-8 shadow-xl rounded-full ${
          isUserMessage && "order-last my-2 ml-2"
        }`}
      >
        <Avatar userName={message.get("user")} />
      </div>
      <TimeAgo
        className={`text-[10px] italic text-gray-400 ${
          isUserMessage && "order-first pr-1"
        }`}
        datetime={message.createdAt}
      />
      <div
        className={`flex space-x-4 p-3 rounded-2xl ${
          isUserMessage
            ? "rounded-br-none bg-slate-300"
            : "rounded-bl-none bg-blue-400"
        }`}
      >
        <p>{message.get("message")}</p>
      </div>
    </div>
  );
}

export default Message;
