import Image from "next/image";
import LogoutButton from "@/components/LogoutButton";

interface AvatarProps {
  imgSrc?: string;
  name: string;
}

export default function AuthenticatedDropdownMenu({ imgSrc, name }: Readonly<AvatarProps>) {
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost m-1">
        <div className="avatar">
          <div className="w-8 rounded-full">
            {imgSrc && (
              <Image
                src={imgSrc}
                alt={name}
                width={32}
                height={32}
                className="rounded-full"
              />)
            }
          </div>
        </div>
        {name}
      </div>
      <ul className="menu menu-sm dropdown-content bg-base-200 z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <LogoutButton />
        </li>
      </ul>
    </div>
  );
}
