import React from "react";
import { useMoralis } from "react-moralis";
import Avatar from "../components/Avatar";
import ChangeUserName from "../components/ChangeUserName";

function Header() {
  const { setUserData, isUserUpdating, user, logout } = useMoralis();

  const setUsername = () => {
    const username = prompt(
      `Enter your new username (current: ${user.getUsername()})`
    );

    if (!username) return;

    setUserData({
      username,
    });
  };

  const address = user.get("ethAddress");

  return (
    <div className="sticky top-0 mt-0 bg-slate-600 rounded-3xl z-20">
      <div className="text-center">
        <div className="relative h-40 w-40 mx-auto rounded-full shadow-2xl">
          <Avatar userName={user.getUsername()} setUsername={setUsername} />
        </div>
        <h1 className="text-lg font-bold text-gray-300 mt-5">
          Welcome to the METAVERSE
        </h1>
        <h3 className="text-2xl truncate mb-4">{user.getUsername()}</h3>
        <ChangeUserName
          isUserUpdating={isUserUpdating}
          setUsername={setUsername}
        />

        {address && (
          <p className="text-center text-sm text-gray-400 mb-2">
            You are logged in with wallet {address.substring(0, 5)}...
            {address.substring(address.length - 5)}
          </p>
        )}

        <button
          onClick={() => logout()}
          className="rounded-2xl bg-teal-500 px-4 py-3 text-sm font-bold mt-3 mb-3 text-gray-800 lg:px-5 lg:py-3 lg:text-base items-center"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}

export default Header;
