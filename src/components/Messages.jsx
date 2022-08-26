import React, { useRef } from "react";
import SendMessage from "../components/SendMessage";
import Message from "../components/Message";
import { useMoralis, useMoralisQuery } from "react-moralis";

function Messages() {
  const { user } = useMoralis();

  const endOfMessagesRef = useRef(null);

  const MINS_DURATION = 15;

  const { data, error, isLoading } = useMoralisQuery(
    "Messages",
    (query) =>
      query
        .ascending("createdAt")
        .greaterThan(
          "createdAt",
          new Date(Date.now() - 1000 * 60 * MINS_DURATION)
        ),
    [],
    { live: true }
  );

  return (
    <div className="mb-56">
      <div className="my-5"></div>
      <div className="flex justify-center z-20">
        <SendMessage endOfMessagesRef={endOfMessagesRef} />
      </div>
      <div className="space-y-10 p-4">
        {data.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>
      <div ref={endOfMessagesRef} className="text-center text-gray-400 mt-5">
        <p>You are up to date {user.getUsername()}</p>
      </div>
    </div>
  );
}

export default Messages;
