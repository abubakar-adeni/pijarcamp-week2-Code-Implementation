const reverseWords = (kalimat) => {
  if (typeof kalimat === "string") {
    if (kalimat.toLowerCase() === kalimat) {
      const words = kalimat.split(" ");
      if (words.length < 2) {
        console.log("Inputan Harus Lebih Dari 1 Kata");
      } else {
        const hasil = words.reverse().join(" ");
        console.log(hasil);
      }
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

