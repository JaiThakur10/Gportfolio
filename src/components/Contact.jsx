import React from "react";
import { CONTACT } from "../constants";

function Contact() {
  return (
    <div className=" border-b border-neutral-900 pb-20">
      <h2 className=" my-10 text-center text-4xl">Get in Touch</h2>
      <div className=" text-center tracking-tighter">
        <p className=" my-4">{CONTACT.address}</p>
        <p className=" my-4">{CONTACT.phoneNo}</p>
        <a href="#" className=" border-b">
          {CONTACT.email}
        </a>
        <div className="mt-8 text-center">
          <a
            href="https://www.weularity.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-gray-500 text-sm">
              Crafted with ❤️ by Weularity.
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
