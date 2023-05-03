const reverseWords = (kalimat) => {
  if (typeof kalimat === "string") {
    if (kalimat.toLowerCase() === kalimat) {
      const hasil = kalimat.split(" ").reverse().join(" ");
      console.log(hasil);
    } else {
      console.log("Parameter (kalimat) harus ditulis dengan huruf kecil.");
    }
  } else {
    console.log("Parameter (kalimat) harus bertipe string.");
  }
};

reverseWords("saya belajar javascript"); // javascript belajar saya
reverseWords(90); // Parameter (kalimat) harus bertipe string.
reverseWords(null); // Parameter (kalimat) harus bertipe string.
reverseWords("Ini Kalimat"); // Parameter (kalimat) harus ditulis dengan huruf kecil.

