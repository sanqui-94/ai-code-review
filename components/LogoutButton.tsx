import { signOut } from "next-auth/react";
import { LogOut } from "lucide-react";

export default function LogoutButton() {
  return (
    <button className="btn btn-secondary" onClick={() => signOut()}>
      <LogOut />
      Logout
    </button>
  );
}

