
import Image from "next/image";
import ButtonWithIcon from "./components/button";
import Carousel from "./components/carousel";
import ContactForm from "./contact";

const locations = [
  { icon: "/house_icon.svg", title: "Our Location", address: "One World Place, Lane R, BGC" },
  { icon: "/house_icon.svg", title: "Our Location", address: "One World Place, Lane R, BGC" },
  { icon: "/house_icon.svg", title: "Our Location", address: "One World Place, Lane R, BGC" },
];

export default function Home() {
  return (
    <div>
      <main className="min-h-screen md:pt-[64px] xs:m-[12px] md:m-0 flex flex-col md:gap-y-6">

        <div className="flex flex-col md:pt-[64px] pb-3 xs:pt-[24px] md:px-[64px] gap-y-3 justify-center w-full items-center">
          <Image src="/rocket.png" alt="symbol" className="xs:w-[44px] md:w-[64px] h-auto" width={64} height={64} priority/>
          <div className="flex w-full pt-3 justify-center text-center">
            <h1 className="md:text-[44px] xs:text-[29px] md:leading-[42px] text-[var(--brand)] font-semibold">
              Build and Launch Reliable and Market-Ready Products
            </h1>
          </div>
          <div className="flex w-full pt-3 justify-center md:px-[106px] xs:px-[24px]">
            <p className="md:text-sm xs:text-base md:leading-[20px] xs:leading-[24px] text-[var(--text-black)] font-normal text-center">
            This 2025, Aique DANG aims to optimize internal structures and processes, ensuring enhanced reliability, integrity, and efficiency, ultimately driving increased profitability for its clients.
            </p>
          </div>
          <div className="flex justify-center w-full pt-3">
            <ButtonWithIcon/>
          </div>
        </div>
      
        <div className="w-full">
            <Carousel/>
        </div>

        <div className="w-full bg-yellow flex md:flex-row xs:flex-col gap-[12px] pb-[24px]">
          <div className="w-full flex flex-col gap-[12px]">
              <div className="flex flex-col gap-0">
                  <p className="text-[#2D68F8] text-base font-bold leading-[24px]">
                    Contact Us
                  </p>
                  <h1 className="font-semibold text-[42px] text-black w-full">
                    Get In Touch With Us
                  </h1>
                  <p className="text-black w-full text-sm font-normal leading-[20px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius tempor</p>
              </div>

              {/* Location Details */}
              <div className="flex flex-col gap-[10px]">
                {locations.map((location, index) => (
                  <div key={index} className="flex flex-row gap-[12px]">
                    <div className="p-[13px] w-[50px] h-auto rounded-[8px] bg-[#2D68F8] flex justify-center items-center">
                      <Image src={location.icon} alt="symbol" width={24} height={24} priority />
                    </div>

                    <div className="flex flex-col my-auto">
                      <p className="text-sm text-black leading-[20px] font-bold">{location.title}</p>
                      <p className="text-base text-black leading-[24px]">{location.address}</p>
                    </div>
                  </div>
                ))}
              </div>
          </div>
          <div className="relative p-[24px] w-full">
                <ContactForm/>
          </div>

        </div>
      </main>
    </div>
  );
}
