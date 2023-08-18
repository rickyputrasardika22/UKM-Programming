import React, { useState } from "react";

function AutoSumForm() {
  const [nilai1, isiNilai1] = useState("");
  const [nilai2, isiNilai2] = useState("");

  const handleChangeValue1 = (e) => {
    isiNilai1(e.target.value);
  };

  const handleChangeValue2 = (e) => {
    isiNilai2(e.target.value);
  };

  const sum = parseFloat(nilai1) + parseFloat(nilai2);

  return (
    <div style={{ backgroundColor: "lightblue" }}>
      <div>
        <h1>Perhitungan Operasi Penjumlahan</h1>
      </div>
      <div>
        <label>Angka 1 : </label>
        <input type="text" value={nilai1} onChange={handleChangeValue1} />
      </div>
      <div>
        <label>Angka 2 : </label>
        <input type="text" value={nilai2} onChange={handleChangeValue2} />
      </div>
      <div>
        <p>Hasil Penjumlahan : {isNaN(sum) ? " " : sum}</p>
      </div>
    </div>
  );
}

export default AutoSumForm;
