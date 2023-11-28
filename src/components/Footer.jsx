import React from "react";

export default function Footer() {
  return (
    <div className="w-full h-[100px] bg-primary">
      <div className="max-w-[1200px] w-full mx-auto p-[40px] h-full flex flex-col md:flex-row text-white justify-center md:justify-between items-center">
        <p>Niño Dellomas 2023</p>
        <p className="flex gap-3">
          <span>
            <a href="https://www.facebook.com/nino.dellomas" target="_blank">Facebook</a>
          </span>
          <span>
            <a href="https://github.com/ninodellomas" target="_blank">Github</a>
          </span>
        </p>
      </div>
    </div>
  );
}
