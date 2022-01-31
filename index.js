//function Menit(menit) {
  //console.log(menit + " Menit = " + menit * 60 +" Detik");
//}
//Menit(1);

//function Jam(jam) {
  //console.log(jam + " Jam = " + jam * 60 +" Menit");
//}
//Jam(1);

//function Hari(hari) {
  //console.log(hari + " Hari = " + hari * 24 +" Jam");
//}
//Hari(1);

//function Minggu(minggu) {
  //console.log(minggu + " Minggu = " + minggu * 7 +" Hari");
//}
//Minggu(1);

//function Bulan(bulan) {
 // console.log(bulan + " Bulan = " + bulan * 4 +" Minggu");
//}
//Bulan(1);

//function Tahun(tahun) {
  //console.log(tahun + " Tahun = " + tahun * 12 +" Minggu");
//}
//Tahun(1);

//Tugas Dari Lucky

    //No 4.
//const number = [100,25,16,56,87]
//const kali = number.map(item =>{
  //return item * 5
//})
//console.log(kali);

    // No 5.
    //const number = [100,25,16,56,87]
//const kali = number.map(item =>{
  //return item - 100
//})
//console.log(kali);

    //No 6.
    //const number = [100,25,16,56,87]
    //const kali = number.map(item =>{
      //return item +5
    //})
    //console.log(kali);

    //No .7
    //const number = [1,2,3,4,5,6,7,8,9,10]
//const filter = number.filter(item =>{
  //return item > 5
//})
//console.log(filter);

    //No 8.
    //const number = [1,2,3,4,5,6,7,8,9,10]
//const filter = number.filter(item =>{
  //return item <= 5
//})
//console.log(filter);

    //No 9.
  //const nomor = [1,2,3,4,5,6,5,4,7,54,5,6,7,8,7,5,5,5,5];
  //const filter = nomor.filter(item =>{
    //return item == 5;
  //});
  //console.log(filter);

      //No 10.
      //const nama = ["ahmad", "hudaya", "ahmad", "ahmad", "hudaaya", "ahmed", "ahmad"]
      //const filter = nama.filter(objek =>{
        //return objek == "ahmad";
      //});
      //console.log(filter);

      // filter nama
      //const objek = [
        //{Nama: `Balmond`, Tipe: `Fighter`},
        //{Nama: `Eudora`, Tipe: `Mage`},
        //{Nama: `Gusion`, Tipe: `Assasin/Mage`},
        //{Nama: `Fanny`, Tipe: `Assasin`},
        //{Nama: `Layla`, Tipe: `Marksman`},
        //{Nama: `Johnson`, Tipe: `Tank`},
        //{Nama: `Angela`, Tipe: `Support`},
      //];
      // function tampil
      //console.log(`Seluruh List:`);
      //function TampilNama() {
        //const map = objek.map (char => {
          //const wrapping = {};
          //wrapping[char.Nama] = char.Tipe;
          //return wrapping;
        //});
        //console.log(map);
      //};
      //TampilNama();
      // function filter
      //console.log(`Mencari Tipe:`);
      //function cariNama() {
        //const filter = objek.filter (char =>{
         // return char.Tipe == `Mage`;
        //});
        //console.log(filter);
      //};
      //cariNama();

      function segitiga(alas, tinggi) {
          return alas * tinggi / 2
      }
      console.log(segitiga(8, 10));
      console.log(segitiga(5, 7));
      console.log(segitiga(9, 2));