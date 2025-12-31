import Link from "next/link";
import { Button } from "./components/Button";

export default function HomePage() {
  return (
    <div className="bg-home bg-cover bg-center w-[1440px] h-[696px] flex flex-col items-center justify-start gap-[52px] pt-[260px] pl-[64px] pr-[805px] pb-[120px]">
      <div className="flex items-start justify-start flex-col gap-[40px] w-[571px]">
        <h1 className="font-inter font-semibold text-[48px] leading-[67%] text-[#f7f7f7]">
          Campers of your dreams
        </h1>
        <p className="font-inter font-semibold text-[24px] leading-[1.3] text-[#f7f7f7]">
          You can find everything you want in our catalog
        </p>

        <Link href="/catalog">
          <Button label="View Now" variant="primary" width="w-[173px]" />
        </Link>
      </div>
    </div>
  );
}
