"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export function Appbar() {
  const session = useSession();
  return (
    <div className="p-2 flex justify-between">
      <h1>MUZIC</h1>
      {!session.data?.user && (
        <button onClick={() => signIn()} className="bg-blue-400 p-2 rounded-md">
          Sign In
        </button>
      )}
      {session.data?.user && (
        <button
          onClick={() => signOut()}
          className="bg-blue-400 p-2 rounded-md"
        >
          Sign Out
        </button>
      )}
    </div>
  );
}
