'use client';
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header>
      <div className="flex items-center justify-start flex-row gap-[450px] border-b border-[#f2f4f7] 
        px-[64px] py-[24px] w-[1440px] h-[72px] bg-[#f7f7f7]">
        
        <Link href="/">
          <Image
            src="/images/header/TravelTrucks.svg"
            alt="Travel Trucks Logo"
            width={136}
            height={16}
          />
        </Link>

        <div className="flex items-center justify-start flex-row gap-8 w-[138px] h-[24px]">
          <Link
  href="/"
  className={`text-center font-medium text-[16px] leading-[150%] ${
    pathname === "/" ? "text-[#d84343]" : "text-[#101828]"
  }`}
>
  Home
</Link>

<Link
  href="/catalog"
  className={`text-center font-medium text-[16px] leading-[150%] ${
    pathname === "/catalog" ? "text-[#d84343]" : "text-[#101828]"
  }`}
>
  Catalog
</Link>

        </div>
      </div>
    </header>
  );
}
