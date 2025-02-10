
import Image from "next/image";
import Button from "./components/button";
export default function Home() {
  return (
    <div>
      <main className="min-h-screen pt-[64px] flex flex-col gap-y-6">

        <div className="flex flex-col pt-[64px] pb-3 px-[64px] gap-y-3 justify-center w-full items-center">
          <Image src="/rocket.png" alt="symbol" width={64} height={64} priority/>
          <div className="flex w-full pt-3 justify-center">
            <h1 className="text-[44px] leading-[42px] text-[var(--brand)] font-semibold">
              Build and Launch Reliable and Market-Ready Products
            </h1>
          </div>
          <div className="flex w-full pt-3 justify-center px-[106px]">
            <p className="text-sm leading-[20px] text-[var(--text-black)] font-regular text-center">
            This 2025, Aique DANG aims to optimize internal structures and processes, ensuring enhanced reliability, integrity, and efficiency, ultimately driving increased profitability for its clients.
            </p>
          </div>
          <div className="flex justify-center w-full pt-3">
            <Button/>
          </div>
        </div>
      
      </main>
    </div>
  );
}
