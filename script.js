"use strict";

let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let btnSearch = document.querySelector(".bx-search");
btn.onclick = function () {
  sidebar.classList.toggle("active");
};
btnSearch.onclick = function () {
  sidebar.classList.toggle("active");
};

let priceIcon = document.getElementById("priceIcon");
let priceContent = document.querySelector(".priceContent");
priceIcon.onclick = function () {
  priceContent.style.display = "inline";
};

// #!/usr/bin/env node
// var QuickbooksServer = require("../index");
// var quickbooksServer = new QuickbooksServer();
// var qbXMLHandler = require("./qbXMLHandler");
// quickbooksServer.setQBXMLHandler(qbXMLHandler);
// quickbooksServer.run();

// const btnHome = document.querySelector(".home");
// const btnAbout = document.querySelector(".about");
// const btnPrice = document.querySelector(".price");
// const btnContact = document.querySelector(".contact");
// const btnLogin = document.querySelector(".login");
// const btnAddRow = document.querySelector(".addRow");
// const btnSubmit = document.querySelector(".submit");

// const GetCellValues = function () {
//   let array = [];
//   let table = document.getElementById("table");
//   for (let r = 0, n = table.rows.length; r < n; r++) {
//     for (let c = 0, m = table.rows[r].cells.length; c < m; c++) {
//       array.push(table.rows[r].cells[c].innerHTML);
//       console.log(table.rows[r].cells[c].innerHTML);
//     }
//   }
// };

// btnAddRow.addEventListener("click", function () {
//   let table = document.getElementById("table");
//   let row = table.insertRow(-1);
//   let cell1 = row.insertCell(0);
//   let cell2 = row.insertCell(1);
//   let cell3 = row.insertCell(2);
//   let cell4 = row.insertCell(3);
//   cell1.innerHTML = "NEW CELL1";
//   cell2.innerHTML = "NEW CELL2";
//   cell3.innerHTML = "NEW CELL3";
//   cell4.innerHTML = "NEW CELL4";

//   // $(table).find("tbody").append("<tr><td>aaaa</td></tr>");
// });

// btnHome.addEventListener("click", function () {
//   window.location.href = "../index.html";
// });

// btnPrice.addEventListener("click", function () {
//   window.location.href = "../price.html";
// });

// btnSubmit.addEventListener("click", function () {
//   GetCellValues();
// });

// btnLogin.addEventListener("click", function () {
//   window.location.href = "dataBase.html";
// });
