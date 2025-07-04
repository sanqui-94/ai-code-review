"use client";
import { useSession } from "next-auth/react";
import Avatar from "@/components/AuthenticatedDropdownMenu";
import LoginButton from "@/components/LoginButton";


export default function Navbar() {

  const { data: session, status } = useSession();

  return (<div className="navbar bg-primary text-primary-content px-4">
    <div className="navbar-start">
      Ai Code Reviewer
    </div>
    <div className="navbar-end">
      {status === "loading" && <span className="loading loading-spinner loading-xs"/>}
      {status === "authenticated" ? (
        <Avatar name={session?.user?.name ?? "User"} imgSrc={session?.user?.image ?? undefined} />
      ) : (
          <LoginButton />
      )}
    </div>
  </div>
  );
}
