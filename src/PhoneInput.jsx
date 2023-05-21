import React, { useState } from "react";

const PhoneInput = () => {
  const [phone, setPhone] = useState("");

  const handlePhoneChange = (event) => {
    const value = event.target.value;
    const cleanedValue = value.replace(/[^\d]/g, "");

    if (cleanedValue.length <= 11) {
      setPhone(cleanedValue.replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/, "$1-$2-$3-$4-$5"));
    }
  };

  return (
    <div>
      <label>
        Телефон:
        <input type="text" value={phone} onChange={handlePhoneChange} />
      </label>
    </div>
  );
};

export default PhoneInput;