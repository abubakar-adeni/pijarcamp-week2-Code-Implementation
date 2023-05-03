const divideAndSort = (angka) => {
  // validasi angka harus number
  if (typeof angka === "number") {
    // validasi agar angka tidak melebihi batas aman integer
    if (angka < Number.MAX_SAFE_INTEGER) {
      const hasil = angka
        .toString()
        .split(0)
        .map((item) => item.split("").sort().join(""))
        .join("");

      console.log(parseInt(hasil));
    } else {
      console.log("Parameter (angka) tidak boleh lebih dari 9007199254740991");
    }
  } else {
    console.log("Parameter (angka) harus bertipe number.");
  }
};

divideAndSort(5956560159466056); //55566914566956
divideAndSort(9007199254740991); //Parameter (angka) tidak boleh lebih dari 9007199254740991
divideAndSort("9007199254740991"); //Parameter (angka) harus bertipe number