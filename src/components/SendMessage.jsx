import React, { useState } from "react";
import { useMoralis, useNewMoralisObject } from "react-moralis";

function SendMessage({ endOfMessagesRef }) {
  const { user } = useMoralis();
  const [message, setMessage] = useState("");

  const { save } = useNewMoralisObject("Messages");

  const sendMessage = (e) => {
    e.preventDefault();

    if (!message) return;

    save({
      message: message,
      user: user.getUsername(),
      ethAddress: user.get("ethAddress"),
    });

    setMessage(""); // Clear current message
    endOfMessagesRef.current.scrollIntoView({ behaviour: "smooth" });
  };

  return (
    <form className="flex fixed bottom-20 w-11/12 px-6 py-4 max-w-2xl shadow-xl rounded-full border-2 border-slate-500 bg-slate-100 z-20">
      <input
        className="flex-grow outline-none bg-transparent text-black border-slate-600 placeholder-gray-500"
        placeholder={`Enter a message ${user.getUsername()}...`}
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        type="submit"
        onClick={sendMessage}
        className="font-bold text-green-700"
      >
        Send
      </button>
    </form>
  );
}

export default SendMessage;
