import { APP_NAME } from "@/lib/constants";
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="p-5 flex-center">
        2024 {APP_NAME}. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
