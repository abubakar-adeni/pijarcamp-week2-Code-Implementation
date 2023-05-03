const cekPalindrome = (kata) => {
    if (typeof kata === "string") {
      if (
        kata.toLowerCase() === kata.toLowerCase().split("").reverse().join("")
      ) {
        console.log("Kata adalah Palindrome!");
      } else {
        console.log("Kata bukan Palindrome!");
      }
    } else {
      console.log("Parameter (kata) harus bertipe string!.");
    }
  };
  
  cekPalindrome("malam");
  cekPalindrome("contoh");
  cekPalindrome("90");
  cekPalindrome(90);
  
  
  