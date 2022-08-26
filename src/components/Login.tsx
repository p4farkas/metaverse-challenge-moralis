import React from "react";
import { useMoralis } from "react-moralis";
import Image from "next/image";

function Login() {
  const { authenticate } = useMoralis();

  const login = async () => {
    await authenticate({
      signingMessage: "Log in using Moralis",
    })
      .then(function (user) {
        console.log("logged in user:", user);
        console.log(user!.get("ethAddress"));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="bg-black relative text-white">
      <div className="flex flex-col absolute z-50 h-4/6 items-center justify-center w-full space-y-4">
        <Image
          alt=""
          className="object-cover rounded-3xl"
          src="https://static.vecteezy.com/system/resources/previews/004/263/114/original/meta-logo-meta-by-facebook-icon-editorial-logo-for-social-media-free-vector.jpg"
          height={200}
          width={200}
        />
        <button
          onClick={() => login()}
          className="bg-slate-700 rounded-lg p-3 font-bold"
        >
          🦊 Login
        </button>
      </div>

      <div className="w-full h-screen blur-md">
        <Image
          alt=""
          src="https://images8.alphacoders.com/123/1239331.jpg"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}

export default Login;
