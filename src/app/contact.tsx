"use client";

import { Input } from "@heroui/input";
import {Textarea} from "@heroui/input";
import { Button } from "@heroui/button";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "John Doe",
    email: "johndoe@gmail.com",
    phone: "+63",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-lg mx-auto bg-[rgba(212,203,255,0.40)] backdrop-blur-[8.5px] p-[24px] rounded-[12px] ">
      <div className="pb-[24px]">
        <h2 className="text-lg font-bold leading-[28px]">Send us a message</h2>
      </div>
      <form className="flex flex-col gap-[12px]">
        <Input
          label="Full Name"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
          variant="underlined"
          classNames={{label: "!text-black text-[12px] font-normal leading-[16px] mb-[8px] p-0",
            input:"text-base lead-[24px] font-normal !text-black",
            innerWrapper: "px-0 pt-0 pb-[4px] !border-b !border-black",
            inputWrapper: "!p-0"
            
          }}
        />
        <Input
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Input
          label="Phone"
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <Textarea
          key="underlined"
          label="Message"
          name="message"
          placeholder="Type your message here"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <Button type="submit" variant="solid" className="mt-2">
          Send
        </Button>
      </form>
    </div>
  );
}
