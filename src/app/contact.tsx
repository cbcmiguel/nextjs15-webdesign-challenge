"use client";

import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { useState } from "react";


export default function ContactForm() {

  const [formData, setFormData] = useState({
    fullName: "John Doe",
    email: "johndoe@gmail.com",
    phone: "+63",
    message: "Type your message here",
  });
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="z-40 max-w-lg mx-auto bg-[rgba(212,203,255,0.40)] backdrop-blur-[8.5px] p-[24px] rounded-[12px] ">
      <div className="pb-[24px]">
        <h2 className="text-lg font-bold leading-[28px]">Send us a message</h2>
      </div>
      <form className="flex flex-col gap-[12px]">
        <Input
          color="primary"
          label="Full Name"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
          variant="underlined"
          classNames={{label: "!text-black text-[12px] font-normal leading-[16px] mb-[8px] p-0 !focus:text-[#2D68F8]",
            input:"text-base lead-[24px] font-normal !text-black focus:text-[#2D68F8]",
            innerWrapper: "px-0 pt-0 pb-[4px]",
            inputWrapper: "!p-0 !border-b !border-black"
          }}
          isReadOnly
        />
        <Input
          color="primary"
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          isReadOnly
          variant="underlined"
          classNames={{label: "!text-black text-[12px] font-normal leading-[16px] mb-[8px] p-0 !focus:text-[#2D68F8]",
            input:"text-base lead-[24px] font-normal !text-black focus:text-[#2D68F8]",
            innerWrapper: "px-0 pt-0 pb-[4px]",
            inputWrapper: "!p-0 !border-b !border-black"
          }}
        />
        <Input
          color="primary"
          label="Phone"
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          variant="underlined"
          isReadOnly
          classNames={{label: "!text-black text-[12px] font-normal leading-[16px] mb-[8px] p-0",
            input:"text-base lead-[24px] font-normal !text-black focus:text-[#2D68F8]",
            innerWrapper: "px-0 pt-0 pb-[4px]",
            inputWrapper: "!p-0 !border-b !border-black"
          }}
        />
        <Input
          color="primary"
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          isReadOnly
          variant="underlined"
          classNames={{label: "!text-black text-[12px] font-normal leading-[16px] mb-[8px] p-0 !focus:text-[#2D68F8]",
            input:"text-base lead-[24px] font-normal !text-black focus:text-[#2D68F8]",
            innerWrapper: "px-0 pt-0 pb-[4px]",
            inputWrapper: "!p-0 !border-b !border-black"
          }}
        />

        <div className="w-full flex md:justify-end pt-[12px]">
            <Button type="submit" variant="solid" className="xs:w-full md:w-fit bg-[#2D68F8] text-white text-base font-medium leading-[24px] px-[28px] py-[12px] rounded-[50px]">
                Send
            </Button>
        </div>

      </form>
    </div>
  );
}
