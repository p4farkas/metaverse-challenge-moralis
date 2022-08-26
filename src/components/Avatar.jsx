import React from "react";
import Image from "next/image";

function Avatar({ userName, setUsername }) {
  return (
    <Image
      className="rounded-full bg-black cursor-pointer hover:opacity-75 outline-none"
      alt=""
      layout="fill"
      onClick={() => setUsername()}
      src={`https://avatars.dicebear.com/api/identicon/${userName}.svg`}
    />
  );
}

export default Avatar;
