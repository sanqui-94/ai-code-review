import Link from "next/link";

export default function Navbar() {

    return (<div className="navbar bg-base-100 shadow-sm">
            <Link className="btn btn-primary" href="/api/auth/signin">Sign in</Link>
        </div>
    );
}
