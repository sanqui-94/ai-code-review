import {signIn} from "next-auth/react";
import {LogIn} from "lucide-react";

export default function LoginButton() {
    return (
        <button className="btn btn-neutral" onClick={() => signIn()}>
            <LogIn />
            Sing in
        </button>
    );
}
