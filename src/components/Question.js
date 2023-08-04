import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import React, { useState } from "react";

export default function Question({ title="", children="" }) {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="bg-white rounded-md shadow-md mt-2 p-2 text-left w-full">
      <div style={{ fontFamily: "Ubuntu-bold" }} className="font-semibold text-xl ml-3 py-2" onClick={() => setOpen(!isOpen)}>
        {title}
        {isOpen ? (
          <MinusOutlined className="text-center text-lg float-right pr-10" />
        ) : (
          <PlusOutlined className="text-center text-lg float-right pr-10" />
        )}
      </div>
      {isOpen && (
        <div className="capture pl-3 pr-20 break-words">{children}</div>
      )}
    </div>
  );
}
