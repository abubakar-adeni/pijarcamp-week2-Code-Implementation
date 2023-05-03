// function PijarFood(harga, voucher, jarak, pajak) {
//   if (typeof harga !== "number") {
//     console.log("Parameter pertama (harga) harus bertipe number.");
//   } else if (typeof voucher !== "string") {
//     console.log("Parameter kedua (voucher) harus bertipe string.");
//   } else if (typeof jarak !== "number") {
//     console.log("Parameter ketiga (jarak) harus bertipe number.");
//   } else if (typeof pajak !== "boolean") {
//     console.log("Parameter keempat (pajak) harus bertipe boolean.");
//   } else { 
//     let subtotal, potongan, biayaAntar = 0 
//     //cek pajak
//     let pajakHarga = pajak ? harga * 0.05: 0; 
//   }
//     // Cek kode promo
//     if (voucher === "PIJARFOOD5" && harga >= 50000) {
//       potongan = Math.min(harga * 0.5, 50000);
//     } else if (voucher === "DITRAKTIRPIJAR" && harga >= 25000) {
//       potongan = Math.min(harga * 0.6, 30000);
//     } 

//     // Hitung biaya antar
    
//     if(jarak > 2){
//       biayaAntar = 5000 + (jarak - 2) * 3000;
//     } else {
//       biayaAntar = 5000;
//     }

  
//     // Cek pajak
//     // if (pajak === true) {
//     //   pajakHarga = harga * 0.05;
//     // }
  
//     // Hitung subtotal
//     subtotal = harga - potongan + biayaAntar + pajakHarga;
  
//     // Tampilkan hasil
//     console.log("Harga\t\t:", harga);
//     console.log("Potongan\t:", potongan);
//     console.log("Biaya Antar\t:", biayaAntar);
//     console.log("Pajak\t\t:", pajakHarga);
//     console.log("SubTotal\t:", subtotal);
  
//     return subtotal;
//   }
  

//   PijarFood(100000, "PIJARFOOD5", 5, true);
  


// // function pijarFood(harga, voucher, jarak, pajak) {
// //   // Cek apakah pesanan mencukupi minimal pemesanan voucher
// //   if (harga <= 50000 && voucher === 'PIJARFOOD5' ) {
// //       return 'Minimal pemesanan untuk voucher PIJARFOOD5 adalah 50000';
// //     } else if 
// //       // Hitung diskon dan potongan harga dari voucher PIJARFOOD5
// //       let diskon = Math.min(harga * 0.5, 50000);
// //       let totalHarga = harga - diskon;

// //       // Hitung biaya pengiriman berdasarkan jarak
// //       let biayaPengiriman = 5 + (jarak - 2) * 3;
      
// //       // Hitung pajak jika berlaku
// //       let pajakHarga = pajak ? totalHarga * 0.05 : 0;

// //       // Hitung total biaya yang harus dibayar
// //       let totalBiaya = totalHarga + biayaPengiriman + pajakHarga;

// //       return totalBiaya;
// //     }
// //   } else if (voucher === 'DITRAKTIRPIJAR') {
// //     if (harga >= 25000) {
// //       return 'Minimal pemesanan untuk voucher DITRAKTIRPIJAR adalah 25000';
// //     } else {
// //       // Hitung diskon dan potongan harga dari voucher DITRAKTIRPIJAR
// //       let diskon = Math.min(harga * 0.6, 30000);
// //       let totalHarga = harga - diskon;

// //       // Hitung biaya pengiriman berdasarkan jarak
// //       let biayaPengiriman = 5 + (jarak - 2) * 3;

// //       // Hitung pajak jika berlaku
// //       let pajakHarga = pajak ? totalHarga * 0.05 : 0;

// //       // Hitung total biaya yang harus dibayar
// //       let totalBiaya = totalHarga + biayaPengiriman + pajakHarga;

// //       return totalBiaya;
// //     }
// //   } else {
// //     // Tidak menggunakan voucher
// //     // Hitung biaya pengiriman berdasarkan jarak
// //     let biayaPengiriman = 5 + (jarak - 2) * 3;

// //     // Hitung pajak jika berlaku
// //     let pajakHarga = pajak ? harga * 0.05 : 0;

// //     // Hitung total biaya yang harus dibayar
// //     let totalBiaya = harga + biayaPengiriman + pajakHarga;

// //     console.log("Harga\t\t:", harga);
// //     console.log("Potongan\t:", biayaPengiriman);  
// //     console.log("Pajak\t\t:", pajakHarga);

// //   }
// // }

// // console.log(pijarFood(10000, 'PIJARFOOD5', 5, true));


function pijarFood(harga, voucher, jarak, pajak) {
  if (typeof harga !== "number") {
    console.log("Parameter pertama (harga) harus bertipe number.");
  } else if (typeof voucher !== "string" || voucher.toUpperCase() !== voucher) {
    console.log("Parameter kedua (voucher) harus bertipe string dan huruf kapital.");
  } else if (typeof jarak !== "number") {
    console.log("Parameter ketiga (jarak) harus bertipe number.");
  } else if (typeof pajak !== "boolean") {
    console.log("Parameter keempat (pajak) harus bertipe boolean.");
  } else { 
    let subtotal = 0, potongan = 0, biayaAntar = 0; 
    //cek pajak
    let pajakHarga = pajak ? harga * 0.05: 0; 

    // Cek kode promo
    if (voucher === "PIJARFOOD5" && harga >= 50000) {
      potongan = Math.min(harga * 0.5, 50000);
    } else if (voucher === "DITRAKTIRPIJAR" && harga >= 25000) {
      potongan = Math.min(harga * 0.6, 30000);
    } 

    // Hitung biaya antar
    if(jarak > 2){
      biayaAntar = 5000 + (jarak - 2) * 3000;
    } else {
      biayaAntar = 5000;
    }

  
    // Hitung subtotal
    subtotal = harga - potongan + biayaAntar + pajakHarga;
    
    // Tampilkan hasil
    console.log("Harga\t\t:", harga);
    console.log("Potongan\t:", potongan);
    console.log("Biaya Antar\t:", biayaAntar);
    console.log("Pajak\t\t:", pajakHarga);
    console.log("SubTotal\t:", subtotal);
    
    return subtotal;
  }
}

pijarFood(25000, "DITRAKTIRPIJAR", 5, true);
// Harga           : 25000
// Potongan        : 15000
// Biaya Antar     : 14000
// Pajak           : 1250
// SubTotal        : 25250

