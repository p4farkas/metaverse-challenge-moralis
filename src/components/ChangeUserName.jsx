import React from "react";

function ChangeUserName(isUserUpdating, setUsername) {
  return (
    <div className="text-sm absolute top-5 right-5 font-bold">
      <button
        disabled={isUserUpdating}
        onClick={setUsername}
        className="hover:text-green-800"
      >
        Change Username
      </button>
    </div>
  );
}

export default ChangeUserName;
