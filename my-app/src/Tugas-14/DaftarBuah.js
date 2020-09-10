import React from "react";
import { BuahProvider } from "./BuahContext.js";
import BuahForm from "./BuahForm";

const DaftarBuah = () => {
  return (
    <BuahProvider>
      <BuahForm />
    </BuahProvider>
  );
};

export default DaftarBuah;
